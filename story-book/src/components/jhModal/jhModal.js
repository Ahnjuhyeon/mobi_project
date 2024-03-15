import { styled } from "styled-components";
import { COROLS } from "../../styles/color";
import { FontAwesomeIcon, faCircleCheck } from "@fortawesome/react-fontawesome";
import React from "react";
import PropTypes from "prop-types";
/**
 * size {'small'|'large'}
 */
const JHModal = ({
  color,
  icon,
  headingText,
  contentText,
  cancleButtonText,
  confirmButtonText,
  ...rest
}) => {
  return (
    <Modal $color={color} {...rest}>
      <IconWrapper>
        <FontAwesomeIcon icon={icon} color={color} size="3x" />
      </IconWrapper>
      <ContentContainer>
        <h2>{headingText}</h2>
        <span>{contentText}</span>
        <ButtonBox>
          <Button
            $color={COROLS.grayScale.black}
            $bgColor={COROLS.grayScale.gray}
          >
            {cancleButtonText}
          </Button>
          <Button $color={COROLS.grayScale.white} $bgColor={color}>
            {confirmButtonText}
          </Button>
        </ButtonBox>
      </ContentContainer>
    </Modal>
  );
};
export default JHModal;

const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

const ContentContainer = styled.div`
  display: grid;
  align-items: center;
  gap: 0.5rem;
  text-align: center;
  & > span {
    padding: 0 3rem;
  }
`;

const ButtonBox = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const Button = styled.button`
  cursor: pointer;
  transition: all 0.6s;
  /* button reset CSS */
  border: none;
  outline: none;

  width: 12rem;
  height: 4rem;
  border-radius: 10px;

  color: ${({ $color }) => $color};
  background-color: ${({ $bgColor }) => $bgColor};
`;

const Modal = styled.div`
  display: grid;
  border: 1px solid ${({ $color }) => $color};
  background-color: ${COROLS.grayScale.white};
  border-radius: 22px;
  padding: 2rem;
  width: 29.7rem;
  height: 28.1rem;
  grid-template-rows: auto 1fr;
  justify-content: center;
  gap: 1rem;
`;
