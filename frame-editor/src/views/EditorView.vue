<template>
  <div class="editor-layout">
    <div class="editor-header">
      <h1>帧编辑器</h1>
      <div class="editor-actions">
        <el-button type="primary" @click="handleSave">保存</el-button>
        <el-button @click="handlePreview">预览</el-button>
      </div>
    </div>
    
    <div class="editor-toolbar">
      <!-- 文件操作 -->
      <div class="toolbar-group">
        <el-tooltip content="新建" placement="bottom">
          <el-button type="default" icon="el-icon-plus" @click="handleNew" />
        </el-tooltip>
        <el-tooltip content="导入XML" placement="bottom">
          <el-button type="default" icon="el-icon-upload" @click="handleImport" />
        </el-tooltip>
        <el-tooltip content="导出XML" placement="bottom">
          <el-button type="default" icon="el-icon-download" @click="handleExport" />
        </el-tooltip>
      </div>
      
      <!-- 元素创建 -->
      <div class="toolbar-group">
        <el-tooltip content="文本" placement="bottom">
          <el-button type="default" @click="createElement('text')">T</el-button>
        </el-tooltip>
        <el-tooltip content="表格" placement="bottom">
          <el-button type="default" @click="createElement('table')">表格</el-button>
        </el-tooltip>
        <el-tooltip content="时钟" placement="bottom">
          <el-button type="default" @click="createElement('clock')">时钟</el-button>
        </el-tooltip>
        <el-tooltip content="图片" placement="bottom">
          <el-button type="default" @click="createElement('image')">图片</el-button>
        </el-tooltip>
        <el-tooltip content="视频" placement="bottom">
          <el-button type="default" @click="createElement('video')">视频</el-button>
        </el-tooltip>
        <el-tooltip content="线条" placement="bottom">
          <el-button type="default" @click="createElement('line')">线条</el-button>
        </el-tooltip>
        <el-tooltip content="箭头" placement="bottom">
          <el-button type="default" @click="createElement('arrow')">箭头</el-button>
        </el-tooltip>
        <el-tooltip content="矩形" placement="bottom">
          <el-button type="default" @click="createElement('rectangle')">矩形</el-button>
        </el-tooltip>
        <el-tooltip content="圆形" placement="bottom">
          <el-button type="default" @click="createElement('circular')">圆形</el-button>
        </el-tooltip>
      </div>
      
      <!-- 编辑操作 -->
      <div class="toolbar-group">
        <el-tooltip content="复制" placement="bottom">
          <el-button type="default" icon="el-icon-copy-document" @click="handleCopy" :disabled="!editorStore.hasSelection" />
        </el-tooltip>
        <el-tooltip content="剪切" placement="bottom">
          <el-button type="default" icon="el-icon-scissors" @click="handleCut" :disabled="!editorStore.hasSelection" />
        </el-tooltip>
        <el-tooltip content="粘贴" placement="bottom">
          <el-button type="default" icon="el-icon-document-add" @click="handlePaste" :disabled="!clipboardStore.hasElements" />
        </el-tooltip>
        <el-tooltip content="删除" placement="bottom">
          <el-button type="default" icon="el-icon-delete" @click="handleDelete" :disabled="!editorStore.hasSelection" />
        </el-tooltip>
      </div>
      
      <!-- 对齐工具 -->
      <div class="toolbar-group">
        <el-tooltip content="左对齐" placement="bottom">
          <el-button type="default" @click="editorStore.alignLeft" :disabled="!editorStore.hasMultiSelection">
            ←|
          </el-button>
        </el-tooltip>
        <el-tooltip content="水平居中" placement="bottom">
          <el-button type="default" @click="editorStore.alignHorizontalCenter" :disabled="!editorStore.hasMultiSelection">
            ↔
          </el-button>
        </el-tooltip>
        <el-tooltip content="右对齐" placement="bottom">
          <el-button type="default" @click="editorStore.alignRight" :disabled="!editorStore.hasMultiSelection">
            |→
          </el-button>
        </el-tooltip>
        <el-tooltip content="上对齐" placement="bottom">
          <el-button type="default" @click="editorStore.alignTop" :disabled="!editorStore.hasMultiSelection">
            ↑-
          </el-button>
        </el-tooltip>
        <el-tooltip content="垂直居中" placement="bottom">
          <el-button type="default" @click="editorStore.alignVerticalCenter" :disabled="!editorStore.hasMultiSelection">
            ↕
          </el-button>
        </el-tooltip>
        <el-tooltip content="下对齐" placement="bottom">
          <el-button type="default" @click="editorStore.alignBottom" :disabled="!editorStore.hasMultiSelection">
            -↓
          </el-button>
        </el-tooltip>
      </div>
      
      <!-- 分布工具 -->
      <div class="toolbar-group">
        <el-tooltip content="水平平均分布" placement="bottom">
          <el-button type="default" @click="editorStore.distributeHorizontally" :disabled="editorStore.selectedElementIds.length < 3">
            ⇆
          </el-button>
        </el-tooltip>
        <el-tooltip content="垂直平均分布" placement="bottom">
          <el-button type="default" @click="editorStore.distributeVertically" :disabled="editorStore.selectedElementIds.length < 3">
            ⇅
          </el-button>
        </el-tooltip>
      </div>
      
      <!-- 层级工具 -->
      <div class="toolbar-group">
        <el-tooltip content="置于顶层" placement="bottom">
          <el-button type="default" @click="handleBringToFront" :disabled="!editorStore.hasSelection">
            ⤒
          </el-button>
        </el-tooltip>
        <el-tooltip content="上移一层" placement="bottom">
          <el-button type="default" @click="handleBringForward" :disabled="!editorStore.hasSelection">
            ↑
          </el-button>
        </el-tooltip>
        <el-tooltip content="下移一层" placement="bottom">
          <el-button type="default" @click="handleSendBackward" :disabled="!editorStore.hasSelection">
            ↓
          </el-button>
        </el-tooltip>
        <el-tooltip content="置于底层" placement="bottom">
          <el-button type="default" @click="handleSendToBack" :disabled="!editorStore.hasSelection">
            ⤓
          </el-button>
        </el-tooltip>
      </div>
    </div>
    
    <div class="editor-main">
      <div class="editor-canvas" ref="canvasContainer">
        <canvas ref="canvas"></canvas>
      </div>
      
      <div class="editor-property-panel" v-if="editorStore.hasSelection">
        <div class="panel-header">
          <h3>属性编辑</h3>
          <el-button icon="el-icon-close" circle size="mini" @click="editorStore.deselectAll" />
        </div>
        
        <!-- 根据选中元素类型显示不同的属性编辑面板 -->
        <div v-if="editorStore.selectedElements.length === 1" class="property-form">
          <component :is="`${editorStore.selectedElements[0].type}-properties`" 
                    :element="editorStore.selectedElements[0]"
                    @update="updateElementProperty" />
        </div>
        
        <!-- 多选时显示通用属性 -->
        <div v-else-if="editorStore.selectedElements.length > 1" class="property-form">
          <div class="form-item">
            <label>选中了 {{ editorStore.selectedElements.length }} 个元素</label>
          </div>
          
          <!-- 通用属性 -->
          <div class="form-item">
            <label>透明度</label>
            <el-slider v-model="commonOpacity" :min="0" :max="1" :step="0.01" @change="updateCommonProperty('opacity', commonOpacity)" />
          </div>
        </div>
      </div>
    </div>
    
    <!-- 导入XML对话框 -->
    <el-dialog title="导入XML" v-model="importDialogVisible" width="500px">
      <el-input type="textarea" v-model="importXml" rows="10" placeholder="请粘贴XML内容"></el-input>
      <template #footer>
        <el-button @click="importDialogVisible = false">取消</el-button>
        <el-button type="primary" @click="confirmImport">确认导入</el-button>
      </template>
    </el-dialog>
    
    <!-- 右键菜单 -->
    <div class="context-menu" v-show="contextMenuVisible" :style="contextMenuStyle">
      <div class="menu-item" @click="handleCopy">复制</div>
      <div class="menu-item" @click="handleCut">剪切</div>
      <div class="menu-item" @click="handlePaste">粘贴</div>
      <div class="menu-item" @click="handleDelete">删除</div>
      <div class="divider"></div>
      <div class="menu-item" @click="handleBringToFront">置于顶层</div>
      <div class="menu-item" @click="handleSendToBack">置于底层</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useEditorStore, useElementsStore, useClipboardStore } from '../stores';
