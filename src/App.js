import React, { Component }  from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/LandingPage';
import Story from './Components/Story';

class App extends Component {
  render() {
    return (      
       <BrowserRouter>
        <div>
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/my-story" component={Story}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </BrowserRouter>
    );
  }
}

export default App;

