import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from 'supersummary-react';

const meta: Meta<typeof Avatar> = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    themeVariant: {
      options: ['dark', 'light'],
      control: { type: 'select' },
      description: 'The visual style of the avatar',
    },
    clickable: {
      control: 'boolean',
      description: 'Whether the avatar has hover effects like a clickable element',
    },
    children: {
      control: 'text',
      description: 'The content to be displayed inside the avatar',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const Dark: Story = {
  args: {
    children: 'AB',
    themeVariant: 'dark',
  },
};

export const Light: Story = {
  args: {
    children: 'AB',
    themeVariant: 'light',
  },
};

export const Clickable: Story = {
  args: {
    children: 'AB',
    themeVariant: 'dark',
    clickable: true,
  },
};
