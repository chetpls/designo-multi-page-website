function Project({service, project}) {
    return (
        <div className="projectCard">
            <div className="projectImage">
                <img src={`../assets/${service}/desktop/${project.image_path}`} alt={`${project.name} image`} />
            </div>
                <div className="projectContent">
                    <h2 className="projectName">{project.name}</h2>
                    <p className="projectDescription">{project.content}</p>
                </div>
        </div>

    );
}

export default Project;