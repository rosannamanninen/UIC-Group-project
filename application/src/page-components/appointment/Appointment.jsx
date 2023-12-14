import { ButtonLink } from "../../components/ButtonLink";
import { Heading2, Heading4} from "../../components/shared-font-styles.js";
import { ContentAlignStart, NoStyleWrapper, SmallMargin } from "../../components/divs.js";
import {TextInput} from '../../components/TextInput'
import { palette } from '../../theme';
import { StyledSelect } from "../../components/form-styles";
import {Switch} from '../../components/Switch'
import React, { useState } from "react";



const Appointment = () => {
    const [isToggled, setIsToggled] = useState(false)

    return (


        

        <>
        <Heading2>Book an appointment</Heading2>
        <NoStyleWrapper>
      
        <SmallMargin><Heading4>Practitioner</Heading4></SmallMargin>
        <StyledSelect>
                <option value="0">Juha Aalto</option>
                <option value="0">Anna Niemi</option>
                <option value="0">Emma Virtanen</option>
         </StyledSelect>
        </NoStyleWrapper>



        <NoStyleWrapper>
        <SmallMargin><Heading4>Name </Heading4>  </SmallMargin>
        <ContentAlignStart>
      
        <SmallMargin><p>First name </p>  </SmallMargin>
        <TextInput placeholder="first name" size="2px" color={palette.primary} type="number" />
        <SmallMargin><p>Last name   </p></SmallMargin>
        <TextInput placeholder="last name" size="2px" color={palette.primary} type="number" />
        </ContentAlignStart>
        </NoStyleWrapper>

        
        <NoStyleWrapper>
        <SmallMargin><Heading4> Date of birth</Heading4></SmallMargin>
        <ContentAlignStart>
        <SmallMargin><p>Day</p></SmallMargin>
        <StyledSelect>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">5</option>
            </StyledSelect>
            <SmallMargin><p>Month</p></SmallMargin>
        <StyledSelect>
                <option value="0">1</option>
                <option value="0">2</option>
                <option value="0">3</option>
                <option value="0">4</option>
                <option value="0">d</option>
            </StyledSelect>
            <SmallMargin>  <p>Year</p></SmallMargin>
        <StyledSelect>

                <option value="0">2000</option>
                <option value="0">1999</option>
                <option value="0">1998</option>
                <option value="0">1997</option>
                <option value="0">1996</option>
            </StyledSelect>
            </ContentAlignStart>
            </NoStyleWrapper>
            

            <NoStyleWrapper>
                <ContentAlignStart>
                <NoStyleWrapper>
                <SmallMargin><Heading4>Gender</Heading4></SmallMargin>
                <StyledSelect>
                <option value="0">Man</option>
                <option value="0">Female</option>
                <option value="0">Other</option>
                <option value="0">Prefer not to say</option>
            </StyledSelect>
            </NoStyleWrapper>
            <NoStyleWrapper>
                <SmallMargin><Heading4>Phone number</Heading4></SmallMargin>
                <TextInput placeholder="phone number" size="2px" color={palette.primary} type="number" />
                </NoStyleWrapper>
                <NoStyleWrapper>
                <SmallMargin><Heading4>Email</Heading4></SmallMargin>           
        <TextInput placeholder="email" size="2px" color={palette.primary} type="number" />
        </NoStyleWrapper>
                </ContentAlignStart>
            </NoStyleWrapper>

        

         
             
     
       
        <NoStyleWrapper>
            <Heading4>Address</Heading4>
                <ContentAlignStart>
                <SmallMargin> <p>Street address</p></SmallMargin>
        <TextInput placeholder="street address" size="2px" color={palette.primary} type="number" />

        <SmallMargin><p>City</p></SmallMargin>
        <TextInput placeholder="city" size="2px" color={palette.primary} type="number" />

        <SmallMargin><p>Postal code</p></SmallMargin>
        <TextInput placeholder="postal code" size="2px" color={palette.primary} type="number" />
        </ContentAlignStart>
        </NoStyleWrapper>

<NoStyleWrapper>
<ContentAlignStart></ContentAlignStart>
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
</NoStyleWrapper>





 <ButtonLink href="/final">Book appointment</ButtonLink>

      
        </>
    );
};

export default Appointment;
