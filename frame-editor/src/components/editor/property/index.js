import PropertyPanel from './PropertyPanel.vue';
import PropertyPanelDemo from './PropertyPanelDemo.vue';

// 导出组件
export {
  PropertyPanel,
  PropertyPanelDemo
};

// 注册全局组件
export const registerPropertyComponents = (app) => {
  app.component('PropertyPanel', PropertyPanel);
  app.component('PropertyPanelDemo', PropertyPanelDemo);
};

export default PropertyPanel; 