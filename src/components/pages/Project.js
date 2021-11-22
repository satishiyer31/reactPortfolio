const Project = ({ project }) => {
    return (
        <div className= "card-mx-auto" style="width: 18em">
            
                <img src={""} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title"> {project.title}</h5>
                    <p className="card-text">{project.desc}</p>
                    <a href={project.link} className="btn btn-primary"> View Application</a>
                </div>
            
        </div>
    )
}

export default Project