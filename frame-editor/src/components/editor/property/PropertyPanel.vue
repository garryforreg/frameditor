<template>
  <div class="property-panel">
    <table class="property-table" v-if="properties.length > 0">
      <thead>
        <tr>
          <th>项</th>
          <th>值</th>
        </tr>
      </thead>
      <tbody>
        <tr 
          v-for="(property, index) in properties" 
          :key="index" 
          :class="{ 
            'selected-row': index === selectedRowIndex,
            'split-row': property.type === 'split'
          }"
          @click="handleRowClick(index)"
        >
          <!-- 分隔行 -->
          <template v-if="property.type === 'split'">
            <td colspan="2">{{ property.name }}</td>
          </template>
          
          <!-- 普通属性行 -->
          <template v-else>
            <td :id="`nameTd_${property.id}`">{{ property.name }}</td>
            <td :id="`valueTd_${property.id}`">
              <!-- 文本输入 -->
              <input 
                v-if="property.type === 'text' || property.type === 'string'"
                v-model="property.value" 
                @blur="handleValueChange(property)"
                @keydown.enter="handleValueChange(property)"
              />
              
              <!-- 数字输入 -->
              <input 
                v-else-if="property.type === 'int'" 
                type="number"
                v-model.number="property.value"
                @keydown="onlyAllowNumbers"
                @blur="handleValueChange(property)"
                @keydown.enter="handleValueChange(property)"
              />
              
              <!-- 标签显示 -->
              <span 
                v-else-if="property.type === 'label'"
              >{{ property.value }}</span>
              
              <!-- 颜色选择 -->
              <div v-else-if="property.type === 'color'" class="color-picker-container">
                <input 
                  type="text" 
                  v-model="property.value"
                  :style="{ backgroundColor: property.value }"
                  @blur="handleValueChange(property)"
                />
                <input
                  type="color"
                  v-model="property.value"
                  @input="handleValueChange(property)"
                />
              </div>
              
              <!-- 下拉选择 -->
              <select 
                v-else-if="property.type === 'dropdownlist' || property.type === 'dropdownlist_font'"
                v-model="property.value"
                @change="handleValueChange(property)"
              >
                <option value="">请选择</option>
                <option 
                  v-for="option in property.options" 
                  :key="option.value" 
                  :value="property.type === 'dropdownlist_font' ? option.label : option.value"
                >
                  {{ option.label }}
                </option>
              </select>
              
              <!-- 自定义元素插槽 -->
              <slot 
                v-else-if="property.type === 'custom'"
                :name="`custom-${property.id}`" 
                :property="property"
              ></slot>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  // 预设属性列表
  initialProperties: {
    type: Array,
    default: () => []
  }
});

const emit = defineEmits(['property-change', 'row-select']);

// 属性列表
const properties = ref([]);
// 当前选中的行索引
const selectedRowIndex = ref(-1);

// 监听初始属性变化
watch(() => props.initialProperties, (newProps) => {
  if (newProps && newProps.length > 0) {
    properties.value = [...newProps];
  }
}, { immediate: true, deep: true });

// 处理行点击事件
const handleRowClick = (index) => {
  selectedRowIndex.value = index;
  emit('row-select', index, properties.value[index]);
};

// 处理属性值改变事件
const handleValueChange = (property) => {
  emit('property-change', property.id, property.value);
};

// 只允许输入数字
const onlyAllowNumbers = (e) => {
  // 允许退格键、删除键、左右方向键、负号和数字键
  const allowedKeys = [46, 8, 37, 39, 109, 189];
  const isNumber = /[0-9]/.test(e.key);
  const isAllowedKey = allowedKeys.includes(e.keyCode);
  const isDot = (e.key === '.' || e.keyCode === 190 || e.keyCode === 110);
  const hasDot = e.target.value.includes('.');
  
  if (!isNumber && !isAllowedKey && !(isDot && !hasDot)) {
    e.preventDefault();
  }
};

// ========== API方法 ==========

// 添加一个分隔行
const addSplitRow = (text) => {
  properties.value.push({
    id: `split_${Date.now()}`,
    name: text,
    type: 'split',
    value: null
  });
  return properties.value.length - 1;
};

// 根据ID添加或更新属性
const addPropertyById = (id, name, value, options, type, callback) => {
  const existingIndex = properties.value.findIndex(p => p.id === id);
  
  const property = {
    id,
    name,
    value,
    options,
    type,
    callback
  };
  
  if (existingIndex >= 0) {
    properties.value[existingIndex] = property;
  } else {
    properties.value.push(property);
  }
  
  return property;
};

// 添加新属性
const addProperty = (name, value, options, type, callback) => {
  const id = `prop_${Date.now()}_${Math.floor(Math.random() * 1000)}`;
  return addPropertyById(id, name, value, options, type, callback);
};

// 清空所有属性
const clearProperties = () => {
  properties.value = [];
  selectedRowIndex.value = -1;
};

// 获取选中行索引
const getSelectedRowIndex = () => {
  return selectedRowIndex.value;
};

// 修改属性名称
const renameProperty = (id, newName) => {
  const property = properties.value.find(p => p.id === id);
  if (property) {
    property.name = newName;
  }
};

// 获取属性值
const getPropertyValue = (id) => {
  const property = properties.value.find(p => p.id === id);
  return property ? property.value : null;
};

// 获取属性显示名
const getDisplayName = (id) => {
  const property = properties.value.find(p => p.id === id);
  return property ? property.name : null;
};

// 暴露API给父组件
defineExpose({
  addSplitRow,
  addPropertyById,
  addProperty, 
  clearProperties,
  getSelectedRowIndex,
  renameProperty,
  getPropertyValue,
  getDisplayName,
  properties
});
</script>

<style scoped>
.property-panel {
  width: 100%;
  height: 100%;
  overflow: auto;
}

.property-table {
  border-collapse: collapse;
  width: 100%;
}

.property-table th, .property-table td {
  border: 1px solid #e5e4e4;
  padding: 8px;
  text-align: left;
}

.property-table th {
  background-color: #f5f5f5;
  font-weight: bold;
}

.selected-row {
  background-color: #f5f5f5;
}

.split-row {
  background-color: #717171;
  color: white;
  font-weight: bold;
}

.color-picker-container {
  display: flex;
  align-items: center;
}

.color-picker-container input[type="text"] {
  flex: 1;
  margin-right: 5px;
  padding: 4px;
  border: 1px solid #ddd;
}

.color-picker-container input[type="color"] {
  width: 25px;
  height: 25px;
  padding: 0;
  border: none;
  background: none;
}

.property-table input, .property-table select {
  width: 100%;
  padding: 4px 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

.property-table input:focus, .property-table select:focus {
  outline: none;
  border-color: #409EFF;
}

/* 为了配合Vue的过渡效果 */
.property-table tr:hover {
  background-color: #f8f8f8;
}
</style> 