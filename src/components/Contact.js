import React, {Component} from 'react'
import styled from 'styled-components'
import {TitleContainer} from '../styled_components/basicstyles'
export default class Contact extends Component {
  render() {
    
    return (
      <div id="contact">
        <TitleContainer>
          <h2>Contact</h2>
        </TitleContainer>
        <Grid>
          <div>
            <h1>jeanwaltidor@gmail.com</h1>

          </div>
          <div>
            <a href='https://i.imgur.com/NtpQd15.png' download>
            <button>Resume</button>
            </a>
          </div>
          <a href="https://github.com/DenimCity" target="blank"><i class="fab fa-github-square"></i></a>
        <a href="https://medium.com/@JW_Altidor"target="blank"><i class="fab fa-medium-m"></i></a>
        <a href="https://twitter.com/JW_Altidor"target="blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.linkedin.com/in/jeanaltidor" target="blank"><i class="fab fa-linkedin-in"></i></a>  
        </Grid>
      </div>
    )
  }
}

const Grid = styled.div `

display:grid;
grid-template-columns:50% 50%;
justify-content:center;
align-content:center;
@media (max-width: 669px) {
  grid-template-columns:auto;
  }
`
