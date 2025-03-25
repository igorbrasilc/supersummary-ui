import * as React from 'react'
import { BadgeProps } from './interfaces'
import { tokens } from '@supersummary-ui/tokens'
import './styles.css'

export const Badge = ({ children, variant = 'primary' }: BadgeProps) => {
  return (
    <span 
      data-cy="global-badge" 
      className={`badge badge-${variant}`}
    >
      {children}
    </span>
  )
} 