import { useState } from 'react'
import Project from './Project'

const Projects = () => {

    const [projects, setProjects] = useState([
        {
          id: 1,
          title: 'Food U Grab',
          desc: 'An Online food ordering service that allows users to Order food from a restaurant of choice',
          link: 'https://satish-foodugrab.herokuapp.com/',
          img: 'FoodUGrab.png'
        },
        {
          id: 2,
          title: 'Research Stocks Now',
          desc: 'A tool that allows users to research a stock, add to their list and view more details about the stock.',
          link: 'https://satishiyer31.github.io/weatherdashboard/index.html',
          img: 'RSN.png'
        },
        {
          id: 3,
          title: 'Weather Dashboard',
          desc: 'Weather Dashboard that allows a user to view current weather and weather forecast for any city.',
          link: 'https://satishiyer31.github.io/weatherdashboard/index.html',
          img: 'Weather.png'
        },
        {
          id: 4,
          title: 'Day Planner',
          desc: 'Allows a user to maintain a day planner for each hourly block. Blocks are color coded to show past and future meetings',
          link: 'https://satishiyer31.github.io/dayplanner/Develop/index.html',
          img: 'DayPlanner.png'
        },
      
      
      ])
    return (
        <div className ="row my-3">
            <h2>Here is a list of my projects: </h2>
        
            {
                projects.map((project) => (
                    <Project key={project.id} projects={project}/>
                    // console.log(project.title)
                ))
            }   
        
            
        </div>
    )
}

export default Projects