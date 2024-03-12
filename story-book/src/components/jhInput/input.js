import { css, styled } from "styled-components";
import React from "react";
import { COROLS } from "../../styles/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const JHInput = ({ variant, size, font, placeholder, ...inputProps }) => {
  return (
    <InputWrapper variant={variant}>
      <Input
        variant={variant}
        size={size}
        font={font}
        placeholder={placeholder}
        {...inputProps}
      />
      <SearchIcon>
        <FontAwesomeIcon icon={faSearch} />
      </SearchIcon>
    </InputWrapper>
  );
};
export default JHInput;

const variantCSS = {
  primary: css`
    background-color: ${COROLS.primary.hover};

    &:hover {
      background-color: ${COROLS.grayScale.white};
      color: ${COROLS.primary.default};
      border: 1px solid ${COROLS.primary.hover};
    }
  `,

  secondary: css`
    background-color: ${COROLS.secondary.hover};
    &:hover {
      background-color: ${COROLS.grayScale.white};
      color: ${COROLS.secondary.default};
      border: 1px solid ${COROLS.secondary.hover};
    }
  `,
};

const IconCSS = {
  primary: css`
    color: ${COROLS.primary.hover};
  `,

  secondary: css`
    color: ${COROLS.secondary.hover};
  `,
};
const sizeCSS = {
  smallCircle: css`
    width: 297px;
    height: 41px;
    border-radius: 50px;
  `,

  largeCircle: css`
    width: 550px;
    height: 44px;
    border-radius: 50px;
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
//
const InputWrapper = styled.div`
  position: relative;
  &:hover {
    & > div {
      color: ${({ variant }) =>
        variant === "secondary"
          ? COROLS.secondary.hover
          : COROLS.primary.hover};
    }
  }
`;
const SearchIcon = styled.div`
  position: absolute;
  right: 6%;
  top: 30%;
  color: ${COROLS.grayScale.white};
`;
//

const Input = styled.input`
  transition: all 0.6s;
  /* button reset CSS */
  border: none;
  outline: none;
  padding: 0 20px;
  color: ${COROLS.grayScale.white};

  ${({ variant }) => variantCSS[variant]}
  ${({ size }) => sizeCSS[size]}
  ${({ font }) => fontCSS[font]}

  &::placeholder {
    color: ${COROLS.grayScale.white};
  }
  &:hover::placeholder {
    color: ${({ variant }) =>
      variant === "secondary" ? COROLS.secondary.hover : COROLS.primary.hover};
  }
`;
