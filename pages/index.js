import React  from 'react';
import Animation from '../components/LandingPage'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import {FooterAll} from '../components/Projects/Footer'



export default function App() {
  return (      
    <>
      <Animation/>
      <About/>
      <Projects/>
      <Contact/>
      <FooterAll divider="#bee3f1" title="#000000" subtitle="grey"/>
    </>
  );
}