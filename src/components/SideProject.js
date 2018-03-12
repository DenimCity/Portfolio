import React, {Component} from 'react'
import styled from 'styled-components'
export default class SideProject extends Component {
  render() {
    const project = this.props
    return (
      <div>
        <Title>
          <h1>{project.name}</h1>
        </Title>
        <Container>
          <br/>
          <ImageContainer>
            <img width="400" src={project.photo} alt=""/>
          </ImageContainer>
          <DescriptionContainer>
            <h3>{project.description}</h3>
            <h3>By: {project.author}</h3>
            <a href={project.link} target="blank">
              Let's Play
              <br/>
            </a>
          </DescriptionContainer>
        </Container>
      </div>
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
width:22vw;
@media (max-width:669px){
width:60vw;
  }
img {
  width:100%;
  border-radius:20px;

}

`

const DescriptionContainer = styled.div `

display:flex;
justify-content:center;
flex-direction:column;
margin-bottom: 6vh;
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
const Title = styled.div `
display:flex;
justify-content:center;
h1 {
  font-size: 2vh;
  @media (max-width:669px){
font-size:2rem;
  }
}

`