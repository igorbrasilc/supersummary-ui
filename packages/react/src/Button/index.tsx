import * as React from 'react'
import { ButtonHTMLAttributes } from 'react'
import { tokens } from '@supersummary-ui/tokens'
import './styles.css'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, ...props }: ButtonProps) => {
  return (
    <button 
      className="button" 
      style={{
        backgroundColor: props.disabled ? '#ccc' : tokens.colors.primary,
        color: tokens.colors.white,
      }}
      {...props}
    >
      {children}
    </button>
  )
} 