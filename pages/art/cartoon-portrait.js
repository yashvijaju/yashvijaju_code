import React, {useState} from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';


const font = 'Segoe UI';



export default function Story() {
    const [comicSrc, setComicSrc] = React.useState("/assets/ps1.png");
    const [comicId, setComicId] = React.useState(1);

    function handleComic(props) {
        if (props === "next") {
          if (comicId===1) {
          setComicId(2);
          setComicSrc("/assets/ps2.jpg");
          
          }
          else if (comicId===2) {
            setComicSrc("/assets/ref.jpg");
            setComicId(3);
          }
          else {
            setComicSrc("/assets/ps1.png");
            setComicId(1);
          }
        }
        else if (props === "prev") {
          if (comicId===1) {
            setComicSrc("/assets/ref.jpg");
            setComicId(3);
          }
          else if (comicId===2) {
            setComicSrc("/assets/ps1.png");
            setComicId(1);
          }
          else {
            setComicSrc("/assets/ps2.jpg");
            setComicId(2);
          } 
        }
      }

    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', paddingBottom: '5vh'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="small" onClick={()=>{handleComic("prev")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={8} md={5}>
                <img className="Modal Adjustment Layers" id={comicId} src={comicSrc} alt="Adjustment Layers" title="Adjustment Layers" style={{'width': '100%', 'paddingTop': '5vh'}}></img>
              </Grid>
              <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleComic("next")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  I used Adobe Photoshop to convert my portrait into this cartoon. To create this, I first stacked many Solid Color Adjustment Layers on top of one another. Then, I used the Pen Tool to trace portions of the original image to create a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the adjustment layer.
                  <br/><br/>
                  Adobe Photoshop Tools: Solid Color Adjustment Layers, Pen Tool, Path, Selection, Layer Masks <br/>
                  Created: Apr 2020
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
    )
}