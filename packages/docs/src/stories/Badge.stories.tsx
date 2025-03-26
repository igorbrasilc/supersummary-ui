import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from 'supersummary-react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'error', 'warning', 'success'],
      control: { type: 'select' },
      description: 'The visual style of the badge'
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the badge'
    }
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  args: {
    children: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    variant: 'secondary',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
}; 