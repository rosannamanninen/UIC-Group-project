import styled from "styled-components";
import { palette } from "../theme";

// wrapper with no additional styles just the standard padding
export const NoStyleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 700px;
    margin: 2rem 0rem;
`

// wrapper with no additional styles, smaller margin
export const NoStyleWrapper2 = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    width: 700px;
    margin: 0rem 0rem;
`

// outer wrapper white
export const WhiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: white;
    border-radius: 1rem;
    width: 700px;
    margin: 1.8rem 0rem;
`

// use this inside another wrapper that is not inner wrapper :D
export const WhiteWrapperInner = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: white;
    border-radius: 0.8rem;
    
`

export const Gap = (gap) => {
    return (
    <div style={{margin: gap.gap}}></div>
    )
}

// Results emergency situations wrapper
export const EmergencyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: #FFF9F9;
    border-radius: 1rem;
    width: 700px;
    margin: 1.8rem 0rem;
    border: 1.5px solid #FF9898;

`
// wrapper for the Results section's conclusion
export const ConclusionWrapper = styled.div.attrs(props => ({}))`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: ${props => props.$type ? palette.conclusion[props.$type].bg : 'transparent'};
    border-radius: 1rem;
    width: 700px;
    margin: 1.8rem 0rem;
`
// small margin that you can use to create space around fe. text componensts
export const SmallMargin = styled.div`
    margin: 0.4rem;
`;

// margin, but only to top and bottom
export const RemMarginVertical = styled.div`
    margin: 1rem 0rem ;
`

// wrapper for aligning something to right (evrything inside this is aligned)
export const ContentAlignEnd = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
`

// wrapper for aligning something to left (everything inside this is aligned)
export const ContentAlignStart = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
`

// wrapper for aligning something to vertically
export const ContentAlignVertical = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: start;
`
