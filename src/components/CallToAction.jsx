import { useNavigate } from "react-router-dom";
import Button from "./Button";
function CallToAction(){
    const navigate =useNavigate();
    const handleGetInTouch=() => {
        navigate("/contact");
    }
    return(
        <section id="callToActionSection">
        <div className="callToActionContainer">
            <h1>Let's talk about your project</h1>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <Button id="getInTouchBTN" text="GET IN TOUCH" color="black" backgroundColor="white" onClick={handleGetInTouch}></Button>

        </div>
    </section>
    );
};

export default CallToAction;