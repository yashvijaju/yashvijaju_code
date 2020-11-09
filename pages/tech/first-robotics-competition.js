import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center">
                    <Grid item xs={10} md={7} style={{marginTop: '1vh'}}>
                    <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                        <img id="First Robotics Competition" src="/assets/frc.jpg" alt="First Robotics Competition" title="First Robotics Competition" style={{'width': '90%', paddingBottom: '1vh'}}/>
                        <img id="First Robotics Competition" src="/assets/frc3.JPG" alt="First Robotics Competition" title="First Robotics Competition" style={{'width': '90%', paddingBottom: '1vh'}}/>
                        <img id="First Robotics Competition" src="/assets/frc2.jpg" alt="First Robotics Competition" title="First Robotics Competition" style={{'width': '90%', paddingBottom: '1vh'}}/>
                    </Grid>
                    </Grid>
                    <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        <span style={{fontStyle: 'italic'}}>First</span> — <br/> 
                        <br/>
                        The first time <br/>
                        I took a step <br/>
                        Through the open doors <br/>
                        At the Parle-G factory <br/>
                        (my team's workshop) <br/>
                        I was hesitant <br/>
                        And I took a step back <br/>
                        But then I saw <br/>
                        More gears in the box <br/>
                        Than people in all of Mumbai <br/>
                        And I heard <br/>
                        The soft whir <br/>
                        Of motors <br/>
                        <br/>
                        The gears in my heart <br/>
                        Clicked <br/>
                        So I took another step <br/>
                        <br/>
                        The first time <br/>
                        He asked me to get the <br/>
                        Power Tool <br/>
                        And tighten the screws <br/>
                        I had to ask him for help <br/>
                        I didn't know machines <br/>
                        Had replaced screwdrivers as well <br/>
                        <br/>
                        After that <br/>
                        I tightened all the screws <br/>
                        <br/>
                        The first time <br/>
                        I spent the entire evening <br/>
                        At the factory <br/>
                        I didn't realise the sun had set <br/>
                        Hours felt like seconds <br/>
                        Morning turned into night <br/>
                        <br/>
                        Earth now revolved around my robot <br/>
                        <br/>
                        The first time <br/>
                        I visited another stall <br/>
                        At the Southern Cross Regional <br/>
                        In Sydney <br/>
                        I picked up their team badge <br/>
                        And pinned it on my tracks <br/>
                        <br/>
                        The next day <br/>
                        My tracks were weighed in kilograms <br/>
                        A yellow-book for the teams <br/>
                        <br/>
                        The first time <br/>
                        They announced 6024 <br/>
                        As the recipient <br/>
                        To the Chairman's Award <br/>
                        Qualifying us for the <br/>
                        First Championship <br/>
                        I couldn't believe it <br/>
                        None of us could <br/>
                        <br/>
                        A dream come true <br/>
                        <span style={{fontStyle:'italic'}}>Houston, we have a problem:</span> <br/>
                        Our hearts are beating too fast <br/>
                        --

                        
                        <br/> <br/>
                        Team: 6024 R Factor, 1st team from Mumbai <br/>
                        Specialist Role: Safety-Captain <br/>
                        Qualified for First Championship at Houston, 2018 <br/>
                        FRC Regionals: Southern Cross (Sydney), South Pacific (Sydney)  <br/>
                        FRC Awards: Chairman’s Award (Southern Cross Regional), Safety Runners-Up Award (FIRST Championship, Houston) Safety Animation Award (pre-season, sponsored by Underwriters Laboratories), Safety Award (Southern Cross Regional), Safety Runners-Up Award (South Pacific Regional) <br/>

                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}