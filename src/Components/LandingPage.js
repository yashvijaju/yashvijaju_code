import React, { Component }  from 'react';
import Typist from 'react-typist';

export default function LandingPage() {
    return(
        <div class= "container">
            <div class="row" style={{'top':'48vh', left: '25vw', position: 'fixed', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <div class="col offset-l5" style={{height: '4vw', width: '50vw', outline: '1px solid grey', outlineOffset: '-0.5vw', display: 'flex', justifyContent: 'center', backgroundColor: 'white'}}>   
                    <h style={{fontSize: '2.5vw'}}>
                    <Typist avgTypingDelay={100} startDelay={300} cursor={{hideWhenDone: 'true'}}>Hi. I am Yashvi Jaju and this is my story. </Typist>
                    </h>
                </div>
            </div>
        </div>
    )
}