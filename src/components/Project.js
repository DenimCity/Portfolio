import React, {Component} from 'react'
import styled from 'styled-components'

export default class Project extends Component {
  render() {
    const project = this.props
    return (
      <ProjectContainer >
        <PhotoContainer>
          <img src={project.photo} alt=""/>
        </PhotoContainer>
        <DescriptionContainer>
          <h2>{project.name}</h2>

          <h3>Tech Stack</h3>
          <div>{project.description}</div>
          <br/>
          <a href={project.link} target="blank">
            View App
          </a>
          <br/>
          <a href={project.github} target="blank">
            Code Snippet
          </a>
        </DescriptionContainer>
      </ProjectContainer>
    )
  }
}

const ProjectContainer = styled.div `
display:grid;
grid-template-columns:50% auto;

`
const PhotoContainer = styled.div `
max-width:15vw;
img {
  width:100%;
  height:100%;
  @media (max-width: 669px) {
    width: 50vw;
    height: 39vh;
  }
}
`
const DescriptionContainer = styled.div `
  
    display: flex;
    flex-direction: column;
    align-items: center;
@media (max-width: 669px) {

  }
a {

}

h2 {
  text-align: center;
  text-decoration:underline;
}

`
