# 组件实现详细说明

## 一、Frame模块

### 1.1 FrameEditor组件
```vue
<!-- components/Frame/FrameEditor.vue -->
<template>
  <div class="frame-editor">
    <frame-toolbar class="frame-toolbar" />
    <div class="frame-main">
      <frame-canvas ref="canvasRef" />
      <frame-property-panel v-if="selectedElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useFrameStore } from '@/stores/frame'
import FrameToolbar from './FrameToolbar.vue'
import FrameCanvas from './FrameCanvas.vue'
import FramePropertyPanel from './FramePropertyPanel.vue'

const store = useFrameStore()
const canvasRef = ref()
const selectedElement = computed(() => store.selectedElement)
</script>

<style scoped lang="scss">
.frame-editor {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.frame-main {
  display: flex;
  flex: 1;
  overflow: hidden;
}
</style>
```

### 1.2 FrameCanvas组件
```vue
<!-- components/Frame/FrameCanvas.vue -->
<template>
  <div 
    class="frame-canvas"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
    @mouseup="handleMouseUp"
  >
    <div 
      class="canvas-content"
      :style="canvasStyle"
    >
      <template v-for="element in elements" :key="element.id">
        <frame-element
          :element="element"
          :selected="isSelected(element)"
          @select="handleSelect"
        />
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useElementStore } from '@/stores/element'
import { useFrameStore } from '@/stores/frame'
import FrameElement from './FrameElement.vue'

const elementStore = useElementStore()
const frameStore = useFrameStore()

const elements = computed(() => elementStore.elements)
const scale = computed(() => frameStore.canvasScale)

const canvasStyle = computed(() => ({
  transform: `scale(${scale.value})`,
}))

const isSelected = (element: Element) => {
  return frameStore.selectedElement?.id === element.id
}

const handleSelect = (element: Element) => {
  frameStore.setSelectedElement(element)
}

// 鼠标事件处理
const handleMouseDown = (e: MouseEvent) => {
  // 实现鼠标按下逻辑
}

const handleMouseMove = (e: MouseEvent) => {
  // 实现鼠标移动逻辑
}

const handleMouseUp = (e: MouseEvent) => {
  // 实现鼠标释放逻辑
}
</script>
```

### 1.3 FrameElement组件
```vue
<!-- components/Frame/FrameElement.vue -->
<template>
  <div 
    class="frame-element"
    :class="{ selected }"
    :style="elementStyle"
    @mousedown.stop="handleMouseDown"
  >
    <component 
      :is="elementComponent"
      v-bind="element.properties"
    />
    <resize-handles 
      v-if="selected"
      @resize="handleResize"
    />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import ResizeHandles from './ResizeHandles.vue'
import { useElementStore } from '@/stores/element'

const props = defineProps<{
  element: Element
  selected: boolean
}>()

const elementStore = useElementStore()

const elementStyle = computed(() => ({
  position: 'absolute',
  left: `${props.element.x}px`,
  top: `${props.element.y}px`,
  width: `${props.element.width}px