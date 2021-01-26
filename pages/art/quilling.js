import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'
import { Footer } from '../../components/Projects/Footer'

const primary = '#206CA3';
const primary_25 = '#B0D9F7';
const secondary = '#298FD7';
const tertiary = '#CFF4D2';

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
    title: {
        color: secondary,
        margin: '0 0 1vh',
    },
    text: {
        color: primary,
        margin: '0 0 2vh',
        [theme.breakpoints.down('xs')]: {
          textAlign: 'center',
      },
    },
    image: {
      width: '100%',
      height: 'auto',
      margin: '0 0 2vh 0',
      border: '1.5px solid #000000',
      borderColor: primary,
      borderRadius: '20px',
      transition: 'all .5s ease-in-out', 
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.15)',
      }
    }
}));


export default function Story() {
  const classes = useStyles();
  
  return(
    <>
      <Cover project_name="Quiilling" bookmark="/assets/bookmarks/bookmark-quilling.svg"  bookmarkTitle="/assets/bookmarks/bookmark-quilling-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
      <Grid container className={classes.container}>
          <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Artist"} year={"2013-2016"} category={<div>Traditional Art</div>} team={"Independent Project"} tools={<div>Quilling Needle, Quilling Paper</div>} tools1={<div>Quilling Needle <br/> Quilling Paper</div>} tools2={<div></div>} introduction={<div>Quilling is an art of paper filigree in which strips of paper are rolled using a slitted-tool to create coils of paper. These coils are then shaped as desired, and sealed by glueing the loose end of paper. Put together, beautiful inticrate designs can be made. <br/>I designed and sold envelopes, cards, and boxes, amongst other traditional gift items, at boutique exhibitions in India for a few years.</div>}/>
      </Grid>

      <Divider className={classes.divider}/>

      {/* <Grid container className={classes.container} justify="space-between">
        <Grid item xs={3}>
          <Typography variant="body2" className={classes.text}>
            <b>The Puppet Show — </b><br/>
            <br/>
            The strip of paper <br/>
            Is a puppet <br/>
            And the tool <br/>
            The string <br/>
            <br/>
            The string twists <br/>
            And the puppet rotates <br/>
            The strip becomes <br/>
            A tight coil <br/>
            <br/>
            The strings are cut <br/>
            The puppet stretches <br/>
            The coil becomes <br/>
            Loose <br/>
            <br/>
            But <br/>
            I am there <br/>
            The puppeteer <br/>
            <br/>
            I pinch the coil <br/>
            Bend it to my will <br/>
            The loose coil becomes <br/>
            A teardrop <br/>
            A dimaond <br/>
            A victim of my imagination <br/>
            <br/>
            Glued in place <br/>
            All the puppets <br/>
            Together <br/>
            Become <br/>
            The Puppet Show <br/>
            —
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container className={classes.container} justify="space-between">
        <Grid item xs={12}>
          <Typography variant="body1" className={classes.title}>
          <b>The Puppet Show — </b><br/>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Fade>
            <Typography variant="body2" align="right" className={classes.text}>
              The strip of paper <br/>
              Is a puppet <br/>
              And the tool <br/>
              The string <br/>
              <br/>
              The string twists <br/>
              And the puppet rotates <br/>
              The strip becomes <br/>
              A tight coil <br/>
              <br/>
              <img src="/assets/projects/quilling/quilling_7.jpg" className={classes.image}/>
              <img src="/assets/projects/quilling/quilling_4.jpg" className={classes.image}/>
            </Typography>
          </Fade>
        </Grid>
        <Grid item xs={12} sm={3} container direction="column">
          <img src="/assets/projects/quilling/quilling_1.jpg" className={classes.image}/>
          <img src="/assets/projects/quilling/quilling_3.jpg" className={classes.image}/>
          <Fade>
            <Typography variant="body2" className={classes.text} align="center">
              The strings are cut <br/>
              The puppet stretches <br/>
              The coil becomes <br/>
              Loose <br/>
              <br/>
              But <br/>
              I am there <br/>
              The puppeteer <br/>
            </Typography>
            </Fade>
          <img src="/assets/projects/quilling/quilling_6.jpg" className={classes.image}/>
        </Grid> 
        <Grid item xs={12} sm={3} container direction="column">
          <img src="/assets/projects/quilling/quilling_5.jpg" className={classes.image}/>
          <img src="/assets/projects/quilling/quilling_9.jpg" className={classes.image}/>
          <Fade>
            <Typography variant="body2" className={classes.text}>
              I pinch the coil <br/>
              Bend it to my will <br/>
              The loose coil becomes <br/>
              A teardrop <br/>
              A dimaond <br/>
              A victim of my imagination <br/>
              <br/>
              Glued in place <br/>
              All the puppets <br/>
              Together <br/>
              Become <br/>
              The Puppet Show <br/>
              --
            </Typography>
          </Fade>
        </Grid> 
      </Grid>

      <Footer prev="PORTFOLIO" prev_link="/tech/portfolio" prev_category="tech" next="SCHEDULE GENERATOR" next_link="/tech/schedule-generator" next_category="tech, side projects" title={secondary} subtitle={primary} divider={primary_25}/>
    </>
  )
}