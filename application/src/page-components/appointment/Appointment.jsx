import { ButtonLink } from "../../components/ButtonLink";
import { Heading2, Heading4, SmallText} from "../../components/shared-font-styles.js";
import { ContentAlignStart, NoStyleWrapper, SmallMargin, NoStyleWrapper3, NoStyleWrapper2, ContentAlignVertical, RemMarginHorizontal, RemMarginVertical } from "../../components/divs.js";
import {TextInput} from '../../components/TextInput'
import { palette } from '../../theme';
import { StyledSelect } from "../../components/form-styles";
import {Switch} from '../../components/Switch'
import React, { useState } from "react";
import calendar from '../../assets/calendar.png'
import times from '../../assets/times.png'
import { ProgressIndicator } from "../../components/ProgressIndicator.js";
import { AlignSelf } from "../../components/divs.js";



const Appointment = () => {
    const [isToggled, setIsToggled] = useState(false)

    return (
        <>
        <AlignSelf> <a href="/results">{"< Back"}</a></AlignSelf> 
        <ProgressIndicator currentStep={4}/>
        <Heading2>Book an appointment</Heading2>
        <NoStyleWrapper2>
        <Heading4>Practitioner</Heading4>
        <StyledSelect style={{ width: "88%", height: "100%"}}>
                <option value="0">Juha Aalto</option>
                <option value="0">Anna Niemi</option>
                <option value="0">Emma Virtanen</option>
         </StyledSelect>
        </NoStyleWrapper2>
        
        <NoStyleWrapper2>
        
        <ContentAlignStart>
        <ContentAlignVertical>
        <Heading4>Appointment date</Heading4>
        <img style={{ width: "75%", height: "75%", margin: "20px"}} src={calendar} />
        </ContentAlignVertical>
        
        <ContentAlignVertical>
        <Heading4>Appointment time</Heading4>
        <img style={{ width: "75%", height: "75%", margin: "20px"}} src={times} /> 
        </ContentAlignVertical>
        </ContentAlignStart>
        </NoStyleWrapper2>

        <NoStyleWrapper2>
        <RemMarginVertical><Heading4>Name </Heading4> </RemMarginVertical>
        <ContentAlignStart>
        <ContentAlignVertical>
        <TextInput style={{ width: "288px", marginRight: "7px"}} placeholder="first name" size="2px" color={palette.primary} type="text"  />
        <SmallText>First name </SmallText> 
        </ContentAlignVertical>
        <ContentAlignVertical>
        <RemMarginHorizontal>
        <TextInput placeholder="last name" size="2px" color={palette.primary} type="text" width="288px" />
        <SmallText>Last name </SmallText>
        </RemMarginHorizontal>
        </ContentAlignVertical>
        </ContentAlignStart>
        </NoStyleWrapper2>

        
        <NoStyleWrapper2>
        <Heading4> Date of birth</Heading4>
        <ContentAlignStart>
        < ContentAlignVertical>
        <StyledSelect style={{ width: "192px", height: "100%"}}>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">5</option>
            </StyledSelect>
            <RemMarginHorizontal><SmallText>Day</SmallText></RemMarginHorizontal>
            </ContentAlignVertical>   
            <ContentAlignVertical>
        <StyledSelect style={{ width: "192px", height: "100%"}}>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">d</option>
            </StyledSelect>
            <RemMarginHorizontal><SmallText>Month</SmallText></RemMarginHorizontal>
            </ContentAlignVertical>
            <ContentAlignVertical>
        <StyledSelect style={{ width: "192px", height: "100%"}}>

                <option value="0">2000</option>
                <option value="0">1999</option>
                <option value="0">1998</option>
                <option value="0">1997</option>
                <option value="0">1996</option>
            </StyledSelect>
            <RemMarginHorizontal><SmallText>Year</SmallText></RemMarginHorizontal>
            </ContentAlignVertical>
            </ContentAlignStart>
            </NoStyleWrapper2>
            

            <NoStyleWrapper2>
                <ContentAlignStart>
                <NoStyleWrapper3>
                <Heading4>Gender</Heading4>
                <StyledSelect style={{ width: "85%", height: "100%"}}>
                <option value="0">male</option>
                <option value="0">female</option>
                <option value="0">other</option>
                <option value="0">prefer not to say</option>
            </StyledSelect>
            </NoStyleWrapper3>
            <NoStyleWrapper3>
                <Heading4>Phone number</Heading4>
                <RemMarginVertical><TextInput placeholder="phone number" size="2px" color={palette.primary} type="number" width="200px" /></RemMarginVertical>
                </NoStyleWrapper3>
                <NoStyleWrapper3>
                <Heading4>Email</Heading4>        
                <RemMarginVertical><TextInput placeholder="email" size="2px" color={palette.primary} type="text" width="140px"/></RemMarginVertical>
                </NoStyleWrapper3>
                </ContentAlignStart>
            </NoStyleWrapper2>

    
       
        <NoStyleWrapper3>
           <RemMarginVertical> <Heading4>Address</Heading4></RemMarginVertical>
                <ContentAlignStart>
        <ContentAlignVertical>       
        <TextInput placeholder="street address" size="2px" color={palette.primary} type="text" width="607px" />
        <SmallText>Street address</SmallText>
        <RemMarginVertical></RemMarginVertical>
        </ContentAlignVertical> 
        </ContentAlignStart>
        <ContentAlignStart>
        <ContentAlignVertical>  
        <TextInput placeholder="city" size="2px" color={palette.primary} type="text" width="350px"/>
        <SmallText>City</SmallText>
        </ContentAlignVertical>  

        <ContentAlignVertical>
        <RemMarginHorizontal><TextInput placeholder="postal code" size="2px" color={palette.primary} type="text" width="225px" /></RemMarginHorizontal>
        <RemMarginHorizontal><SmallText>Postal code</SmallText></RemMarginHorizontal>
        </ContentAlignVertical>
        </ContentAlignStart>
        </NoStyleWrapper3>

<NoStyleWrapper2>

<NoStyleWrapper3>
    <RemMarginVertical></RemMarginVertical>
        <Heading4>Send confirmation</Heading4>
        <p>To email</p>
        <Switch
            toggled={isToggled}
            onChange={e => setIsToggled(e.target.checked)}
            id="test-switch"
            color={palette.primary}
        />
        <p>To phone number</p>
        <Switch
            toggled={isToggled}
            onChange={e => setIsToggled(e.target.checked)}
            id="test-switch"
            color={palette.primary}
        />
       

        </NoStyleWrapper3>

        <NoStyleWrapper2>
        <ButtonLink href="/final">Book appointment</ButtonLink>
        </NoStyleWrapper2>
</NoStyleWrapper2>      
        </>
    );
};

export default Appointment;
