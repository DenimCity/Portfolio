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
          photo={project.picture}
          deploy={project.version1}/>)
      })
    return (
      <div>
        <TitleContainer>
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

display:grid;
grid-template-columns:50% 50%;
justify-content:center;
@media (max-width: 669px) {
  grid-template-columns:auto;
  }
`