import { useFabricCanvas } from '../hooks/useFabricCanvas';
import { XmlService } from '../services/xml/xmlService';

// 存储和路由
const router = useRouter();
const editorStore = useEditorStore();
const elementsStore = useElementsStore();
const clipboardStore = useClipboardStore();
const xmlService = new XmlService();

// 画布相关
const canvas = ref(null);
const canvasContainer = ref(null);
const { initCanvas, renderElements, selectFabricElement, selectFabricElements } = useFabricCanvas();

// 对话框状态
const importDialogVisible = ref(false);
const importXml = ref('');

// 右键菜单
const contextMenuVisible = ref(false);
const contextMenuStyle = ref({
  top: '0px',
  left: '0px'
});

// 多选共享属性计算
const commonOpacity = computed(() => {
  if (!editorStore.selectedElements.length) return 1;
  
  // 如果所有元素的透明度相同，返回该值，否则返回平均值
  const opacities = editorStore.selectedElements.map(el => el.opacity);
  const firstOpacity = opacities[0];
  
  if (opacities.every(op => op === firstOpacity)) {
    return firstOpacity;
  } else {
    return opacities.reduce((sum, op) => sum + op, 0) / opacities.length;
  }
});

// 初始化
onMounted(async () => {
  // 初始化画布
  await initCanvas(canvas.value);
  
  // 监听右键事件
  window.addEventListener('contextmenu', handleContextMenu);
  window.addEventListener('click', () => {
    contextMenuVisible.value = false;
  });
  
  // 监听键盘事件
  window.addEventListener('keydown', handleKeyDown);
});

