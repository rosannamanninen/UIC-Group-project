import React from 'react'
import styled from "styled-components";
import { typography } from "../theme";


// return (
//     <button 
//       onClick={onClick}
//       style={{
//          backgroundColor: color.main,
//          border: border ? border : `2px solid ${color.dark}`,
//          borderRadius: radius,
//          height: height,
//          width: width,
//          fontFamily: typography.body.fontFamily,
//          fontSize: typography.body.fontSize,
//          }
//       }

//     >
//     {children}
//     </button>


//   )

const StyledButton = styled.button`
    background-color: ${props => props.color.main};
    cursor: pointer;
    border: ${props => props.border};
    border-radius: ${props => props.radius};
    padding: 10px 18px;
    text-align: center;
    font-size: ${typography.body.fontSize};
    font-weight: ${typography.body.fontWeight};
    color: ${props => props.color.contrastText};
    text-decoration: none;
    margin: 2rem 1rem;
    width: ${props => props.width};
    &:hover {
        background: ${props => props.color.dark};
    }
`;

export const Button = ({
    children,
    onClick,
    color,
    border,
    height = '50px',
    radius = '10px',
    width = '100px'
}) => {
    return (
        <StyledButton color={color} border={border} width={width} height={height} radius={radius} onClick={onClick}>
            {children}
        </StyledButton>
    )
}

