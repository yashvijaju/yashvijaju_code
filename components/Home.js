import React  from 'react';
import NavBar from './NavBar'
import Animation from './LandingPage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'

export default function Home() {
    return(
      <div>
        <NavBar/>
        <Animation/>
        <About/>
        <Projects/>
        <Contact/>
      </div>
    )
}