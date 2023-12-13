import React from 'react';
import styled from 'styled-components';
import { palette } from '../theme';

const ProgressIndicatorWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem;
`;

const Circle = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: ${(props) => (props.active ? palette.primary.dark : palette.secondary.light )};
  color: ${(props) => (props.active ? palette.secondary.light : palette.primary.dark )};
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  margin-right: 10px;
`;

export const ProgressIndicator = ({ currentStep }) => {
  return (
    <ProgressIndicatorWrapper>
      <Circle active={currentStep === 1}>1</Circle>
      <Circle active={currentStep === 2}>2</Circle>
      <Circle active={currentStep === 3}>3</Circle>
    </ProgressIndicatorWrapper>
  );
};