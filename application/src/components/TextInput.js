
import styled from "styled-components";
import { typography } from "../theme";



export const TextInput = styled.input.attrs(props => ({
    // we can define static props
    type: "text",
  
    // or we can define dynamic ones
    size: props.size || "1em",
  }))`
    color: balck;
    font-size: ${typography.body.fontSize};
    border: 2px solid ${props => props.color.main};
    border-radius: 3px;
    width: ${props => props.width};
    height: ${props => props.height};
  
    /* here we use the dynamically computed prop */
    margin: ${props => props.size};
    padding: ${props => props.size};
  `;