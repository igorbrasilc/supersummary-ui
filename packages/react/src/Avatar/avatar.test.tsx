import React from 'react';
//TODO: maybe swith from vitest to jest?
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Avatar } from './index';
import '@testing-library/jest-dom';

describe('Avatar component', () => {
  it('renders with default props', () => {
    render(<Avatar>AB</Avatar>);
    const avatar = screen.getByText('AB');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with light variant', () => {
    render(<Avatar themeVariant="light">AB</Avatar>);
    const avatar = screen.getByText('AB');
    expect(avatar).toBeInTheDocument();
  });

  it('renders with dark variant', () => {
    render(<Avatar themeVariant="dark">AB</Avatar>);
    const avatar = screen.getByText('AB');
    expect(avatar).toBeInTheDocument();
  });

  it('applies clickable prop correctly', () => {
    render(<Avatar clickable>AB</Avatar>);
    const avatar = screen.getByText('AB');
    expect(avatar).toBeInTheDocument();
  });

  it('accepts additional props', () => {
    render(
      <Avatar alt="Avatar alt text" data-testid="avatar-test">
        AB
      </Avatar>
    );
    expect(screen.getByTestId('avatar-test')).toBeInTheDocument();
  });
});
