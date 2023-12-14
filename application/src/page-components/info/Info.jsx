import { ButtonLink } from "../../components/ButtonLink";
import { RadioButtonGroup } from '../../components/Radio'
import { palette } from '../../theme';
import { Bodytext, BodytextBold, Heading2, Heading3, Bodylink } from "../../components/shared-font-styles";
import { RemMarginVertical } from "../../components/divs";
import { ProgressIndicator } from "../../components/ProgressIndicator.js";
import styled from 'styled-components'

const Info = () => {

    //Local blue bullet point list
    const BlueList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0.5em;
  
        li {
        color: ${palette.primary.dark};
        margin: 0.6rem 0;
        position: relative;
        padding-left: 1.5em;
    
        &::before {
            content: '•';  // Bullet point character
            color: ${palette.primary.dark};
            font-size: 1.2em;
            position: absolute;
            left: 0;
            top: 0.1em;
        }
        }
        `;

    const myAssesment = [
        {
          label: "I'm considering professional treatment.",
          name: "button-types",
        },
        {
          label: "I only want self-care instructions, no professional treatment needed.",
          name: "button-types",
        },
      ];

    function radioGroupHandler(event) {
        console.log(event.target.value); //Here for the visual effects, doesn't actually change the page
    }

    return (
        <>
            
        <ProgressIndicator currentStep={1}/>
            
        <Heading2>Information</Heading2>
        <RemMarginVertical>
            <Bodytext>Respiratory tract infection</Bodytext>
            <br/>
            <Heading3>Start the survey</Heading3>
            <br/>
            <Bodytext>
                Use this survey if you have any symptoms of infection in your nose,  throat, sinuses or lungs. You can tell if you have an infection, for example, if one of the parts of the body listed above is painful or swollen, if your voice is hoarse or you have a fever, or if your ability to do things is clearly reduced because of these symptoms. If your main symptom is coughing or sore throat, it is better to fill in the separate symptom checkers for these symptoms (coughing or throat pain / throat symptom).
            </Bodytext>
            <Bodytext>
                This survey helps you to evaluate what kind of treatment you should seek, and how you can treat your symptoms. Instructions are based on research knowledge such as the Current Care Guidelines.
            </Bodytext>
            <BodytextBold>
                    The survey is not intended for emergencies, such as acute and severe chest pain, severe breathing difficulties or severe injuries. In an emergency, contact 112.
            </BodytextBold>
        </RemMarginVertical>
        <br></br>
        <RemMarginVertical>
            <Heading3>Response instructions</Heading3>
            <br></br>
            <BlueList>
                <li>Answer the questions carefully and accurately</li>
                <li>Listen to how you feel: to some extent you yourself can assess how serious the problem is</li>
                <li>Answer each question for accurate results</li>
                <li>You can find more information in the <Bodylink href="https://www.terveyskirjasto.fi/" target="_blank" >Health Library (terveyskirjasto.fi)</Bodylink> </li>
                <li>After completing the survey, you will receive either self-care instructions or instructions on how and when to make an appointment</li>
            </BlueList>
            <br></br>
            <br></br>
            <br></br>

            <RadioButtonGroup
                title="Pre-Survey Assessment"
                options={myAssesment}
                onChange={radioGroupHandler}
            />
        </RemMarginVertical>

        <br></br>
        <br></br>

        <ButtonLink href="/questionnaire">Continue</ButtonLink>
        </>
        
    );
};

export default Info;
