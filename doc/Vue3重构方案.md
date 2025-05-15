# 帧编辑器 Vue 3 重构方案

## 1. 项目架构

### 1.1 技术栈选择
- **前端框架**: Vue 3 + JavaScript
- **构建工具**: Vite
- **状态管理**: Pinia
- **UI组件库**: Element Plus
- **CSS处理**: 原生 CSS
- **图形渲染**: Fabric.js

### 1.2 项目结构
```
frame-editor/
├── public/                 # 静态资源
├── src/
│   ├── assets/             # 项目资源文件
│   ├── components/         # 全局组件
│   │   ├── common/         # 通用组件
│   │   ├── editor/         # 编辑器相关组件
│   │   │   ├── toolbar/    # 工具栏组件
│   │   │   ├── canvas/     # 画布组件
│   │   │   └── property/   # 属性编辑组件
│   │   └── elements/       # 元素组件
│   │       ├── text/       # 文本元素
│   │       ├── table/      # 表格元素
│   │       ├── clock/      # 时钟元素
│   │       ├── image/      # 图片元素
│   │       ├── video/      # 视频元素
│   │       ├── shapes/     # 形状元素(线条、箭头、矩形、圆形)
│   │       └── utils/      # 元素通用工具
│   ├── hooks/              # 自定义钩子
│   ├── layouts/            # 布局组件
│   ├── router/             # 路由配置
│   ├── stores/             # Pinia 状态管理
│   │   ├── editor.js       # 编辑器状态
│   │   ├── elements.js     # 元素状态
│   │   ├── clipboard.js    # 剪贴板状态
│   │   └── index.js        # 状态管理入口
│   ├── services/           # 服务层
│   │   ├── api/            # API服务
│   │   ├── xml/            # XML处理服务
│   │   └── preview/        # 预览服务
│   ├── utils/              # 工具函数
│   ├── views/              # 页面组件
│   │   ├── EditorView.vue  # 编辑器视图
│   │   ├── PreviewView.vue # 预览视图
│   │   └── PropertyView.vue# 属性视图
│   ├── App.vue             # 根组件
│   ├── main.js             # 入口文件
├── .eslintrc.js            # ESLint配置
├── .prettierrc             # Prettier配置
├── index.html              # HTML模板
├── vite.config.js          # Vite配置
└── package.json            # 项目依赖
```

## 2. 功能模块重构

### 2.1 核心编辑器模块
- 使用**组合式API**实现编辑器核心逻辑
- 将全局状态从jQuery依赖转换为Pinia状态管理
- 使用Vue的响应式系统代替手动DOM操作
- 使用**Fabric.js Canvas**替代直接DOM操作的编辑模式

### 2.2 元素组件化
将现有的各类元素转换为Fabric.js对象和Vue组件:

```javascript
// hooks/useFabricCanvas.js
import { ref, onMounted, onUnmounted } from 'vue'
import { fabric } from 'fabric'

export function useFabricCanvas(canvasRef) {
  const canvas = ref(null)
  
  onMounted(() => {
    // 初始化Fabric.js画布
    canvas.value = new fabric.Canvas(canvasRef.value, {
      backgroundColor: '#ffffff',
      selection: true
    })
    
    // 设置画布尺寸
    updateCanvasSize()
    
    // 监听窗口大小变化
    window.addEventListener('resize', updateCanvasSize)
  })
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateCanvasSize)
    canvas.value.dispose()
  })
  
  // 更新画布尺寸
  const updateCanvasSize = () => {
    if (!canvas.value) return
    // 根据容器调整画布大小...
  }
  
  // 创建文本元素
  const createTextElement = (props) => {
    const text = new fabric.Textbox(props.text, {
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      fill: props.textColor,
      backgroundColor: props.backgroundColor,
      fontFamily: props.fontFamily,
      fontSize: props.fontSize,
      fontWeight: props.fontWeight ? 'bold' : 'normal',
      fontStyle: props.fontStyle ? 'italic' : 'normal',
      textAlign: getTextAlign(props.textAlign),
      id: props.id
    })
    
    canvas.value.add(text)
    return text
  }
  
  // 其他元素创建方法...
  
  return {
    canvas,
    createTextElement,
    // 其他方法...
  }
}

// components/editor/canvas/EditorCanvas.vue
<script setup>
import { ref, onMounted, watch } from 'vue'
import { useElementsStore } from '@/stores/elements'
import { useEditorStore } from '@/stores/editor'
import { useFabricCanvas } from '@/hooks/useFabricCanvas'

const elementsStore = useElementsStore()
const editorStore = useEditorStore()

const canvasRef = ref(null)
const { canvas, createTextElement } = useFabricCanvas(canvasRef)

// 监听元素的变化并更新画布
watch(() => elementsStore.elements, (elements) => {
  updateCanvasElements(elements)
}, { deep: true })

// 更新画布上的元素
const updateCanvasElements = (elements) => {
  if (!canvas.value) return
  
  canvas.value.clear()
  
  elements.forEach(element => {
    switch (element.type) {
      case 'text':
        createTextElement(element)
        break
      // 其他元素类型...
    }
  })
  
  canvas.value.renderAll()
}

// 处理画布上的选择事件
onMounted(() => {
  if (!canvas.value) return
  
  canvas.value.on('selection:created', (e) => {
    const selectedObjects = e.selected
    editorStore.deselectAll()
    selectedObjects.forEach(obj => {
      editorStore.selectElement(obj.id)
    })
  })
  
  canvas.value.on('selection:cleared', () => {
    editorStore.deselectAll()
  })
  
  // 其他事件监听...
})
</script>

<template>
  <div class="editor-canvas-container">
    <canvas ref="canvasRef"></canvas>
  </div>
</template>

<style>
.editor-canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  background-color: #f0f0f0;
}

/* 可能需要的其他样式 */
</style>
```

