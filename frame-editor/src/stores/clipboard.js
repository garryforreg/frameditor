import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useElementsStore } from './elements';

// 生成唯一ID
function generateId() {
  return 'element_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
}

export const useClipboardStore = defineStore('clipboard', () => {
  const clipboardElements = ref([]);
  const elementsStore = useElementsStore();
  
  const hasElements = computed(() => clipboardElements.value.length > 0);
  
  // 复制元素
  function copyElements(elementIds) {
    const elements = elementsStore.elements
      .filter(el => elementIds.includes(el.id))
      .map(el => ({ ...el }));
    
    clipboardElements.value = elements;
  }
  
  // 剪切元素
  function cutElements(elementIds) {
    copyElements(elementIds);
    elementsStore.removeElements(elementIds);
  }
  
  // 粘贴元素
  function pasteElements() {
    if (clipboardElements.value.length === 0) return [];
    
    const newElements = clipboardElements.value.map(el => ({
      ...el,
      id: generateId(),
      x: el.x + 20, // 粘贴时略微偏移位置
      y: el.y + 20
    }));
    
    elementsStore.addElements(newElements);
    
    return newElements.map(el => el.id);
  }
  
  // 清空剪贴板
  function clearClipboard() {
    clipboardElements.value = [];
  }
  
  return {
    clipboardElements,
    hasElements,
    copyElements,
    cutElements,
    pasteElements,
    clearClipboard
  };
}); 