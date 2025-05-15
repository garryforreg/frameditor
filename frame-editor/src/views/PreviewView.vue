<template>
  <div class="preview-container">
    <div class="preview-header">
      <h2>{{ editorStore.frameInfo.name }} - 预览</h2>
      <div class="preview-actions">
        <el-button @click="goBack">返回编辑器</el-button>
      </div>
    </div>
    
    <div class="preview-frame" ref="previewContainer">
      <canvas ref="canvas"></canvas>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRouter } from 'vue-router';
import { useEditorStore, useElementsStore } from '../stores';
import { useFabricCanvas } from '../hooks/useFabricCanvas';

const router = useRouter();
const editorStore = useEditorStore();
const elementsStore = useElementsStore();

// 画布
const canvas = ref(null);
const previewContainer = ref(null);
const { initCanvas, renderElements } = useFabricCanvas();

// 初始化预览
onMounted(async () => {
  const fabricCanvas = await initCanvas(canvas.value);
  
  // 设置预览模式 - 禁用编辑
  if (fabricCanvas) {
    fabricCanvas.selection = false;
    fabricCanvas.forEachObject(obj => {
      obj.selectable = false;
      obj.hoverCursor = 'default';
    });
  }
  
  // 渲染元素
  await renderElements(elementsStore.elements);
  
  // 启动动画效果（如文字滚动）
  startAnimations();
});

// 清理
onUnmounted(() => {
  stopAnimations();
});

// 动画相关
let animationFrameId = null;
let textScrollIntervals = [];

const startAnimations = () => {
  // 处理文字滚动效果
  elementsStore.elements.forEach(element => {
    if (element.type === 'text' && element.scrolling) {
      const interval = setInterval(() => {
        animateTextScroll(element);
      }, 50);
      textScrollIntervals.push(interval);
    }
  });
  
  // 其他动画效果
  animationFrameId = requestAnimationFrame(animateFrame);
};

const stopAnimations = () => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId);
  }
  
  textScrollIntervals.forEach(interval => {
    clearInterval(interval);
  });
  textScrollIntervals = [];
};

const animateTextScroll = (element) => {
  // 这里实现文字滚动动画逻辑
  // 由于涉及到Fabric.js对象的操作，需要在具体实现时完善
};

const animateFrame = () => {
  // 每帧动画逻辑
  animationFrameId = requestAnimationFrame(animateFrame);
};

// 返回编辑器
const goBack = () => {
  router.push('/');
};
</script>

<style>
.preview-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: #000;
}

.preview-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: #fff;
}

.preview-header h2 {
  margin: 0;
  font-size: 18px;
}

.preview-frame {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.preview-frame canvas {
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}
</style> 