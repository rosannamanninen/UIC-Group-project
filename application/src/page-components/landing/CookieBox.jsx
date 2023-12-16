import styled from "styled-components"
import { ButtonLink } from "../../components/ButtonLink";

const H2 = styled.h2`
    text-align: left;
    font-size: 3em;
    color: #2C3775;
`;

const Cookietext = styled.p`
font-weight: 300; 
`;

const Link = styled.a`
color: #162FBA;
text-decoration: underline;
font-weight: 300;
`;


/*width: 601px;
height: 495px;
flex-shrink: 0;
border-radius: 30px;
background: #FFF;

box-shadow: 0px 4px 30px 8px rgba(0, 0, 0, 0.25);*/
const CookieBox = styled.section`
width: 40%;
border-radius: 30px;
background: #FFFF;
padding: 10%;
margin: 10%;
box-shadow: 0px 4px 30px 8px rgba(0, 0, 0, 0.25);
`;

export const CookiePolicy = () => {
    return (
        <>
        <CookieBox>
                <H2>
                    Cookie Policy
                </H2>
                <Cookietext>
                When you visit the site, Diagnosticum and its partners may
                store or retrieve information on your browser, mostly 
                in the form of cookies. Cookies collect information about 
                your preferences and your devices and are used to make the 
                site work as you expect it to, to understand how you interact
                with the site, and to show advertisements that are targeted
                to your interests. You can find out more about our use,
                change your default settings, and withdraw your consent
                at any time with effect for the future by visiting <Link>Cookie Settings</Link>, 
                which can also be found in the footer of the site.
                </Cookietext>
                <ButtonLink href="/anding">Search</ButtonLink>
        </CookieBox>
        </>
    )
}