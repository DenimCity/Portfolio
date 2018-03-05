import React, {Component} from 'react'
import styled from 'styled-components'
import {TitleContainer} from '../styled_components/basicstyles'
export default class Contact extends Component {
  render() {
    
    return (
      <div>
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
