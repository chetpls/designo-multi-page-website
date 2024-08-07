
import Button from "./Button";
import LocationData from "../data/locations.json";
import { Link } from "react-router-dom";

function OtherLocations() {

	const otherLocationsCard = LocationData.map((location) => (
		<div className="locationCards" key={location.slug}>
			<div className="locationIllustration">
				<img className="illustration" src={`./assets/shared/desktop/${location.image}`} alt={location.slug} />
			</div>
			<div className="locationContent">
				<h3>{location.country}</h3>
				
				<Link to="/locations"><Button
					text={`SEE ${location.country}`}
					backgroundColor="#e88069"
					color="white"
				
				></Button></Link>
			</div>
		</div>
	));

	return <ul className="otherLocationsList">{otherLocationsCard}</ul>;
}

export default OtherLocations;
