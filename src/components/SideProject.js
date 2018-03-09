import React, {Component} from 'react'
import styled from 'styled-components'
export default class SideProject extends Component {
  render() {
    const project = this.props
    return (
      <Container>
        <br/>
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
          <br/>
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
  align-items: self-start;
  flex-direction: column-reverse;
  }
`

const ImageContainer = styled.div `
margin:auto;
@media (max-width:669px){

  }
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

a {
  button {
    background-color: goldenrod;
    height: 3vh;
    color: white;
    border-radius: 7px;
    font-size: 2vw;
    cursor: pointer;
    &:hover{
      opacity:0.5;
      color:black;

    }
  }
}

`