import { keyframes } from '@emotion/react';
import { BoxProps } from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { memo } from 'react';
import logoSvg from '../assets/logo.svg';

interface Props extends Pick<BoxProps, 'sx'> {
  spinning?: boolean;
}

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const Image = styled('img', {
  shouldForwardProp: (prop) => prop !== 'spinning' && prop !== 'sx',
})<Props>(({ spinning, theme }) => ({
  pointerEvents: 'none',
  [theme.media.animation]: {
    animation: spinning ? `${spin} infinite 20s linear` : undefined,
  },
}));

/**
 * Spinning React logo
 */
function ReactLogo(props: Props): JSX.Element {
  const { spinning, sx } = props;

  return <Image alt="logo" spinning={spinning} src={logoSvg} sx={sx} />;
}

export type ReactLogoProps = Props;
export default memo(ReactLogo);
