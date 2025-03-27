# SuperSummary UI

SuperSummary UI is a comprehensive React component library built with modern technologies. This library follows a monorepo structure using PNPM workspaces to manage multiple packages.

## Published Packages

The following packages are published to npm:

- **supersummary-react**: The main React component library
- **supersummary-tokens**: Design tokens for styling and theming

Internal packages not published to npm:

- **supersummary-ts-config**: Shared TypeScript configurations
- **supersummary-docs**: Documentation and Storybook site

## Installation

- To install React app:

```bash
npm/yarn/pnpm install supersummary-react
```

- To install Tokens:

```bash
npm/yarn/pnpm install supersummary-tokens
```

## Quick Start

```tsx
import { Button, Badge } from 'supersummary-react';

function App() {
  return (
    <div>
      <Button>Click Me</Button>
      <Badge variant="success">New</Badge>
    </div>
  );
}
```

## Testing

```bash
# Run all tests (non-watch mode)
make test

# Run tests in watch mode
make test-watch

# Run tests with coverage
make test-coverage

# Test a specific package
make test-pkg PKG=react
```

### GitHub Actions Automated Publishing

//TODO: create a workflow for a branch homolog (that should be merged before going to prod)

This repository is configured with GitHub Actions for automated releases:

1. When changes are pushed to the `main` branch, the release workflow runs
2. If there are changesets, it either:
   - Creates a PR with version changes (if not on `main`)
   - Publishes the packages directly to npm (if on `main`)

## Technologies

- **React**: UI library
- **TypeScript**: Type-safe JavaScript
- **PNPM**: Package manager with workspace support
- **Vitest**: Test runner and assertion library
- **Testing Library**: React component testing utilities
- **CSS Modules**: Component styling
- **Changesets**: Version management and changelog generation
- **Husky & lint-staged**: Git hooks and pre-commit checks
- **Material UI**: Open-source library of components

## Project Structure

```
supersummary-ui/
├── packages/
│   ├── docs/          # Documentation and Storybook
│   ├── react/         # React components
│   ├── tokens/        # Design tokens
│   └── ts-config/     # TypeScript configurations
├── package.json       # Root package.json
├── .husky/            # Git hooks
└── Makefile           # Common commands
```

## Getting Started

### Prerequisites

- Node.js 16+
- PNPM 7+

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/supersummary-ui.git
cd supersummary-ui

# Install dependencies
make install
```

### Development Workflow

Run the development server:

```bash
# Run all packages in development mode
make dev                # All packages
# Run a specific package in development mode
make dev-pkg PKG=react  # Specific package
make storybook          # Run Storybook documentation
```

Build the packages:

```bash
# Build all packages
make build                # All packages

# Build a specific package
make build-pkg PKG=react  # Specific package
```

Run tests:

```bash
# Run all tests
make test                # All packages

