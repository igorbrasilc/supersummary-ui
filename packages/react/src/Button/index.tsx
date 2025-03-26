import * as React from 'react';
import { ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { tokens } from 'supersummary-tokens';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const StyledButton = styled.button`
  background-color: ${(props) => (props.disabled ? '#ccc' : tokens.colors.primary)};
  color: ${tokens.colors.white};
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${tokens.colors.primaryDark};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const Button = ({ children, ...props }: ButtonProps) => {
  return <StyledButton {...props}>{children}</StyledButton>;
};
