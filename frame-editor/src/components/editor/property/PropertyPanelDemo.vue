<template>
  <div class="property-panel-demo">
    <h3>属性面板示例</h3>
    <div class="demo-container">
      <PropertyPanel 
        ref="propertyPanel"
        :initialProperties="initialProperties"
        @property-change="handlePropertyChange"
        @row-select="handleRowSelect"
      >
        <!-- 自定义元素插槽示例 -->
        <template #custom-custom1="{ property }">
          <div class="custom-element">
            <el-slider v-model="customValue" @change="updateCustomValue(property.id, $event)" />
            <span>{{ customValue }}%</span>
          </div>
        </template>
      </PropertyPanel>

      <div class="demo-controls">
        <h4>控制面板</h4>
        <div class="control-group">
          <button @click="addTextProperty">添加文本属性</button>
          <button @click="addNumberProperty">添加数字属性</button>
          <button @click="addColorProperty">添加颜色属性</button>
          <button @click="addDropdownProperty">添加下拉列表属性</button>
          <button @click="addCustomProperty">添加自定义属性</button>
          <button @click="addSplitRow">添加分隔行</button>
          <button @click="clearProperties">清空属性面板</button>
        </div>
        <div class="output">
          <h4>属性变更记录</h4>
          <div v-for="(log, index) in changeLog" :key="index" class="log-item">
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import PropertyPanel from './PropertyPanel.vue';

// 属性面板引用
const propertyPanel = ref(null);
// 变更日志
const changeLog = ref([]);
// 自定义值
const customValue = ref(50);

// 字体选项
const fontOptions = [
  { value: 'Arial', label: 'Arial' },
  { value: 'Helvetica', label: 'Helvetica' },
  { value: 'Times New Roman', label: 'Times New Roman' },
  { value: 'Courier New', label: 'Courier New' },
  { value: 'Georgia', label: 'Georgia' },
  { value: 'SimSun', label: '宋体' },
  { value: 'Microsoft YaHei', label: '微软雅黑' }
];

// 初始属性
const initialProperties = ref([
  {
    id: 'text1',
    name: '文本属性',
    type: 'text',
    value: '这是一个文本属性'
  },
  {
    id: 'label1',
    name: '标签属性',
    type: 'label',
    value: '这是一个只读标签'
  }
]);

// 属性变更处理
const handlePropertyChange = (id, value) => {
  changeLog.value.push(`属性变更: ID=${id}, 值=${value}`);
  
  // 如果日志太多，保留最近的10条
  if (changeLog.value.length > 10) {
    changeLog.value = changeLog.value.slice(-10);
  }
};

// 行选择处理
const handleRowSelect = (index, property) => {
  if (property) {
    changeLog.value.push(`行选择: 索引=${index}, 属性名=${property.name}`);
    
    // 如果日志太多，保留最近的10条
    if (changeLog.value.length > 10) {
      changeLog.value = changeLog.value.slice(-10);
    }
  }
};

// 添加文本属性
const addTextProperty = () => {
  propertyPanel.value.addProperty(
    '新文本属性',
    '文本内容',
    null,
    'text',
    (value) => {
      console.log('文本值更新:', value);
    }
  );
};

// 添加数字属性
const addNumberProperty = () => {
  propertyPanel.value.addProperty(
    '新数字属性',
    100,
    null,
    'int',
    (value) => {
      console.log('数字值更新:', value);
    }
  );
};

// 添加颜色属性
const addColorProperty = () => {
  propertyPanel.value.addProperty(
    '新颜色属性',
    '#3498db',
    null,
    'color',
    (value) => {
      console.log('颜色值更新:', value);
    }
  );
};

// 添加下拉列表属性
const addDropdownProperty = () => {
  propertyPanel.value.addProperty(
    '字体选择',
    'Arial',
    fontOptions,
    'dropdownlist_font',
    (value) => {
      console.log('字体值更新:', value);
    }
  );
};

// 添加自定义属性
const addCustomProperty = () => {
  propertyPanel.value.addPropertyById(
    'custom1',
    '自定义滑块',
    customValue.value,
    null,
    'custom',
    (value) => {
      console.log('自定义值更新:', value);
      customValue.value = value;
    }
  );
};

// 添加分隔行
const addSplitRow = () => {
  propertyPanel.value.addSplitRow('新分组');
};

// 清空属性面板
const clearProperties = () => {
  propertyPanel.value.clearProperties();
};

// 更新自定义值
const updateCustomValue = (id, value) => {
  handlePropertyChange(id, value);
};

// 组件挂载后
onMounted(() => {
  // 初始化时添加一个分隔行
  propertyPanel.value.addSplitRow('基本属性');
  
  // 初始化时添加一个颜色属性
  propertyPanel.value.addProperty(
    '颜色属性',
    '#ff5500',
    null,
    'color',
    (value) => {
      console.log('颜色值更新:', value);
    }
  );
});
</script>

<style scoped>
.property-panel-demo {
  padding: 20px;
  font-family: Arial, sans-serif;
}

.demo-container {
  display: flex;
  border: 1px solid #ddd;
  border-radius: 4px;
  overflow: hidden;
}

.property-panel {
  flex: 1;
  max-width: 400px;
  border-right: 1px solid #ddd;
}

.demo-controls {
  flex: 1;
  padding: 15px;
  background-color: #f9f9f9;
}

.control-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 20px;
}

button {
  padding: 8px 12px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

.output {
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  max-height: 300px;
  overflow-y: auto;
}

.log-item {
  padding: 5px;
  border-bottom: 1px solid #eee;
  font-size: 14px;
}

.log-item:last-child {
  border-bottom: none;
}

.custom-element {
  display: flex;
  align-items: center;
  gap: 10px;
}
</style> 