import React, { Component } from 'react'
import styled from 'styled-components'
export default class Skills extends Component {
  render() {
    return (
      <div>
        <TitleContainer>
        <Title>Experience</Title>

        </TitleContainer>
      <Container>
        <img src="https://cdn.colorlib.com/wp/wp-content/uploads/sites/2/nodejs-frameworks.png" alt=""/>
        <img src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png" alt=""/>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt=""/>
        <img src="https://acmmhsscoe.files.wordpress.com/2017/01/ruby.png?w=959" alt=""/>
        <img src="https://i1.wp.com/www.damiencosset.com/wp-content/uploads/2017/07/mongodb-1.png?fit=413%2C484&ssl=1" alt=""/>
        <img src="http://kosmiktechnologies.com/wp-content/uploads/2016/02/sql.png" alt=""/>
        <img src="http://www.sanjaywebdesigner.com/articles/wp-content/uploads/2014/09/HTML5-courses.png" alt=""/>
        <img src="http://www.acadecap.org/wp-content/uploads/2016/07/Javascript.png" alt=""/>
      </Container>
      </div>
    )
  }
}

const Container = styled.div `
display:grid;
grid-template-columns: auto auto auto;

img {
  width:200px;
  @media (max-width: 669px) {
  width:100%;
  }
}
@media (max-width: 669px) {
  grid-template-columns:auto auto;
  }
`
const TitleContainer = styled.div`
background-color:black;
width:100%;
`
const Title = styled.h2`
font-size:2rem;
text-align:center;
color:white;

`