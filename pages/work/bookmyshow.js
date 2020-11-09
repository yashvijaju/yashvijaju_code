import React from 'react';
import { Grid, Typography } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={1}/>
                    <Grid item xs={10} md={4} style={{marginTop: '1vh'}}>
                    <img id="BookMyShow" src="/assets/bms.png" alt="BookMyShow" title="BookMyShow" style={{'width': '100%', paddingBottom: '1vh'}}/>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        cout &lsaquo; &lsaquo; BookMyShow is a digital ticketing company with a dominant share of events and entertainment ticketing in India; <br/> <br/>
                        I interned as a software analyst: <br/>
                        • Beta-tested Partner App <br/>
                        • Analysed and researched the software frameworks and libraries used by BookMyShow <br/>
                        <br/> 
                        Intern: July 2018 (Mumbai) <br/>
                        <br/>

                    </Typography>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </Grid>
        </div>
    )
}