import { ref, onMounted, onUnmounted, nextTick } from 'vue';
import { Canvas, Textbox, Group, Rect, Text, Circle, Line, Triangle, ActiveSelection, FabricImage } from 'fabric';

export function useFabricCanvas() {
  const canvas = ref(null);
  const fabricCanvas = ref(null);
  const canvasContainer = ref(null);

  // 初始化Fabric.js画布
  const initCanvas = async (canvasEl) => {
    if (!canvasEl) return;
    
    canvas.value = canvasEl;
    
    // 创建Fabric.js画布实例
    fabricCanvas.value = new Canvas(canvasEl, {
      preserveObjectStacking: true, // 保持对象堆叠顺序
      selection: true, // 允许选择多个对象
      selectionColor: 'rgba(100, 100, 255, 0.3)', // 选择区域的颜色
      selectionBorderColor: 'rgba(100, 100, 255, 0.8)', // 选择边框的颜色
      selectionLineWidth: 1 // 选择边框的宽度
    });
    
    // 设置画布大小
    updateCanvasSize();
    
    return fabricCanvas.value;
  };
  
  // 更新画布大小
  const updateCanvasSize = () => {
    if (!fabricCanvas.value) return;
    
    let container = canvasContainer.value;
    
    // 如果没有容器，尝试从canvas元素获取父元素
    if (!container && canvas.value) {
      container = canvas.value.parentElement;
    }
    
    if (!container) return;
    
    // 获取容器尺寸
    const containerWidth = container.clientWidth;
    const containerHeight = container.clientHeight;
    
    // 设置最小尺寸，确保画布足够大
    const width = Math.max(containerWidth, 800);
    const height = Math.max(containerHeight, 600);
    
    // 设置画布尺寸
    fabricCanvas.value.setWidth(width);
    fabricCanvas.value.setHeight(height);
    
    // 设置画布容器样式
    if (container) {
      container.style.width = '100%';
      container.style.height = '100%';
      container.style.overflow = 'auto';
    }
    
    fabricCanvas.value.renderAll();
  };
  
  // 创建文本元素
  const createTextElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    const textOptions = {
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      fill: props.textColor || '#000000',
      backgroundColor: props.backgroundColor || 'transparent',
      fontFamily: props.fontFamily || 'Arial',
      fontSize: props.fontSize || 16,
      fontWeight: props.fontWeight ? 'bold' : 'normal',
      fontStyle: props.fontStyle ? 'italic' : 'normal',
      textAlign: props.textAlign || 'left',
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    };
    
    const textbox = new Textbox(textOptions);
    
    // 添加到画布
    fabricCanvas.value.add(textbox);
    
    return textbox;
  };
  
  // 创建表格元素
  const createTableElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    // 表格是复杂元素，需要用多个Fabric对象组合
    const tableGroup = new Group([], {
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    });
    
    // 表格背景
    const background = new Rect({
      width: props.width,
      height: props.height,
      fill: '#ffffff',
      stroke: props.borderColor || '#000000',
      strokeWidth: 1,
      left: 0,
      top: 0,
      originX: 'left',
      originY: 'top'
    });
    
    tableGroup.addWithUpdate(background);
    
    // 计算行高、列宽
    const headerHeight = 30;
    const rowHeight = (props.height - headerHeight) / (props.rows?.length || 1);
    const colWidth = props.width / (props.headers?.length || 1);
    
    // 绘制表头
    if (props.headers && props.headers.length > 0) {
      // 表头背景
      const headerBg = new Rect({
        width: props.width,
        height: headerHeight,
        fill: props.headerBgColor || '#e6e6e6',
        stroke: props.borderColor || '#000000',
        strokeWidth: 1,
        left: 0,
        top: 0,
        originX: 'left',
        originY: 'top'
      });
      
      tableGroup.addWithUpdate(headerBg);
      
      // 表头文字
      props.headers.forEach((header, index) => {
        const headerText = new Text(header, {
          left: index * colWidth + colWidth / 2,
          top: headerHeight / 2,
          fontSize: props.fontSize || 14,
          fontFamily: props.fontFamily || 'Arial',
          fill: props.textColor || '#000000',
          originX: 'center',
          originY: 'center'
        });
        
        tableGroup.addWithUpdate(headerText);
      });
    }
    
    // 绘制行
    if (props.rows && props.rows.length > 0) {
      props.rows.forEach((row, rowIndex) => {
        // 行背景
        const rowBg = new Rect({
          width: props.width,
          height: rowHeight,
          fill: rowIndex % 2 === 0 ? (props.rowEvenColor || '#ffffff') : (props.rowOddColor || '#f5f5f5'),
          stroke: props.borderColor || '#000000',
          strokeWidth: 1,
          left: 0,
          top: headerHeight + rowIndex * rowHeight,
          originX: 'left',
          originY: 'top'
        });
        
        tableGroup.addWithUpdate(rowBg);
        
        // 行数据
        row.forEach((cell, colIndex) => {
          const cellText = new Text(cell, {
            left: colIndex * colWidth + colWidth / 2,
            top: headerHeight + rowIndex * rowHeight + rowHeight / 2,
            fontSize: props.fontSize || 14,
            fontFamily: props.fontFamily || 'Arial',
            fill: props.textColor || '#000000',
            originX: 'center',
            originY: 'center'
          });
          
          tableGroup.addWithUpdate(cellText);
        });
      });
    }
    
    // 添加到画布
    fabricCanvas.value.add(tableGroup);
    
    return tableGroup;
  };
  
  // 创建时钟元素
  const createClockElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    const isAnalog = props.clockType === 'analog';
    
    if (isAnalog) {
      // 创建模拟时钟
      const clockGroup = new Group([], {
        left: props.x,
        top: props.y,
        width: props.width,
        height: props.height,
        angle: props.rotation || 0,
        opacity: props.opacity || 1,
        id: props.id
      });
      
      // 时钟表盘
      const circle = new Circle({
        radius: props.width / 2,
        fill: props.backgroundColor || 'transparent',
        stroke: props.textColor || '#000000',
        strokeWidth: 2,
        originX: 'center',
        originY: 'center',
        left: props.width / 2,
        top: props.height / 2
      });
      
      clockGroup.addWithUpdate(circle);
      
      // 时钟刻度
      for (let i = 0; i < 12; i++) {
        const angle = (i * 30) * Math.PI / 180;
        const x1 = props.width / 2 + (props.width / 2 - 10) * Math.sin(angle);
        const y1 = props.height / 2 - (props.height / 2 - 10) * Math.cos(angle);
        const x2 = props.width / 2 + (props.width / 2 - 5) * Math.sin(angle);
        const y2 = props.height / 2 - (props.height / 2 - 5) * Math.cos(angle);
        
        const line = new Line([x1, y1, x2, y2], {
          stroke: props.textColor || '#000000',
          strokeWidth: 2
        });
        
        clockGroup.addWithUpdate(line);
        
        // 添加数字
        const numX = props.width / 2 + (props.width / 2 - 25) * Math.sin(angle);
        const numY = props.height / 2 - (props.height / 2 - 25) * Math.cos(angle);
        
        const num = new Text((i === 0 ? '12' : i.toString()), {
          left: numX,
          top: numY,
          fontSize: 14,
          fontFamily: props.fontFamily || 'Arial',
          fill: props.textColor || '#000000',
          originX: 'center',
          originY: 'center'
        });
        
        clockGroup.addWithUpdate(num);
      }
      
      // 初始时针、分针、秒针
      const hourHand = new Line([props.width / 2, props.height / 2, props.width / 2, props.height / 2 - props.height / 4], {
        stroke: props.textColor || '#000000',
        strokeWidth: 4,
        originX: 'center',
        originY: 'bottom'
      });
      
      const minuteHand = new Line([props.width / 2, props.height / 2, props.width / 2, props.height / 2 - props.height / 3], {
        stroke: props.textColor || '#000000',
        strokeWidth: 3,
        originX: 'center',
        originY: 'bottom'
      });
      
      const secondHand = new Line([props.width / 2, props.height / 2, props.width / 2, props.height / 2 - props.height / 2.5], {
        stroke: 'red',
        strokeWidth: 2,
        originX: 'center',
        originY: 'bottom'
      });
      
      clockGroup.addWithUpdate(hourHand);
      clockGroup.addWithUpdate(minuteHand);
      
      if (props.showSeconds) {
        clockGroup.addWithUpdate(secondHand);
      }
      
      // 添加到画布
      fabricCanvas.value.add(clockGroup);
      
      // 更新时间的函数
      const updateClock = () => {
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();
        
        const hourAngle = (hours + minutes / 60) * 30;
        const minuteAngle = minutes * 6;
        const secondAngle = seconds * 6;
        
        hourHand.set({ angle: hourAngle });
        minuteHand.set({ angle: minuteAngle });
        
        if (props.showSeconds) {
          secondHand.set({ angle: secondAngle });
        }
        
        clockGroup.addWithUpdate(); // 更新组
        fabricCanvas.value.renderAll(); // 重新渲染画布
      };
      
      // 初始更新
      updateClock();
      
      // 设置定时器
      const interval = setInterval(updateClock, 1000);
      
      // 返回清理函数
      onUnmounted(() => {
        clearInterval(interval);
      });
      
      return clockGroup;
    } else {
      // 创建数字时钟
      const options = {
        left: props.x,
        top: props.y,
        width: props.width,
        fontSize: props.fontSize || 24,
        fontFamily: props.fontFamily || 'Arial',
        fill: props.textColor || '#000000',
        textAlign: 'center',
        angle: props.rotation || 0,
        opacity: props.opacity || 1,
        id: props.id
      };
      
      const now = new Date();
      const timeText = now.toLocaleTimeString();
      
      const digitalClock = new Textbox(timeText, options);
      
      // 添加到画布
      fabricCanvas.value.add(digitalClock);
      
      // 更新时间的函数
      const updateDigitalClock = () => {
        const now = new Date();
        let timeText;
        
        if (props.format === 'HH:mm') {
          timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: false });
        } else if (props.format === 'hh:mm A') {
          timeText = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true });
        } else {
          // HH:mm:ss (默认)
          timeText = now.toLocaleTimeString();
        }
        
        digitalClock.set({ text: timeText });
        fabricCanvas.value.renderAll();
      };
      
      // 初始更新
      updateDigitalClock();
      
      // 设置定时器
      const interval = setInterval(updateDigitalClock, 1000);
      
      // 返回清理函数
      onUnmounted(() => {
        clearInterval(interval);
      });
      
      return digitalClock;
    }
  };
  
  // 创建图片元素
  const createImageElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    return new Promise((resolve) => {
      if (!props.src) {
        const placeholder = new Rect({
          left: props.x,
          top: props.y,
          width: props.width,
          height: props.height,
          fill: '#f0f0f0',
          stroke: '#cccccc',
          strokeWidth: 1,
          angle: props.rotation || 0,
          opacity: props.opacity || 1,
          id: props.id
        });
        
        // 添加文本标签
        const label = new Text('图片', {
          left: props.x + props.width / 2,
          top: props.y + props.height / 2,
          fontSize: 16,
          fontFamily: 'Arial',
          fill: '#999999',
          originX: 'center',
          originY: 'center'
        });
        
        const group = new Group([placeholder, label], {
          left: props.x,
          top: props.y,
          width: props.width,
          height: props.height,
          angle: props.rotation || 0,
          opacity: props.opacity || 1,
          id: props.id
        });
        
        fabricCanvas.value.add(group);
        resolve(group);
      } else {
        FabricImage.fromURL(props.src, (img) => {
          img.set({
            left: props.x,
            top: props.y,
            width: props.width,
            height: props.height,
            angle: props.rotation || 0,
            opacity: props.opacity || 1,
            id: props.id,
            objectFit: props.objectFit || 'contain'
          });
          
          fabricCanvas.value.add(img);
          resolve(img);
        });
      }
    });
  };
  
  // 创建视频元素
  const createVideoElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    // 视频元素在Fabric.js中需要特殊处理
    // 这里我们使用占位符表示
    const placeholder = new Rect({
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      fill: '#000000',
      stroke: '#333333',
      strokeWidth: 1,
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    });
    
    // 添加播放图标
    const playIcon = new Text('▶', {
      left: props.width / 2,
      top: props.height / 2,
      fontSize: 30,
      fontFamily: 'Arial',
      fill: '#ffffff',
      originX: 'center',
      originY: 'center'
    });
    
    const group = new Group([placeholder, playIcon], {
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    });
    
    fabricCanvas.value.add(group);
    return group;
  };
  
  // 创建线条元素
  const createLineElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    const line = new Line([0, 0, props.width, 0], {
      left: props.x,
      top: props.y,
      stroke: props.lineColor || '#000000',
      strokeWidth: props.lineWidth || 2,
      strokeDashArray: props.lineStyle === 'dashed' ? [5, 5] : (props.lineStyle === 'dotted' ? [2, 2] : null),
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    });
    
    fabricCanvas.value.add(line);
    return line;
  };
  
  // 创建箭头元素
  const createArrowElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    // 箭头线条
    const line = new Line([0, 0, props.width, 0], {
      left: props.x,
      top: props.y,
      stroke: props.lineColor || '#000000',
      strokeWidth: props.lineWidth || 2,
      strokeDashArray: props.lineStyle === 'dashed' ? [5, 5] : (props.lineStyle === 'dotted' ? [2, 2] : null),
      id: props.id
    });
    
    let group;
    
    // 添加箭头
    if (props.arrowEnd) {
      const arrowHead = new Triangle({
        width: 15,
        height: 15,
        left: props.width,
        top: 0,
        angle: 90,
        fill: props.lineColor || '#000000',
        originX: 'center',
        originY: 'center'
      });
      
      group = new Group([line, arrowHead], {
        left: props.x,
        top: props.y,
        angle: props.rotation || 0,
        opacity: props.opacity || 1,
        id: props.id
      });
    } else {
      group = new Group([line], {
        left: props.x,
        top: props.y,
        angle: props.rotation || 0,
        opacity: props.opacity || 1,
        id: props.id
      });
    }
    
    // 如果也要添加起始箭头
    if (props.arrowStart) {
      const startArrow = new Triangle({
        width: 15,
        height: 15,
        left: 0,
        top: 0,
        angle: -90,
        fill: props.lineColor || '#000000',
        originX: 'center',
        originY: 'center'
      });
      
      group.addWithUpdate(startArrow);
    }
    
    fabricCanvas.value.add(group);
    return group;
  };
  
  // 创建矩形元素
  const createRectangleElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    const rect = new Rect({
      left: props.x,
      top: props.y,
      width: props.width,
      height: props.height,
      fill: props.backgroundColor || '#ffffff',
      stroke: props.borderColor || '#000000',
      strokeWidth: props.borderWidth || 1,
      strokeDashArray: props.borderStyle === 'dashed' ? [5, 5] : (props.borderStyle === 'dotted' ? [2, 2] : null),
      rx: props.borderRadius || 0,
      ry: props.borderRadius || 0,
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    });
    
    fabricCanvas.value.add(rect);
    return rect;
  };
  
  // 创建圆形元素
  const createCircularElement = (props) => {
    if (!fabricCanvas.value) return null;
    
    const circle = new Circle({
      left: props.x,
      top: props.y,
      radius: Math.min(props.width, props.height) / 2,
      fill: props.backgroundColor || '#ffffff',
      stroke: props.borderColor || '#000000',
      strokeWidth: props.borderWidth || 1,
      strokeDashArray: props.borderStyle === 'dashed' ? [5, 5] : (props.borderStyle === 'dotted' ? [2, 2] : null),
      angle: props.rotation || 0,
      opacity: props.opacity || 1,
      id: props.id
    });
    
    fabricCanvas.value.add(circle);
    return circle;
  };
  
  // 创建元素
  const createElement = async (element) => {
    if (!element || !element.type) return null;
    
    switch (element.type) {
      case 'text':
        return createTextElement(element);
      case 'table':
        return createTableElement(element);
      case 'clock':
        return createClockElement(element);
      case 'image':
        return await createImageElement(element);
      case 'video':
        return createVideoElement(element);
      case 'line':
        return createLineElement(element);
      case 'arrow':
        return createArrowElement(element);
      case 'rectangle':
        return createRectangleElement(element);
      case 'circular':
        return createCircularElement(element);
      default:
        return null;
    }
  };
  
  // 清空画布
  const clearCanvas = () => {
    if (fabricCanvas.value) {
      fabricCanvas.value.clear();
    }
  };
  
  // 重新渲染所有元素
  const renderElements = async (elements) => {
    if (!fabricCanvas.value) return;
    
    clearCanvas();
    
    for (const element of elements) {
      await createElement(element);
    }
    
    fabricCanvas.value.renderAll();
  };
  
  // 删除元素
  const removeElement = (id) => {
    if (!fabricCanvas.value) return;
    
    const objects = fabricCanvas.value.getObjects();
    const objectToRemove = objects.find(obj => obj.id === id);
    
    if (objectToRemove) {
      fabricCanvas.value.remove(objectToRemove);
      fabricCanvas.value.renderAll();
    }
  };
  
  // 设置元素选中状态
  const selectFabricElement = (id) => {
    if (!fabricCanvas.value) return;
    
    fabricCanvas.value.discardActiveObject();
    
    const objects = fabricCanvas.value.getObjects();
    const objectToSelect = objects.find(obj => obj.id === id);
    
    if (objectToSelect) {
      fabricCanvas.value.setActiveObject(objectToSelect);
      fabricCanvas.value.renderAll();
    }
  };
  
  // 设置多个元素选中状态
  const selectFabricElements = (ids) => {
    if (!fabricCanvas.value || !ids.length) return;
    
    fabricCanvas.value.discardActiveObject();
    
    const objects = fabricCanvas.value.getObjects();
    const objectsToSelect = objects.filter(obj => ids.includes(obj.id));
    
    if (objectsToSelect.length) {
      const activeSelection = new ActiveSelection(objectsToSelect, {
        canvas: fabricCanvas.value
      });
      
      fabricCanvas.value.setActiveObject(activeSelection);
      fabricCanvas.value.renderAll();
    }
  };
  
  // 取消所有选择
  const deselectAll = () => {
    if (fabricCanvas.value) {
      fabricCanvas.value.discardActiveObject();
      fabricCanvas.value.renderAll();
    }
  };
  
  // 窗口大小变化处理
  onMounted(() => {
    window.addEventListener('resize', updateCanvasSize);
  });
  
  onUnmounted(() => {
    window.removeEventListener('resize', updateCanvasSize);
    
    if (fabricCanvas.value) {
      fabricCanvas.value.dispose();
    }
  });
  
  return {
    canvas,
    fabricCanvas,
    canvasContainer,
    initCanvas,
    updateCanvasSize,
    createElement,
    clearCanvas,
    renderElements,
    removeElement,
    selectFabricElement,
    selectFabricElements,
    deselectAll
  };
} 