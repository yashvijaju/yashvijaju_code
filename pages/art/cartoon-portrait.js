import React, {useState} from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { Footer } from '../../components/Projects/Footer'

const primary = '#206CA3';
const primary_25 = '#B0D9F7';
const secondary = '#298FD7';
const tertiary = '#CFF4D2';

const useStyles = makeStyles((theme) => ({
  container: {
      padding: '0 5vw',
      color: primary,
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
      borderRadius: '20px',
      border: '1px solid #206CA3',
      height: 'auto',
      width: '100%',
      margin: '0 0 1vh',
  }
}));

export default function Story() {
  const classes = useStyles();

  return(
      <>
      <Cover project_name="Cartoon Portrait" bg_color={tertiary} title_color={secondary}></Cover>
      <Grid container className={classes.container}>
          <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={<div>Graphic Designer<br/><br/></div>} year={"April 2020"} category={"Digital Art"} team={<div>Individual Project, ITP 190: Tools for Digital Graphics</div>} tools={<div><u>Adobe Photoshop:</u> Paths, <br/> Layer Masks, Adjustment Layers</div>} tools1={<div><u>Adobe Photoshop:</u> <br/> Paths <br/> Layer Masks <br/> Adjustment Layers</div>} tools2={<div></div>} introduction={<div>I created this cartoon illustration for a class project (ITP 190: Tools for Digital Graphics) using Adobe Photoshop. <br/> To design this, I first stacked many adjustment layers (one for each color ie skin tones for, well, skin, whites for the earrings and eyes, black for the hair, dress, spectacles frame, dark grey for the shadows, and so on). Then, I used the pen tool to trace portions of the original image. These tracings were used to create paths, which were converted into selections, and then deleted from the layer masks in order to display the selection in the adjustment layer.</div>}/>
      </Grid>

      <Divider className={classes.divider}/>

      <Hidden smUp>
        <Grid container className={classes.container} direction="column" spacing={3}>
          <Grid item xs={12} sm={4} container direction="column">
            <img className={classes.image} src="/assets/projects/cartoon-portrait/ref.jpg"/>
            <Typography variant="caption">
            1: Original Photo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container direction="column">
            <img className={classes.image} src="/assets/projects/cartoon-portrait/ps1.png"/>
            <Typography variant="caption">
            2: Cartoon created on Photoshop
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container direction="column">
            <img className={classes.image} src="/assets/projects/cartoon-portrait/ps2.jpg"/>
            <Typography variant="caption">
            3: Cartoon transposed on original photo
            </Typography>
          </Grid>
        </Grid>
      </Hidden>
      <Hidden xsDown>
        <Grid container className={classes.container} direction="row" spacing={3}>
          <Grid item xs={12} sm={4} container direction="column">
            <img className={classes.image} src="/assets/projects/cartoon-portrait/ref.jpg"/>
            <Typography variant="caption">
            1: Original Photo
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container direction="column">
            <img className={classes.image} src="/assets/projects/cartoon-portrait/ps1.png"/>
            <Typography variant="caption">
            2: Cartoon created on Photoshop
            </Typography>
          </Grid>
          <Grid item xs={12} sm={4} container direction="column">
            <img className={classes.image} src="/assets/projects/cartoon-portrait/ps2.jpg"/>
            <Typography variant="caption">
            3: Cartoon transposed on original photo
            </Typography>
          </Grid>
        </Grid>
      </Hidden>

      <Footer prev="PRIDE FOR LABOUR" prev_link="/startups/pride-for-labour" prev_category="entrepreneurship" next="A2Z" next_link="/startups/a2z" next_category="entrepreneurship" title={secondary} subtitle={primary} divider={primary_25}/>
    </>
  )
}