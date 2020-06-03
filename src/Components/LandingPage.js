import React  from 'react';
import Typist from 'react-typist';
import NavBar from './NavBar'
import { Grid } from '@material-ui/core';



export default function LandingPage() {
    return(
        <div>
            <NavBar></NavBar>
            <Grid container direction="row" justify="center" style={{height: '100vh',  alignItems: 'center'}}>
                <div class="col offset-l5" style={{outline: '1px solid grey', outlineOffset: '-0.5vw', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>   
                    <h style={{fontSize: '2.5vw', 'padding': '2vh', backgroundColor: '#FFFFFF'}}>
                    <Typist avgTypingDelay={100} startDelay={300} cursor={{hideWhenDone: 'true'}}>Hi. I am Yashvi Jaju and this is my story. </Typist>
                    </h>
                </div>
            </Grid>
            <div style={{height: '50vh', width: '100%', position: 'absolute', top: '0', backgroundColor: '#FFFFFF', 'z-index': '-1'}}>
            </div>
            <div style={{height: '50vh', width: '100%', position: 'absolute', top: '50vh', backgroundColor: '#000000', 'z-index': '-1'}}>
            </div>            
        </div>
    )
}