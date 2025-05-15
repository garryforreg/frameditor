<template>
  <div class="editor-canvas-container" ref="canvasContainer">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue';
import { useElementsStore, useEditorStore } from '../../../stores';
import { useFabricCanvas } from '../../../hooks/useFabricCanvas';

const elementsStore = useElementsStore();
const editorStore = useEditorStore();

// 画布引用
const canvas = ref(null);
const canvasContainer = ref(null);

// Fabric.js画布hook
const { 
  initCanvas, 
  fabricCanvas, 
  updateCanvasSize, 
  renderElements,
  selectFabricElement,
  selectFabricElements,
  deselectAll
} = useFabricCanvas();

// 初始化
onMounted(async () => {
  // 初始化Fabric.js画布
  await initCanvas(canvas.value);
  canvasContainer.value = canvas.value.parentElement;
  
  // 更新画布尺寸
  updateCanvasSize();
  
  // 渲染已有元素
  await renderElements(elementsStore.elements);
  
  // 添加事件处理
  setupFabricEvents();
});

// 监听元素变化，更新画布
watch(() => elementsStore.elements, async (newElements) => {
  await renderElements(newElements);
}, { deep: true });

// 监听选中元素变化，更新画布选择状态
watch(() => editorStore.selectedElementIds, (newIds) => {
  if (newIds.length > 0) {
    selectFabricElements(newIds);
  } else {
    deselectAll();
  }
}, { deep: true });

// 设置Fabric.js事件
const setupFabricEvents = () => {
  if (!fabricCanvas.value) return;
  
  // 对象选择事件
  fabricCanvas.value.on('selection:created', (e) => {
    editorStore.deselectAll();
    
    if (e.selected) {
      e.selected.forEach(obj => {
        if (obj.id) {
          editorStore.selectElement(obj.id);
        }
      });
    }
  });
  
  // 对象选择更新事件
  fabricCanvas.value.on('selection:updated', (e) => {
    editorStore.deselectAll();
    
    if (e.selected) {
      e.selected.forEach(obj => {
        if (obj.id) {
          editorStore.selectElement(obj.id);
        }
      });
    }
  });
  
  // 对象选择清除事件
  fabricCanvas.value.on('selection:cleared', () => {
    editorStore.deselectAll();
  });
  
  // 对象修改事件
  fabricCanvas.value.on('object:modified', (e) => {
    if (!e.target || !e.target.id) return;
    
    // 获取修改后的属性
    const obj = e.target;
    const elementId = obj.id;
    const element = elementsStore.getElementById(elementId);
    
    if (!element) return;
    
    // 更新元素属性
    const updatedElement = {
      ...element,
      x: obj.left,
      y: obj.top,
      width: obj.width * obj.scaleX,
      height: obj.height * obj.scaleY,
      rotation: obj.angle
    };
    
    // 更新store中的元素
    elementsStore.updateElement(updatedElement);
  });
  
  // 对象移动事件
  fabricCanvas.value.on('object:moving', (e) => {
    if (!e.target || !e.target.id) return;
    
    // 获取新位置
    const obj = e.target;
    const elementId = obj.id;
    const element = elementsStore.getElementById(elementId);
    
    if (!element) return;
    
    // 更新位置
    const updatedElement = {
      ...element,
      x: obj.left,
      y: obj.top
    };
    
    // 更新store中的元素
    elementsStore.updateElement(updatedElement);
  });
  
  // 对象缩放事件
  fabricCanvas.value.on('object:scaling', (e) => {
    if (!e.target || !e.target.id) return;
    
    // 获取新尺寸
    const obj = e.target;
    const elementId = obj.id;
    const element = elementsStore.getElementById(elementId);
    
    if (!element) return;
    
    // 更新尺寸
    const updatedElement = {
      ...element,
      width: obj.width * obj.scaleX,
      height: obj.height * obj.scaleY
    };
    
    // 更新store中的元素
    elementsStore.updateElement(updatedElement);
  });
  
  // 对象旋转事件
  fabricCanvas.value.on('object:rotating', (e) => {
    if (!e.target || !e.target.id) return;
    
    // 获取新角度
    const obj = e.target;
    const elementId = obj.id;
    const element = elementsStore.getElementById(elementId);
    
    if (!element) return;
    
    // 更新角度
    const updatedElement = {
      ...element,
      rotation: obj.angle
    };
    
    // 更新store中的元素
    elementsStore.updateElement(updatedElement);
  });
  
  // 双击编辑文本
  fabricCanvas.value.on('mouse:dblclick', (e) => {
    if (!e.target || !e.target.id) return;
    
    const obj = e.target;
    if (obj.type === 'textbox') {
      obj.enterEditing();
      obj.selectAll();
    }
  });
  
  // 文本编辑完成
  fabricCanvas.value.on('text:changed', (e) => {
    if (!e.target || !e.target.id) return;
    
    const obj = e.target;
    const elementId = obj.id;
    const element = elementsStore.getElementById(elementId);
    
    if (!element) return;
    
    // 更新文本内容
    const updatedElement = {
      ...element,
      text: obj.text
    };
    
    // 更新store中的元素
    elementsStore.updateElement(updatedElement);
  });
};
</script>

<style>
.editor-canvas-container {
  width: 100%;
  height: 100%;
  position: relative;
  overflow: auto;
  background-color: #f0f0f0;
}

canvas {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #ffffff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
</style> 