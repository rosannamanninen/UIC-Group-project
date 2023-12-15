import { ButtonLink } from "../../components/ButtonLink";
import { ConclusionWrapper, SmallMargin, RemMarginVertical, WhiteWrapperInner, NoStyleWrapper, ContentAlignEnd, EmergencyWrapper } from "../../components/divs";
import { StyledSelect } from "../../components/form-styles";
import { BodyButton, Bodytext, Heading2, Heading3, Heading4, Heading4Center } from "../../components/shared-font-styles";
import { useState } from "react";
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { AlignSelf } from "../../components/divs";

const dummyAnswers = [
    {
        question: 'Age',
        answer: '25',
    },
    {
        question: 'Gender',
        answer: 'Female',
    },
    {
        question: 'Do you have fever?',
        answer: 'yes',
    },
    {
        question: 'Are you facing difficulties to breath?',
        answer: 'yes',
    },
    {
        question: 'How is your general well being?',
        answer: 'I can handle normal day to day tasks',
    },
    {
        question: 'How long have your symptoms lasted so far?',
        answer: '1-3 days',
    },
    {
        question: 'Is your throat sore?',
        answer: 'no',
    },
    {
        question: 'Do you cough?',
        answer: 'no',
    },
    {
        question: 'Look at the following pictures. Which one describes your situation more?',
        answer: 'None of the options',
    },

];

const Results = () => {
    const [answersOpen, setAnswersOpen] = useState(false);

    const answers = () => {
        setAnswersOpen(!answersOpen);
    };

    return (
        <>
        <AlignSelf> <a href="/questionnaire">{"< Back"}</a></AlignSelf> 
        <ProgressIndicator currentStep={3}/>
        <Heading2>Results</Heading2>
        <RemMarginVertical><Bodytext>Here we will conclude the resuilts of the survey and advice you on the next steps for seeking care.</Bodytext></RemMarginVertical>
        <ConclusionWrapper $type={'case2'}>
            <Heading3>Conclusion</Heading3>
            <RemMarginVertical>
            <Bodytext>The results suggest that you should reach out to your local healthcare professional to discuss your symptoms.</Bodytext>
            </RemMarginVertical>
            {!answersOpen ? <BodyButton onClick={answers}>Show your answers</BodyButton>:
             <WhiteWrapperInner>
                <Heading4>Your answers</Heading4>{dummyAnswers.map((answer, i) =>  (
                <SmallMargin key={'qa-wrapper' + i}>
                <Bodytext key={'q' + i}><b>{answer.question}</b></Bodytext>
                <Bodytext key={'a' + i}>{answer.answer}</Bodytext>
                </SmallMargin>
                )
             )}
                <BodyButton onClick={answers}>Hide answers</BodyButton>
                </WhiteWrapperInner>}
        </ConclusionWrapper>
        <NoStyleWrapper>
            <Heading3>Reserve an appointment</Heading3>
            <Bodytext>Choose a  location to reserve a time for your local  health care professional.</Bodytext>
            <StyledSelect>
                <option value="0">Espoo</option>
                <option value="0">Helsinki</option>
                <option value="0">Vantaa</option>
            </StyledSelect>
            <ContentAlignEnd><ButtonLink href="/appointment">Continue</ButtonLink></ContentAlignEnd>
        </NoStyleWrapper>
        <EmergencyWrapper>
            <Heading3>Emergency situations</Heading3>
            <Bodytext>In a  case of an emergency call the finnish Emergency number:</Bodytext>
                <Heading4Center>112</Heading4Center>
            <Bodytext>Calling the emergency number is free of charge. You can call the emergency number from any mobile phone or landline without an area code. You can also call the emergency number from a mobile.</Bodytext>
        </EmergencyWrapper>
        </>
        
    );
};

export default Results;