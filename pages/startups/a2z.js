import React, {useState} from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, ExpandMoreOutlined, CancelOutlined } from '@material-ui/icons';

const font = 'Segoe UI';


export default function Story() {
    const [A2ZSrc, setA2ZSrc] = React.useState("/assets/a2z.jpg");

    function handleA2Z(props) {
        if (A2ZSrc === "/assets/a2z.jpg") {
          setA2ZSrc("/assets/a2z2.jpg");
        }
        else if (A2ZSrc === "/assets/a2z2.jpg") {
          setA2ZSrc("/assets/a2z3.jpg");
        }
        else {
          setA2ZSrc("/assets/a2z.jpg");
        }
      }

    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={6} style={{ display: 'flex', justifyContent: 'center'}}>
                  <Grid container direction="column" style={{alignItems: 'center'}}>
                    <img id="A2Zimg" src={A2ZSrc} alt="A2Z" title="A2Z" style={{'width': '90%'}}/>
                    <Grid item xs={1}>
                      <ExpandMoreOutlined id="downPtr" fontSize="large" onClick={()=>{handleA2Z("next")}} style={{cursor: 'pointer'}}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  I remember <br/>
                  Knocking on the doors of <br/>
                  Every <br/>
                  Single <br/>
                  Flat <br/>
                  Hoping to sell <br/>
                  100 copies <br/>
                  Rs. 60 (~$1) each <br/>
                  <br/>
                  I remember <br/>
                  The closed doors <br/>
                  The "No, sorry. <br/>
                  We don't need this." <br/>
                  <br/>
                  But I also remember <br/>
                  My goofy smile <br/>
                  After <br/>
                  Every <br/>
                  Purchase <br/>
                  <br/>
                  I don't remember <br/>
                  How many copies we sold <br/>
                  That day <br/>
                  We didn't sell out <br/>
                  But <br/>
                  We broke even <br/>
                  <br/>
                  And that was <br/>
                  Motivation enough <br/>
                  <br/>
                  We kept going <br/>
                  --
                  <br/> <br/>
                  At the age of 12, I founded A2Z as a backyard summer project with 5 friends. A2Z started as a pay-per-issue magazine that  quickly converted into an advertisement-driven bi-monthly magazine distributed to 400+ flats in my building/ society free of cost. <br/>
                  <br/>
                  As the founder and editor, I solely handled finances, sought advertisers, and negotiated printing costs. I edited articles and images, building the magazine with all my technical and design expertise stemming from Apple Pages. <br/> 
                  <br/>
                  Founded: May 2014 <br/>
                  <br/>
                  </Typography>
                </Grid>
            </Grid>
          </Grid>
        </div>
    )
}