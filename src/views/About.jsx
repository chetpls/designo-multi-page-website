import AboutHero from "../assets/about/desktop/image-about-hero.jpg";
import AboutTalent from "../assets/about/desktop/image-world-class-talent.jpg";
import AboutRealDeal from "../assets/about/desktop/image-real-deal.jpg";
import CallToAction from "../components/CallToAction";
import OtherLocations from "../components/OtherLocations";

function About() {
	return (
		<main className="aboutMain">
			<section id="aboutUsSection">
				<div className="aboutContentContainer">
					<div className="aboutUsImage">
						<img src={AboutHero} alt="about hero image" />
					</div>
					<div className="content">
						<h1>About Us</h1>
						<div className="text">
							{" "}
							<p>
								Founded in 2010, we are a creative agency that
								produces lasting results for our clients. We've
								partnered with many startups, corporations, and
								nonprofits alike to craft designs that make real
								impact. We're always looking forward to creating
								brands, products, and digital experiences that
								connect with our clients' audiences.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section id="talentSection">
				<div className="aboutContentContainer">
					<div className="aboutUsImage">
						<img src={AboutTalent} alt="about hero image" />
					</div>
					<div className="content">
						<h1>World-class talent</h1>
						<div className="text">
							<p>
								{" "}
								We are a crew of strategists, problem-solvers, and
								technologists. Every design is thoughtfully crafted
								from concept to launch, ensuring success in its
								given market. We are constantly updating our skills
								in a myriad of platforms.
							</p>
							<p>
								{" "}
								Our team is multi-disciplinary and we are not merely
								interested in form — content and meaning are just as
								important. We give great importance to
								craftsmanship, service, and prompt delivery. Clients
								have always been impressed with our high-quality
								outcomes that encapsulates their brand’s story and
								mission.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section id="otherLocations">
				<OtherLocations />
			</section>
			<section id="realDealSection">
				<div className="aboutContentContainer">
					<div className="aboutUsImage">
						<img src={AboutRealDeal} alt="about hero image" />
					</div>
					<div className="content">
						<h1>The real deal</h1>
						<div className="text">
							<p>
								As strategic partners in our clients’ businesses, we
								are ready to take on any challenge as our own.
								Solving real problems require empathy and
								collaboration, and we strive to bring a fresh
								perspective to every opportunity. We make design and
								technology more accessible and give you tools to
								measure success.
							</p>
							<p>
								We are visual storytellers in appealing and
								captivating ways. By combining business and
								marketing strategies, we inspire audiences to take
								action and drive real results.
							</p>
						</div>
					</div>
				</div>
			</section>
			<CallToAction />
		</main>
	);
}

export default About;
