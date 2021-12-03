import biodata from '../../assets/ResumeSatishIyer.pdf'

const Resume = () => {
    return (
      <div >
        <h2 style={{ "padding-top": "10px" }}>Resume</h2>
        <h6> My Skills include:</h6>
        <p>Front end: HTMl, CSS, JS, Bootstrap, React.js</p>
        <p> Databases: Mongo DB, MySQL </p>
        <p> Backend: SQL, sequelize.js, Node.js, express.js, Mongoose ODM</p>
        <a href= {biodata} download> Resume</a>
 

      </div>
    );
}

export default Resume