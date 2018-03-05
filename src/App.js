import React, {Component} from 'react';
import NavBar from './components/NavBar'
import Splash from './components/Splash'
import About from './components/About'
import ProjectList from './components/ProjectList'
import Skills from './components/Skills'
import projectData from './projectData'

export default class App extends Component {
  render() {
    return (
      <div>
        <NavBar/>
        <Splash/>
        <About/>
        <ProjectList projects={projectData}/>
        <Skills/>
      </div>
    )
  }
}

