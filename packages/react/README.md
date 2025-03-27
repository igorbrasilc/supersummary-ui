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

### Example of extending a component style

```tsx
import styled from '@emotion/styled';
import { Button } from 'supersummary-react';

const CustomButton = styled(Button)`
  border-radius: 8px;
  text-transform: uppercase;
`;

function App() {
  return <CustomButton>Custom Button</CustomButton>;
}
```
