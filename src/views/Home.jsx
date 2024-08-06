import HeroImage from "../assets/home/desktop/image-hero-phone.png"
import OtherServiceCard from "../components/OtherServiceCard";
import servicesData from "../data/services.json"
import IllustrationFriendly from "../assets/home/desktop/illustration-friendly.svg"
import IllustrationPassionate from "../assets/home/desktop/illustration-passionate.svg"
import IllustrationResourceful from "../assets/home/desktop/illustration-resourceful.svg"
import CallToAction from "../components/CallToAction";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleLearnMore =() =>{
        navigate("/about")
    }
    return(
        <main className="home">
            <section id="heroSection">
                <div className="heroContainer">
                <h2>Award-winning custom designs and digital branding solutions</h2>
                <p>With over 10 years in the industry, we are eperienced in creating fully responsive websites, app design, and engaging brand experiences. Find out more about our services.</p>
                <Button text="LEARN MORE" color="black" backgroundColor="white" onClick={handleLearnMore}></Button>
                <div className="heroImage">
                    <img src={HeroImage} alt="hero image" />
                </div>
                </div>
            </section>
            <section id="servicesSection">
                <div className="servicesContainer">
                    <picture></picture>
                    {servicesData.map((service) => (
                        <OtherServiceCard key={service.id} service={service} />
                    ))}
                </div>
            </section>
            <section id="benefitsSection">
                <div className="benefitsContainer">
                    <div className="benfitCard">
                        <div className="benefitIllustration">
                        <img src={IllustrationPassionate} className="illustration" alt="illustration passionate" />
                        </div>
                        <div className="benefitContent">
                            <h2>PASSIONATE</h2>
                            <p>Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and tehcnology into exciting new solutions.</p>
                        </div>
                    </div>
                    <div className="benfitCard">
                        <div className="benefitIllustration">
                        <img src={IllustrationResourceful} className="illustration" alt="illustration resourceful" />
                        </div>
                        <div className="benefitContent">
                            <h2>RESOURCEFUL</h2>
                            <p>Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It gurantees superior results that fulfill our clients' needs.</p>
                        </div>
                    </div>
                    <div className="benfitCard">
                        <div className="benefitIllustration">
                        <img src={IllustrationFriendly} className="illustration" alt="illustration friendly" />
                        </div>
                        <div className="benefitContent">
                            <h2>FRIENDLY</h2>
                            <p>We are a group of enthusastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.</p>
                        </div>
                    </div>
                </div>
            </section>
            <CallToAction />
            {/* <section id="callToActionSection">
                <div className="callToActionContainer">
                    <h1>Let's talk about your project</h1>
                    <p>Ready to take it to the next level? Contact us today and find out how our expertise can help your business grow.</p>
                    <button id="getInTouchBTN">GET IN TOUCH</button>
                </div>
            </section> */}
        </main>
    )

}

export default Home;