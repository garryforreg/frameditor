// XML处理服务
export class XmlService {
  /**
   * 将XML字符串转换为元素数组和帧信息
   * @param {string} xmlString - XML字符串
   * @returns {Object} - 包含元素数组和帧信息的对象
   */
  importFromXML(xmlString) {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlString, 'text/xml');
    
    // 解析帧信息
    const frameInfo = this.parseFrameInfo(xmlDoc);
    
    // 解析元素
    const elements = this.parseElements(xmlDoc);
    
    return {
      frameInfo,
      elements
    };
  }
  
  /**
   * 解析帧信息
   * @param {Document} xmlDoc - XML文档
   * @returns {Object} - 帧信息对象
   */
  parseFrameInfo(xmlDoc) {
    const infoNode = xmlDoc.querySelector('frame > info');
    
    if (!infoNode) {
      return {
        name: '新建帧',
        id: 'frame_' + Date.now(),
        width: 1920,
        height: 1080,
        type: 'normal'
      };
    }
    
    return {
      name: this.getNodeValue(infoNode, 'name', '新建帧'),
      id: this.getNodeValue(infoNode, 'id', 'frame_' + Date.now()),
      width: parseInt(this.getNodeValue(infoNode, 'width', '1920')),
      height: parseInt(this.getNodeValue(infoNode, 'height', '1080')),
      type: this.getNodeValue(infoNode, 'type', 'normal')
    };
  }
  
  /**
   * 获取节点的值
   * @param {Element} parentNode - 父节点
   * @param {string} tagName - 标签名
   * @param {string} defaultValue - 默认值
   * @returns {string} - 节点值或默认值
   */
  getNodeValue(parentNode, tagName, defaultValue = '') {
    const node = parentNode.querySelector(tagName);
    return node ? node.textContent : defaultValue;
  }
  
  /**
   * 解析元素节点列表
   * @param {Document} xmlDoc - XML文档
   * @returns {Array} - 元素对象数组
   */
  parseElements(xmlDoc) {
    const elements = [];
    const elementNodes = xmlDoc.querySelectorAll('frame > elements > element');
    
    elementNodes.forEach(node => {
      const type = node.getAttribute('type');
      const id = node.getAttribute('id') || 'element_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
      
      // 基本属性
      const baseElement = {
        id,
        type,
        x: parseFloat(this.getNodeValue(node, 'x', '0')),
        y: parseFloat(this.getNodeValue(node, 'y', '0')),
        width: parseFloat(this.getNodeValue(node, 'width', '100')),
        height: parseFloat(this.getNodeValue(node, 'height', '100')),
        rotation: parseFloat(this.getNodeValue(node, 'rotation', '0')),
        opacity: parseFloat(this.getNodeValue(node, 'opacity', '1'))
      };
      
      // 根据元素类型解析特定属性
      let element;
      
      switch (type) {
        case 'text':
          element = this.parseTextElement(node, baseElement);
          break;
        case 'table':
          element = this.parseTableElement(node, baseElement);
          break;
        case 'clock':
          element = this.parseClockElement(node, baseElement);
          break;
        case 'image':
          element = this.parseImageElement(node, baseElement);
          break;
        case 'video':
          element = this.parseVideoElement(node, baseElement);
          break;
        case 'line':
          element = this.parseLineElement(node, baseElement);
          break;
        case 'arrow':
          element = this.parseArrowElement(node, baseElement);
          break;
        case 'rectangle':
          element = this.parseRectangleElement(node, baseElement);
          break;
        case 'circular':
          element = this.parseCircularElement(node, baseElement);
          break;
        default:
          element = baseElement;
      }
      
      elements.push(element);
    });
    
    return elements;
  }
  
  /**
   * 解析文本元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 文本元素对象
   */
  parseTextElement(node, baseElement) {
    return {
      ...baseElement,
      text: this.getNodeValue(node, 'text', '双击编辑文本'),
      fontFamily: this.getNodeValue(node, 'fontFamily', 'Arial'),
      fontSize: parseInt(this.getNodeValue(node, 'fontSize', '16')),
      textColor: this.getNodeValue(node, 'textColor', '#000000'),
      backgroundColor: this.getNodeValue(node, 'backgroundColor', 'transparent'),
      fontWeight: this.getNodeValue(node, 'fontWeight', 'false') === 'true',
      fontStyle: this.getNodeValue(node, 'fontStyle', 'false') === 'true',
      textAlign: this.getNodeValue(node, 'textAlign', 'left'),
      scrolling: this.getNodeValue(node, 'scrolling', 'false') === 'true',
      scrollSpeed: parseInt(this.getNodeValue(node, 'scrollSpeed', '1'))
    };
  }
  
  /**
   * 解析表格元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 表格元素对象
   */
  parseTableElement(node, baseElement) {
    const headersNode = node.querySelector('headers');
    const headers = headersNode ? Array.from(headersNode.querySelectorAll('header')).map(h => h.textContent) : ['列1', '列2', '列3'];
    
    const rowsNode = node.querySelector('rows');
    const rows = [];
    
    if (rowsNode) {
      const rowNodes = rowsNode.querySelectorAll('row');
      rowNodes.forEach(rowNode => {
        const cells = Array.from(rowNode.querySelectorAll('cell')).map(c => c.textContent);
        rows.push(cells);
      });
    } else {
      rows.push(['数据1', '数据2', '数据3']);
      rows.push(['数据4', '数据5', '数据6']);
    }
    
    return {
      ...baseElement,
      headers,
      rows,
      borderColor: this.getNodeValue(node, 'borderColor', '#000000'),
      headerBgColor: this.getNodeValue(node, 'headerBgColor', '#e6e6e6'),
      rowEvenColor: this.getNodeValue(node, 'rowEvenColor', '#ffffff'),
      rowOddColor: this.getNodeValue(node, 'rowOddColor', '#f5f5f5'),
      textColor: this.getNodeValue(node, 'textColor', '#000000'),
      fontSize: parseInt(this.getNodeValue(node, 'fontSize', '14')),
      fontFamily: this.getNodeValue(node, 'fontFamily', 'Arial')
    };
  }
  
  /**
   * 解析时钟元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 时钟元素对象
   */
  parseClockElement(node, baseElement) {
    return {
      ...baseElement,
      clockType: this.getNodeValue(node, 'clockType', 'analog'),
      showSeconds: this.getNodeValue(node, 'showSeconds', 'true') === 'true',
      textColor: this.getNodeValue(node, 'textColor', '#000000'),
      backgroundColor: this.getNodeValue(node, 'backgroundColor', 'transparent'),
      fontFamily: this.getNodeValue(node, 'fontFamily', 'Arial'),
      fontSize: parseInt(this.getNodeValue(node, 'fontSize', '24')),
      format: this.getNodeValue(node, 'format', 'HH:mm:ss')
    };
  }
  
  /**
   * 解析图片元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 图片元素对象
   */
  parseImageElement(node, baseElement) {
    return {
      ...baseElement,
      src: this.getNodeValue(node, 'src', ''),
      alt: this.getNodeValue(node, 'alt', '图片'),
      objectFit: this.getNodeValue(node, 'objectFit', 'contain')
    };
  }
  
  /**
   * 解析视频元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 视频元素对象
   */
  parseVideoElement(node, baseElement) {
    return {
      ...baseElement,
      src: this.getNodeValue(node, 'src', ''),
      autoplay: this.getNodeValue(node, 'autoplay', 'true') === 'true',
      loop: this.getNodeValue(node, 'loop', 'true') === 'true',
      muted: this.getNodeValue(node, 'muted', 'true') === 'true',
      controls: this.getNodeValue(node, 'controls', 'false') === 'true'
    };
  }
  
  /**
   * 解析线条元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 线条元素对象
   */
  parseLineElement(node, baseElement) {
    return {
      ...baseElement,
      lineColor: this.getNodeValue(node, 'lineColor', '#000000'),
      lineWidth: parseInt(this.getNodeValue(node, 'lineWidth', '2')),
      lineStyle: this.getNodeValue(node, 'lineStyle', 'solid')
    };
  }
  
  /**
   * 解析箭头元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 箭头元素对象
   */
  parseArrowElement(node, baseElement) {
    return {
      ...baseElement,
      lineColor: this.getNodeValue(node, 'lineColor', '#000000'),
      lineWidth: parseInt(this.getNodeValue(node, 'lineWidth', '2')),
      arrowStart: this.getNodeValue(node, 'arrowStart', 'false') === 'true',
      arrowEnd: this.getNodeValue(node, 'arrowEnd', 'true') === 'true',
      lineStyle: this.getNodeValue(node, 'lineStyle', 'solid')
    };
  }
  
  /**
   * 解析矩形元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 矩形元素对象
   */
  parseRectangleElement(node, baseElement) {
    return {
      ...baseElement,
      backgroundColor: this.getNodeValue(node, 'backgroundColor', '#ffffff'),
      borderColor: this.getNodeValue(node, 'borderColor', '#000000'),
      borderWidth: parseInt(this.getNodeValue(node, 'borderWidth', '1')),
      borderStyle: this.getNodeValue(node, 'borderStyle', 'solid'),
      borderRadius: parseInt(this.getNodeValue(node, 'borderRadius', '0'))
    };
  }
  
  /**
   * 解析圆形元素
   * @param {Element} node - XML节点
   * @param {Object} baseElement - 基本元素属性
   * @returns {Object} - 圆形元素对象
   */
  parseCircularElement(node, baseElement) {
    return {
      ...baseElement,
      backgroundColor: this.getNodeValue(node, 'backgroundColor', '#ffffff'),
      borderColor: this.getNodeValue(node, 'borderColor', '#000000'),
      borderWidth: parseInt(this.getNodeValue(node, 'borderWidth', '1')),
      borderStyle: this.getNodeValue(node, 'borderStyle', 'solid')
    };
  }
  
  /**
   * 将元素数组和帧信息导出为XML字符串
   * @param {Array} elements - 元素数组
   * @param {Object} frameInfo - 帧信息
   * @returns {string} - XML字符串
   */
  exportToXML(elements, frameInfo) {
    let xmlString = '<?xml version="1.0" encoding="utf-8"?>\n';
    xmlString += '<frame>\n';
    
    // 添加帧信息
    xmlString += '  <info>\n';
    xmlString += `    <name>${frameInfo.name}</name>\n`;
    xmlString += `    <id>${frameInfo.id}</id>\n`;
    xmlString += `    <width>${frameInfo.width}</width>\n`;
    xmlString += `    <height>${frameInfo.height}</height>\n`;
    xmlString += `    <type>${frameInfo.type}</type>\n`;
    xmlString += '  </info>\n';
    
    // 添加元素
    xmlString += '  <elements>\n';
    elements.forEach(element => {
      xmlString += this.elementToXML(element);
    });
    xmlString += '  </elements>\n';
    
    xmlString += '</frame>';
    return xmlString;
  }
  
  /**
   * 将元素对象转换为XML字符串
   * @param {Object} element - 元素对象
   * @returns {string} - 元素的XML字符串
   */
  elementToXML(element) {
    let xmlString = `    <element type="${element.type}" id="${element.id}">\n`;
    xmlString += `      <x>${element.x}</x>\n`;
    xmlString += `      <y>${element.y}</y>\n`;
    xmlString += `      <width>${element.width}</width>\n`;
    xmlString += `      <height>${element.height}</height>\n`;
    xmlString += `      <rotation>${element.rotation}</rotation>\n`;
    xmlString += `      <opacity>${element.opacity}</opacity>\n`;
    
    // 根据元素类型添加特定属性
    switch (element.type) {
      case 'text':
        xmlString += this.textElementToXML(element);
        break;
      case 'table':
        xmlString += this.tableElementToXML(element);
        break;
      case 'clock':
        xmlString += this.clockElementToXML(element);
        break;
      case 'image':
        xmlString += this.imageElementToXML(element);
        break;
      case 'video':
        xmlString += this.videoElementToXML(element);
        break;
      case 'line':
        xmlString += this.lineElementToXML(element);
        break;
      case 'arrow':
        xmlString += this.arrowElementToXML(element);
        break;
      case 'rectangle':
        xmlString += this.rectangleElementToXML(element);
        break;
      case 'circular':
        xmlString += this.circularElementToXML(element);
        break;
    }
    
    xmlString += '    </element>\n';
    return xmlString;
  }
  
  /**
   * 文本元素转XML
   * @param {Object} element - 文本元素
   * @returns {string} - XML字符串
   */
  textElementToXML(element) {
    let xmlString = '';
    xmlString += `      <text>${this.escapeXML(element.text)}</text>\n`;
    xmlString += `      <fontFamily>${element.fontFamily}</fontFamily>\n`;
    xmlString += `      <fontSize>${element.fontSize}</fontSize>\n`;
    xmlString += `      <textColor>${element.textColor}</textColor>\n`;
    xmlString += `      <backgroundColor>${element.backgroundColor}</backgroundColor>\n`;
    xmlString += `      <fontWeight>${element.fontWeight}</fontWeight>\n`;
    xmlString += `      <fontStyle>${element.fontStyle}</fontStyle>\n`;
    xmlString += `      <textAlign>${element.textAlign}</textAlign>\n`;
    xmlString += `      <scrolling>${element.scrolling}</scrolling>\n`;
    xmlString += `      <scrollSpeed>${element.scrollSpeed}</scrollSpeed>\n`;
    return xmlString;
  }
  
  /**
   * 表格元素转XML
   * @param {Object} element - 表格元素
   * @returns {string} - XML字符串
   */
  tableElementToXML(element) {
    let xmlString = '';
    xmlString += `      <borderColor>${element.borderColor}</borderColor>\n`;
    xmlString += `      <headerBgColor>${element.headerBgColor}</headerBgColor>\n`;
    xmlString += `      <rowEvenColor>${element.rowEvenColor}</rowEvenColor>\n`;
    xmlString += `      <rowOddColor>${element.rowOddColor}</rowOddColor>\n`;
    xmlString += `      <textColor>${element.textColor}</textColor>\n`;
    xmlString += `      <fontSize>${element.fontSize}</fontSize>\n`;
    xmlString += `      <fontFamily>${element.fontFamily}</fontFamily>\n`;
    
    // 表头
    xmlString += '      <headers>\n';
    element.headers.forEach(header => {
      xmlString += `        <header>${this.escapeXML(header)}</header>\n`;
    });
    xmlString += '      </headers>\n';
    
    // 行数据
    xmlString += '      <rows>\n';
    element.rows.forEach(row => {
      xmlString += '        <row>\n';
      row.forEach(cell => {
        xmlString += `          <cell>${this.escapeXML(cell)}</cell>\n`;
      });
      xmlString += '        </row>\n';
    });
    xmlString += '      </rows>\n';
    
    return xmlString;
  }
  
  /**
   * 时钟元素转XML
   * @param {Object} element - 时钟元素
   * @returns {string} - XML字符串
   */
  clockElementToXML(element) {
    let xmlString = '';
    xmlString += `      <clockType>${element.clockType}</clockType>\n`;
    xmlString += `      <showSeconds>${element.showSeconds}</showSeconds>\n`;
    xmlString += `      <textColor>${element.textColor}</textColor>\n`;
    xmlString += `      <backgroundColor>${element.backgroundColor}</backgroundColor>\n`;
    xmlString += `      <fontFamily>${element.fontFamily}</fontFamily>\n`;
    xmlString += `      <fontSize>${element.fontSize}</fontSize>\n`;
    xmlString += `      <format>${element.format}</format>\n`;
    return xmlString;
  }
  
  /**
   * 图片元素转XML
   * @param {Object} element - 图片元素
   * @returns {string} - XML字符串
   */
  imageElementToXML(element) {
    let xmlString = '';
    xmlString += `      <src>${this.escapeXML(element.src)}</src>\n`;
    xmlString += `      <alt>${this.escapeXML(element.alt)}</alt>\n`;
    xmlString += `      <objectFit>${element.objectFit}</objectFit>\n`;
    return xmlString;
  }
  
  /**
   * 视频元素转XML
   * @param {Object} element - 视频元素
   * @returns {string} - XML字符串
   */
  videoElementToXML(element) {
    let xmlString = '';
    xmlString += `      <src>${this.escapeXML(element.src)}</src>\n`;
    xmlString += `      <autoplay>${element.autoplay}</autoplay>\n`;
    xmlString += `      <loop>${element.loop}</loop>\n`;
    xmlString += `      <muted>${element.muted}</muted>\n`;
    xmlString += `      <controls>${element.controls}</controls>\n`;
    return xmlString;
  }
  
  /**
   * 线条元素转XML
   * @param {Object} element - 线条元素
   * @returns {string} - XML字符串
   */
  lineElementToXML(element) {
    let xmlString = '';
    xmlString += `      <lineColor>${element.lineColor}</lineColor>\n`;
    xmlString += `      <lineWidth>${element.lineWidth}</lineWidth>\n`;
    xmlString += `      <lineStyle>${element.lineStyle}</lineStyle>\n`;
    return xmlString;
  }
  
  /**
   * 箭头元素转XML
   * @param {Object} element - 箭头元素
   * @returns {string} - XML字符串
   */
  arrowElementToXML(element) {
    let xmlString = '';
    xmlString += `      <lineColor>${element.lineColor}</lineColor>\n`;
    xmlString += `      <lineWidth>${element.lineWidth}</lineWidth>\n`;
    xmlString += `      <arrowStart>${element.arrowStart}</arrowStart>\n`;
    xmlString += `      <arrowEnd>${element.arrowEnd}</arrowEnd>\n`;
    xmlString += `      <lineStyle>${element.lineStyle}</lineStyle>\n`;
    return xmlString;
  }
  
  /**
   * 矩形元素转XML
   * @param {Object} element - 矩形元素
   * @returns {string} - XML字符串
   */
  rectangleElementToXML(element) {
    let xmlString = '';
    xmlString += `      <backgroundColor>${element.backgroundColor}</backgroundColor>\n`;
    xmlString += `      <borderColor>${element.borderColor}</borderColor>\n`;
    xmlString += `      <borderWidth>${element.borderWidth}</borderWidth>\n`;
    xmlString += `      <borderStyle>${element.borderStyle}</borderStyle>\n`;
    xmlString += `      <borderRadius>${element.borderRadius}</borderRadius>\n`;
    return xmlString;
  }
  
  /**
   * 圆形元素转XML
   * @param {Object} element - 圆形元素
   * @returns {string} - XML字符串
   */
  circularElementToXML(element) {
    let xmlString = '';
    xmlString += `      <backgroundColor>${element.backgroundColor}</backgroundColor>\n`;
    xmlString += `      <borderColor>${element.borderColor}</borderColor>\n`;
    xmlString += `      <borderWidth>${element.borderWidth}</borderWidth>\n`;
    xmlString += `      <borderStyle>${element.borderStyle}</borderStyle>\n`;
    return xmlString;
  }
  
  /**
   * 转义XML特殊字符
   * @param {string} str - 要转义的字符串
   * @returns {string} - 转义后的字符串
   */
  escapeXML(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
} 