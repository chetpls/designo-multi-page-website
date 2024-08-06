import { useNavigate } from "react-router-dom";
import Button from "./Button";
import LocationData from "../data/locations.json";

function OtherLocations() {
	const navigate = useNavigate();
	const handleViewLocations = () => {
		navigate("/locations");
	};

	const otherLocationsCard = LocationData.map((location) => (
		<div className="locationCards" key={location.slug}>
			<div className="locationIllustration">
				<img className="illustration" src={`./assets/shared/desktop/${location.image}`} alt={location.slug} />
			</div>
			<div className="locationContent">
				<h3>{location.country}</h3>
				<Button
					text={`SEE ${location.country}`}
					backgroundColor="#e88069"
					color="white"
					onClick={() => handleViewLocations}
				></Button>
			</div>
		</div>
	));

	return <ul className="otherLocationsList">{otherLocationsCard}</ul>;
}

export default OtherLocations;
