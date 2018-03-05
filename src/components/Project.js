import React, {Component} from 'react'
import styled from 'styled-components'

export default class Project extends Component {
  render() {
    const project = this.props
    return (
      <ProjectContainer>
        <PhotoContainer>
          <img src={project.photo} alt=""/>
        </PhotoContainer>
        <DescriptionContainer>
          <div>Project: {project.name}</div>
          <hr/>
          <h4>Dependencies Used</h4>
          <div>{project.description}</div>
          <a href={project.version1}target="blank">View App</a>
          <a href={project.github}target="blank">Code Sample</a>
        </DescriptionContainer>
      </ProjectContainer>
    )
  }
}

const ProjectContainer = styled.div `
display:flex;

`
const PhotoContainer = styled.div `
max-width:150px;
img {
  width:100%;
  height:100%;
}
`
const DescriptionContainer = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;

a {
  color:goldenrod;
  text-decoration:none;
}

`