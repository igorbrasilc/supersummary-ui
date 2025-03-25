import * as React from 'react'

export interface BadgeProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'error' | 'warning' | 'success'
} 