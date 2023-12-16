import React from "react";

import styled from "styled-components";
import { palette, typography } from "../theme";


const StyledTitle = styled.label`
  font-weight: ${typography.subtitle.fontWeight};
  font-size: ${typography.subtitle.fontSize};
  color: ${props => props.color.main};
  cursor: default;
  padding: 10px
  margin: 20px
`;

const StyledLabel = styled.label`
  font-weight: 600;
  font-size: 1rem;
  color: black;
  cursor: default;
  padding: 5px
  ${props =>
    props.disabled &&
    `
    color: black;
    cursor: not-allowed;
    &::after {
      margin-left: 8px;
      width: 12px;
      height: 15px;
      display: inline-block;
      content: " ";
      -webkit-mask: url("/lock.svg") no-repeat 50% 50%;
      -webkit-mask-size: cover;
      background-color: ${palette.grey.main};
    }
  `}
`;

const Wrapper = styled.div`
  position: relative;
  top: 30px;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  width: 20px;
  height: 20px;
  margin: 5px;
  border: 2px solid ${palette.primary.main};
  border-radius: 50%;
  transition: all 0.1s ease-in-out;
  &::after {
    content: "";
    display: block;
    border-radius: 50%;
    width: 12px;
    height: 12px;
    margin: 2px;
  }

  &:checked::after {
    background-color: ${palette.primary.main};
  }
  &:hover::after {
    background-color: ${palette.primary.main};
  }
`;


const RadioButton = ({
  label,
  id,
  disabled = false,
  ...rest
}) => {
  return (
    <Wrapper>
      <StyledRadio id={id} type="radio" disabled={disabled} {...rest} />
      <StyledLabel htmlFor={id} disabled={disabled}>
        {label}
      </StyledLabel>
    </Wrapper>
  )
};

export const RadioButtonGroup = ({ title, options, onChange }) => {

  return (
    <div style={{ position: 'relative', padding: '2px' }}>
      <StyledTitle style={{ position: 'absolute', top: 0 }} color="black">{title}</StyledTitle>
      {options.map(({ label, name, disabled }, index) => {
        const optionId = `radio-option-${label.replace(/\s+/g, "")}`;

        return (
          <RadioButton
            value={label}
            label={label}
            key={optionId}
            id={optionId}
            name={name}
            disabled={disabled}
            defaultChecked={index === 0}
            onChange={onChange}
          />
        );
      })}
    </div>
  )
};

export const RadioButtonGroupHorizontal = ({title, options, onChange}) => {
  
  return (
    <>
      <StyledTitle style={{ position: 'absolute', top: 0 }} color="black">{title}</StyledTitle>
      {options.map(({ label, name, disabled }, index) => {
        const optionId = `radio-option-${label.replace(/\s+/g, "")}`;

        return (
          <RadioButton
            value={label}
            label={label}
            key={optionId}
            id={optionId}
            name={name}
            disabled={disabled}
            defaultChecked={index === 0}
            onChange={onChange}
          />
        );
      })}
    </>
  )
};

const PictureRadioButton = ({
  image,
  label,
  id,
  disabled = false,
  ...rest
}) => {
  console.log(image)
  return (
    <Wrapper>
      <img src={image} width='200px' />
      <StyledRadio id={id} type="radio" disabled={disabled} {...rest} />
      <StyledLabel htmlFor={id} disabled={disabled}>
        {label}
      </StyledLabel>
    </Wrapper>
  )
};


export const PictureRadioButtonGroup = ({ title, options, onChange }) => {
  console.log(options)
  return (
    <>
      <StyledTitle color="black">{title}</StyledTitle>
      {options.map(({ label, name, image, disabled }, index) => {
        const optionId = `radio-option-${label.replace(/\s+/g, "")}`;

        return (
          <PictureRadioButton
            value={label}
            image={image}
            label={label}
            key={optionId}
            id={optionId}
            name={name}
            disabled={disabled}
            defaultChecked={index === 0}
            onChange={onChange}
          />
        );
      })}
    </>
  )
};