import { useNavigate, Link } from "react-router-dom";

import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";


function OtherServiceCard({ service }) {
	// const navigate = useNavigate();

	// const handleViewProjects = (slug) => {
	// 	navigate(`/services/${slug}`);
	// };

	return (
		<Link to={`/services/${service.slug}`}
			className="serviceCard"
			style={{ backgroundImage: `url(/assets/home/desktop/${service.image})`, textTransform:"none" }}
			onClick={() => handleViewProjects(service.slug)}
		>
			<div className="serviceCardContent">
				<h2>{service.name}</h2>
				<p>
					View Projects <img src={RightArrow} alt="right arrow" />
				</p>
			</div>
		</Link>
	);
}

export default OtherServiceCard;
