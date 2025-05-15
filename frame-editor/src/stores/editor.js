import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { useElementsStore } from './elements';

export const useEditorStore = defineStore('editor', () => {
  const elementsStore = useElementsStore();
  const selectedElementIds = ref([]);
  const frameInfo = ref({
    name: '新建帧',
    id: 'frame_' + Date.now(),
    width: 1920,
    height: 1080,
    type: 'normal'
  });

  // 计算选中的元素
  const selectedElements = computed(() => 
    elementsStore.elements.filter(el => selectedElementIds.value.includes(el.id))
  );

  // 是否有选中元素
  const hasSelection = computed(() => selectedElementIds.value.length > 0);
  
  // 是否多选
  const hasMultiSelection = computed(() => selectedElementIds.value.length > 1);

  // 选择元素
  function selectElement(id) {
    if (!selectedElementIds.value.includes(id)) {
      selectedElementIds.value.push(id);
    }
  }

  // 取消选择
  function deselectElement(id) {
    selectedElementIds.value = selectedElementIds.value.filter(item => item !== id);
  }

  // 取消所有选择
  function deselectAll() {
    selectedElementIds.value = [];
  }

  // 删除选中元素
  function deleteSelected() {
    if (selectedElementIds.value.length > 0) {
      elementsStore.removeElements(selectedElementIds.value);
      selectedElementIds.value = [];
    }
  }

  // 对齐函数 - 左对齐
  function alignLeft() {
    if (!hasMultiSelection.value) return;
    
    const minLeft = Math.min(...selectedElements.value.map(el => el.x));
    
    selectedElements.value.forEach(element => {
      elementsStore.updateElement({
        ...element,
        x: minLeft
      });
    });
  }
  
  // 对齐函数 - 右对齐
  function alignRight() {
    if (!hasMultiSelection.value) return;
    
    const elements = selectedElements.value;
    const maxRight = Math.max(...elements.map(el => el.x + el.width));
    
    elements.forEach(element => {
      elementsStore.updateElement({
        ...element,
        x: maxRight - element.width
      });
    });
  }
  
  // 对齐函数 - 上对齐
  function alignTop() {
    if (!hasMultiSelection.value) return;
    
    const minTop = Math.min(...selectedElements.value.map(el => el.y));
    
    selectedElements.value.forEach(element => {
      elementsStore.updateElement({
        ...element,
        y: minTop
      });
    });
  }
  
  // 对齐函数 - 下对齐
  function alignBottom() {
    if (!hasMultiSelection.value) return;
    
    const elements = selectedElements.value;
    const maxBottom = Math.max(...elements.map(el => el.y + el.height));
    
    elements.forEach(element => {
      elementsStore.updateElement({
        ...element,
        y: maxBottom - element.height
      });
    });
  }
  
  // 水平居中对齐
  function alignHorizontalCenter() {
    if (!hasMultiSelection.value) return;
    
    const elements = selectedElements.value;
    const minLeft = Math.min(...elements.map(el => el.x));
    const maxRight = Math.max(...elements.map(el => el.x + el.width));
    const center = minLeft + (maxRight - minLeft) / 2;
    
    elements.forEach(element => {
      elementsStore.updateElement({
        ...element,
        x: center - element.width / 2
      });
    });
  }
  
  // 垂直居中对齐
  function alignVerticalCenter() {
    if (!hasMultiSelection.value) return;
    
    const elements = selectedElements.value;
    const minTop = Math.min(...elements.map(el => el.y));
    const maxBottom = Math.max(...elements.map(el => el.y + el.height));
    const center = minTop + (maxBottom - minTop) / 2;
    
    elements.forEach(element => {
      elementsStore.updateElement({
        ...element,
        y: center - element.height / 2
      });
    });
  }
  
  // 水平平均分布
  function distributeHorizontally() {
    if (selectedElements.value.length < 3) return;
    
    const elements = [...selectedElements.value].sort((a, b) => a.x - b.x);
    const first = elements[0];
    const last = elements[elements.length - 1];
    const totalWidth = (last.x + last.width) - first.x;
    const gap = (totalWidth - elements.reduce((sum, el) => sum + el.width, 0)) / (elements.length - 1);
    
    let currentX = first.x;
    elements.forEach((element, index) => {
      if (index === 0) return; // 跳过第一个元素
      
      const prevElement = elements[index - 1];
      currentX = prevElement.x + prevElement.width + gap;
      
      elementsStore.updateElement({
        ...element,
        x: currentX
      });
    });
  }
  
  // 垂直平均分布
  function distributeVertically() {
    if (selectedElements.value.length < 3) return;
    
    const elements = [...selectedElements.value].sort((a, b) => a.y - b.y);
    const first = elements[0];
    const last = elements[elements.length - 1];
    const totalHeight = (last.y + last.height) - first.y;
    const gap = (totalHeight - elements.reduce((sum, el) => sum + el.height, 0)) / (elements.length - 1);
    
    let currentY = first.y;
    elements.forEach((element, index) => {
      if (index === 0) return; // 跳过第一个元素
      
      const prevElement = elements[index - 1];
      currentY = prevElement.y + prevElement.height + gap;
      
      elementsStore.updateElement({
        ...element,
        y: currentY
      });
    });
  }
  
  // 更新帧信息
  function updateFrameInfo(info) {
    frameInfo.value = {
      ...frameInfo.value,
      ...info
    };
  }

  return {
    frameInfo,
    selectedElementIds,
    selectedElements,
    hasSelection,
    hasMultiSelection,
    selectElement,
    deselectElement,
    deselectAll,
    deleteSelected,
    alignLeft,
    alignRight,
    alignTop,
    alignBottom,
    alignHorizontalCenter,
    alignVerticalCenter,
    distributeHorizontally,
    distributeVertically,
    updateFrameInfo
  };
}); 