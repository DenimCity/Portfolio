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
          
            <a href="mailto:jeanwaltidor@gmail.com">Email</a>
            <a href="https://github.com/DenimCity" target="blank">
             GitHub
            </a>
            <a href="https://medium.com/@JW_Altidor" target="blank">
              Blog
            </a>
            <a href="https://twitter.com/JW_Altidor" target="blank">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/jeanaltidor" target="blank">
              LinkedIn
            </a>


          
        </Grid>
            <a href="#top">To The Top</a>
         
      </div>
    )
  }
}

const Grid = styled.div `

display:flex;
flex-wrap:wrap;

justify-content:space-around;
align-content:center;
font-size: 3rem;
@media (max-width: 669px) {
  display:flex;
  flex-direction:column;
  
  align-items:center;
  font-size: 3rem;
  }
a {
  text-decoration: none;
    color: blue;
    cursor: pointer;
    margin: 0.7rem;
&:hover{
  color:green;
}
}

`
