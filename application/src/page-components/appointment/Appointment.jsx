import { ButtonLink } from "../../components/ButtonLink";
import { Heading2, Heading4, SmallText} from "../../components/shared-font-styles.js";
import { ContentAlignStart, NoStyleWrapper, SmallMargin, NoStyleWrapper2, ContentAlignVertical } from "../../components/divs.js";
import {TextInput} from '../../components/TextInput'
import { palette } from '../../theme';
import { StyledSelect } from "../../components/form-styles";
import {Switch} from '../../components/Switch'
import React, { useState } from "react";
import calendar from '../../assets/calendar.png'
import times from '../../assets/times.png'



const Appointment = () => {
    const [isToggled, setIsToggled] = useState(false)

    return (


        

        <>
        <Heading2>Book an appointment</Heading2>
        <NoStyleWrapper2>
      
        <Heading4>Practitioner</Heading4>
        <StyledSelect>
                <option value="0">Juha Aalto</option>
                <option value="0">Anna Niemi</option>
                <option value="0">Emma Virtanen</option>
         </StyledSelect>
        </NoStyleWrapper2>
        
        <NoStyleWrapper2>
        
        <ContentAlignStart>
        <ContentAlignVertical>
        <Heading4>Appointment date</Heading4>
        <img style={{ width: "60%", height: "60%", margin: "20px"}} src={calendar} />
        </ContentAlignVertical>
        
        <ContentAlignVertical>
        <Heading4>Appointment time</Heading4>
        <img style={{ width: "60%", height: "60%", margin: "20px"}} src={times} /> 
        </ContentAlignVertical>
        </ContentAlignStart>
        </NoStyleWrapper2>

        <NoStyleWrapper2>
        <Heading4>Name </Heading4> 
        <ContentAlignStart>
        <ContentAlignVertical>
        <TextInput placeholder="first name" size="2px" color={palette.primary} type="number" />
        <SmallText>First name </SmallText> 
        </ContentAlignVertical>
        <ContentAlignVertical>
        <TextInput placeholder="last name" size="2px" color={palette.primary} type="number" />
        <SmallText>Last name </SmallText>
        </ContentAlignVertical>
        </ContentAlignStart>
        </NoStyleWrapper2>

        
        <NoStyleWrapper2>
        <Heading4> Date of birth</Heading4>
        <ContentAlignStart>
        < ContentAlignVertical>
        <StyledSelect>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">5</option>
            </StyledSelect>
            <SmallText>Day</SmallText>
            </ContentAlignVertical>   
            <ContentAlignVertical>
        <StyledSelect>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">d</option>
            </StyledSelect>
            <SmallText>Month</SmallText>
            </ContentAlignVertical>
            <ContentAlignVertical>
        <StyledSelect>

                <option value="0">2000</option>
                <option value="0">1999</option>
                <option value="0">1998</option>
                <option value="0">1997</option>
                <option value="0">1996</option>
            </StyledSelect>
            <SmallText>Year</SmallText>
            </ContentAlignVertical>
            </ContentAlignStart>
            </NoStyleWrapper2>
            

            <NoStyleWrapper2>
                <ContentAlignStart>
                <NoStyleWrapper2>
                <Heading4>Gender</Heading4>
                <StyledSelect>
                <option value="0">Man</option>
                <option value="0">Female</option>
                <option value="0">Other</option>
                <option value="0">Prefer not to say</option>
            </StyledSelect>
            </NoStyleWrapper2>
            <NoStyleWrapper2>
                <Heading4>Phone number</Heading4>
                <TextInput placeholder="phone number" size="2px" color={palette.primary} type="number" />
                </NoStyleWrapper2>
                <NoStyleWrapper2>
                <Heading4>Email</Heading4>        
        <TextInput placeholder="email" size="2px" color={palette.primary} type="number" />
        </NoStyleWrapper2>
                </ContentAlignStart>
            </NoStyleWrapper2>

        

         
             
     
       
        <NoStyleWrapper2>
            <Heading4>Address</Heading4>
                <ContentAlignStart>
        <ContentAlignVertical>       
        <TextInput placeholder="street address" size="2px" color={palette.primary} type="number" />
        <SmallText>Street address</SmallText>
        </ContentAlignVertical> 

        <ContentAlignVertical>  
        <TextInput placeholder="city" size="2px" color={palette.primary} type="number" />
        <SmallText>City</SmallText>
        </ContentAlignVertical>  

        <ContentAlignVertical>
        <TextInput placeholder="postal code" size="2px" color={palette.primary} type="number" />
        <SmallText>Postal code</SmallText>
        </ContentAlignVertical>
        </ContentAlignStart>
        </NoStyleWrapper2>

<NoStyleWrapper2>
<ContentAlignStart></ContentAlignStart>
<NoStyleWrapper2>
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
        </NoStyleWrapper2>
        <ButtonLink href="/final">Book appointment</ButtonLink>
</NoStyleWrapper2>





 

      
        </>
    );
};

export default Appointment;
