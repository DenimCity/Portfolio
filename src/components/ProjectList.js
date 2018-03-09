import React, {Component} from 'react';
import Project from '../components/Project'
import styled from 'styled-components'
import {TitleContainer} from '../styled_components/basicstyles'

export default class ProjectList extends Component {
  render() {
    const projectList = this
      .props
      .projects
      .map((project, i) => {
        return (<Project
          key={i}
          name={project.name}
          description={project.description}
          purpose={project.purpose}
          github={project.github}
          photo={project.photo}
          link={project.link}/>)
      })
    return (
      <div>
        <TitleContainer id="projects">
          <h2>Recent Projects</h2>
        </TitleContainer>
        <Grid>
          {projectList}
        </Grid>
      </div>
    )
  }
}

const Grid = styled.div `
display:flex;
flex-wrap:wrap;
/* grid-template-columns:54% 37%; */
justify-content:center;
@media (max-width: 669px) {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  }
`


