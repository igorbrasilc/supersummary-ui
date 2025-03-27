import * as React from 'react';
import styled from '@emotion/styled';
import { BadgeProps } from './interfaces';

const getBackgroundColor = (variant: BadgeProps['variant']) => {
  switch (variant) {
    case 'primary':
      return '#007AFF';
    case 'secondary':
      return '#6c757d';
    case 'error':
      return '#dc3545';
    case 'warning':
      return '#ffc107';
    case 'success':
      return '#28a745';
    default:
      return '#007AFF';
  }
};

const getColor = (variant: BadgeProps['variant']) => {
  return variant === 'warning' ? '#212529' : '#FFF';
};

const StyledBadge = styled.span<{ variant: BadgeProps['variant'] }>`
  padding: 4px 8px;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  display: inline-block;
  background-color: ${(props) => getBackgroundColor(props.variant)};
  color: ${(props) => getColor(props.variant)};
`;

export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  return (
    <StyledBadge data-testid="global-badge" data-cy="global-badge" variant={variant}>
      {children}
    </StyledBadge>
  );
};
