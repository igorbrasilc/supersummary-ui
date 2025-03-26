import { Avatar as MUIAvatar } from '@mui/material';
import { AvatarProps } from './interfaces';
import styled from '@emotion/styled';
import { tokens } from 'supersummary-tokens';

// Emotion doesn't support transient props like styled-components
// so we need to manually filter out our custom props
const StyledAvatar = styled(MUIAvatar, {
  shouldForwardProp: (prop) => prop !== 'clickable',
})<{ clickable?: boolean }>`
  display: inline-flex;

  &:hover {
    ${({ clickable }) =>
      clickable &&
      `
      filter: brightness(80%);
      transition: 0.2s filter linear;
      cursor: pointer;
    `}
  }
`;

const LightAvatar = styled(StyledAvatar)`
  background-color: ${tokens.colors.primary};
  color: ${tokens.colors.white};
`;

const DarkAvatar = styled(StyledAvatar)`
  background-color: ${tokens.colors.primaryDark};
  color: ${tokens.colors.white};
`;

const variants = {
  dark: DarkAvatar,
  light: LightAvatar,
};

export const Avatar = ({ children, themeVariant = 'dark', clickable, ...props }: AvatarProps) => {
  const Component = variants[themeVariant];
  return (
    <Component clickable={clickable} {...props}>
      {children}
    </Component>
  );
};
