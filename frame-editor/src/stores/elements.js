import { defineStore } from 'pinia';
import { ref } from 'vue';

// 生成唯一ID
function generateId() {
  return 'element_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
}

export const ELEMENT_TYPES = {
  TEXT: 'text',
  TABLE: 'table',
  CLOCK: 'clock',
  IMAGE: 'image',
  VIDEO: 'video',
  LINE: 'line',
  ARROW: 'arrow',
  RECTANGLE: 'rectangle',
  CIRCULAR: 'circular',
};

export const useElementsStore = defineStore('elements', () => {
  const elements = ref([]);
  
  // 获取元素
  function getElementById(id) {
    return elements.value.find(element => element.id === id);
  }
  
  // 添加元素
  function addElement(element) {
    elements.value.push({
      id: element.id || generateId(),
      ...element
    });
    return elements.value[elements.value.length - 1];
  }
  
  // 批量添加元素
  function addElements(newElements) {
    newElements.forEach(element => {
      addElement(element);
    });
  }
  
  // 更新元素
  function updateElement(updatedElement) {
    const index = elements.value.findIndex(element => element.id === updatedElement.id);
    if (index !== -1) {
      elements.value[index] = { ...elements.value[index], ...updatedElement };
    }
  }
  
  // 删除元素
  function removeElement(id) {
    elements.value = elements.value.filter(element => element.id !== id);
  }
  
  // 批量删除元素
  function removeElements(ids) {
    elements.value = elements.value.filter(element => !ids.includes(element.id));
  }
  
  // 清空所有元素
  function clearElements() {
    elements.value = [];
  }
  
  // 创建新元素
  function createElement(type) {
    const baseElement = {
      id: generateId(),
      type,
      x: 100,
      y: 100,
      width: 200,
      height: 50,
      rotation: 0,
      opacity: 1,
    };
    
    let element;
    
    switch (type) {
      case ELEMENT_TYPES.TEXT:
        element = {
          ...baseElement,
          text: '双击编辑文本',
          fontFamily: 'Arial',
          fontSize: 16,
          textColor: '#000000',
          backgroundColor: 'transparent',
          fontWeight: false, // 是否加粗
          fontStyle: false, // 是否斜体
          textAlign: 'left',
          scrolling: false, // 是否滚动
          scrollSpeed: 1,
        };
        break;
        
      case ELEMENT_TYPES.TABLE:
        element = {
          ...baseElement,
          width: 400,
          height: 200,
          headers: ['列1', '列2', '列3'],
          rows: [
            ['数据1', '数据2', '数据3'],
            ['数据4', '数据5', '数据6'],
          ],
          borderColor: '#000000',
          headerBgColor: '#e6e6e6',
          rowEvenColor: '#ffffff',
          rowOddColor: '#f5f5f5',
          textColor: '#000000',
          fontSize: 14,
          fontFamily: 'Arial',
        };
        break;
        
      case ELEMENT_TYPES.CLOCK:
        element = {
          ...baseElement,
          width: 150,
          height: 150,
          clockType: 'analog', // 'analog' 或 'digital'
          showSeconds: true,
          textColor: '#000000',
          backgroundColor: 'transparent',
          fontFamily: 'Arial',
          fontSize: 24,
          format: 'HH:mm:ss', // 数字时钟的时间格式
        };
        break;
        
      case ELEMENT_TYPES.IMAGE:
        element = {
          ...baseElement,
          width: 300,
          height: 200,
          src: '',
          alt: '图片',
          objectFit: 'contain', // 'contain', 'cover', 'fill'
        };
        break;
        
      case ELEMENT_TYPES.VIDEO:
        element = {
          ...baseElement,
          width: 400,
          height: 300,
          src: '',
          autoplay: true,
          loop: true,
          muted: true,
          controls: false,
        };
        break;
        
      case ELEMENT_TYPES.LINE:
        element = {
          ...baseElement,
          height: 2,
          width: 200,
          lineColor: '#000000',
          lineWidth: 2,
          lineStyle: 'solid', // 'solid', 'dashed', 'dotted'
        };
        break;
        
      case ELEMENT_TYPES.ARROW:
        element = {
          ...baseElement,
          height: 2,
          width: 200,
          lineColor: '#000000',
          lineWidth: 2,
          arrowStart: false,
          arrowEnd: true,
          lineStyle: 'solid', // 'solid', 'dashed', 'dotted'
        };
        break;
        
      case ELEMENT_TYPES.RECTANGLE:
        element = {
          ...baseElement,
          width: 200,
          height: 150,
          backgroundColor: '#ffffff',
          borderColor: '#000000',
          borderWidth: 1,
          borderStyle: 'solid', // 'solid', 'dashed', 'dotted'
          borderRadius: 0,
        };
        break;
        
      case ELEMENT_TYPES.CIRCULAR:
        element = {
          ...baseElement,
          width: 150,
          height: 150,
          backgroundColor: '#ffffff',
          borderColor: '#000000',
          borderWidth: 1,
          borderStyle: 'solid', // 'solid', 'dashed', 'dotted'
        };
        break;
        
      default:
        element = baseElement;
    }
    
    return addElement(element);
  }
  
  // 创建表格控件
  function createTable(){
    
  }
  // 更改元素层级 - 置顶
  function bringToFront(id) {
    const element = getElementById(id);
    if (!element) return;
    
    removeElement(id);
    addElement(element);
  }
  
  // 更改元素层级 - 置底
  function sendToBack(id) {
    const element = getElementById(id);
    if (!element) return;
    
    removeElement(id);
    elements.value.unshift(element);
  }
  
  // 更改元素层级 - 上移一层
  function bringForward(id) {
    const index = elements.value.findIndex(element => element.id === id);
    if (index === -1 || index === elements.value.length - 1) return;
    
    const element = elements.value[index];
    elements.value.splice(index, 1);
    elements.value.splice(index + 1, 0, element);
  }
  
  // 更改元素层级 - 下移一层
  function sendBackward(id) {
    const index = elements.value.findIndex(element => element.id === id);
    if (index <= 0) return;
    
    const element = elements.value[index];
    elements.value.splice(index, 1);
    elements.value.splice(index - 1, 0, element);
  }
  
  return {
    elements,
    getElementById,
    addElement,
    addElements,
    updateElement,
    removeElement,
    removeElements,
    clearElements,
    createElement,
    bringToFront,
    sendToBack,
    bringForward,
    sendBackward,
  };
}); 