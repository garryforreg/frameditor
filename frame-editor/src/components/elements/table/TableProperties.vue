<template>
  <div class="table-properties">
    <PropertyPanel 
      ref="propertyPanel"
      @property-change="handlePropertyChange"
    />
  </div>
</template>

<script setup>
import { ref, watch, onMounted } from 'vue';
import PropertyPanel from '../../editor/property/PropertyPanel.vue';
import { useElementsStore } from '../../../stores/elements';

const props = defineProps({
  element: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update']);
const elementsStore = useElementsStore();
const propertyPanel = ref(null);

// 监听元素变化
watch(() => props.element, (newElement) => {
  if (newElement) {
    updatePropertyPanel();
  }
}, { deep: true, immediate: true });

// 处理属性改变
const handlePropertyChange = (id, value) => {
  if (!props.element) return;
  
  // 根据属性ID更新对应的元素属性
  const updatedElement = { ...props.element };
  
  switch (id) {
    case 'tableWidth':
      updatedElement.width = parseInt(value);
      break;
    case 'tableHeight':
      updatedElement.height = parseInt(value);
      break;
    case 'borderColor':
      updatedElement.borderColor = value;
      break;
    case 'headerBgColor':
      updatedElement.headerBgColor = value;
      break;
    case 'rowEvenColor':
      updatedElement.rowEvenColor = value;
      break;
    case 'rowOddColor':
      updatedElement.rowOddColor = value;
      break;
    case 'textColor':
      updatedElement.textColor = value;
      break;
    case 'fontSize':
      updatedElement.fontSize = parseInt(value);
      break;
    case 'fontFamily':
      updatedElement.fontFamily = value;
      break;
    case 'position-x':
      updatedElement.x = parseInt(value);
      break;
    case 'position-y':
      updatedElement.y = parseInt(value);
      break;
    case 'rotation':
      updatedElement.rotation = parseInt(value);
      break;
    case 'opacity':
      updatedElement.opacity = parseFloat(value);
      break;
  }
  
  // 更新元素
  elementsStore.updateElement(updatedElement);
  emit('update', props.element.id, id, value);
};

// 更新属性面板内容
const updatePropertyPanel = () => {
  if (!propertyPanel.value || !props.element) return;
  
  // 清空现有属性
  propertyPanel.value.clearProperties();
  
  // 添加分隔行 - 表格属性
  propertyPanel.value.addSplitRow('表格属性');
  
  // 添加基本属性
  propertyPanel.value.addPropertyById('tableWidth', '宽度', props.element.width, null, 'int');
  propertyPanel.value.addPropertyById('tableHeight', '高度', props.element.height, null, 'int');
  
  // 添加颜色属性
  propertyPanel.value.addPropertyById('borderColor', '边框颜色', props.element.borderColor || '#000000', null, 'color');
  propertyPanel.value.addPropertyById('headerBgColor', '表头背景色', props.element.headerBgColor || '#e6e6e6', null, 'color');
  propertyPanel.value.addPropertyById('rowEvenColor', '偶数行颜色', props.element.rowEvenColor || '#ffffff', null, 'color');
  propertyPanel.value.addPropertyById('rowOddColor', '奇数行颜色', props.element.rowOddColor || '#f5f5f5', null, 'color');
  propertyPanel.value.addPropertyById('textColor', '文字颜色', props.element.textColor || '#000000', null, 'color');
  
  // 字体属性
  const fontOptions = [
    { value: 'Arial', label: 'Arial' },
    { value: 'Helvetica', label: 'Helvetica' },
    { value: 'Times New Roman', label: 'Times New Roman' },
    { value: 'Courier New', label: 'Courier New' },
    { value: 'Georgia', label: 'Georgia' },
    { value: 'SimSun', label: '宋体' },
    { value: 'Microsoft YaHei', label: '微软雅黑' }
  ];
  
  propertyPanel.value.addPropertyById('fontSize', '字体大小', props.element.fontSize || 14, null, 'int');
  propertyPanel.value.addPropertyById('fontFamily', '字体', props.element.fontFamily || 'Arial', fontOptions, 'dropdownlist_font');
  
  // 添加分隔行 - 位置与变换
  propertyPanel.value.addSplitRow('位置与变换');
  
  // 添加位置属性
  propertyPanel.value.addPropertyById('position-x', 'X 坐标', props.element.x, null, 'int');
  propertyPanel.value.addPropertyById('position-y', 'Y 坐标', props.element.y, null, 'int');
  propertyPanel.value.addPropertyById('rotation', '旋转角度', props.element.rotation || 0, null, 'int');
  propertyPanel.value.addPropertyById('opacity', '透明度', props.element.opacity || 1, null, 'int');
};

// 组件挂载后初始化面板
onMounted(() => {
  updatePropertyPanel();
});
</script>

<style scoped>
.table-properties {
  width: 100%;
  height: 100%;
  overflow: auto;
}
</style> 