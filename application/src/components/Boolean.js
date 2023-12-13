import React, { useState } from "react";

import styled from "styled-components";
import { palette, typography } from "../theme";



const SelectedButton = styled.button`
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

const UnselectedButton = styled.button`
    background-color: ${palette.white.main};
    cursor: pointer;
    border: 2px solid ${props => props.color.main};
    border-radius: ${props => props.radius};
    padding: 10px 18px;
    text-align: center;
    font-size: ${typography.body.fontSize};
    font-weight: ${typography.body.fontWeight};
    color: black;
    text-decoration: none;
    margin: 2rem 1rem;
    width: ${props => props.width};
    &:hover {
        background: ${props => props.color.dark};
    }
`;

export const Boolean = ({
    children,
    onClick,
    color,
    border,
    height = '50px',
    radius = '10px',
    width = '100px'
}) => {
    const [isTrue, setIsTrue] = useState(false)
    console.log(isTrue)
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            {isTrue ? (
                <>
                    <SelectedButton color={color} border={border} width={width} height={height} radius={radius} onClick={() => setIsTrue(!isTrue)}>
                        yes
                    </SelectedButton>

                    <UnselectedButton color={color} border={border} width={width} height={height} radius={radius} onClick={() => setIsTrue(!isTrue)}>
                        no
                    </UnselectedButton>
                </>
            ) : (
                <>
                    <UnselectedButton color={color} border={border} width={width} height={height} radius={radius} onClick={() => setIsTrue(!isTrue)}>
                        yes
                    </UnselectedButton>

                    <SelectedButton color={color} border={border} width={width} height={height} radius={radius} onClick={() => setIsTrue(!isTrue)}>
                        no
                    </SelectedButton>
                </>
            )
            }
        </div>
    )
}