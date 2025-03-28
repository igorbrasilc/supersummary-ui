import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { Badge } from '.';

describe('Badge Component', () => {
  it('should render badge with text', () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText('Test Badge');
    expect(badge).toBeInTheDocument();
  });

  it('should render with primary variant by default', () => {
    const { container } = render(<Badge>Primary Badge</Badge>);
    const badge = container.firstChild as HTMLElement;
    expect(badge.getAttribute('data-testid')).toBe('global-badge');
  });

  it('should render with error variant', () => {
    const { getByTestId } = render(<Badge variant="error">Error Badge</Badge>);
    const badge = getByTestId('global-badge');
    expect(badge).toBeInTheDocument();
  });

  it('should render with data-cy attribute', () => {
    render(<Badge>Test Badge</Badge>);
    const badge = screen.getByText('Test Badge');
    expect(badge).toHaveAttribute('data-cy', 'global-badge');
  });
});
