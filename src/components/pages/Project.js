const Project = ({ projects }) => {
    return (
        <div className= "card mx-auto">
            
                <img src={""} className="card-img-top"/>
                <div className="card-body">
                    <h5 className="card-title"> {projects.title}</h5>
                    <p className="card-text">{projects.desc}</p>
                    <a href={projects.link} className="btn btn-primary"> View Application</a>
                </div>
            
        </div>
    )
}

export default Project