const fs = require('fs');
const path = require('path');

const directories = [
  'src/assets',
  'src/components/common',
  'src/components/editor/toolbar',
  'src/components/editor/canvas',
  'src/components/editor/property',
  'src/components/elements/text',
  'src/components/elements/table',
  'src/components/elements/clock',
  'src/components/elements/image',
  'src/components/elements/video',
  'src/components/elements/shapes',
  'src/components/elements/utils',
  'src/hooks',
  'src/layouts',
  'src/router',
  'src/stores',
  'src/services/api',
  'src/services/xml',
  'src/services/preview',
  'src/utils',
  'src/views'
];

directories.forEach(dir => {
  const normalizedDir = dir.replace(/\//g, path.sep);
  if (!fs.existsSync(normalizedDir)) {
    fs.mkdirSync(normalizedDir, { recursive: true });
    console.log(`Created directory: ${normalizedDir}`);
  } else {
    console.log(`Directory already exists: ${normalizedDir}`);
  }
});

console.log('All directories created successfully!'); 