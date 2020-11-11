import React  from 'react';

import Animation from '../components/LandingPage'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function App() {
  return (      
    <>
      <Animation/>
      <About/>
      <Projects/>
      <Contact/>
    </>
  );
}