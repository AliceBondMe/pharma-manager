import { FC, MouseEventHandler, ReactNode } from 'react';
import { baseButtonStyle, lightButtonStyle } from './Button.styles';

type ButtonStyle = 'BaseButtonStyle' | 'LightButtonStyle';

interface ButtonProps {
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  style?: ButtonStyle;
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
  width?: string;
}

const Button: FC<ButtonProps> = ({
  type = 'submit',
  style = 'BaseButtonStyle',
  width = '100%',
  children,
  ... props
}) => { 
  
  const getButtonStyle = (width: string) => {
  switch (style) {
    case 'LightButtonStyle':
      return lightButtonStyle(width);
      break;
  
    default:
      return baseButtonStyle(width);
      break;
  }
  }
  
  return (
    <button type={type} css={() => getButtonStyle(width)} {...props}>
      {children}
    </button>
  );
}
 
export default Button;