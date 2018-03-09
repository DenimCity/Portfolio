import React, {Component} from 'react'
import styled from 'styled-components'
import {TitleContainer} from '../styled_components/basicstyles'
import SideProject from './SideProject'
export default class SideProjectsList extends Component {
  render() {
    const sideProjectList = this
      .props
      .sideProjects
      .map((project, i) => {
        return (<SideProject
          key={i}
          name={project.name}
          description={project.description}
          author={project.author}
          photo={project.picture}
          link={project.link}/>)
      })
    return (
      <div>
        <TitleContainer id="sideprojects">
          <h2>Extended Learning Projects</h2>
        </TitleContainer>
        <Grid>
          {sideProjectList}
        </Grid>
      </div>
    )
  }
}
const Grid = styled.div `
display:grid;
grid-template-columns: 49% 46%;
justify-content: center;
align-items: normal;
@media (max-width: 669px) {
  display: flex;
  justify-content: center;
  flex-direction: column;
  }
`