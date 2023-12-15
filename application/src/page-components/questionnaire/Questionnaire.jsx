import React, { useState, useEffect } from "react";
import { RadioButtonGroup, PictureRadioButtonGroup } from '../../components/Radio'
import { Boolean } from '../../components/Boolean'
import { TextInput } from '../../components/TextInput'
import { palette } from '../../theme';
import { ButtonLink } from "../../components/ButtonLink";
import { InfoBox } from "../../components/infobox";
import {  RemMarginVertical, Gap } from "../../components/divs";
import { Bodytext, Heading2, Heading3, Bodylink } from "../../components/shared-font-styles";
import mouth from '../../assets/mouth.jpg'
import { ProgressIndicator } from "../../components/ProgressIndicator";
import { AlignSelf } from "../../components/divs";

const Questionnaire = () => {

  const genders = [
    {
      label: "Male",
      name: "button-types",
    },
    {
      label: "Female",
      name: "button-types",
    },
    {
      label: "Other",
      name: "button-types",
    },
    {
      label: "Prefer not to say",
      name: "button-types",
    }
  ];

  const wellBeing = [
    {
      label: "I can handle normal day to day tasks",
      name: "button-types",
    },
    {
      label: "I can stand up but can do only most important tasks",
      name: "button-types",
    },
    {
      label: "I can’t do anything but lay on the bed",
      name: "button-types",
    },
  ];

  const fever = [
    {
      label: "Less than one day",
      name: "button-types",
    },
    {
      label: "one to three days",
      name: "button-types",
    },
    {
      label: "Longer time, more than three days",
      name: "button-types",
    },
  ];

  const pictures = [
    {
      label: "Picture 1: white spots",
      name: "button-types",
      image: mouth,
    },
    {
      label: "Picture 2: red throat",
      name: "button-types",
      image: mouth,
    },
    {
      label: "None of the options",
      name: "button-types",
      image: null,
    },
  ];

  const [selectedGender, setSelectedGender] = useState(genders[0].label);
  const [selectedWellBeing, setselectedWellBeing] = useState(wellBeing[0].label);
  const [selectedFever, setSelectedFever] = useState(fever[0].label);
  const [selectedPicture, setSelectedPicture] = useState(pictures[0].label);


  function genderGroupHandler(event) {
    console.log(event.target.value)
    setSelectedGender(event.target.value);
  }

  function wellBeingGroupHandler(event) {
    console.log(event.target.value)
    setselectedWellBeing(event.target.value);
  }

  function feverGroupHandler(event) {
    console.log(event.target.value)
    setSelectedFever(event.target.value);
  }

  function pictureGroupHandler(event) {
    console.log(event.target.value)
    setSelectedPicture(event.target.value);
  }

  useEffect(() => {
    console.log(selectedGender);
  }, [selectedGender, selectedWellBeing, selectedFever, selectedPicture]);

  return (
    <>
     <AlignSelf> <a href="/info">{"< Back"}</a></AlignSelf> 
      <ProgressIndicator currentStep={2}/>
      <Heading2>Questionnaire</Heading2>
      <RemMarginVertical>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Bodytext>More information on the topic:</Bodytext>
          <ul >
            <li>
              <Bodylink href="https://www.w3schools.com/" target="_blank" >How is  this done?</Bodylink>
            </li>
            <li>
              <Bodylink href="https://www.w3schools.com/" target="_blank">User manual</Bodylink>
            </li>
            <li>
              <Bodylink href="https://www.w3schools.com/" target="_blank">Possible causes for a sore throat</Bodylink>
            </li>
          </ul>

          <Gap gap='50px' />

          <Heading3>Basic information</Heading3>

          <Bodytext style={{ textAlign: 'center' }}>Fill in the basics</Bodytext>
          <Gap gap='30px' />
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'start'
        }}>
          <Bodytext >Age</Bodytext>
          <TextInput placeholder="Age" size="2px" width='50px' height='30px' color={palette.primary} type="number" />

          <Gap gap='50px' />
          <RadioButtonGroup
            title="Gender"
            options={genders}
            onChange={genderGroupHandler}
          />

        </div>
        <Gap gap='50px' />
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>

          <Heading3>General symptoms</Heading3>

          <Bodytext style={{ textAlign: 'center' }}>Describe your symptoms</Bodytext>

          <Gap gap='30px' />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'start',
            alignItems: 'center'
          }}>
            <Bodytext >Do you have fever?</Bodytext>
            <Boolean
              onClick={() => console.log('click')}
              color={palette.primary}
              border='none'
            ></Boolean>
          </div>
          
          <InfoBox color={palette.secondary}>If your body temperature exeeds 37 C answer yes</InfoBox>
          <Gap gap='50px' />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'start',
            alignItems: 'center',
            maxWidth: '450px'
          }}>
            <Bodytext >Are you facing dificulties to breath?</Bodytext>
            <Boolean
              onClick={() => console.log('click')}
              color={palette.primary}
              border='none'
            ></Boolean>
          </div>
          <Gap gap='50px' />
          <RadioButtonGroup
            title="How is your general well being?"
            options={wellBeing}
            onChange={wellBeingGroupHandler}
          />
          <Gap gap='50px' />

          <Heading3>Symptoms</Heading3>

          <Bodytext style={{ textAlign: 'center' }}>More spesific symptoms</Bodytext>

          <Gap gap='30px' />

          <RadioButtonGroup
            title="How long have you had symptoms?"
            options={fever}
            onChange={feverGroupHandler}
            style={{width: '540px'}}
          />
          <Gap gap='50px' />
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'start',
            alignItems: 'center'
          }}>
            <Bodytext >Is your throat sore? </Bodytext>
            <Boolean
              onClick={() => console.log('click')}
              color={palette.primary}
              border='none'
            ></Boolean>
          </div>
          
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'start',
            alignItems: 'center'
          }}>
            <Bodytext >Do you cough?</Bodytext>
            <Boolean
              onClick={() => console.log('click')}
              color={palette.primary}
              border='none'
            ></Boolean>
          </div>
          <Gap gap='50px' />

          <PictureRadioButtonGroup
            title="Select the option that describes you the most:"
            options={pictures}
            onChange={pictureGroupHandler}
          />
          <Gap gap='50px' />
        </div>
      </RemMarginVertical>
      <ButtonLink style={{ alignItems: 'right' }} href="/results">Continue</ButtonLink>
    </>
  );
};

export default Questionnaire;