# Run tests for a specific package
make test-pkg PKG=react  # Specific package
```

Run tests with coverage:

```bash
# Run all tests with coverage
make test-coverage                # All packages
make test-coverage-pkg PKG=react  # Specific package
```

## Test Coverage Requirements

This project enforces a minimum test coverage threshold of 80% for:

- Statements
- Branches
- Functions
- Lines

These thresholds are checked:

1. When running tests with the `--coverage` flag
2. Automatically before each commit (via pre-commit hook)

If test coverage falls below the threshold, the pre-commit hook will fail and prevent the commit until coverage is improved.

## Using the Makefile

For convenience, a Makefile is provided with common commands:

| Command                            | Description                              |
| ---------------------------------- | ---------------------------------------- |
| `make install`                     | Install dependencies                     |
| `make build`                       | Build all packages                       |
| `make dev`                         | Run development servers                  |
| `make test`                        | Run all tests                            |
| `make test-coverage`               | Run tests with coverage report           |
| `make storybook`                   | Run Storybook documentation              |
| `make lint`                        | Run linting                              |
| `make clean`                       | Clean build artifacts                    |
| `make changeset`                   | Create a changeset                       |
| `make version`                     | Apply versions from changesets           |
| `make publish`                     | Build and publish packages               |
| `make build-pkg PKG=react`         | Build a specific package                 |
| `make test-pkg PKG=react`          | Test a specific package                  |
| `make test-coverage-pkg PKG=react` | Run test coverage for a specific package |
| `make dev-pkg PKG=react`           | Development for a specific package       |

## Version Management with Changesets

We use [Changesets](https://github.com/changesets/changesets) to manage versions and generate changelogs.

### Creating a Changeset

After making changes to components or adding new features:

```bash
# Create a new changeset
make changeset
```

This interactive command will:

1. Ask which packages you've changed
2. Ask what type of version change it is (major, minor, patch)
3. Ask for a summary of the changes

A markdown file will be created in the `.changeset` directory.

## Creating a New Component

Here's a step-by-step guide to creating a new component:

### 1. Create the Component Structure

Create a new directory for your component in `packages/react/src/YourComponent/`:

```
packages/react/src/YourComponent/
├── index.tsx            # Main component code
├── interfaces/          # TypeScript interfaces
│   └── index.ts         # Exported interfaces
└── yourcomponent.test.tsx     # Component tests
```

### 2. Define the Component Interface

Create the component interface in `interfaces/index.ts`:

```typescript
import * as React from 'react'

export interface YourComponentProps {
  children: React.ReactNode
  // Add more props as needed
  variant?: 'primary' | 'secondary' | /* other variants */
}
```

### 3. Style the component using styled from @emotion/styled

### 4. Implement the Component

Create the main component in `index.tsx`:

```typescript
import * as React from 'react'
import { YourComponentProps } from './interfaces'
import { tokens } from '@supersummary-ui/tokens'
import './styles.css'

export const YourComponent = ({
  children,
  variant = 'primary',
  ...props
}: YourComponentProps) => {
  return (
    <div
      className={`your-component your-component-${variant}`}
      data-cy="your-component"
      {...props}
    >
      {children}
    </div>
  )
}
```

### 5. Write Tests

Create tests in `yourcomponent.test.tsx`:

```typescript
import * as React from 'react'
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { YourComponent } from '.'

describe('YourComponent', () => {
  it('should render with children', () => {
    render(<YourComponent>Test Content</YourComponent>)
    const element = screen.getByText('Test Content')
    expect(element).toBeDefined()
  })

  // Add more tests...
})
```

### 6. Export the Component

Add the component to the main export file in `packages/react/src/index.tsx`:

```typescript
// ... existing exports
export * from './YourComponent';
```

### 7. Create a Storybook Story

Add a story in `packages/docs/src/stories/YourComponent.stories.tsx`:

```typescript
import type { Meta, StoryObj } from '@storybook/react';
import { YourComponent } from '@supersummary-ui/react';

const meta: Meta<typeof YourComponent> = {
  title: 'Components/YourComponent',
  component: YourComponent,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'select' },
    },
    children: {
      control: 'text',
    },
  },
};

export default meta;
type Story = StoryObj<typeof YourComponent>;

export const Primary: Story = {
  args: {
    children: 'Primary Example',
    variant: 'primary',
  },
};
```

### 8. Create a Changeset

Document your changes:

```bash
make changeset
```

Describe what you've changed and select the appropriate version bump.

### 9. Build and Test

Run the build and test commands on `packages/react` folder to ensure everything works:

```bash
# Build the react package
make build

# Run tests
make test

# Start Storybook to view your component
make dev
```

## Best Practices

1. **Use TypeScript**: Ensure all components have proper type definitions
2. **Write Tests**: Aim for high test coverage
3. **Use Tokens**: Always use design tokens from the tokens package
4. **Consistency**: Follow the project structure and naming conventions
5. **Accessibility**: Ensure components are accessible
6. **Data Attributes**: Add data-cy attributes for Cypress testing
7. **Documentation**: Document props and examples
8. **Changesets**: Create a changeset for every meaningful change

## License

MIT
