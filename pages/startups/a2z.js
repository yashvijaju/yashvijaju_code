import React, {useState} from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import {Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot, TimelineOppositeContent} from '@material-ui/lab';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'
import { Footer } from '../../components/Projects/Footer'

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
  problem_statement: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  solution_overview: {
      margin: '10vh 0 0vh',
      color: secondary, 
      [theme.breakpoints.down('xs')]: {
          margin: '7.5vh 0 0',
      },
  },
  title: {
    fontWeight: 'bold',
    margin: '0 0 2.5vh',
    color: primary,
    [theme.breakpoints.down('xs')]: {
        margin: '0',
    },
  },
  text: {
      color: primary,
  },
  image: {
    borderRadius: '20px',
    border: '1px solid #9E0D1B',
    height: 'auto',
    width: '32%',
    [theme.breakpoints.down('xs')]: {
      borderRadius: '10px',
      width: '100%',
      margin: '0 0 2.5vh',
    },
  },
  oppositeContent: {
    display: 'none',
  },
  timeline_item: {
    margin: '0 0 5vh',
    color: primary,
  },
}));

function TimelineEvent(props) {
  const classes = useStyles();

  return(
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot style={{backgroundColor: secondary}} variant="default"/>
        <TimelineConnector style={{backgroundColor: primary_25}}/>
      </TimelineSeparator>
      <TimelineContent className={classes.timeline_item}>
        <Grid container justify="space-between">
          <Grid item xs={12} sm={1} style={{color: secondary}}>
            {props.time}
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="body2" style={{ margin: '0 0 1vh', color: secondary}}>
              <b><u>{props.version}:</u></b>
              <br/>
            </Typography>
            <Typography variant="body2">
              {props.content}
              <br/><br/>
            </Typography>
            <Grid container item xs={12} justify="space-between">
              {props.images}
            </Grid>
          </Grid>
        </Grid>
      </TimelineContent>
    </TimelineItem>
  )
};

export default function Story() {
    const classes = useStyles();

    return(
      <>
        <Cover project_name="A2Z" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"A2Z"} role={"Co-Founder"} year={"May 2014 - May 2015"} category={"Writing, Entrepreneurship"} team={"5 Friends, aged 9-12"} tools={<div><u>Design, Editing:</u> <br/>Apple Pages <br/></div>} tools1={<div><u>Design, Editing:</u> <br/> Apple Pages <br/></div>} tools2={<div></div>} introduction={<div>At the age of 12, I founded A2Z as a backyard summer project with 5 friends. A2Z started as a pay-per-copy magazine that quickly converted into an advertisement-driven bi-monthly magazine distributed to 400+ flats in my housing society free of cost. <br/>As the founder, I learned to handle finances, seek advertisers, and negotiate costs. <br/>As the editor, I learned to edit articles and images, to create a narrative that strung all the different pieces of the magazine together into a single cohesive structure. <br/>As the co-founder, I learned to understand user markets, adapt models to cater to the target audience, and to choose suppliers at the intersection of price and quality. <br/>As an extremely young entrepreneur, I learned to chase my dreams to fruition and to ride the wave. But, more importantly, I learned failure and understood to withdraw when the tide gets too high.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container className={classes.container} id="container">
          <ProblemStatement title_color={secondary} text_color={primary} bg_color={tertiary} text={<div>Living in a society comprising of 6 apartment buildings, 24 floors per building, and 4 apartments per floor, creates a large community. However, I was surprised to witness a lack of correspondence between the younger members of the community. Thus, we founded A2Z as a communication channel with a mission to unify the society.<br/><br/></div>}/>

          <Timeline style={{marginTop: '5vh'}}>
            <TimelineEvent time="MAY 2014" version="#1, May 2014" content={<>The pages below have been taken from the first issue of the magazine. <br/>This particular issue was a pay-per-use (~$1 per copy), aimed at young teenagers entering their summer holidays. </>} images={<><img className={classes.image} src="/assets/projects/a2z/a2z_1_1.jpg"/><img className={classes.image} src="/assets/projects/a2z/a2z_1_2.jpg"/><img className={classes.image} src="/assets/projects/a2z/a2z_1_3.jpg"/></>}/>

            <TimelineEvent time="JULY 2014" version="#2, July 2014" content={<>The pages below have been taken from the second issue of the magazine. <br/>With this issue, the magazine's name changed from Teen Times to A2Z, reflective of our audience including the entire building community. We also adapted the model from a pay-per-use to a subscription model, which was paid for by advertisements.</>} images={<><img className={classes.image} src="/assets/projects/a2z/a2z_3_1.jpg"/><img className={classes.image} src="/assets/projects/a2z/a2z_3_2.jpg"/><img className={classes.image} src="/assets/projects/a2z/a2z_3_3.jpg"/></>}/>

            <TimelineEvent time="FEB 2015" version="#5, Feb 2015" content={<>The pages below have been taken from the second issue of the magazine. <br/> This was, unfortunately, one of the last issues of the magazine. Due to our busy schedules with school and lack of sponsorships, we decided to switch to an e-subscription. However, that, too, was not sustainable.</>} images={<><img className={classes.image} src="/assets/projects/a2z/a2z_2_1.jpg"/><img className={classes.image} src="/assets/projects/a2z/a2z_2_2.jpg"/><img className={classes.image} src="/assets/projects/a2z/a2z_2_3.jpg"/></>}/>
            
          </Timeline>
        </Grid>

        <Footer prev="CARTOON PORTRAIT" prev_link="/art/cartoon-portrait" prev_category="digital art" next="MANIFESTO" next_link="/art/manifesto" next_category="digital art" title={secondary} subtitle={primary} divider={primary_25}/>

        {/* 
          I remember <br/>
          Knocking on the doors of <br/>
          Every <br/>
          Single <br/>
          Flat <br/>
          Hoping to sell <br/>
          100 copies <br/>
          Rs. 60 (~$1) each <br/>
          <br/>
          I remember <br/>
          The closed doors <br/>
          The "No, sorry. <br/>
          We don't need this." <br/>
          <br/>
          But I also remember <br/>
          My goofy smile <br/>
          After <br/>
          Every <br/>
          Purchase <br/>
          <br/>
          I don't remember <br/>
          How many copies we sold <br/>
          That day <br/>
          We didn't sell out <br/>
          But <br/>
          We broke even <br/>
          <br/>
          And that was <br/>
          Motivation enough <br/>
          <br/>
          We kept going <br/>
          —
        */}

      </>
    )
}