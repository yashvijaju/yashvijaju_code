import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pflcollage.jpg" alt="PFL" title="PFL" style={{'width': '100%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pfl_1.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                  <img src="/assets/pfl_2.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
              <Grid item xs={10} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  The lift's doors stretched wide open <br/>
                  <span style={{fontStyle: 'italic'}}>6th floor</span> <br/>
                  I waited while teachers and students ahead spilled out <br/>
                  It was my turn <br/>
                  I took a step ahead <br/>
                  Turned around <br/>
                  "Thank you <span style={{fontStyle: 'italic'}}>didi</span>" <br/>
                  <br/>
                  <span style={{fontStyle: 'italic'}}>Didi</span> smiled <br/>
                  I was the only one who thanked her that day <br/>
                  --
                  <br/> <br/>


                  "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. <br/>
                  Domestic labour isn’t a respected occupation, but that has to change. <br/>
                  <br/>

                  To solve this, I founded Pride For Labor (PFL) in grade 10. <br/>
                    • Conducted social experiments to analyse treatment of domestic staff and employer sensitivity to their conditions <br/>
                    • Designed a multi-phased program, secured school support, and participation of 500+ parents/ students <br/>
                    1. Organised student and teacher volunteers to clean the 8-storey campus while the staff was treated to lunch and movies <br/>
                    2. Collected 400+ gifts, distributed to support staff for Christmas, 2018 <br/>
                    3. Conducted campaigns to increase awareness amongst students to respect domestic staff <br/>
                    <br/>
                  A little effort is all it takes to spread a smile, and I want to make a revolution, one smile at a time.
                  <br/> <br/>
                  Location: Oberoi International School, Mumbai <br/>
                  Founded: 2016 <br/>
                  <br/>
                </Typography>
              </Grid>
              <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pfl_3.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                  <img src="/assets/pfl_4.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pflcollage2.jpg" alt="PFL" title="PFL" style={{'width': '100%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
            </Grid>
          </Grid>
        </div>
    ) 
}