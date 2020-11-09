import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';

const font = 'Segoe UI';


export default function Story() {
    const [quillingSrc, setQuillingSrc] = React.useState("/assets/quilling1.jpg");

    function handleQuilling(props) {
        if (props === "next") {
          if (quillingSrc === "/assets/quilling1.jpg") {
            setQuillingSrc("/assets/quilling2.jpg");
          }
          else if (quillingSrc === "/assets/quilling2.jpg") {
            setQuillingSrc("/assets/quilling3.jpg");
          }
          else if (quillingSrc === "/assets/quilling3.jpg") {
            setQuillingSrc("/assets/quilling4.jpg");
          }
          else if (quillingSrc === "/assets/quilling4.jpg") {
            setQuillingSrc("/assets/quilling1.jpg");
          }
        }
        if (props === "prev") {
          if (quillingSrc === "/assets/quilling1.jpg") {
            setQuillingSrc("/assets/quilling4.jpg");
          }
          else if (quillingSrc === "/assets/quilling2.jpg") {
            setQuillingSrc("/assets/quilling1.jpg");
          }
          else if (quillingSrc === "/assets/quilling3.jpg") {
            setQuillingSrc("/assets/quilling2.jpg");
          }
          else if (quillingSrc === "/assets/quilling4.jpg") {
            setQuillingSrc("/assets/quilling3.jpg");
          }
        }
      }
    

    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="column" justify="center" alignItems="center">
              <Grid item xs={10} style={{marginTop: '1vh'}}>
                <Grid container direction="row" justify="center" style={{alignItems: 'center'}}>
                  <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleQuilling("prev")}} style={{cursor: 'pointer'}}/>
                  </Grid>
                  <Grid item xs={10} style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                    <img id="Quilling" src={quillingSrc} alt="Quilling" title="Quilling" style={{'width': '98%', paddingBottom: '1vh'}}/>
                  </Grid>
                  <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleQuilling("next")}} style={{cursor: 'pointer'}}/>
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={8} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  The Puppet Show — <br/>
                  <br/>
                  The strip of paper <br/>
                  Is a puppet <br/>
                  And the tool <br/>
                  The string <br/>
                  <br/>
                  The string twists <br/>
                  And the puppet rotates <br/>
                  The strip becomes <br/>
                  A tight coil <br/>
                  <br/>
                  The strings are cut <br/>
                  The puppet stretches <br/>
                  The coil becomes <br/>
                  Loose <br/>
                  <br/>
                  But <br/>
                  I am there <br/>
                  The puppeteer <br/>
                  <br/>
                  I pinch the coil <br/>
                  Bend it to my will <br/>
                  The loose coil becomes <br/>
                  A teardrop <br/>
                  A dimaond <br/>
                  A victim of my imagination <br/>
                  <br/>
                  Glued in place <br/>
                  All the puppets <br/>
                  Together <br/>
                  Become <br/>
                  The Puppet Show <br/>
                  --
                  <br/> <br/>
                  Quilling is an art of paper filigree in which strips of paper are rolled using a slitted-tool to create coils of paper. These coils are then shaped as desired, and sealed by glueing the loose end of paper. Put together, beautiful inticrate designs can be made. <br/> <br/>
                  I sold envelopes, cards, boxes, etc for Rs. 100-200 ($ 2-3) at exhibitions for a few years.
                  <br/> <br/>
                  Created: 2013-2016 <br/>
                  <br/>

                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
    )
}