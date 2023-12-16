import styled from "styled-components";
import { palette } from "../theme";
import { Bodytext } from "./shared-font-styles";


const InfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1.5rem;
    background: ${props => props.color.light};
    border-radius: 1rem;
    width: 700px;
    margin: 1.8rem 0rem;
    border: 1.5px solid ${props => props.color.dark};

`

export const ButtonCircle = styled.button`
  background: transparent;
  height: 20px;
  width: 20px;
  color: ${palette.error.main};
  border: none;
  font-size: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid ${palette.error.main};
  border-radius: 50%;
  padding: 10px;
  margin: 10px
`;

export const InfoBox = ({color, children}) => {
    return(
        <InfoWrapper color={color}>
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            textAlign: 'start',
            alignItems: 'center',
            maxWidth: '500px'
        }}>
    
        <ButtonCircle color={color}>i</ButtonCircle>
        <Bodytext>{children} </Bodytext>
    
    </div>
    </InfoWrapper>
    )
}