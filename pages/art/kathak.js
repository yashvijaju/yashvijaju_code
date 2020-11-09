import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center">
                    <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                    <Grid container direction="column" justify="center" alignItems="center">
                        <img id="Kathak" src="/assets/kathak1.jpg" alt="Kathak" title="Kathak" style={{'width': '90%', paddingBottom: '0.5vh'}}/>
                        <img id="Kathak" src="/assets/kathak4.jpg" alt="Kathak" title="Kathak" style={{'width': '90%', paddingBottom: '0.5vh'}}/>
                    </Grid>
                    </Grid>
                    <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        When I look down <br/>
                        I see a bunch of <span style={{fontStyle: 'italic'}}>ghungroos</span> <br/>
                        Adorning my feet <br/>
                        <br/>
                        It has been 14 years <br/>
                        Since I wore 10 <span style={{fontStyle: 'italic'}}>ghungroos</span> <br/>
                        Tiny bells tied together with a red thread <br/>
                        Today I wear 150 <br/>
                        But I feel light <br/>
                        <br/>
                        When I dance <br/>
                        My <span style={{fontStyle: 'italic'}}>ghungroos</span> sound like <br/>
                        Chains breaking <br/>
                        And music coming to life <br/>
                        <br/>
                        I stare at one spot <br/> 
                        And spin <br/>
                        One <br/>
                        Two <br/>
                        Three <br/>
                        Forty <br/>
                        Hundred <br/>
                        <br/>
                        Time slows down <br/>
                        But I don't <br/>
                        <br/>
                        I am unstoppable <br/>
                        Like the wind <br/>
                        A force to be reckoned with <br/>
                        <br/>
                        And when I look up <br/>
                        I am the wind <br/> 
                        --
                        <br/> <br/>

                        Images captured: December 2016

                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}