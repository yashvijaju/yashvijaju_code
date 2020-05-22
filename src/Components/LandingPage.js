import React, { Component }  from 'react';
import Typist from 'react-typist';

class LandingPage extends Component {
    render() {
        return(
            <div class= "container" style={{margin: '5%'}}>
                <div class="row" style={{'padding-top':'20%', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <div class="col offset-l5" style={{height: '4vw', width: '50vw', border: '1px solid grey', display: 'flex', justifyContent: 'center'}}>   
                        <h style={{fontSize: '2.5vw'}}>
                        <Typist avgTypingDelay={100} startDelay={300} cursor={{hideWhenDone: 'true'}}>Hi. I am Yashvi Jaju and this is my story. </Typist>
                        </h>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage