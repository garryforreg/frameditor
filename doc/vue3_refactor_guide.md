# Vue3 项目重构指南

## 一、准备工作

### 1.1 环境搭建
```bash
# 使用 Vite 创建 Vue3 项目
npm create vite@latest frame-editor -- --template vue
cd frame-editor
npm install
```

### 1.2 安装必要依赖
```bash
# 状态管理
npm install pinia

# 路由
npm install vue-router@4

# UI组件库
npm install element-plus

# 工具库
npm install lodash-es
npm install @vueuse/core

# 开发依赖
npm install -D sass
npm install -D @vitejs/plugin-vue
npm install -D unplugin-auto-import
npm install -D unplugin-vue-components
```

### 1.3 项目结构
```
src/
├── assets/            # 静态资源
├── components/        # 公共组件
│   ├── Frame/        # 框架相关组件
│   ├── Property/     # 属性面板组件
│   └── Common/       # 通用组件
├── composables/      # 组合式函数
├── stores/           # Pinia 状态管理
├── views/            # 页面视图
├── utils/            # 工具函数
├── services/         # 服务层
├── styles/           # 样式文件
└── types/            # TypeScript 类型定义
```

## 二、重构步骤

### 2.1 第一阶段：基础框架搭建

#### 2.1.1 配置文件设置

**vite.config.ts:**
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
})
```

#### 2.1.2 状态管理设置

**stores/frame.ts:**
```typescript
import { defineStore } from 'pinia'

export const useFrameStore = defineStore('frame', {
  state: () => ({
    controlDown: false,
    pisType: -1,
    selectedElement: null,
  }),
  
  actions: {
    setControlDown(value: boolean) {
      this.controlDown = value
    },
    setPisType(value: number) {
      this.pisType = value
    },
    setSelectedElement(element: any) {
      this.selectedElement = element
    },
  },
})
```

### 2.2 第二阶段：核心组件迁移

#### 2.2.1 框架编辑器组件

**components/Frame/FrameEditor.vue:**
```vue
<template>
  <div class="frame-editor">
    <div class="toolbar">
      <frame-toolbar @tool-click="handleToolClick" />
    </div>
    <div class="main-content">
      <frame-canvas ref="canvasRef" />
      <frame-property-panel v-if="selectedElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFrameStore } from '@/stores/frame'
import FrameToolbar from './FrameToolbar.vue'
import FrameCanvas from './FrameCanvas.vue'
import FramePropertyPanel from './FramePropertyPanel.vue'

const store = useFrameStore()
const canvasRef = ref()

const handleToolClick = (tool: string) => {
  // 工具栏点击处理逻辑
}
</script>

<style scoped lang="scss">
.frame-editor {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.main-content {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
```

#### 2.2.2 属性面板组件

**components/Property/PropertyPanel.vue:**
```vue
<template>
  <div class="property-panel">
    <el-tabs v-model="activeTab">
      <el-tab-pane label="基本属性" name="basic">
        <property-basic :element="selectedElement" />
      </el-tab-pane>
      <el-tab-pane label="样式" name="style">
        <property-style :element="selectedElement" />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useFrameStore } from '@/stores/frame'
import PropertyBasic from './PropertyBasic.vue'
import PropertyStyle from './PropertyStyle.vue'

const store = useFrameStore()
const activeTab = ref('basic')

const selectedElement = computed(() => store.selectedElement)
</script>
```

### 2.3 第三阶段：功能模块重构

#### 2.3.1 元素管理系统

**composables/useElement.ts:**
```typescript
import { ref } from 'vue'

export function useElement() {
  const elements = ref([])
  
  const createElement = (type: string, config: any) => {
    // 创建元素逻辑
  }
  
  const updateElement = (id: string, props: any) => {
    // 更新元素逻辑
  }
  
  const deleteElement = (id: string) => {
    // 删除元素逻辑
  }
  
  return {
    elements,
    createElement,
    updateElement,
    deleteElement,
  }
}
```

#### 2.3.2 XML导入导出

**services/xml.ts:**
```typescript
export class XmlService {
  static import(xmlString: string) {
    const parser = new DOMParser()
    const doc = parser.parseFromString(xmlString, 'text/xml')
    // 解析XML逻辑
  }
  
  static export(elements: any[]) {
    // 导出XML逻辑
  }
}
```

### 2.4 第四阶段：通信机制重构

#### 2.4.1 事件总线

**utils/eventBus.ts:**
```typescript
import mitt from 'mitt'

export const eventBus = mitt()

// 定义事件类型
export const EventTypes = {
  ELEMENT_SELECTED: 'element:selected',
  PROPERTY_CHANGED: 'property:changed',
  CANVAS_UPDATED: 'canvas:updated',
}
```

#### 2.4.2 iframe通信

**composables/useIframeMessage.ts:**
```typescript
import { onMounted, onUnmounted } from 'vue'

export function useIframeMessage() {
  const handleMessage = (event: MessageEvent) => {
    // 处理iframe消息
  }
  
  onMounted(() => {
    window.addEventListener('message', handleMessage)
  })
  
  onUnmounted(() => {
    window.removeEventListener('message', handleMessage)
  })
  
  const sendMessage = (type: string, data: any) => {
    // 发送消息给父窗口
  }
  
  return {
    sendMessage,
  }
}
```

## 三、重构注意事项

### 3.1 性能优化

1. 组件懒加载
```typescript
// router/index.ts
const routes = [
  {
    path: '/editor',
    component: () => import('@/views/Editor.vue'),
  },
]
```

2. 虚拟滚动
```vue
<template>
  <el-virtual-scroll-view
    :items="elements"
    :item-size="50"
  >
    <template #default="{ item }">
      <element-item :data="item" />
    </template>
  </el-virtual-scroll-view>
</template>
```

### 3.2 兼容性处理

1. 保留原有功能
2. 渐进式替换
3. 数据迁移方案

### 3.3 测试策略

1. 单元测试
```typescript
// tests/components/FrameEditor.spec.ts
import { mount } from '@vue/test-utils'
import FrameEditor from '@/components/Frame/FrameEditor.vue'

describe('FrameEditor', () => {
  test('renders correctly', () => {
    const wrapper = mount(FrameEditor)
    expect(wrapper.exists()).toBe(true)
  })
})
```

2. E2E测试
```typescript
// tests/e2e/editor.spec.ts
describe('Frame Editor', () => {
  test('can create new element', async () => {
    // E2E测试逻辑
  })
})
```

## 四、分阶段实施计划

### 4.1 第一阶段（1-2周）
- 搭建Vue3项目框架
- 配置开发环境
- 创建基础组件

### 4.2 第二阶段（2-3周）
- 实现核心编辑器功能
- 迁移属性面板
- 构建状态管理系统

### 4.3 第三阶段（2-3周）
- 实现元素管理系统
- 开发XML导入导出功能
- 完善工具栏功能

### 4.4 第四阶段（1-2周）
- 优化性能
- 编写测试用例
- 文档完善

## 五、回滚策略

### 5.1 版本控制
- 使用Git分支管理
- 保留关键节点标签
- 维护更新日志

### 5.2 数据备份
- 定期备份数据
- 保存重要配置
- 维护版本记录

## 六、后续优化建议

1. 性能优化
- 使用Web Workers处理复杂计算
- 实现虚拟滚动
- 优化渲染性能

2. 功能增强
- 支持插件系统
- 添加更多图形类型
- 优化用户交互

3. 开发体验
- 完善开发文档
- 添加更多示例
- 优化调试工具

以上重构方案需要根据实际项目情况进行调整。建议采用渐进式重构策略，确保系统稳定性。