onUnmounted(() => {
  window.removeEventListener('contextmenu', handleContextMenu);
  window.removeEventListener('keydown', handleKeyDown);
});

// 监听元素变化，更新画布
watch(() => elementsStore.elements, (newElements) => {
  renderElements(newElements);
}, { deep: true });

// 监听选中元素变化，更新画布选择状态
watch(() => editorStore.selectedElementIds, (newIds) => {
  if (newIds.length > 0) {
    selectFabricElements(newIds);
  }
}, { deep: true });

// 处理键盘事件
const handleKeyDown = (e) => {
  // 复制
  if (e.key === 'c' && (e.ctrlKey || e.metaKey)) {
    if (editorStore.hasSelection) {
      handleCopy();
    }
  }
  
  // 剪切
  if (e.key === 'x' && (e.ctrlKey || e.metaKey)) {
    if (editorStore.hasSelection) {
      handleCut();
    }
  }
  
  // 粘贴
  if (e.key === 'v' && (e.ctrlKey || e.metaKey)) {
    if (clipboardStore.hasElements) {
      handlePaste();
    }
  }
  
  // 删除
  if (e.key === 'Delete' || e.key === 'Backspace') {
    if (editorStore.hasSelection) {
      handleDelete();
    }
  }
  
  // 全选
  if (e.key === 'a' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    elementsStore.elements.forEach(element => {
      editorStore.selectElement(element.id);
    });
  }
};

// 右键菜单处理
const handleContextMenu = (e) => {
  e.preventDefault();
  contextMenuVisible.value = true;
  contextMenuStyle.value = {
    top: `${e.clientY}px`,
    left: `${e.clientX}px`
  };
};

// 创建新元素
const createElement = (type) => {
  const newElement = elementsStore.createElement(type);
  editorStore.deselectAll();
  editorStore.selectElement(newElement.id);
};

// 复制、剪切、粘贴、删除操作
const handleCopy = () => {
  clipboardStore.copyElements(editorStore.selectedElementIds);
};

const handleCut = () => {
  clipboardStore.cutElements(editorStore.selectedElementIds);
  editorStore.deselectAll();
};

const handlePaste = () => {
  const newIds = clipboardStore.pasteElements();
  editorStore.deselectAll();
  newIds.forEach(id => editorStore.selectElement(id));
};

const handleDelete = () => {
  editorStore.deleteSelected();
};

