import { Jumbotron, Container, Col, Form, Button, Card, CardColumns } from 'react-bootstrap';

const Project = ({ key, project }) => {
    return (
        

        <Card key={key} style={{ width: '18rem', margin: "10px"}}>
                {/* {project.img? (
                  <Card.Img src={project.image} alt={`The cover for ${project.title}`} variant='top' />
                ) : null} */}
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  {/* <p className='small'>Authors: {book.authors}</p> */}
                  <Card.Text>{project.desc}</Card.Text>
                  <Card.Link href= {project.link}>Deployed Link</Card.Link>
                  <Card.Link href= {project.github}>Github Link</Card.Link>
                </Card.Body>
              </Card>
    )
}

export default Project