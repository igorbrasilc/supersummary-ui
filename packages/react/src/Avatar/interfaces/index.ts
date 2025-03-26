import { ReactNode } from 'react';
import { AvatarProps as MUIAvatarProps } from '@mui/material';

export interface AvatarProps extends Omit<MUIAvatarProps, 'variant'> {
  children: ReactNode;
  themeVariant?: 'dark' | 'light';
  clickable?: boolean;
}
