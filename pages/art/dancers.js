import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="Dancing on the Moon" src="/assets/dancers.jpg" alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Tried to capture motion <br/>
                    In a picture <br/>
                    But captured the beauty of motion <br/>
                    Because <br/>
                    Time doesn't wait for you <br/>
                    Or me <br/>

                    <br/>

                    tick tock <br/>

                    <br/>

                    Ignores all borders <br/>
                    As we move <br/>
                    From one timeframe to another <br/>
                    Lost in time <br/>
                    Dancing on the moon <br/>

                    --

                    <br/> <br/>
                    Painted: May 2016 <br/>
                    Medium: Oil
                    <br/>
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
        </div>
    )
}