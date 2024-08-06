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
			<section className="contactFormSection">
				<div className="contactForm">
					<h1>Contact Us</h1>
					<p>
						Ready to take it to the next level? Let's talk about
						your project or idea and find out how we can help your
						business grow. If you are looking for unique digital
						experience that's relatable to your users, drop us a
						line.
					</p>
					<form onSubmit={handleSubmit}>
						<div className="formGroup">
							<label htmlFor="contactName">
								Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
							</label>
                            {errors.name && <span className="error">{errors.name}</span>}
						</div>
						<div className="formGroup">
							<label htmlFor="contactEmail">
								Email:{" "}
								<input type="email" name="email" value={formData.email} onChange={handleChange} required />
							</label>
                            {errors.email && <span className="error">{errors.email}</span>}
						</div>
						<div className="formGroup">
							<label htmlFor="contactPhone">
								Phone:{" "}
								<input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
							</label>
                            {errors.phone && <span className="error">{errors.phone}</span>}
						</div>
						<div className="formGroup">
							<label htmlFor="contactMessage">
								Message:{" "}
								<textarea type="text" name="message" value={formData.message} onChange={handleChange} required />
							</label>
                            {errors.message && <span className="error">{errors.message}</span>}
						</div>
						<Button
							text="SUBMIT"
							type="submit"
							color="white"
							backgroundColor="#e88069"
						></Button>
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
