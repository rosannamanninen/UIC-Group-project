import styled from 'styled-components'
import { typography, palette } from '../theme';

// Heading 1: The Health app name in the top
export const Heading1 = styled.h1`
    font-family: ${typography.h1.fontFamily};
    font-weight: ${typography.fontWeight};
    font-size: ${typography.h1.fontSize};
    text-align: start;
`;

// Heading 2: The name of your section
export const Heading2 = styled.h2`
    font-family: ${typography.h2.fontFamily};
    font-weight: ${typography.fontWeight};
    font-size: ${typography.h2.fontSize};
    text-align: start;
`;

// the one below etc...
export const Heading3 = styled.h3`
    font-family: ${typography.h3.fontFamily};
    font-weight: ${typography.fontWeight};
    font-size: ${typography.h3.fontSize};
    text-align: start;
    margin: 0.6rem;
`;

export const Heading4 = styled.h4`
    font-family: ${typography.h4.fontFamily};
    font-weight: ${typography.fontWeight};
    font-size: ${typography.h4.fontSize};
    text-align: start;
    margin: 0.4rem;
`;

export const Heading4Center = styled.h4`
    font-family: ${typography.h4.fontFamily};
    font-weight: ${typography.fontWeight};
    font-size: ${typography.h4.fontSize};
    text-align: center;
    margin: 1rem;
`;

// the basic text TODO: use theme font size
export const Bodytext = styled.p`
    font-family: ${typography.body.fontFamily};
    font-weight: ${typography.body.fontWeight};
    font-size: 1.1rem;
    color: black;
    text-align: start;
    margin: 0.6rem;

    a{
    font-weight: bold;
    color: ${palette.link.primary};
      cursor: pointer;
    }
`;

//The basic bodytext but bolded
export const BodytextBold = styled(Bodytext)`
    ${Bodytext};
    font-weight: bold;
    color: ${palette.primary.main}
`;

//The basic bodytext but bolded and darker
export const BodytextBoldDark = styled(Bodytext)`
    ${Bodytext};
    font-weight: bold;
    color: ${palette.link.primary}
`;

// I made this for links that are separate
export const Bodylink = styled.a`
    font-family: ${typography.body.fontFamily};
    font-weight: bold;
    font-size: 1.1rem;
    color: ${palette.link.primary};
    text-align: start;
    cursor: pointer;

`;

// This is for buttons that need to look like links (the random blue bloded link that opens things)
export const BodyButton = styled.button`
    font-family: ${typography.body.fontFamily};
    font-weight: bold;
    font-size: 1.3rem;
    color: ${palette.link.primary};
    text-align: start;
    border: none;
    margin: 1rem 0rem;
    passing: 0;
    background: transparent;
    cursor: pointer;

`;

export const SmallText = styled.p`
    font-family: ${typography.body.fontFamily};
    font-weight: ${typography.body.fontWeight};
    font-size: 0.8rem;
    color: #000000;
    text-align: start;
    margin: 0.1rem;

    a{
    font-weight: bold;
    color: ${palette.link.primary};
      cursor: pointer;
    }
`;
