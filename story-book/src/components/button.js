import { css, styled } from "styled-components";

const JHButton = ({ children, variant, size, font, ...rest }) => {
  return (
    <Button variant={variant} size={size} font={font} {...rest}>
      {children}
    </Button>
  );
};
export default JHButton;

const variantCSS = {
  primary: css`
    background-color: #ff9d2a;
    color: #fff;
    &:hover {
      background-color: #ffce95;
    }
  `,

  secondary: css`
    background-color: #0f6b00;
    color: #fff;
    &:hover {
      background-color: #5fb751;
    }
  `,
};
const sizeCSS = {
  smallCircle: css`
    width: 30px;
    height: 30px;
    border-radius: 50%;
  `,
  mediumCircle: css`
    width: 60px;
    height: 60px;
    border-radius: 50%;
  `,
  largeCircle: css`
    width: 90px;
    height: 90px;
    border-radius: 50%;
  `,
};
const fontCSS = {
  small: css`
    font-size: 14px;
    font-weight: 800;
  `,
  medium: css`
    font-size: 16px;
    font-weight: 400;
  `,
  large: css`
    font-size: 26px;
    font-weight: 700;
  `,
};

const Button = styled.button`
  cursor: pointer;
  transition: all 0.6s;
  /* button reset CSS */
  border: none;
  outline: none;

  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ font }) => fontCSS[font]}
`;
