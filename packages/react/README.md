# SuperSummary React Components

This package contains React components for the SuperSummary design system.

## Installation

```bash
npm install supersummary-react
# or
yarn add supersummary-react
# or
pnpm add supersummary-react
```

## Styling

Components in this library are styled using [styled-components](https://styled-components.com/). This allows for:

- Dynamic styling based on props
- Theming support
- Scoped CSS without class name conflicts
- Easy customization through the styled-components API

### Example of extending a component style

```tsx
import styled from 'styled-components';
import { Button } from 'supersummary-react';

const CustomButton = styled(Button)`
  border-radius: 8px;
  text-transform: uppercase;
`;

function App() {
  return <CustomButton>Custom Button</CustomButton>;
}
```