### 2.3 XML数据处理模块
将XML导入导出逻辑封装为服务:

```javascript
// services/xml/xmlService.js
export class XmlService {
  /**
   * 将XML字符串转换为元素数组
   */
  importFromXML(xmlString) {
    const parser = new DOMParser()
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml')
    const elements = []
    
    // 解析XML节点为元素对象
    // ...解析逻辑...
    
    return elements
  }
  
  /**
   * 将元素数组导出为XML字符串
   */
  exportToXML(elements, frameInfo) {
    let xmlString = '<?xml version="1.0" encoding="utf-8"?>\n'
    xmlString += '<frame>\n'
    
    // 添加帧信息
    xmlString += `  <info>\n`
    xmlString += `    <name>${frameInfo.name}</name>\n`
    xmlString += `    <id>${frameInfo.id}</id>\n`
    xmlString += `    <width>${frameInfo.width}</width>\n`
    xmlString += `    <height>${frameInfo.height}</height>\n`
    xmlString += `    <type>${frameInfo.type}</type>\n`
    xmlString += `  </info>\n`
    
    // 转换元素为XML节点
    // ...转换逻辑...
    
    xmlString += '</frame>'
    return xmlString
  }
}
```

### 2.4 布局与对齐功能
实现布局与对齐功能:

```javascript
// stores/editor.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useElementsStore } from './elements'
import { useFabricCanvas } from '@/hooks/useFabricCanvas'

export const useEditorStore = defineStore('editor', () => {
  const elementsStore = useElementsStore()
  const selectedElementIds = ref([])
  const { canvas } = useFabricCanvas()
  
  // 计算选中的元素
  const selectedElements = computed(() => 
    elementsStore.elements.filter(el => selectedElementIds.value.includes(el.id))
  )
  
  // 对齐方法 - 在Fabric.js中实现
  function alignLeft() {
    if (selectedElements.value.length < 2 || !canvas.value) return
    
    const activeObjects = canvas.value.getActiveObjects()
    if (activeObjects.length < 2) return
    
    const minLeft = Math.min(...activeObjects.map(obj => obj.left))
    
    activeObjects.forEach(obj => {
      obj.set({ left: minLeft })
    })
    
    canvas.value.renderAll()
    
    // 同步更新到状态
    activeObjects.forEach(obj => {
      const element = elementsStore.getElementById(obj.id)
      if (element) {
        elementsStore.updateElement({
          ...element,
          x: obj.left
        })
      }
    })
  }
  
  function alignRight() {
    // 类似alignLeft实现...
  }
  
  // 其他对齐和分布方法...
  
  return {
    selectedElementIds,
    selectedElements,
    selectElement: (id) => { /* ... */ },
    deselectAll: () => { /* ... */ },
    deleteSelected: () => { /* ... */ },
    alignLeft,
    alignRight,
    // ...其他方法
  }
})
```

### 2.5 剪贴板功能
使用Pinia和Fabric.js管理剪贴板状态:

```javascript
// stores/clipboard.js
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
import { useElementsStore } from './elements'
import { useFabricCanvas } from '@/hooks/useFabricCanvas'
import { generateId } from '@/utils/idGenerator'

export const useClipboardStore = defineStore('clipboard', () => {
  const clipboardElements = ref([])
  const elementsStore = useElementsStore()
  const { canvas } = useFabricCanvas()
  
  const hasElements = computed(() => clipboardElements.value.length > 0)
  
  function copyElements(elementIds) {
    const elements = elementsStore.elements
      .filter(el => elementIds.includes(el.id))
      .map(el => ({ ...el }))
    
    clipboardElements.value = elements
    
    // 使用Fabric.js的复制功能
    if (canvas.value) {
      const activeObjects = canvas.value.getActiveObjects()
      if (activeObjects.length) {
        canvas.value.getActiveObject().clone((cloned) => {
          // 处理克隆对象...
        })
      }
    }
  }
  
  function pasteElements() {
    if (clipboardElements.value.length === 0) return
    
    const newElements = clipboardElements.value.map(el => ({
      ...el,
      id: generateId(),
      x: el.x + 10, // 粘贴时略微偏移位置
      y: el.y + 10
    }))
    
    elementsStore.addElements(newElements)
    
    // 使用Fabric.js添加新元素到画布
    if (canvas.value) {
      // 重新渲染画布上的所有元素...
    }
    
    return newElements.map(el => el.id)
  }
  
  return {
    clipboardElements,
    hasElements,
    copyElements,
    pasteElements
  }
})
```

## 3. 界面组件重构

### 3.1 主编辑器视图
```vue
<script setup>
import { ref, onMounted } from 'vue'
import EditorToolbar from '@/components/editor/toolbar/EditorToolbar.vue'
import EditorCanvas from '@/components/editor/canvas/EditorCanvas.vue'
import PropertyPanel from '@/components/editor/property/PropertyPanel.vue'
import { useEditorStore } from '@/stores/editor'
import { useElementsStore } from '@/stores/elements'

const editorStore = useEditorStore()
const elementsStore = useElementsStore()

const isPropertyPanelVisible = ref(true)

// 创建新元素的处理函数
const handleCreateElement = (elementType) => {
  const newElement = elementsStore.createElement(elementType)
  editorStore.selectElement(newElement.id)
}

// 保存处理函数
const handleSave = async () => {
  // 保存逻辑...
}

// 预览处理函数
const handlePreview = () => {
  // 预览逻辑...
}
</script>

<template>
  <div class="editor-layout">
    <EditorToolbar 
      @create-element="handleCreateElement"
      @save="handleSave"
      @preview="handlePreview"
    />
    
    <div class="editor-main">
      <EditorCanvas />
      
      <transition name="slide">
        <PropertyPanel v-if="isPropertyPanelVisible" />
      </transition>
    </div>
  </div>
</template>

<style>
.editor-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

.editor-main {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
```

### 3.2 工具栏组件
```vue
<script setup>
import { ref, computed } from 'vue'
import { useEditorStore } from '@/stores/editor'
import { useClipboardStore } from '@/stores/clipboard'

const editorStore = useEditorStore()
const clipboardStore = useClipboardStore()

const emit = defineEmits(['create-element', 'save', 'preview'])

const hasSelection = computed(() => editorStore.selectedElementIds.length > 0)
const hasMultiSelection = computed(() => editorStore.selectedElementIds.length > 1)

// 复制功能
const handleCopy = () => {
  if (hasSelection.value) {
    clipboardStore.copyElements(editorStore.selectedElementIds)
  }
}

// 粘贴功能
const handlePaste = () => {
  const newIds = clipboardStore.pasteElements()
  if (newIds && newIds.length) {
    editorStore.deselectAll()
    newIds.forEach(id => editorStore.selectElement(id))
  }
}

// 删除功能
const handleDelete = () => {
  if (hasSelection.value) {
    editorStore.deleteSelected()
  }
}
</script>

<template>
  <div class="editor-toolbar">
    <!-- 文件操作 -->
    <div class="toolbar-group">
      <button class="toolbar-button" @click="emit('save')">
        <i class="icon-save"></i> 保存
      </button>
      <button class="toolbar-button" @click="emit('preview')">
        <i class="icon-preview"></i> 预览
      </button>
    </div>
    
    <!-- 元素创建 -->
    <div class="toolbar-group">
      <button class="toolbar-button" @click="emit('create-element', 'TEXT')">
        <i class="icon-text"></i> 文本
      </button>
      <button class="toolbar-button" @click="emit('create-element', 'TABLE')">
        <i class="icon-table"></i> 表格
      </button>
      <!-- 其他元素创建按钮... -->
    </div>
    
    <!-- 编辑操作 -->
    <div class="toolbar-group">
      <button class="toolbar-button" @click="handleCopy" :disabled="!hasSelection">
        <i class="icon-copy"></i> 复制
      </button>
      <button class="toolbar-button" @click="handlePaste" :disabled="!clipboardStore.hasElements">
        <i class="icon-paste"></i> 粘贴
      </button>
      <button class="toolbar-button" @click="handleDelete" :disabled="!hasSelection">
        <i class="icon-delete"></i> 删除
      </button>
    </div>
    
    <!-- 对齐工具 -->
    <div class="toolbar-group">
      <button class="toolbar-button" @click="editorStore.alignLeft" :disabled="!hasMultiSelection">
        <i class="icon-align-left"></i>
      </button>
      <!-- 其他对齐按钮... -->
    </div>
  </div>
</template>

<style>
.editor-toolbar {
  display: flex;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
  padding: 8px;
}

.toolbar-group {
  display: flex;
  margin-right: 16px;
}

.toolbar-button {
  display: flex;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 6px 12px;
  margin-right: 4px;
  cursor: pointer;
}

.toolbar-button:hover {
  background-color: #f0f0f0;
}

.toolbar-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.toolbar-button i {
  margin-right: 4px;
}
</style>
```

