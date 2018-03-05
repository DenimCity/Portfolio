import React, { Component } from 'react'
import styled from 'styled-components'
export default class Splash extends Component {
  render() {
    return (
      <SplashWrapper>
        <div>
          Jean Altidor
        </div>
      </SplashWrapper>
    )
  }
}

const SplashWrapper = styled.div`
background:url('https://i.imgur.com/qaOjfN9.jpg');
background-position: center;
  background-size: cover;
  height: 60vh;
  font-size: 6rem;
  color: white;
  font-family: 'Marck Script', cursive;
  text-shadow: 1px 2px 2px #000;
  display: flex;
  justify-content: center;
  align-items: center;

`