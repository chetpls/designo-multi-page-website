import { useState, useEffect } from "react";
import projectsData from "../data/projects.json";
import servicesData from "../data/services.json";
import { useParams } from "react-router-dom";
import Project from "../components/Project";
import CallToAction from "../components/CallToAction";
import OtherServiceCard from "../components/OtherServiceCard";

function Service() {
	const [service, setService] = useState(null);
	const [projects, setProjects] = useState(null);
	const { slug } = useParams();

	useEffect(() => {
		getService(slug);
	}, [slug]);

	const getService = (slug) => {
		const foundService = servicesData.find(
			(service) => service.slug === slug
		);
		if (foundService) {
			setService(foundService);

			const relatedProjects = projectsData.filter(
				(project) => project.service_id === foundService.id
			);
			setProjects(relatedProjects);
		}
	};

	return (
		<main className="serviceMain">
			<section id="serviceHeaderSection">
				<div className="serviceHeaderContainer"  
				  >
					{service ? (
						<>
							<h1 className="serviceName">{service.name}</h1>
							<p className="serviceIntro">{service.intro_text}</p>
						</>
					) : (
						<p>Loading service details...</p>
					)}
				</div>
			</section>
			<section id ="serviceProjectsSection">
				<div className="serviceProjectsContainer">
					<div className="serviceProjectsList">
						{projects ? (
							projects.map((project) => (
								<Project key={project.name}
									service={service.slug}
									project={project}
								/>
							))
						) : (
							<p>Loading projects...</p>
						)}
					</div>
				</div>
			</section>
			<section id="otherServicesSection">
            <div className="servicesContainer">
                    {servicesData.filter((s)=>s.slug !==slug).map((service) => (
                        <OtherServiceCard  key={service.id} service={service} />
                    ))}
                </div>
            </section>
			<CallToAction />
		</main>
	);
}

export default Service;
