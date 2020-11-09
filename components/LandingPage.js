import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';

const blue='#bee3f1';
const font = 'Segoe UI';

export default function Animation() {
    const [curr, setCurr] = React.useState("_");



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

    function typist() {
        if (curr === "_") {
            setCurr("<_>");
        }
        else if (curr === "<_>") {
            setCurr("< _ >");
        }
        else if (curr === "< _ >") {
            setCurr("< H_ >");
        }
        else if (curr === "< H_ >") {
            setCurr("< Hi_ >");
        }
        else if (curr === "< Hi_ >") {
            setCurr("< Hi,_ >");
        }
        else if (curr === "< Hi,_ >") {
            setCurr("< Hi, _ >");
        }
        else if (curr === "< Hi, _ >") {
            setCurr("< Hi, I_ >");
        }
        else if (curr === "< Hi, I_ >") {
            setCurr("< Hi, I _ >");
        }
        else if (curr === "< Hi, I _ >") {
            setCurr("< Hi, I a_ >");
        }
        else if (curr === "< Hi, I a_ >") {
            setCurr("< Hi, I am_ >");
        }
        else if (curr === "< Hi, I am_ >") {
            setCurr("< Hi, I am _ >");
        }
        else if (curr === "< Hi, I am _ >") {
            setCurr("< Hi, I am Y_ >");
        }
        else if (curr === "< Hi, I am Y_ >") {
            setCurr("< Hi, I am Ya_ >");
        }
        else if (curr === "< Hi, I am Ya_ >") {
            setCurr("< Hi, I am Yas_ >");
        }
        else if (curr === "< Hi, I am Yas_ >") {
            setCurr("< Hi, I am Yash_ >");
        }
        else if (curr === "< Hi, I am Yash_ >") {
            setCurr("< Hi, I am Yashv_ >");
        }
        else if (curr === "< Hi, I am Yashv_ >") {
            setCurr("< Hi, I am Yashvi_ >");
        }
        else if (curr === "< Hi, I am Yashvi_ >") {
            setCurr("< Hi, I am Yashvi _ >");
        }
        else if (curr === "< Hi, I am Yashvi _ >") {
            setCurr("< Hi, I am Yashvi J_ >");
        }
        else if (curr === "< Hi, I am Yashvi J_ >") {
            setCurr("< Hi, I am Yashvi Ja_ >");
        }
        else if (curr === "< Hi, I am Yashvi Ja_ >") {
            setCurr("< Hi, I am Yashvi Jaj_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaj_ >") {
            setCurr("< Hi, I am Yashvi Jaju_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju_ >") {
            setCurr("< Hi, I am Yashvi Jaju _ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju _ >") {
            setCurr("< Hi, I am Yashvi Jaju a_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju a_ >") {
            setCurr("< Hi, I am Yashvi Jaju an_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju an_ >") {
            setCurr("< Hi, I am Yashvi Jaju and_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and_ >") {
            setCurr("< Hi, I am Yashvi Jaju and _ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and _ >") {
            setCurr("< Hi, I am Yashvi Jaju and t_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and t_ >") {
            setCurr("< Hi, I am Yashvi Jaju and th_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and th_ >") {
            setCurr("< Hi, I am Yashvi Jaju and thi_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and thi_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this i_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this i_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is m_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is m_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my _ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my _ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my s_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my s_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my st_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my st_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my sto_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my sto_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my stor_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my stor_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my story_ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my story_ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my story _ >");
        }
        else if (curr === "< Hi, I am Yashvi Jaju and this is my story _ >") {
            setCurr("< Hi, I am Yashvi Jaju and this is my story >");
        }
    }

    React.useEffect(() => {
        setTimeout(typist, 100);
      }, [curr]);

    return(
        <div>
            <Hidden xsDown>
                <Grid container direction="row" justify="center" style={{height: '90vh',  alignItems: 'center'}}>
                    <div className="col offset-l5" style={{'border': '2px solid #bee3f1', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <div style={{fontSize: '2.5vw', 'padding': '2vh', backgroundColor: '#FFFFFF', fontFamily: font, 'letterSpacing': '1px', fontWeight: 'lighter'}}>
                        <p>{curr}</p>
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
                        <p>{curr}</p>
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