import styled from "styled-components";
import { AlignSelf, ContentAlignStart, NoStyleWrapper2, RemMarginVertical } from "../../components/divs";
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { Bodytext, Heading3, Heading4 } from "../../components/shared-font-styles";
import doctors from '../../assets/doctors.webp'

const BodytextBold = styled(Bodytext)`
    ${Bodytext};
    font-weight: bold;
    color: black;
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
    width: 550px;
    margin: 0rem 0rem;
`

const Final = () => {
    return (
        <>
        <img style={{ width: "73%", height: "73%", margin: "20px"}} src={doctors} alt="Hapy group of doctors."/>
        <AlignSelf> <RemMarginVertical> <a href="/appointment">{"< Back"}</a></RemMarginVertical></AlignSelf> 
        <ProgressIndicator currentStep={5}/>
    
        <Heading3>Thank you for booking an appointment</Heading3>
        <Wrapper>
        <Heading4>Here are your appointment details</Heading4>
    
        <ContentAlignStart>
            <BodytextBold>Reaso for booking</BodytextBold>
            <Bodytext>Respiratory tract infection</Bodytext>
        </ContentAlignStart>
        <ContentAlignStart>
            <BodytextBold>Appoinment time</BodytextBold>
            <Bodytext>Thursday, December 12;  5pm</Bodytext>
        </ContentAlignStart>
        <ContentAlignStart>
            <BodytextBold>Practitioner</BodytextBold>
            <Bodytext>Juha Aaltola</Bodytext>
        </ContentAlignStart>
        </Wrapper>
        <RemMarginVertical/>
        </>
        
    );
};

export default Final;