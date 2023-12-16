import React, { useState, useEffect } from "react";
import { RadioButtonGroup, PictureRadioButtonGroup, RadioButtonGroupHorizontal } from '../../components/Radio'
import { Boolean } from '../../components/Boolean'
import { TextInput } from '../../components/TextInput'
import { palette } from '../../theme';
import { ButtonLink } from "../../components/ButtonLink";
import { ButtonCircle, InfoBox } from "../../components/infobox";
import {  RemMarginVertical, Gap, NoStyleWrapper, NoStyleWrapper2, ContentAlignStart, NoStyleWrapper3, EmergencyWrapper, ContentAlignVertical, RemMarginHorizontal } from "../../components/divs";
import { Bodytext, Heading2, Heading3, Bodylink, BodytextBoldDark, Heading4, BodytextBold } from "../../components/shared-font-styles";
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

  const yesNo = [
    {
      label: "Yes",
      name: "button-types",
    },
    {
      label: "No",
      name: "button-types",
    }
  ]

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

  const symptoms = [
    {
      label: "Less than one day",
      name: "button-types",
    },
    {
      label: "One to three days",
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
  const [selectedBreath, setSelectedBreath] = useState(yesNo[0].label);
  const [selectedFever, setSelectedFever] = useState(yesNo[0].label);
  const [selectedSymptoms, setSelectedSymptoms] = useState(symptoms[0].label);
  const [selectedThroat, setSelectedThroat] = useState(yesNo[0].label);
  const [selectedCough, setSelectedCough] = useState(yesNo[0].label);
  const [selectedPicture, setSelectedPicture] = useState(pictures[0].label);


  function genderGroupHandler(event) {
    console.log(event.target.value)
    setSelectedGender(event.target.value);
  }

  function feverGroupHandler(event) {
    console.log(event.target.value)
    setSelectedFever(event.target.value);
  }

  function breathGroupHandler(event) {
    console.log(event.target.value)
    setSelectedBreath(event.target.value);
  }

  function wellBeingGroupHandler(event) {
    console.log(event.target.value)
    setselectedWellBeing(event.target.value);
  }

  function symptomsGroupHandler(event) {
    console.log(event.target.value)
    setSelectedSymptoms(event.target.value);
  }

  function throatGroupHandler(event) {
    setSelectedThroat(event.target.value)
  }

  function coughGroupHandler(event) {
    setSelectedCough(event.target.value)
  }

  function pictureGroupHandler(event) {
    console.log(event.target.value)
    setSelectedPicture(event.target.value);
  }

  useEffect(() => {
    console.log(selectedGender);
  }, [selectedGender, selectedFever, selectedBreath, selectedWellBeing,selectedSymptoms, selectedThroat, selectedPicture]);

  return (
    <>
     <AlignSelf> <a href="/info">{"< Back"}</a></AlignSelf> 
      <ProgressIndicator currentStep={2}/>
      <Heading2>Questionnaire</Heading2>
      
      <NoStyleWrapper2>
        <Heading4>More information on the topic:</Heading4>
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
      </NoStyleWrapper2>

      <NoStyleWrapper2>
        <Heading3>Basic information</Heading3>
        <Bodytext>Fill in the basics</Bodytext>
    
        <ContentAlignStart>
          <RemMarginVertical><Bodytext>Age</Bodytext></RemMarginVertical>
          <TextInput placeholder="Age" size="2px" width='50px' height='30px' color={palette.primary} type="number" />
        </ContentAlignStart>
        <ContentAlignStart>
          <Bodytext>Gender</Bodytext>
          <RadioButtonGroupHorizontal
              title=""
              options={genders}
              onChange={genderGroupHandler}
          />
        </ContentAlignStart>
        <Gap gap="10px"/>
      </NoStyleWrapper2>

      <NoStyleWrapper2>
        <Heading3>General symptoms</Heading3>
        <Bodytext>Describe your symptoms</Bodytext>
        <EmergencyWrapper>
          <ContentAlignStart>
          <ButtonCircle>i</ButtonCircle>If your body temperature exeeds 37 C answer yes
          </ContentAlignStart>
        </EmergencyWrapper>

          <RadioButtonGroup
              title={"Do you have fever?"}
              options={yesNo}
              onChange={feverGroupHandler}
          />
          <Gap gap="30px"/>
          <RadioButtonGroup 
            title={"Are you facing dificulties to breath?"}
            options={yesNo}
            onChange={breathGroupHandler}
          />

          <Gap gap="30px"/>
          <RadioButtonGroup
            title="How is your general well being?"
            options={wellBeing}
            onChange={wellBeingGroupHandler}
          />
           <Gap gap="10px"/>
      </NoStyleWrapper2>
      

      <NoStyleWrapper2>
        <Heading3>Symptoms</Heading3>
        <Bodytext >More spesific symptoms</Bodytext>

        <Gap gap="10px"/>
        <RadioButtonGroup
            title="How long have you had symptoms?"
            options={symptoms}
            onChange={symptomsGroupHandler}
        />
        <Gap gap="30px"/>
      
        <RadioButtonGroup
          title={"Is your throat sore?"}
          options={yesNo}
          onChange={throatGroupHandler}
        />
        <Gap gap="30px"/> 

        <RadioButtonGroup
          title={"Do you have a cough?"}
          options={yesNo}
          onChange={coughGroupHandler}
        />
        <Gap gap="30px"/> 

      </NoStyleWrapper2>

      <NoStyleWrapper2>
        <PictureRadioButtonGroup
            title="Select the option that describes you the most:"
            options={pictures}
            onChange={pictureGroupHandler}
        />
      </NoStyleWrapper2>

      <NoStyleWrapper2>
        <ButtonLink style={{ alignItems: 'right' }} href="/results">Continue</ButtonLink>
      </NoStyleWrapper2>

      
    </>
  );
};

export default Questionnaire;