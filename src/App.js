import React, {Component} from 'react';
import NavBar from './components/NavBar'
import Splash from './components/Splash'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Skills from './components/Skills'
import SideProjectsList from './components/SideProjectsList'
import Contact from './components/Contact'

import projectData from './projectData'
import skillsData from './skillsData'
import sideProjectData from './sideProjectData'
export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Splash/>
        <About/>
        <ProjectList projects={projectData}/>
        <Skills skillsData={skillsData} />
        <SideProjectsList sideProjects={sideProjectData}/>
        <Contact/>
      </div>
    )
  }
}

