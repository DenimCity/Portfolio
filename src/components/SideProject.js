import React, {Component} from 'react'
import styled from 'styled-components'
export default class SideProject extends Component {
  render() {
    const project = this.props
    return (
      <Container>
        <ImageContainer>
          <img width="400" src={project.photo} alt=""/>
        </ImageContainer>
        <DescriptionContainer>
          <h1>{project.name}</h1>
          <h3>Description</h3>
          <h3>{project.description}</h3>
          <h3>By: {project.author}</h3>
          <a href={project.link} target="blank">
          <button>Let's Play</button>
          </a>
        </DescriptionContainer>
      </Container>
    )
  }
}
const Container = styled.div `
display:flex;
flex-wrap:wrap;
justify-content: center;
padding: 3vh 2vh;
@media (max-width: 669px) {
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  }
`

const ImageContainer = styled.div `
margin:auto;
img {
  width:400px;
  border-radius:20px;
  @media (max-width:669px){
width:300px;
  }
}

`

const DescriptionContainer = styled.div`
text-align:center;
h1{
  text-decoration: underline;
}

`