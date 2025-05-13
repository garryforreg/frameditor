# 环境搭建指南

## 1. 开发环境要求

- Node.js >= 16.0.0
- npm >= 7.0.0
- Git

## 2. 项目初始化

### 2.1 创建项目
```bash
# 使用 Vite 创建 Vue3 项目
npm create vite@latest frame-editor -- --template vue
cd frame-editor
npm install
```

### 2.2 安装核心依赖
```bash
# Vue生态
npm install vue@3
npm install vue-router@4
npm install pinia
npm install element-plus

# 工具库
npm install lodash-es
npm install @vueuse/core
npm install mitt
npm install axios

# 开发依赖
npm install -D sass
npm install -D @vitejs/plugin-vue
npm install -D unplugin-auto-import
npm install -D unplugin-vue-components
npm install -D @types/node
npm install -D vitest
npm install -D @vue/test-utils
```

### 2.3 配置文件设置

#### vite.config.ts
```typescript
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue', 'vue-router', 'pinia'],
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist',
    sourcemap: true,
  },
  test: {
    environment: 'jsdom',
  },
})
```

#### tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "preserve",
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noFallthroughCasesInSwitch": true,
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src/**/*.ts", "src/**/*.d.ts", "src/**/*.tsx", "src/**/*.vue"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
```

### 2.4 开发工具配置

#### .eslintrc.js
```javascript
module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    '@vue/typescript/recommended',
  ],
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  },
}
```

#### .prettierrc
```json
{
  "semi": false,
  "singleQuote": true,
  "printWidth": 100,
  "trailingComma": "es5",
  "tabWidth": 2
}
```

## 3. 环境验证

### 3.1 启动项目
```bash
npm run dev
```

### 3.2 运行测试
```bash
npm run test
```

### 3.3 构建项目
```bash
npm run build
```

## 4. 开发规范

### 4.1 Git提交规范
```bash
# 提交格式
<type>(<scope>): <subject>

# 示例
feat(editor): add new canvas component
fix(property): resolve element selection issue
```

### 4.2 代码规范
- 使用TypeScript编写代码
- 遵循Vue3组合式API风格
- 使用ESLint和Prettier保持代码风格一致
- 组件名使用PascalCase命名
- 文件使用kebab-case命名

### 4.3 文档规范
- 所有组件必须包含注释说明
- 复杂逻辑需要添加详细注释
- API接口需要明确的参数说明
- 重要功能需要编写单元测试