import React from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles' 
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
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
  oppositeContent: {
    display: 'none',
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
      width: '49%',
      [theme.breakpoints.down('xs')]: {
        borderRadius: '10px',
        width: '100%',
        margin: '0 0 2.5vh',
      },
      transition: 'all .5s ease-in-out', 
      '&:hover': {
        cursor: 'pointer',
        transform: 'scale(1.15)',
      }
  },
  timeline_item: {
    margin: '0 0 5vh',
  },
}));

function TimelineEvent(props) {
  const classes = useStyles();

  return(
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{backgroundColor: primary}} variant="default"/>
        <TimelineConnector style={{backgroundColor: primary_25}}/>
      </TimelineSeparator>
      <TimelineContent className={classes.timeline_item}>
        <Fade>
          <Grid container justify="space-between">
            <Grid item xs={12} sm={1}>
              {props.time}
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="body2">
                <u>Iteration {props.iteration}:</u>
                <br/>
                {props.content}
                <br/><br/>
              </Typography>
              <Grid container item xs={12} justify="space-between">
                {props.images}
              </Grid>
            </Grid>
          </Grid>
        </Fade>
      </TimelineContent>
    </TimelineItem>
  )
};

export default function Story() {
  const classes = useStyles();
  
  return(
    <>
    <Cover project_name="Website (*this)" bookmark="/assets/bookmarks/bookmark-portfolio.svg"  bookmarkTitle="/assets/bookmarks/bookmark-portfolio-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
    <Grid container className={classes.container}>
        <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={<div>UI/UX Designer, Web Developer</div>} year={"June 2020-ongoing"} category={"Digital Art, Tech"} team={<div>Individual Project</div>} tools={<div><u>Software:</u> Next.js, GitHub Pages <br/> <u>UI / UX:</u> Figma, Material UI</div>} tools1={<div><u>Software:</u> <br/> Next.js <br/> GitHub Pages</div>} tools2={<div><u>UI / UX:</u> <br/> Figma <br/> Material UI</div>} introduction={<div>I designed and developed this website to document my projects in software development, digital and traditional design, and entrepreneurship. First developed in June 2020, this portfolio is constantly undergoing edits and updates. <br/> <br/> This is my story.</div>}/>
    </Grid>

    <Divider className={classes.divider}/>

    <Grid container direction="column" className={classes.container}>
      <Typography variant="h5">this-><b>timeline</b></Typography>
      <Timeline>
        <TimelineEvent time="JUNE 2020" iteration="0" content={<>Theme: Each project tells a story. Put together, this is the abridged story of my life. <br/>Color Palette: Pastels <br/>UI / UX: Project description can be read in the project’s modal (9 different modal designs were created). Projects can be filtered by category. Integrated contact-me form. Custom pre-loading and 404 pages. Typewriter animation on landing page developed with pure CSS and JS (no external package used).</>} images={<><img className={classes.image} src="/assets/projects/portfolio/portfolio1_0.jpg"/><img className={classes.image} src="/assets/projects/portfolio/portfolio1_1.jpg"/></>}/>

        <TimelineEvent time="DEC 2020" iteration="1" content={<>Theme: Each project tells a story. Put together, this is the abridged story of my life. <br/>Color Palette: Pastels, but the pallete is custom-designed for each project <br/>UI / UX: Each project has its own page, beginning with brief introductory details. Each category has its own landing page as well. Projects can be filtered by category. Integrated contact-me form. Custom pre-loading and 404 pages. Typewriter animation on landing page developed with pure CSS and JS (no external package used).</>} images={<><img className={classes.image} src="/assets/projects/portfolio/portfolio2_0.jpg"/><img className={classes.image} src="/assets/projects/portfolio/portfolio2_1.jpg"/></>}/>
        
      </Timeline>
    </Grid>
    <Footer prev="MANIFESTO" prev_link="/art/manifesto" prev_category="digital art" next="QUILLING" next_link="/art/quilling" next_category="traditional art" title={secondary} subtitle={primary} divider={primary_25}/>
    </>
    )
}