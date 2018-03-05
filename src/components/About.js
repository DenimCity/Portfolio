import React, {Component} from 'react'
import styled from 'styled-components'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Wrapper>
          <Motto>
            “You've gotta dance like there's nobody watching, Love like you'll never be
            hurt, Sing like there's nobody listening, And live like it's heaven on earth.”
            <span>― William W. Purkey</span>
          </Motto>
        </Wrapper>
        <Wrapper>
          <AboutMe>
            Greetings, I'm health professional that has transitioned into a software
            development. I'm a South Floridian living in the beautiful Atlanta, Georgia. My
            hobbies are photography, blogging, outdoor sport activites, and traveling.
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
justify-content:center;
`

const Motto = styled.p `
justify-content:center;
font-family: 'Rouge Script', cursive;
span {
  color:goldenrod;
}

@media (max-width: 669px) {
  display:none;
  }
`

const AboutMe = styled.p `
font-family: 'Bilbo Swash Caps', cursive;
text-align: center; 
display: flex;
align-items: center;
font-size:2rem;
@media (max-width: 669px) {
  font-size:25px;
  }
`

const Wrapper = styled.div`
display:flex;
justify-content:center;
align-content:center;

`