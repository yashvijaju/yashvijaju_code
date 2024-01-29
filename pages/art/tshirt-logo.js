import React from 'react';
import { Grid, Divider, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { Footer } from '../../components/Projects/Footer'

const primary = '#004366';
const primary_25 = '#8cd2ff';
const secondary = '#004366';
const tertiary = '#f9e076';

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
        transition: 'all .5s ease-in-out', 
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.15)',
        }
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
        <Cover project_name="T-Shirt Logo Design" bookmark="/assets/bookmarks/bookmark-tshirt-logo.svg"  bookmarkTitle="/assets/bookmarks/bookmark-tshirt-logo-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Graphic Designer"} year={"May 2020"} category={<div>Digital Art<br/><br/><br/></div>} team={"Independent  Class Project, ITP 190: Tools for Digital Graphics"} tools={<div><u>Adobe Photoshop:</u> Adjustment Layers, Masks & Paths, Layer Effects</div>} tools1={<div><u>Adobe Photoshop:</u> <br/>Adjustment Layers<br/>Masks & Paths <br/>Layer Effects <br/></div>} tools2={<div></div>} introduction={<div>I created this tshirt logo for a class project (ITP 190: Tools for Digital Graphics) using Adobe Photoshop. <br/>To design this, I first stacked three adjustment layers (light blue, dark blue, and yellow). Then, I used the pen tool to trace portions of the original image. These tracings were used to create paths, which were converted into selections, inversed, and then deleted from the layer masks in order to display the selection in the adjustment layer.<br/>Following that, I edited the stacking order to hide the sun behind a wave while reflecting it in another. Finally, I created custom vertical and horizontal type paths that wrapped around the wave, rasterised the typograpic layers, applied layer effects, and voila.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Fade>
            <Grid container direction="row" justifyContent="space-between" className={classes.container}>
                <Grid item xs={7}>
                    <ImageCaption image="/assets/projects/tshirt-logo-design/tshirt-logo-design.png" caption="Logo Design"/>
                </Grid>
                <Grid item xs={3} container direction="column" justifyContent="space-between">
                    <ImageCaption image="/assets/projects/tshirt-logo-design/tshirt-logo-design-ref.jpg" caption="Original Photo: Reference"/>
                    <ImageCaption image="/assets/projects/tshirt-logo-design/tshirt-logo-design-tshirt.jpg" caption="T-Shirt with Logo Design"/>
                </Grid>
            </Grid>
        </Fade>
         
        <Footer prev="SCHEDULE GENERATOR" prev_link="/tech/schedule-generator" prev_category="tech, side projects" next="KEYFRAME ANIMATION" next_link="/art/animation" next_category="digital art" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}