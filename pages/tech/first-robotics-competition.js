import React from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { Footer } from '../../components/Projects/Footer'

const primary = '#fd7c28';
const primary_25 = '#6EA4BF';
const secondary = '#27476E';
const tertiary = '#FF9B71';

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
        border: '1px solid #9E0D1B',
        borderRadius: '20px',
        width: '95%',
        height: 'auto',
        [theme.breakpoints.down('xs')]: {
            margin: '0 0 3vh',
            width: '100%',
        },
    },
}));

export default function Story() {
    const classes = useStyles();
    
    return(
        <>
        <Cover project_name="First Robotics Competition" bookmark="/assets/bookmarks/bookmark-first-robotics-competition.svg"  bookmarkTitle="/assets/bookmarks/bookmark-first-robotics-competition-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"First Robotics Competition"} role={"Mechnical Engineer, Safety-Captain"} year={"December 2017 - May 2018"} category={<div>Tech <br/> <br/></div>} team={"6024, R Factor"} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>The First Robotics Competition is a globally renowned robotics competition that simulates sports-tournaments with industry-grade equipent for high-school students. I was a Mechanical Engineer and Safety Captain for Team 6024-R Factor, the first team from India, for the 2018 season. <br/>We qualified for the First Championship at Houston, 2018 at the Southern Cross Regional (Sydney) tournament, where we won the Chairman’s Award. We also won the Safety Runners-Up Award (FIRST Championship, Houston) Safety Animation Award (pre-season, sponsored by Underwriters Laboratories), Safety Award (Southern Cross Regional), and Safety Runners-Up Award (South Pacific Regional).</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container justifyContent="space-between" className={classes.container}>
            <Grid item xs={12} sm={7} container direction="column" justifyContent="space-between">
                <Fade>
                    <img className={classes.image} src="/assets/projects/first-robotics-competiton/frc.jpg"/>
                    <img className={classes.image} src="/assets/projects/first-robotics-competiton/frc2.jpg"/>
                    <img className={classes.image} src="/assets/projects/first-robotics-competiton/frc3.JPG"/>
                </Fade>
            </Grid>
            <Grid item xs={12} sm={4}>
                <Typography variant="body2" style={{color: primary}}>
                    <span style={{fontStyle: 'italic'}}>First</span> — <br/> 
                    <br/>
                    <br/>
                    The first time <br/>
                    I took a step <br/>
                    Through the open doors <br/>
                    At the Parle-G factory <br/>
                    (my team's workshop) <br/>
                    I was hesitant <br/>
                    And I took a step back <br/>
                    But then I saw <br/>
                    More gears in the box <br/>
                    Than people in all of Mumbai <br/>
                    And I heard <br/>
                    The soft whir <br/>
                    Of motors <br/>
                    <br/>
                    <br/>
                    The gears in my heart <br/>
                    Clicked <br/>
                    So I took another step <br/>
                    <br/>
                    <br/>
                    The first time <br/>
                    He asked me to get the <br/>
                    Power Tool <br/>
                    And tighten the screws <br/>
                    I had to ask him for help <br/>
                    I didn't know machines <br/>
                    Had replaced screwdrivers as well <br/>
                    <br/>
                    <br/>
                    After that <br/>
                    I tightened all the screws <br/>
                    <br/>
                    <br/>
                    The first time <br/>
                    I spent the entire evening <br/>
                    At the factory <br/>
                    I didn't realise the sun had set <br/>
                    Hours felt like seconds <br/>
                    Morning turned into night <br/>
                    <br/>
                    <br/>
                    Earth now revolved around my robot <br/>
                    <br/>
                    <br/>
                    The first time <br/>
                    I visited another stall <br/>
                    At the Southern Cross Regional <br/>
                    In Sydney <br/>
                    I picked up their team badge <br/>
                    And pinned it on my tracks <br/>
                    <br/>
                    <br/>
                    The next day <br/>
                    My tracks were weighed in kilograms <br/>
                    A yellow-book for the teams <br/>
                    <br/>
                    <br/>
                    The first time <br/>
                    They announced 6024 <br/>
                    As the recipient <br/>
                    To the Chairman's Award <br/>
                    Qualifying us for the <br/>
                    First Championship <br/>
                    I couldn't believe it <br/>
                    None of us could <br/>
                    <br/>
                    <br/>
                    A dream come true <br/>
                    <span style={{fontStyle:'italic'}}>Houston, we have a problem:</span> <br/>
                    Our hearts are beating too fast <br/>
                </Typography>
            </Grid>
        </Grid>

        <Footer prev="KATHAK" prev_link="/art/kathak" prev_category="traditional art" next="PRODUCT DEVELOPMENT INTERN : MCDONALD's" next_link="/work/mcdonald" next_category="work" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}