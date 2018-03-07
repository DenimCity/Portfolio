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
          <div>{project.name}</div>
          <hr/>
          <h4>Dependencies Used</h4>
          <div>{project.description}</div>
          <a href={project.link} target="blank">View App</a>
          <a href={project.github} target="blank">Code Snippet</a>
        </DescriptionContainer>
      </ProjectContainer>
    )
  }
}

const ProjectContainer = styled.div `
display:grid;
grid-template-columns:auto auto;

`
const PhotoContainer = styled.div `
max-width:150px;
img {
  width:100%;
  height:100%;
  @media (max-width: 669px) {
  width:200px;
  }
}
`
const DescriptionContainer = styled.div `
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
@media (max-width: 669px) {
  
  }
a {
  color:blue;
  text-decoration:none;
}

`
