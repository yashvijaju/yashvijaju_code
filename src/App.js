import React from 'react';
import LandingPage from './Components/LandingPage';
import NavBar from './Components/NavBar';
import Story from './Components/Story';

function App() {
  return (
    <div style={{width: '100vw', height: '100vh'}}>
      <div class="container">
        <NavBar></NavBar>
        <LandingPage></LandingPage>
        <Story></Story>
      </div>
    </div>
  );
}

export default App;
