import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { KeyboardArrowDown, ExpandLess } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const blue='#bee3f1';

const useStyles = makeStyles((theme) => ({
    container_100vh: {
        height: '90vh', 
        width: '100%', 
        backgroundColor: '#FFFFFF', 
        zIndex: '-1',
        [theme.breakpoints.down('xs')]: {
            height: '40vh', 
        }
    },
    container_50vh: {
        height: '50vh', 
        position: 'absolute', 
        top: '50vh', 
        width: '100%', 
        backgroundColor: blue, 
        zIndex: '0',
        [theme.breakpoints.down('xs')]: {
            height: '25vh', 
            top: '25vh', 
        }
    },
    container_text: {
        position: 'absolute', 
        top: '45vh', 
        alignItems: 'center',
        [theme.breakpoints.down('xs')]: {
            top: '20vh',
        }
    },
    text: {
        fontSize: '2.5vw', 
        padding: '2vh', 
        backgroundColor: '#FFFFFF', 
        letterSpacing: '1px', 
        fontWeight: 'lighter',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.5vw',
            letterSpacing: '0.5px', 
        }
    },
    icon_label_down: {
        color: 'grey',
        position: 'absolute', 
        top: '90vh', 
        [theme.breakpoints.down('xs')]: {
            top: '43vh',
            display: 'none',
        }
    },
    icon_label_up: {
        color: 'grey',
        position: 'absolute', 
        top: '93vh', 
        [theme.breakpoints.down('xs')]: {
            top: '45vh',
            display: 'none',
        }
    },
    icon: {
        position: 'absolute', 
        top: '93vh', 
        [theme.breakpoints.down('xs')]: {
            top: '45vh',
            display: 'none',
        }
    },
    icon_arrow_down: {
        color:'grey', 
        cursor: 'pointer', 
        transition: '0.25s',
        '&:hover': {
           transform: 'translate(0, 10px)', 
           color: 'black',
        }
    },
    icon_arrow_up: {
        position: 'relative', 
        top: '-4vh', 
        color:'grey', 
        cursor: 'pointer', 
        transition: '0.25s',
        '&:hover': {
           transform: 'translate(0, -10px)', 
           color: 'black',
        }
    }
  }));  

export default function Animation() {
    const [curr, setCurr] = React.useState("_");
    const classes = useStyles();


    function handleScroll(props) {
        window.scrollTo(0,props);
        if (props === 0) {
            var x = document.getElementById("scroll up");
            x.style.display = 'none';
            var xa = document.getElementById("scroll up label");
            xa.style.display = 'none';
            var y = document.getElementById("scroll down");
            y.style.display = 'inline';
            var ya = document.getElementById("scroll down label");
            ya.style.display = 'inline';
        }
        else {
            x = document.getElementById("scroll up");
            x.style.display = 'inline';
            xa = document.getElementById("scroll up label");
            xa.style.display = 'inline';
            y = document.getElementById("scroll down");
            y.style.display = 'none';
            ya = document.getElementById("scroll down label");
            ya.style.display = 'none';
        }
    }

    React.useEffect(() => {
        setTimeout(()=> {
            const intro_string = "< Hi, I am Yashvi Jaju >";
            let curr_string = intro_string.substring(0,curr.length+1);
            curr_string += (curr_string.length == intro_string.length) ? '' : '_';
            setCurr(curr_string);
        }, 200);
      }, [curr]);

    return(
        <div>
            <div className={classes.container_100vh}/>
            <div className={classes.container_50vh}/>
            <Grid container direction="row" justifyContent="center" className={classes.container_text}>
                <div className="col offset-l5" style={{'border': '2px solid #bee3f1', borderColor: blue, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={classes.text}>
                    <p>{curr}</p>
                    </div>
                </div>
            </Grid>
            <Grid container justifyContent="center" className={classes.icon_label_down}>
                <Typography variant="body2" id="scroll down label">SCROLL DOWN</Typography>
            </Grid>
            <Grid container justifyContent="center" className={classes.icon}>
                <KeyboardArrowDown id="scroll down" fontSize="large" className={classes.icon_arrow_down} onClick={()=>handleScroll(window.innerHeight * 0.87)} />
                <ExpandLess id="scroll up" fontSize="large" className={classes.icon_arrow_up} style={{display:'none'}} onClick={()=>handleScroll(0)} />
            </Grid> 
            <Grid container justifyContent="center" className={classes.icon_label_up}>
                <Typography variant="body2" id="scroll up label" style={{display:'none'}}>SCROLL UP</Typography>
            </Grid>
        </div>
    )
}