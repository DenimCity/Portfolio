import React, {Component} from 'react'
import styled from 'styled-components'

export default class About extends Component {
  render() {
    return (
      <Container id="aboutme">
        <Wrapper>
          <Motto>
            “You've gotta dance like there's nobody watching, Love like you'll never be
            hurt, Sing like there's nobody listening, And live like it's heaven on earth.”
            <span>― William W. Purkey</span>
          </Motto>
        </Wrapper>
        <Wrapper>
          <AboutMe>
          Greetings, I am Jean W. Altidor, a software developer with a background in healthcare and photography. 
          I have cultivated my skillsets from healthcare, photography, and application development into having a 
          keen eye for detail that brings the ideas of a client to fruition
          </AboutMe>
        </Wrapper>
        <Wrapper>
          <Motto>
            “I've learned that people will forget what you said, people will forget what you
            did, but people will never forget how you made them feel.”
            <span>― Maya Angelou</span>
          </Motto>
        </Wrapper>
      </Container>
    )
  }
}

const Container = styled.div `
height: 20vh;
background-color:#F7F7F7;
display:flex;
flex:wrap;
text-align:center;
/* justify-content:center; */
@media (max-width: 800px) {
  
  }

`

const Motto = styled.p `
justify-content:center;
font-size:1.5vw;
font-family: 'Rouge Script', cursive;
width:30vw;
span {
  color:goldenrod;
}

@media (max-width: 669px) {
  display:none;
  }
`

const AboutMe = styled.p `
font-family: sans-serif;
text-align: center; 
display: flex;
align-items: center;
font-size:1.7vw;
@media (max-width: 669px) {
  font-size: 5vw;
    margin: auto;
    font-family: serif;
    text-align: center;
  }
`

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-content:center;

`