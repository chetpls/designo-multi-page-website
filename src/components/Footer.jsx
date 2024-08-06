import Logo from "../assets/shared/desktop/logo-light.png";
import { NavLink } from "react-router-dom";
import FacebookIcon from "../assets/shared/desktop/icon-facebook.svg";
import InstagramIcon from "../assets/shared/desktop/icon-instagram.svg";
import YoutubeIcon from "../assets/shared/desktop/icon-youtube.svg";
import PinterestIcon from "../assets/shared/desktop/icon-pinterest.svg";
import TwitterIcon from "../assets/shared/desktop/icon-twitter.svg";

function Footer() {
	return (
		<footer>
			<nav>
				<div className="footerLogo">
					<NavLink to="/">
						{" "}
						<img src={Logo} alt="logo" />
					</NavLink>
				</div>
				<div className="navLinks">
					<NavLink className="navLink" to="/about">
						OUR COMPANY
					</NavLink>
					<NavLink className="navLink" to="/locations">
						LOCATIONS
					</NavLink>
					<NavLink className="navLink" to="/contact">
						CONTACT
					</NavLink>
				</div>
			</nav>
			<div className="footerDetails">
				<div className="footerAddress">
					<h4>Designo central Office</h4>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>
				<div className="footerContact">
					<h4>Contact Us &#40;Central Office&#41;</h4>
					<p>3886 Wellington Street</p>
					<p>Toronto, Ontario M9C 3J5</p>
				</div>
				<div className="footerIcons">
					<a href="">
						<img src={FacebookIcon} alt="facebook" />
					</a>
					<a href="">
						<img src={YoutubeIcon} alt="youtube" />
					</a>
					<a href="">
						<img src={TwitterIcon} alt="twitter" />
					</a>
					<a href="">
						<img src={PinterestIcon} alt="pinterest" />
					</a>
					<a href="">
						<img src={InstagramIcon} alt="instagram" />
					</a>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
