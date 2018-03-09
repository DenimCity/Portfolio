import React, { Component } from 'react'
import styled from 'styled-components'
import {TitleContainer} from '../styled_components/basicstyles'
export default class Skills extends Component {
  render() {
    const pictures = this.props.skillsData.map((skill, i)=>{
      return (
        <div>
          <ImageContainer key={skill.key}>
            <img src={skill.photo} alt="skill picture"/>
          </ImageContainer>
        </div>
      )
    })

    return (
      <div>
        <TitleContainer>
        <h2>Experience</h2>
        </TitleContainer>
      <Wrapper>
      {pictures}
      </Wrapper>
      </div>
    )
  }
}




const ImageContainer = styled.div`
max-width:150px;
@media (max-width: 669px) {
  width:100px;
  }
img {
  width:100%;


}
`
const Wrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:center;
`
// const Container = styled.div `
// display:grid;
// grid-template-columns:auto auto auto;
// justify-content: space-evenly;
// img {
//   width:200px;
//   @media (max-width: 669px) {
//   width:100px;
//   }
// }
// @media (max-width: 669px) {
//   grid-template-columns: auto auto auto;
//   justify-content: center;
//   grid-gap: 2rem;
//   }
// `

