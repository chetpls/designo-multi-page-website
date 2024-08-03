import { NavLink } from "react-router-dom";
import Logo from "../assets/shared/desktop/logo-dark.png";
import { useState } from "react";
import IconHamburger from "../assets/shared/mobile/icon-hamburger.svg?react";
import IconClose from "../assets/shared/mobile/icon-close.svg?react";

function Navbar() {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<header className="header">
			<nav>
				<div className="navLogo">
					<NavLink to="/">
						<img src={Logo} alt="logo" />
					</NavLink>
				</div>
				<div className={`navMenu ${isMobileMenuOpen ? "active" : ""}`}>
					<NavLink className="navLink" to="/about">OUR COMPANY</NavLink>
					<NavLink className="navLink" to="/locations">LOCATIONS</NavLink>
					<NavLink className="navLink" to="/contact">CONTACT</NavLink>
				</div>

				<button
					onClick={toggleMobileMenu}
					aria-label="Toggle mobile menu"
					aria-expanded={isMobileMenuOpen}
				>
					<img
						src={isMobileMenuOpen ? IconClose : IconHamburger}
						alt="Toggle menu"
					/>
				</button>
			</nav>
		</header>
	);
}

export default Navbar;
