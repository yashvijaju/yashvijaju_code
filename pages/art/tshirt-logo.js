import React, { useState } from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'

const primary = '#9E0D1B';
const primary_25 = '#E6C2C6';
const secondary = '#F23838';
const tertiary = '#FFDCD0';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
    },
    divider: {
        margin: '5vh 5vw 7.5vh',
        display: 'flex',
        width: '90vw',
        background: primary_25,
        [theme.breakpoints.down('xs')]: {
            margin: '5vh 5vw 5vh',
        },
    },
    image: {
        // border: '1px solid #9E0D1B',
        height: 'auto',
        width: '100%',
    },
    caption: {
        transform: 'rotate(90deg)',
        width: '15vw',
        margin: '15vh 0 0 -6vw',
        color: primary,
    }
}));

function ImageCaption(props) {
    const classes = useStyles();

    return(
        <>
        <Grid container direction="row">
            <Hidden xsDown>
                <Grid item xs={11}>
                    <img className={classes.image} src={props.image}/>
                </Grid>
                <Grid item xs={1}>
                    <Typography variant="body2" className={classes.caption}>
                        {props.caption}
                    </Typography>
                </Grid>
            </Hidden>
            <Hidden smUp>
                <Grid item xs={12}>
                    <img className={classes.image} src={props.image}/>
                </Grid>
            </Hidden>
        </Grid>
            
        </>
    )
}

export default function Story() {
    const classes = useStyles();

    return(
        <>
        <Cover project_name="T-Shirt Logo Design" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Graphic Designer"} year={"May 2020"} category={<div>Digital Art<br/><br/><br/></div>} team={"Independent  Class Project, ITP 190: Tools for Digital Graphics"} tools={<div><u>Adobe Photoshop:</u> Adjustment Layers, Masks & Paths, Layer Effects</div>} tools1={<div><u>Adobe Photoshop:</u> <br/>Adjustment Layers<br/>Masks & Paths <br/>Layer Effects <br/></div>} tools2={<div></div>} introduction={<div>I created this tshirt logo for a class project (ITP 190: Tools for Digital Graphics) using Adobe Photoshop. <br/>To design this, I first stacked three adjustment layers (light blue, dark blue, and yellow). Then, I used the pen tool to trace portions of the original image. These tracings were used to create paths, which were converted into selections, inversed, and then deleted from the layer masks in order to display the selection in the adjustment layer.<br/>Following that, I edited the stacking order to hide the sun behind a wave while reflecting it in another. Finally, I created custom vertical and horizontal type paths that wrapped around the wave, rasterised the typograpic layers, applied layer effects, and voila.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container direction="row" justify="space-between" className={classes.container}>
            <Grid item xs={7}>
                <ImageCaption image="/assets/projects/tshirt-logo-design/tshirt-logo-design.png" caption="Logo Design"/>
            </Grid>
            <Grid item xs={3} container direction="column" justify="space-between">
                <ImageCaption image="/assets/projects/tshirt-logo-design/tshirt-logo-design-ref.jpg" caption="Original Photo: Reference"/>
                <ImageCaption image="/assets/projects/tshirt-logo-design/tshirt-logo-design-tshirt.jpg" caption="T-Shirt with Logo Design"/>
            </Grid>
        </Grid>
        </>
    )
}