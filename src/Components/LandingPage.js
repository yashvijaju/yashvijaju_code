import React  from 'react';
import Typist from 'react-typist';
import { Grid, Hidden } from '@material-ui/core';
import './Cursor.css';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

const blue='#bee3f1';
const font = 'Segoe UI';

export default function Animation() {
    function handleScroll(props) {
        window.scrollTo(0,props);
        if (props === 0) {
            var x = document.getElementById("scroll up");
            x.style.display = 'none';
            var y = document.getElementById("scroll down");
            y.style.display = 'inline';
        }
        else {
            x = document.getElementById("scroll up");
            x.style.display = 'inline';
            y = document.getElementById("scroll down");
            y.style.display = 'none';
        }
    }
    return(
        <div>
            <Hidden xsDown>
                <Grid container direction="row" justify="center" style={{height: '90vh',  alignItems: 'center'}}>
                    <div className="col offset-l5" style={{'border': '2px solid #bee3f1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{fontSize: '2.5vw', 'padding': '2vh', backgroundColor: '#FFFFFF', fontFamily: font, 'letterSpacing': '1px', fontWeight: 'lighter'}}>
                        <Typist avgTypingDelay={100} startDelay={300} cursor={{hideWhenDone:true, element: '_', blink:true}}> &lsaquo; Hi, I am Yashvi Jaju and this is my story &rsaquo; </Typist>
                        </div>
                    </div>
                </Grid>
                <div style={{height: '50vh', width: '100%', position: 'absolute', top: '0', backgroundColor: '#FFFFFF', 'zIndex': '-1'}}>
                </div>
                <div style={{height: '50vh', width: '100%', position: 'absolute', top: '50vh', backgroundColor: blue, 'zIndex': '-1'}}>
                </div>
                <div style={{marginTop: '-2vh', display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <ExpandMore id="scroll down" fontSize="large" style={{color:'grey', cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 0.75)} />
                <ExpandLess id="scroll up" fontSize="large" style={{color:'grey', cursor: 'pointer', display:'none'}} onClick={()=>handleScroll(0)} />
                </div>  
            </Hidden>
            <Hidden smUp>
                <Grid container direction="row" justify="center" style={{height: '40vh',  alignItems: 'center'}}>
                    <div className="col offset-l5" style={{'border': '2px solid #bee3f1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>   
                        <div style={{fontSize: '3.5vw', 'padding': '2vh', backgroundColor: '#FFFFFF', fontFamily: font, 'letterSpacing': '0.5px', fontWeight: 'lighter'}}>
                        <Typist avgTypingDelay={100} startDelay={300} cursor={{hideWhenDone:true, element: '_', blink:true}}> &lsaquo; Hi. I am Yashvi Jaju and this is my story &rsaquo; </Typist>
                        </div>
                    </div>
                </Grid>
                <div style={{height: '25vh', width: '100%', position: 'absolute', top: '0', backgroundColor: '#FFFFFF', 'zIndex': '-1'}}>
                </div>
                <div style={{height: '25vh', width: '100%', position: 'absolute', top: '25vh', backgroundColor: blue, 'zIndex': '-1'}}>
                </div>
            </Hidden>
        </div>
    )
}