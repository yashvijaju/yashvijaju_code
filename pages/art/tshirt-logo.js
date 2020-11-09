import React, { useState } from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';

const font = 'Segoe UI';


export default function Story() {
    const [waveSrc, setWaveSrc] = React.useState("/assets/waveLogo.png");
    const [waveId, setWaveId] = React.useState(1);

    
    function handleWaveLogo(props) {
        if (props === "next") {
        if (waveId===1) {
            setWaveSrc("/assets/waveTshirt.jpg");
            setWaveId(2);
        }
        else if (waveId===2) {
            setWaveSrc("/assets/waveRef.png");
            setWaveId(3);
        }
        else {
            setWaveSrc("/assets/waveLogo.png");
            setWaveId(1);
        }
        }
        else if (props === "prev") {
        if (waveId===1) {
            setWaveSrc("/assets/waveRef.png");
            setWaveId(3);
        }
        else if (waveId===2) {
            setWaveSrc("/assets/waveLogo.png");
            setWaveId(1);
        }
        else {
            setWaveSrc("/assets/waveTshirt.jpg");
            setWaveId(2);
        } 
        }
    }

    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center">
                <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleWaveLogo("prev")}} style={{cursor: 'pointer'}}/>
                </Grid>
                <Grid item xs={8} md={5}>
                    <img className="Modal Adjustment Layers" id={waveId} src={waveSrc} alt="Adjustment Layers" title="Adjustment Layers" style={{'width': '100%'}}/>
                </Grid>
                <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleWaveLogo("next")}} style={{cursor: 'pointer'}}/>
                </Grid>
                <Grid item xs={10} md={4}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    I used Adobe Photoshop to design a logo for a beach-themed t-shirt. To create this, I first created three Adjustment Layers (light blue, dark blue, and yellow) and used the Pen Tool to trace portions of the original image. With this, I created a Path, converted the path into a Selection, inversed it, and deleted it from the Layer Mask to display the selection in the Adjustment Layers. I then edited the stacking order to hide the sun behind one wave and reflect in another. To illustrate the text, I designed custom type paths that wrapped around the wave — used two paths, one aligning text vertically and the other horizontally. Finally, I rasterised the type layers and applied layer effects (stroke).
                    <br/> <br/>
                    Adobe Photoshop Tools: Adjustment Layers, Layer Masks, Custom Type (custom paths), Pen Tool, Layer Effects. <br/>
                    Created: May 2020
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}