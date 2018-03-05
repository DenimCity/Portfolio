import React, { Component } from 'react'
import styled from 'styled-components'

export default class NavBar extends Component {
  render() {
    return (
      <Wrapper>
        <div>

        <a href=""><i class="fas fa-home"></i></a>
        <a href=""><i class="fas fa-file-word"></i></a>
        <a href=""><i class="fas fa-envelope-open"></i></a>
        <a href="https://github.com/DenimCity" target="blank"><i class="fab fa-github-square"></i></a>
        <a href="https://medium.com/@JW_Altidor"target="blank"><i class="fab fa-medium-m"></i></a>
        <a href="https://twitter.com/JW_Altidor"target="blank"><i class="fab fa-twitter-square"></i></a>
        <a href="https://www.linkedin.com/in/jeanaltidor" target="blank"><i class="fab fa-linkedin-in"></i></a>
        </div>
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
background-color:black;
height:15vh;
width:100%;
display:flex;
justify-content:center;
align-items:center;
a {
  color:grey;
  border: solid 1px;
  padding:2rem;
  text-align:center;
  margin: 0px 0px 7px 3rem;
  border-radius: 15px;
  :hover{
    color:white;
  }
}


`