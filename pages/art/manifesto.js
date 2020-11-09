import React from 'react';
import { Grid, Typography, Chip } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';

const font = 'Segoe UI';
const pink='#F7CAC9'; 
const blue='#bee3f1';
const grey = '#efefef'; 

export default function Story() {

    const [risoSrc, setRisoSrc] = React.useState("/assets/d1_1.png");
    const [risoId, setRisoId] = React.useState(1);
    const [lastFilterRiso, setLastFilterRiso] = React.useState();

    function handleRiso(props,filter,e) {
        if (props === "next") {
          if (risoId===1) {
            if (risoSrc === "/assets/d1_1.png") {
              setRisoSrc("/assets/d1_2.png");
              setRisoId(2);
            }
            if (risoSrc === "/assets/d2_1.png") {
              setRisoSrc("/assets/d2_2.png");
              setRisoId(2);
            }
            if (risoSrc === "/assets/d3_1.png") {
              setRisoSrc("/assets/d3_2.png");
              setRisoId(2);
            }
            if (risoSrc === "/assets/d4_1.jpg") {
              setRisoSrc("/assets/d4_1.jpg");
              setRisoId(1);
            }
          }
          else if (risoId===2) {
            if (risoSrc === "/assets/d1_2.png") {
              setRisoSrc("/assets/d1_3.png");
              setRisoId(3);
            }
            if (risoSrc === "/assets/d2_2.png") {
              setRisoSrc("/assets/d2_3.png");
              setRisoId(3);
            }
            if (risoSrc === "/assets/d3_2.png") {
              setRisoSrc("/assets/d3_1.png");
              setRisoId(1);
            }
          }
          else {
            if (risoSrc === "/assets/d1_3.png") {
              setRisoSrc("/assets/d1_1.png");
              setRisoId(1);
            }
            if (risoSrc === "/assets/d2_3.png") {
              setRisoSrc("/assets/d2_1.png");
              setRisoId(1);
            }
          }
        }
        else if (props === "prev") {
          if (risoId===1) {
            if (risoSrc === "/assets/d1_1.png") {
              setRisoSrc("/assets/d1_3.png");
              setRisoId(3);
            }
            if (risoSrc === "/assets/d2_1.png") {
              setRisoSrc("/assets/d2_3.png");
              setRisoId(3);
            }
            if (risoSrc === "/assets/d3_1.png") {
              setRisoSrc("/assets/d3_2.png");
              setRisoId(2);
            }
            if (risoSrc === "/assets/d4_1.jpg") {
              setRisoSrc("/assets/d4_1.jpg");
              setRisoId(1);
            }
          }
          else if (risoId===2) {
            if (risoSrc === "/assets/d1_2.png") {
              setRisoSrc("/assets/d1_1.png");
              setRisoId(1);
            }
            if (risoSrc === "/assets/d2_2.png") {
              setRisoSrc("/assets/d2_1.png");
              setRisoId(1);
            }
            if (risoSrc === "/assets/d3_2.png") {
              setRisoSrc("/assets/d3_1.png");
              setRisoId(1);
            }
          }
          else {
            if (risoSrc === "/assets/d1_3.png") {
              setRisoSrc("/assets/d1_2.png");
              setRisoId(2);
            }
            if (risoSrc === "/assets/d2_3.png") {
              setRisoSrc("/assets/d2_2.png");
              setRisoId(2);
            }
          } 
        }
        else if (props === "filter") {
          setRisoId(1);
          e.style.backgroundColor = blue;
          e.style.color = 'white';
          e.style.border = '2px solid white';
          if (lastFilterRiso !== undefined) {
            lastFilterRiso.style.backgroundColor = 'white';
            lastFilterRiso.style.color = blue;
            lastFilterRiso.style.border = '2px solid #bee3f1';
          }
          setLastFilterRiso(e);
          if (filter === 1) {
            setRisoSrc("/assets/d1_1.png");
          }
          if (filter === 2) {
            setRisoSrc("/assets/d2_1.png");
          }
          if (filter === 3) {
            setRisoSrc("/assets/d3_1.png");
          }
          if (filter === 4) {
            setRisoSrc("/assets/d4_1.jpg");
          }
        }
      }
    
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center">
                <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleRiso("prev")}} style={{cursor: 'pointer'}}/>
                </Grid>
                <Grid item xs={10} md={6}  style={{display: 'flex', flexDirection: 'column'}}>
                    <Grid container direction="row" justify="center">
                    <Chip className="filterProjects" id="Iter 1" variant="outlined" label="Iteration One" clickable={true} style={{color: blue, backgroundColor: 'white', border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",1,e.target)}/>
                    <Chip className="filterProjects" id="Iter 2" variant="outlined" label="Iteration Two" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",2,e.target)}/>
                    <Chip className="filterProjects" id="Iter 3" variant="outlined" label="Iteration Three" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",3,e.target)}/>
                    <Chip className="filterProjects" id="Iter 4" variant="outlined" label="Final" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",4,e.target)}/>
                    </Grid>
                    <Grid item xs={12} style={{marginTop: '1vh'}}>
                    <img className="Riso" id={risoId} src={risoSrc} alt="Riso" title="Riso" style={{'width': '100%'}}/>
                    </Grid>
                </Grid>
                <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleRiso("next")}} style={{cursor: 'pointer'}}/>
                </Grid>
                <Grid item xs={10} md={4}>
                    <Typography variant="caption" style={{fontFamily: font}}>
                    Break the rules <br/>
                    Because <br/>
                    Sometimes <br/>
                    You need to break <br/>
                    The box <br/>
                    To think beyond <br/>
                    <br/>
                    Chase the unconventional <br/>
                    Because <br/>
                    You aren't a sheep <br/>
                    Following the "normal" <br/>
                    You are a human <br/>
                    Creating new <br/>
                    Normals <br/>
                    <br/>
                    Live in extremes <br/>
                    ...or don't <br/>
                    Because <br/>
                    There's only <br/>
                    A yes <br/>
                    Or <br/>
                    A no <br/>
                    --
                    <br/> <br/>
                    This manifesto is inspired by Bruce Mau's <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete" target="_blank" rel="noopener noreferrer"> Incomplete Manifesto for Growth</a></span>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I first encapsulated his manifesto into three simple phrases: 1. Break the rules, &nbsp; 2. Chase the unconventional, and &nbsp; 3. Live in extremes; or don't. <br/>
                    These phrases then motivated my initial designs as seen in 'Iteration One', with a heavy use of Lines, Angles, and Overlays  to demonstrate these underlying themes. The designs in the second iteration build on the initial designs to explore Whitespace, Color Palettes, and Offset-Layers. The third set of iterations focused on the more inticrate details, including Font Sizes and Text Alignment, alongside a multitude of other fine details that cumulatively set the tone for my final design. <br/>
                    The manifesto was designed with the intent to be printed using a Risograph, although the CoVid-19 global pandemic prevented this later.
                    <br/> <br/>
                    Adobe Tools: Adobe InDesign <br/>
                    Created: Mar-Apr 2020
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}