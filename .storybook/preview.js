// .storybook/preview.js

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import scss from 'react-syntax-highlighter/dist/esm/languages/prism/scss';

// Registers and enables scss language support
SyntaxHighlighter.registerLanguage('scss', scss);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'centered',
  options: {
    storySort: {
      order: ['Intro', 'Installation', 'BarGraph'],
    },
  },
};