import { AlignSelf } from "../../components/divs";
import { ProgressIndicator } from "../../components/ProgressIndicator";
const Final = () => {
    return (
        <>
        <AlignSelf> <a href="/appointment">{"< Back"}</a></AlignSelf> 
        <ProgressIndicator currentStep={5}/>
        <p>Final page, thanx for booking the appointment etc. :D</p>
        </>
        
    );
};

export default Final;