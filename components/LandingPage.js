import React from 'react';
import { Grid, Hidden } from '@material-ui/core';
import { ExpandMore, ExpandLess } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const blue='#bee3f1';
const font = 'Segoe UI';

const useStyles = makeStyles((theme) => ({
    container_100vh: {
        height: '100vh', 
        width: '100%', 
        backgroundColor: '#FFFFFF', 
        zIndex: '-1',
        [theme.breakpoints.down('xs')]: {
            height: '50vh', 
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
        fontFamily: font, 
        letterSpacing: '1px', 
        fontWeight: 'lighter',
        [theme.breakpoints.down('xs')]: {
            fontSize: '3.5vw',
            letterSpacing: '0.5px', 
        }
    },
    icon: {
        position: 'absolute', 
        top: '93vh', 
        left: '49.5vw',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
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
            <div className={classes.container_100vh}/>
            <div className={classes.container_50vh}/>
            <Grid container direction="row" justify="center" className={classes.container_text}>
                <div className="col offset-l5" style={{'border': '2px solid #bee3f1', borderColor: blue, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <div className={classes.text}>
                    <p>{curr}</p>
                    </div>
                </div>
            </Grid>
            <div className={classes.icon}>
                <ExpandMore id="scroll down" fontSize="large" style={{color:'grey', cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 0.75)} />
                <ExpandLess id="scroll up" fontSize="large" style={{color:'grey', cursor: 'pointer', display:'none'}} onClick={()=>handleScroll(0)} />
            </div> 
        </div>
    )
}