## 4. 迁移策略

### 4.1 阶段一: 项目搭建与基础组件开发
1. 搭建Vue 3项目框架
2. 设计基础数据结构和接口
3. 集成Fabric.js并开发Canvas基础功能
4. 实现编辑器核心状态管理

### 4.2 阶段二: 元素组件迁移
1. 为每种元素类型创建对应的Fabric.js对象类
2. 实现基本的属性编辑功能
3. 实现元素的选择、拖拽、调整大小等交互功能

### 4.3 阶段三: 功能模块实现
1. 实现XML导入导出功能
2. 实现剪贴板和复制粘贴功能
3. 实现对齐和分布功能
4. 实现层级管理功能

### 4.4 阶段四: 高级功能与优化
1. 实现预览功能
2. 实现保存和加载功能
3. 实现滚动和动画效果
4. 性能优化和用户体验改进

## 5. 技术挑战与解决方案

### 5.1 Fabric.js与Vue集成
- 创建自定义Vue组合式API封装Fabric.js功能
- 实现Fabric.js对象与Vue状态的双向绑定
- 对Fabric.js对象进行扩展，支持项目特定需求

### 5.2 复杂元素的实现
- 开发自定义Fabric.js对象类处理表格、时钟等复杂元素
- 利用Fabric.js的组合对象(Fabric.Group)实现复杂布局
- 为特殊元素创建自定义控制器(Custom Controls)

### 5.3 CSS样式管理
- 建立清晰的CSS命名规范（BEM方法论）
- 按组件和功能组织CSS文件结构
- 利用CSS变量（自定义属性）实现主题管理
- 确保样式的隔离性，避免全局样式污染

### 5.4 动画与效果实现
- 使用CSS动画和过渡效果实现基本的UI交互
- 使用Fabric.js的动画系统实现文本滚动效果
- 开发自定义动画处理器实现闪烁等特殊效果
- 结合requestAnimationFrame优化动画性能

### 5.5 性能优化
- 合理使用Fabric.js的缓存机制
- 实现画布内容懒加载
- 对象状态变更的批量更新策略
- CSS优化及应用优化技术（如减少重排与重绘）

## 6. 测试策略

### 6.1 单元测试
- 使用Vitest测试工具函数和业务逻辑
- 为状态管理模块编写单元测试

### 6.2 组件测试
- 使用Vue Test Utils测试组件功能
- 为Fabric.js包装器编写专用测试

### 6.3 E2E测试
- 使用Cypress测试关键用户流程
- 确保编辑器功能和交互正常工作

## 7. 部署与构建优化

### 7.1 构建优化
- 利用Vite的按需加载特性
- 组件懒加载
- 合理拆分Fabric.js相关代码，减小初始加载体积
- CSS代码的优化与压缩

### 7.2 部署策略
- 静态资源CDN加速
- 支持部署到各种Web服务器
- 构建Docker镜像简化部署流程

## 8. 时间规划

| 阶段 | 内容 | 时间估计 |
|------|------|---------|
| 阶段一 | 项目搭建与Fabric.js集成 | 2周 |
| 阶段二 | 元素组件迁移 | 3周 |
| 阶段三 | 功能模块实现 | 3周 |
| 阶段四 | 高级功能与优化 | 2周 |
| 测试与修复 | 全面测试与Bug修复 | 2周 |
| 总计 | | 12周 | 