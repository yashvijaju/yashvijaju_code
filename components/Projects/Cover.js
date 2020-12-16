import React from 'react';
import { Grid, Hidden, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


var title = '#000000'; 
var text = '#000000';
var background = '#000000';



const useStyles = makeStyles((theme) => ({
    container: {
        padding: '5vw',
        height: '50vh',
        [theme.breakpoints.down('sm')]: {
            height: '25vh',
            margin: '0 0 5vh 0',
            padding: '10vw 5vw 5vw',
        },
    },
    title: {
        margin: '0 0 1vh',
    },
    logo_image: {
        height: 'auto',
        [theme.breakpoints.down('sm')]: {
            width: '35%',
        },
        [theme.breakpoints.up('sm')]: {
            width: '25%',
        },
        padding: '0',
    },
}));

// Props:
// Name or Logo: project_name or project_logo
// Subheading: project_subheading
export function Cover(props) {       
    title = props.title_color;
    text = props.text_color;
    background = props.bg_color;

    const classes = useStyles();

    return(
        <>
            <Grid className={classes.container} container direction="column" justify="center" style={{backgroundColor: background}}>
                {props.project_logo && 
                    <img className={classes.logo_image} src={props.project_logo}></img>
                }
                {props.project_name && 
                    <>
                        <Hidden smUp>
                            <Typography variant="h5" className={classes.title} style={{color: title}}><b>
                                {props.project_name}
                            </b></Typography>
                        </Hidden>
                        <Hidden xsDown>
                            <Typography variant="h3" className={classes.title} style={{color: title}}><b>
                                {props.project_name}
                            </b></Typography>
                        </Hidden>
                    </>
                    
                }
                {props.project_subheading &&
                    <Typography className={classes.text} variant="body1" style={{color: title}}>
                        {props.project_subheading}
                    </Typography>
                }
            </Grid>
        </>
    )
}; 