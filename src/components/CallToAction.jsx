
import { Link } from "react-router-dom";


import Button from "./Button";
function CallToAction(){

    return(
        <section id="callToActionSection">
        <div className="callToActionContainer">
            <h1>Let's talk about your project</h1>
            <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
            <Link to="/contact"><Button id="getInTouchBTN" text="GET IN TOUCH" color="black" backgroundColor="white" ></Button></Link>

        </div>
    </section>
    );
};

export default CallToAction;