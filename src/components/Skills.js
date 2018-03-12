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
        <TitleContainer id="experience">
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
width:10vw;
@media (max-width: 669px) {
  width:19vw;
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


