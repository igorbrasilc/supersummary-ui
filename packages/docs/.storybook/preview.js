// Add imports from our packages to global scope
import * as React from 'react';
import * as ReactComponents from '../../react/src';

// Make components available globally to Storybook
window.React = React;
window.SupersummaryReact = ReactComponents;

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
