import React, { Component } from 'react'
import styled from 'styled-components'

export default class NavBar extends Component {
  render() {
    return (
      <Wrapper id="top">
      <a href="#aboutme">About Me </a> 
      <a href="#projects">Projects </a> 
      <a href="#experience">Languages</a> 
      <a href="#sideprojects">Learning Projects</a> 
      <a href="#contact">Contact</a>
      </Wrapper>
    )
  }
}


const Wrapper = styled.div`
background-color:black;
height:15vh;
width:100%;
display:flex;
flex-wrap:wrap;
justify-content: space-evenly;
align-items:center;
a {
  color:grey;
  text-decoration:none;
  font-size:2.5vh;
  text-align:center;
  @media (max-width: 669px) {
    font-size: 26px;
    color:white;
  }
  :hover{
  color:white;
  font-size: 1.5rem;
  text-transform: uppercase;
    
  }
}


`