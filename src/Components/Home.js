import React  from 'react';
import NavBar from './NavBar'
import Animation from './LandingPage'
import About from './About'
import Projects from './Projects'

const pink='#F7CAC9';
const blue='#7EC8E3';

export default function Home() {
    return(
      <div>
        <NavBar/>
        <Animation/>
        <About/>
        <Projects/>
      </div>
    )
}