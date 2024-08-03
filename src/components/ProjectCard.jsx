import { useNavigate } from "react-router-dom";

import RightArrow from "../assets/shared/desktop/icon-right-arrow.svg";


function ServiceCard({ service }) {
	const navigate = useNavigate();

	const handleViewProjects = (slug) => {
		navigate(`/services/${slug}`);
	};

	return (
		<div
			className="serviceCard"
            style={{ backgroundImage: `url(../../public/assets/home/mobile/${service.image})` }}
			onClick={() => handleViewProjects(service.slug)}
		>
			<div className="projectCardContent">
				<h2>{service.name}</h2>
				<p>
					View Projects <img src={RightArrow} alt="right arrow" />
				</p>
			</div>
		</div>
	);
}

export default ServiceCard;
