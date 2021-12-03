import { useState } from 'react'
import Project from './Project'
import { Jumbotron, Container, Row} from 'react-bootstrap';


const Projects = () => {

    const [projects, setProjects] = useState([
        {
          id: 1,
          title: 'Food U Grab',
          desc: 'An Online food ordering service that allows users to Order food from a restaurant of choice',
          link: 'https://satish-foodugrab.herokuapp.com/',
          img: 'FoodUGrab.png',
          github: 'https://github.com/satishiyer31/FoodUGrab'
        },
        {
          id: 5,
          title: 'Book Search',
          desc: 'A React application that used Google APIs to search for books. Uses MERN stack with GraphQL',
          link: '',
          img: 'BookSearch.png',
          github: 'https://github.com/satishiyer31/BookSearch'
        },
        {
          id: 6,
          title: 'Furever Home (In progress)',
          desc: 'A React application that allows a user to search for rescue animals and apply for adoption',
          link: '',
          img: 'FoodUGrab.png',
          github: ''
        },
        {
          id: 2,
          title: 'Research Stocks Now',
          desc: 'A tool that allows users to research a stock, add to their list and view more details about the stock.',
          link: 'https://satishiyer31.github.io/weatherdashboard/index.html',
          img: 'RSN.png',
          github: 'https://github.com/satishiyer31/RSN-Financial'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          desc: 'Weather Dashboard that allows a user to view current weather and weather forecast for any city.',
          link: 'https://satishiyer31.github.io/weatherdashboard/index.html',
          img: 'Weather.png',
          github: 'https://github.com/satishiyer31/weatherdashboard'
        },
        {
          id: 4,
          title: 'Day Planner',
          desc: 'Allows a user to maintain a day planner for each hourly block. Blocks are color coded to show past and future meetings',
          link: 'https://satishiyer31.github.io/dayplanner/Develop/index.html',
          img: 'DayPlanner.png',
          github: 'https://github.com/satishiyer31/dayplanner'
        },
      
      
      ])
    return (
        

      <Container fluid ="md">
        <Row className ="my-3 mx-3">
        <h2>
          {projects.length
            ? `Viewing ${projects.length} projects:`
            : 'Projects Coming Soon!'}
        </h2>
        
          {projects.map((project) => {
            return (

              <Project key={project.id} project={project}/>
              
            );
          })}
        </Row>
        </Container>
    )
}

export default Projects 