import styled from "styled-components";
import { ButtonLink } from "../../components/ButtonLink";
import { palette, typography } from "../../theme";
import doctors from '../../assets/doctors.webp'
import { Gap, WhiteWrapper } from "../../components/divs";

const BlueH1 = styled.h1`
font-size: 4em;
color: #2C3775;
margin: 0.4rem;
`;

const Search = styled.input`
width: 450px;
font-size: 1.1rem;
border-radius: 0.5rem;
border-color: ${palette.primary.main};
padding: 0.6rem;
`;

const BodytextBold = styled.p`
font-family: ${typography.body.fontFamily};
font-weight: bold;
font-size: 1.3rem;
color: #2C3775;
text-align: start;
width: 600px;
`;

const BodyTextLight = styled.p`
font-family: ${typography.body.fontFamily};
font-weight: 300;
font-size: 1.4rem;
color: Black;
margin: 0.6rem;
width: 600px;
text-align: left;
`;

const Landing = () => {
    return (
        <>
        <img style={{ width: "73%", height: "73%", margin: "20px"}} src={doctors} alt="Hapy group of doctors."/>
        <BlueH1>How do you feel?</BlueH1>
        <BodyTextLight>
            Type in your symptoms, complete the survey and you'll get an 
            evaluation of your need to contact healthcare professioals.
            After the survey you'll be directed to a booking page for an apointment if your 
            symptoms deem it necessary.
        </BodyTextLight>

        <BodytextBold>Search with your symptoms</BodytextBold>
        <search>
        <Search name="search" placeholder="Type your symptoms here"/>
        <ButtonLink href="/info">Search</ButtonLink>
        </search>
        <Gap gap='40px'/>
        </>
    )
}


export default Landing;