<template>
  <div class="text-properties">
    <div class="form-item">
      <label>文本内容</label>
      <el-input v-model="localText" type="textarea" rows="3" @change="updateProperty('text', localText)" />
    </div>
    
    <div class="form-item">
      <label>字体</label>
      <el-select v-model="localFontFamily" @change="updateProperty('fontFamily', localFontFamily)">
        <el-option label="Arial" value="Arial" />
        <el-option label="Times New Roman" value="Times New Roman" />
        <el-option label="Courier New" value="Courier New" />
        <el-option label="宋体" value="SimSun" />
        <el-option label="黑体" value="SimHei" />
        <el-option label="微软雅黑" value="Microsoft YaHei" />
      </el-select>
    </div>
    
    <div class="form-item">
      <label>字号</label>
      <el-input-number v-model="localFontSize" :min="8" :max="72" @change="updateProperty('fontSize', localFontSize)" />
    </div>
    
    <div class="form-item">
      <label>颜色</label>
      <el-color-picker v-model="localTextColor" @change="updateProperty('textColor', localTextColor)" />
    </div>
    
    <div class="form-item">
      <label>背景色</label>
      <el-color-picker v-model="localBackgroundColor" @change="updateProperty('backgroundColor', localBackgroundColor)" />
    </div>
    
    <div class="form-item">
      <label>样式</label>
      <div class="style-controls">
        <el-checkbox v-model="localFontWeight" @change="updateProperty('fontWeight', localFontWeight)">加粗</el-checkbox>
        <el-checkbox v-model="localFontStyle" @change="updateProperty('fontStyle', localFontStyle)">斜体</el-checkbox>
      </div>
    </div>
    
    <div class="form-item">
      <label>对齐方式</label>
      <el-radio-group v-model="localTextAlign" @change="updateProperty('textAlign', localTextAlign)">
        <el-radio-button label="left">左对齐</el-radio-button>
        <el-radio-button label="center">居中</el-radio-button>
        <el-radio-button label="right">右对齐</el-radio-button>
      </el-radio-group>
    </div>
    
    <div class="form-item">
      <el-checkbox v-model="localScrolling" @change="updateProperty('scrolling', localScrolling)">文字滚动</el-checkbox>
    </div>
    
    <div class="form-item" v-if="localScrolling">
      <label>滚动速度</label>
      <el-slider v-model="localScrollSpeed" :min="1" :max="10" :step="1" @change="updateProperty('scrollSpeed', localScrollSpeed)" />
    </div>
    
    <div class="form-section">
      <h4>位置与尺寸</h4>
      
      <div class="form-item form-row">
        <div>
          <label>X</label>
          <el-input-number v-model="localX" :step="1" @change="updateProperty('x', localX)" />
        </div>
        <div>
          <label>Y</label>
          <el-input-number v-model="localY" :step="1" @change="updateProperty('y', localY)" />
        </div>
      </div>
      
      <div class="form-item form-row">
        <div>
          <label>宽度</label>
          <el-input-number v-model="localWidth" :min="10" :step="1" @change="updateProperty('width', localWidth)" />
        </div>
        <div>
          <label>高度</label>
          <el-input-number v-model="localHeight" :min="10" :step="1" @change="updateProperty('height', localHeight)" />
        </div>
      </div>
      
      <div class="form-item">
        <label>旋转 (°)</label>
        <el-slider v-model="localRotation" :min="0" :max="360" :step="1" @change="updateProperty('rotation', localRotation)" />
      </div>
      
      <div class="form-item">
        <label>透明度</label>
        <el-slider v-model="localOpacity" :min="0" :max="1" :step="0.01" @change="updateProperty('opacity', localOpacity)" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useElementsStore } from '../../../stores';

const props = defineProps({
  element: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['update']);

const elementsStore = useElementsStore();

// 本地属性
const localText = ref(props.element.text || '');
const localFontFamily = ref(props.element.fontFamily || 'Arial');
const localFontSize = ref(props.element.fontSize || 16);
const localTextColor = ref(props.element.textColor || '#000000');
const localBackgroundColor = ref(props.element.backgroundColor || 'transparent');
const localFontWeight = ref(props.element.fontWeight || false);
const localFontStyle = ref(props.element.fontStyle || false);
const localTextAlign = ref(props.element.textAlign || 'left');
const localScrolling = ref(props.element.scrolling || false);
const localScrollSpeed = ref(props.element.scrollSpeed || 1);
const localX = ref(props.element.x || 0);
const localY = ref(props.element.y || 0);
const localWidth = ref(props.element.width || 200);
const localHeight = ref(props.element.height || 50);
const localRotation = ref(props.element.rotation || 0);
const localOpacity = ref(props.element.opacity || 1);

// 监听外部属性变化
watch(() => props.element, (newElement) => {
  if (!newElement) return;
  
  localText.value = newElement.text || '';
  localFontFamily.value = newElement.fontFamily || 'Arial';
  localFontSize.value = newElement.fontSize || 16;
  localTextColor.value = newElement.textColor || '#000000';
  localBackgroundColor.value = newElement.backgroundColor || 'transparent';
  localFontWeight.value = newElement.fontWeight || false;
  localFontStyle.value = newElement.fontStyle || false;
  localTextAlign.value = newElement.textAlign || 'left';
  localScrolling.value = newElement.scrolling || false;
  localScrollSpeed.value = newElement.scrollSpeed || 1;
  localX.value = newElement.x || 0;
  localY.value = newElement.y || 0;
  localWidth.value = newElement.width || 200;
  localHeight.value = newElement.height || 50;
  localRotation.value = newElement.rotation || 0;
  localOpacity.value = newElement.opacity || 1;
}, { deep: true });

// 更新属性
const updateProperty = (property, value) => {
  const updatedElement = { ...props.element, [property]: value };
  elementsStore.updateElement(updatedElement);
  emit('update', props.element.id, property, value);
};
</script>

<style>
.text-properties {
  padding: 10px;
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

.form-row {
  display: flex;
  gap: 10px;
}

.form-row > div {
  flex: 1;
}

.style-controls {
  display: flex;
  gap: 15px;
}

.form-section {
  margin-top: 20px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.form-section h4 {
  margin-top: 0;
  margin-bottom: 15px;
  font-size: 16px;
  font-weight: normal;
  color: #409EFF;
}
</style> 