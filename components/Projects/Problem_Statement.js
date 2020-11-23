import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


var title = '#000000'; 
var text = '#000000';
var background = '#000000';



const useStyles = makeStyles((theme) => ({
    container: {
        padding: '3vw',
        borderRadius: '30px',
    },
    title: {
        margin: '0 0 2vh',
    },
    text: {
        margin: '0 0 2vh',
    }
}));

export function ProblemStatement(props) {       
    title = props.title_color;
    text = props.text_color;
    background = props.bg_color;

    const classes = useStyles();

    return(
        <>
            <Grid className={classes.container} container direction="column" style={{backgroundColor: background}}>
                <Typography variant="body1" className={classes.title} style={{color: title}}><u><b>Problem Statement</b></u></Typography>
                <Typography className={classes.text} variant="body2" style={{color: text}}>
                    Purchasing international snacks poses a huge pain point — shipping fares are exceptionally high and deliveries take very long.
                    <br/>
                    According to our survey conducted with ~100 international students at the University of Southern California, 90% of international students crave food from home.
                </Typography>
                <Grid container direction="row">
                    {props.media}
                </Grid>
            </Grid>
        </>
    )
}; 