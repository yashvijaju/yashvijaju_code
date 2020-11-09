import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={1}/>
                    <Grid item xs={10} md={4} style={{marginTop: '1vh'}}>
                    <img id="McDonald's" src="/assets/mcdonald.png" alt="McDonald's" title="McDonald's" style={{'width': '100%', paddingBottom: '1vh'}}/>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        cout &lsaquo; &lsaquo; Hardcastle Restaurants Private Limited operates the West and South franchises of McDonald's in India; <br/> <br/>
                        I interned as a product developer: <br/>
                        • Analysed and beta-tested McDonald's pilot feature: On The Go (food delivery en-route) <br/>
                        • Visited McDonald's franchises to conduct market research through interaction and observation of consumers <br/>
                        • Compared statistical success data from pilot runs and user-flow for similar services (Uber Eats, Burger King Traffic Jam Whopper). Also analysed complaints registered in the last month <br/>
                        • Mapped API calls to pilot feature to capture usage trends and identify key stores to run second run of testing <br/>
                        • Proposed technological, product, and marketing modifications to existing pilot model to boost success rate <br/>
                        <br/> 
                        Intern: July 2019 (Mumbai)<br/>
                        <br/>
                    </Typography>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </Grid>
        </div>
    )
}