// 层级操作
const handleBringToFront = () => {
  if (!editorStore.hasSelection) return;
  
  editorStore.selectedElementIds.forEach(id => {
    elementsStore.bringToFront(id);
  });
};

const handleBringForward = () => {
  if (!editorStore.hasSelection) return;
  
  editorStore.selectedElementIds.forEach(id => {
    elementsStore.bringForward(id);
  });
};

const handleSendBackward = () => {
  if (!editorStore.hasSelection) return;
  
  editorStore.selectedElementIds.forEach(id => {
    elementsStore.sendBackward(id);
  });
};

const handleSendToBack = () => {
  if (!editorStore.hasSelection) return;
  
  editorStore.selectedElementIds.forEach(id => {
    elementsStore.sendToBack(id);
  });
};

// 更新元素属性
const updateElementProperty = (elementId, property, value) => {
  const element = elementsStore.getElementById(elementId);
  if (element) {
    const updatedElement = { ...element };
    updatedElement[property] = value;
    elementsStore.updateElement(updatedElement);
  }
};

// 更新多个元素的共有属性
const updateCommonProperty = (property, value) => {
  editorStore.selectedElements.forEach(element => {
    const updatedElement = { ...element, [property]: value };
    elementsStore.updateElement(updatedElement);
  });
};

// 文件操作
const handleNew = () => {
  elementsStore.clearElements();
  editorStore.deselectAll();
  editorStore.updateFrameInfo({
    name: '新建帧',
    id: 'frame_' + Date.now(),
    width: 1920,
    height: 1080,
    type: 'normal'
  });
};

const handleImport = () => {
  importDialogVisible.value = true;
};

const confirmImport = () => {
  try {
    const result = xmlService.importFromXML(importXml.value);
    elementsStore.clearElements();
    elementsStore.addElements(result.elements);
    editorStore.updateFrameInfo(result.frameInfo);
    importDialogVisible.value = false;
  } catch (error) {
    console.error('XML导入错误', error);
    alert('XML格式错误，请检查后重试');
  }
};

const handleExport = () => {
  try {
    const xmlString = xmlService.exportToXML(elementsStore.elements, editorStore.frameInfo);
    const blob = new Blob([xmlString], { type: 'text/xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${editorStore.frameInfo.name || 'frame'}.xml`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  } catch (error) {
    console.error('XML导出错误', error);
    alert('导出失败，请重试');
  }
};

const handleSave = () => {
  handleExport();
};

const handlePreview = () => {
  router.push('/preview');
};
</script>

<style>
.editor-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
}

.editor-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #f0f0f0;
  border-bottom: 1px solid #ddd;
}

.editor-header h1 {
  margin: 0;
  font-size: 20px;
  color: #333;
}

.editor-actions {
  display: flex;
  gap: 10px;
}

.editor-toolbar {
  display: flex;
  flex-wrap: wrap;
  padding: 8px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #ddd;
}

.toolbar-group {
  display: flex;
  gap: 5px;
  margin-right: 15px;
  padding-right: 15px;
  border-right: 1px solid #ddd;
}

.toolbar-group:last-child {
  border-right: none;
}

.editor-main {
  display: flex;
  flex: 1;
  overflow: hidden;
  position: relative;
}

.editor-canvas {
  flex: 1;
  overflow: auto;
  background-color: #e0e0e0;
  position: relative;
}

.editor-property-panel {
  width: 300px;
  background-color: #f8f8f8;
  border-left: 1px solid #ddd;
  overflow-y: auto;
  padding: 0;
}

.panel-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 15px;
  border-bottom: 1px solid #ddd;
}

.panel-header h3 {
  margin: 0;
  font-size: 16px;
}

.property-form {
  padding: 15px;
}

.form-item {
  margin-bottom: 15px;
}

.form-item label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #606266;
}

.context-menu {
  position: fixed;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0,0,0,0.1);
  z-index: 9999;
  min-width: 120px;
}

.menu-item {
  padding: 8px 15px;
  cursor: pointer;
  font-size: 14px;
}

.menu-item:hover {
  background-color: #f0f0f0;
}

.divider {
  height: 1px;
  background-color: #ddd;
  margin: 5px 0;
}
</style> 