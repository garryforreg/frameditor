# 项目结构设计文档

## 1. 目录结构

```
src/
├── assets/            # 静态资源
│   ├── images/       # 图片资源
│   ├── styles/       # 全局样式
│   └── icons/        # 图标资源
│
├── components/        # 公共组件
│   ├── Frame/        # 框架相关组件
│   │   ├── FrameEditor.vue
│   │   ├── FrameCanvas.vue
│   │   ├── FrameToolbar.vue
│   │   └── FramePropertyPanel.vue
│   │
│   ├── Property/     # 属性面板组件
│   │   ├── PropertyPanel.vue
│   │   ├── PropertyBasic.vue
│   │   └── PropertyStyle.vue
│   │
│   └── Common/       # 通用组件
│       ├── Button.vue
│       ├── Input.vue
│       └── Select.vue
│
├── composables/      # 组合式函数
│   ├── useElement.ts
│   ├── useCanvas.ts
│   └── useProperty.ts
│
├── stores/           # Pinia状态管理
│   ├── frame.ts
│   ├── element.ts
│   └── index.ts
│
├── views/            # 页面视图
│   ├── Editor.vue
│   └── Preview.vue
│
├── utils/            # 工具函数
│   ├── element.ts
│   ├── canvas.ts
│   └── xml.ts
│
├── services/         # 服务层
│   ├── api.ts
│   ├── xml.ts
│   └── storage.ts
│
├── styles/           # 样式文件
│   ├── variables.scss
│   ├── mixins.scss
│   └── global.scss
│
├── types/            # TypeScript类型定义
│   ├── element.d.ts
│   ├── frame.d.ts
│   └── index.d.ts
│
├── router/           # 路由配置
│   └── index.ts
│
├── constants/        # 常量定义
│   ├── element.ts
│   └── events.ts
│
├── App.vue          # 根组件
├── main.ts          # 入口文件
└── env.d.ts         # 环境声明文件
```

## 2. 核心模块说明

### 2.1 Frame模块
- 负责整体框架的管理
- 包含画布、工具栏、属性面板等核心组件
- 处理组件间通信和状态管理

### 2.2 Element模块
- 处理元素的创建、更新、删除
- 管理元素属性和样式
- 处理元素间的关系

### 2.3 Property模块
- 管理属性面板
- 处理属性更新
- 提供属性编辑界面

### 2.4 Canvas模块
- 处理画布渲染
- 管理元素位置和大小
- 处理用户交互

## 3. 状态管理设计

### 3.1 Frame Store
```typescript
// stores/frame.ts
export interface FrameState {
  controlDown: boolean
  pisType: number
  selectedElement: Element | null
  canvasScale: number
}

export const useFrameStore = defineStore('frame', {
  state: (): FrameState => ({
    controlDown: false,
    pisType: -1,
    selectedElement: null,
    canvasScale: 1,
  }),
  
  actions: {
    setControlDown(value: boolean) {
      this.controlDown = value
    },
    setPisType(value: number) {
      this.pisType = value
    },
    setSelectedElement(element: Element | null) {
      this.selectedElement = element
    },
    setCanvasScale(scale: number) {
      this.canvasScale = scale
    },
  },
})
```

### 3.2 Element Store
```typescript
// stores/element.ts
export interface ElementState {
  elements: Element[]
  activeElement: Element | null
}

export const useElementStore = defineStore('element', {
  state: (): ElementState => ({
    elements: [],
    activeElement: null,
  }),
  
  actions: {
    addElement(element: Element) {
      this.elements.push(element)
    },
    removeElement(id: string) {
      this.elements = this.elements.filter(el => el.id !== id)
    },
    updateElement(id: string, props: Partial<Element>) {
      const element = this.elements.find(el => el.id === id)
      if (element) {
        Object.assign(element, props)
      }
    },
  },
})
```

## 4. 类型定义

### 4.1 元素类型
```typescript
// types/element.d.ts
export interface Element {
  id: string
  type: string
  x: number
  y: number
  width: number
  height: number
  style: ElementStyle
  properties: Record<string, any>
}

export interface ElementStyle {
  fill: string
  stroke: string
  strokeWidth: number
  opacity: number
}
```

### 4.2 事件类型
```typescript
// types/events.d.ts
export enum EventType {
  ELEMENT_SELECTED = 'element:selected',
  ELEMENT_MOVED = 'element:moved',
  ELEMENT_RESIZED = 'element:resized',
  CANVAS_SCALED = 'canvas:scaled',
  PROPERTY_CHANGED = 'property:changed',
}

export interface EventPayload {
  type: EventType
  data: any
}
```

## 5. 路由配置

```typescript
// router/index.ts
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/editor',
  },
  {
    path: '/editor',
    component: () => import('@/views/Editor.vue'),
    name: 'editor',
  },
  {
    path: '/preview',
    component: () => import('@/views/Preview.vue'),
    name: 'preview',
  },
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
```