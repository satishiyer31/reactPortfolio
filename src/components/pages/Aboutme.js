import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import logo from '../../assets/satish_profile_pic.jpeg'

const Aboutme = () => {
    return (
        <Row style = {{"padding": "10px", "margin": "10px"}}>

            <Col md ={4} style ={{"padding": "10px"}}>
                
                    <img id="profile_pic" src= {logo} alt="Satish Iyer's profile pic"
                        class="img-fluid"/>
               
            </Col>

            <Col md={8}>
                <h2 style ={{"padding-top": "10px"}}>
                    About Me
                </h2>
                <p style = {{  "text-align": "left"}}>
                    Hello, Thank you for visiting my page. I am a Technical Sales Engineer working with Zendesk. I own the technical aspect of any software sales in my patch. I build proof of concepts as well as simple integrations to demonstrate the value of the software. My background includes working on professional services as well as software development. I am passionate about coding and I am currently pursuing a full stack software dev bootcamp with University of Denver. My skills include the following:
                      <br></br>
                      <br></br>
                        <p>
                        Front end: HTMl, CSS, JS, Bootstrap, React.js
                        </p>
                        <p> Databases: Mongo DB, MySQL </p> 
                        <p> Backend: SQL, sequelize.js, Node.js, express.js, Mongoose ODM
                        </p>
                        
                    <br></br>
                    My goal is to be able give life to my ideas by building products that can make life simple. 
                </p>
            </Col>
        </Row>
    )
}

export default Aboutme