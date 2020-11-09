import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <video className="Animation" id="Video Animation" src="/assets/animation.mp4" alt="Animation" title="Animation" style={{'width': '90%'}} autoPlay controls muted/>
                </Grid>
              <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  Capture accidents <br/>
                  because <br/>
                  “The wrong answer is the right answer <br/>
                  In search of a different question” <br/>
                  <br/>
                  Everywhere I go <br/>
                  Neon yellow signs warn me <br/>
                  Be careful <br/>
                  Prevent accidents <br/>
                  <br/>
                  Yet <br/>
                  I create an accident <br/>
                  And capture it <br/>
                  In prison bars <br/>
                  Made from all the warning signs <br/>
                  <br/>
                  My head spins <br/>
                  Bright red <br/>
                  Screaming "No" <br/>
                  <br/>
                  But I paint it <br/>
                  Neon yellow <br/>
                  --
                  <br/> <br/>                  
                 
                  Inspiration: Bruce Mau's <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span> <br/>
                  Adobe Tools: Adobe Photoshop Keyframe Animation <br/>
                  Created: Apr 2020
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
    )
}