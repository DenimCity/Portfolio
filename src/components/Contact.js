import React, {Component} from 'react'
import styled from 'styled-components'
import {TitleContainer} from '../styled_components/basicstyles'
import EnvelopeIcon from './images/002-mail.png'
import GitHubIcon from './images/001-github-draw-logo.png'
import TwitterIcon from './images/001-twitter.png'
import Medium from './images/003-newspaper.png'
import LinkedIn from './images/004-linkedin.png'
import UpArrow from './images/001-direction.png'
export default class Contact extends Component {
  render() {

    return (
      <ContactContainer id="contact">
        <TitleContainer>
          <h2>Contact</h2>
        </TitleContainer>
        <Grid>
          <a href="mailto:jeanwaltidor@gmail.com"><img src={EnvelopeIcon} alt=""/></a>
          <a href="https://github.com/DenimCity" target="blank">
            <img src={GitHubIcon} alt=""/>
          </a>
          <a href="https://medium.com/@JW_Altidor" target="blank">
            <img src={Medium} alt=""/>
          </a>
          <a href="https://twitter.com/JW_Altidor" target="blank">
            <img src={TwitterIcon} alt=""/>
          </a>
          <a href="https://www.linkedin.com/in/jeanaltidor" target="blank">
            <img src={LinkedIn} alt=""/>
          </a>
        </Grid>
        <ArrowContainer>
          <div>
            <a href="#top"><img src={UpArrow} alt=""/></a>
          </div>

         
            <p>TOP</p>
          

        </ArrowContainer>

      </ContactContainer>
    )
  }
}

const Grid = styled.div `

display:flex;
flex-wrap:wrap;

justify-content:center;
font-size: 3vw;

a {
  padding-right: 4vw;
  padding-bottom:4vh;
  img{
    width:10vw;
    @media (max-width: 669px) {
  width: 15vw;
  }
  }
}

`
const ContactContainer = styled.div `
background-color:white;
`

const ArrowContainer = styled.div `
display:flex;
justify-content:center;
flex-direction:column;
align-items: center;
a {
  img{
    width:7vw;
    @media (max-width: 669px) {
  width:9vw;
  }
  }
}
`
