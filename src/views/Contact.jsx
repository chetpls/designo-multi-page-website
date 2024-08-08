import OtherLocations from "../components/OtherLocations";
import Button from "../components/Button";
import { useState } from "react";
function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [errors, setErrors] = useState({});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));

		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: "" }));
		}
	};

	const validateForm = () => {
		let newErrors = {};

		if (!formData.name.trim()) {
			newErrors.name = "Name is required";
		}

		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!formData.email.trim() || !emailRegex.test(formData.email)) {
			newErrors.email = "Valid email is required";
		}

		if (!formData.phone.trim() || formData.phone.length < 10) {
			newErrors.phone = "Valid phone number is required";
		}

		if (!formData.message.trim()) {
			newErrors.message = "Message is required";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		if (validateForm()) {
			alert("Thanks for filling our form");
			setFormData({
				name: "",
				email: "",
				phone: "",
				message: "",
			});
		}
	};
	return (
		<main className="contactMain">
			<section id="contactFormSection">
				<div className="contactFormContainer">
					<div className="contactHeader">
						<h1 className="contactTitle">Contact Us</h1>
						<p className="contactDescription">
							Ready to take it to the next level? Let's talk about
							your project or idea and find out how we can help your
							business grow. If you are looking for unique digital
							experience that's relatable to your users, drop us a
							line.
						</p>
					</div>
					<form className="contactForm" onSubmit={handleSubmit}>
            <div className="formGroup">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name"
                
              />
              {errors.name && <span className="error">{errors.name}</span>}
            </div>
            <div className="formGroup">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                
              />
              {errors.email && <span className="error">{errors.email}</span>}
            </div>
            <div className="formGroup">
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone"
                
              />
              {errors.phone && <span className="error">{errors.phone}</span>}
            </div>
            <div className="formGroup">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message"
                
              />
              {errors.message && <span className="error">{errors.message}</span>}
            </div>
            <Button id="submitBTN"
              text="SUBMIT"
              type="submit"
              color="black"
              backgroundColor="white"
            />
          </form>
				</div>
			</section>
			<section className="otherLocationsSection">
				<OtherLocations />
			</section>
		</main>
	);
}

export default Contact;
