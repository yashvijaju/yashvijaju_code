import React from 'react';
import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';


function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <div class="container">
        <NavBar></NavBar>
        <LandingPage></LandingPage>
        <LandingPage></LandingPage>
      </div>
    </div>
  );
}

export default App;
