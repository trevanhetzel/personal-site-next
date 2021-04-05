import type { Templates } from '@wpengine/headless/react';
import type { NextTemplate } from '@wpengine/headless/next';

const templates: Templates<NextTemplate> = {
  '404': import('./404'),
  'front-page': import('./front-page'),
  index: import('./404'),
  category: import('./404'),
  page: import('./page'),
  single: import('./single'),
};

export default templates;
