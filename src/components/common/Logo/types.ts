export interface LogoImageProps {
  width?: number | string;
  height?: number | string;
  viewBox?: string;
  fill?: string;
}

export interface LogoProps extends LogoImageProps {
  color: string;
}
