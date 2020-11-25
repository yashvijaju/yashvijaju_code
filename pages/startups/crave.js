import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import TrackVisibility from 'react-on-screen'
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
    pitch_image: {
        borderRadius: '20px',
        border: '1px solid #9E0D1B',
        height: 'auto',
        width: '31%',
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
    feature_image: {
        width: '100%',
        height: 'auto',
        borderRadius: '30px',
        border: '1px solid #FFDCD0',
        boxShadow: '5px 5px #FFDCD0',
        margin: '5vh 0 1vh',
        outline: 'none',
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            left: '-6.5vw',
            margin: '3vh 0',
        },
    },
    feature_video: {
        width: '100%',
        height: 'auto',
        borderRadius: '30px',
        border: '1px solid #FFDCD0',
        boxShadow: '5px 5px #FFDCD0',
        margin: '5vh 0 1vh',
        outline: 'none',
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            left: '-6.5vw',
            margin: '3vh 0',
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
    }
}));

function VideoText(props) {
    const classes = useStyles();

    return (
        <Grid item xs container direction="row" justify="space-between">
            <Grid item xs={12} sm={8}>
                {(props.isVisible) && 
                <video className={classes.feature_video} alt="Crave Feature" src={props.video} type="video/mp4" autoPlay loop/>}
                {!(props.isVisible) && 
                <img className={classes.feature_image} alt="Crave Feature" src={props.image}/>}
            </Grid>
            <Grid item xs={12} sm={4} container direction="column" justify="center">
                <Typography className={classes.title} variant="body1">{props.title}</Typography>
                <Typography className={classes.text} variant="body2">{props.text}</Typography>
            </Grid>
        </Grid>
    )
}


export default function Crave() {
    const classes = useStyles();

    return(
        <>
            <Cover project_logo="/assets/projects/crave/logo.png" bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={"Crave"} role={"Developer, Co-Founder"} year={"Jan-May, 2020"} category={"Tech, Entrepreneurship"} team={"LavaLab (Startup Incubator, USC)"} tools={<div><u>Software:</u> React.Js, Redux <br/><u>UI/UX:</u> Materialize, Figma <br/><u>Demo:</u> Twitch <br/></div>} tools1={<div><u>Software:</u> <br/> React.Js <br/> Redux <br/> <br/><u>UI/UX:</u> <br/> Materialize <br/> Figma <br/> <br/></div>} tools2={<div><u>Demo:</u> <br/>  Twitch <br/></div>} introduction={<div>90% of international students crave their favorite snacks from home, but finding international snacks is a huge pain point for college students. Introducing Crave, a web app platform that offers on-demand international snack delivery for students on campus at affordable rates. GrubHub, but for international snacks. <br/> <br/> We prototyped Crave with support from LavaLab’s S’20 cohort. LavaLab is USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers. I worked with Jimenna Villarreal (PM), Emma Wang (Designer), and Sara Hanson (Developer) to build Crave from an idea to a working prototype.</div>}/>
            </Grid>

            <Divider className={classes.divider}/>

            <Grid container className={classes.container} id="container">
                <ProblemStatement title_color={secondary} text_color={primary} bg_color={tertiary} media={<div className={classes.problem_statement}>
                    <img className={classes.pitch_image} src="/assets/projects/crave/pitchdeck_0.jpg"/>
                    <img className={classes.pitch_image} src="/assets/projects/crave/pitchdeck_1.jpg"/>
                    <img className={classes.pitch_image} src="/assets/projects/crave/pitchdeck_2.jpg"/>
                </div>}/>
                
                <Grid item xs container direction="row" justify="space-between">
                    <Grid item xs={12} sm={8}></Grid>
                    <Grid item xs={11} sm={4}>
                        <Typography className={classes.solution_overview} variant="body1"><u><b>SOLUTION OVERVIEW</b></u></Typography>
                    </Grid>
                </Grid>
                <Grid container direction="column">
                    <TrackVisibility>
                        <VideoText image="/assets/projects/crave/loginImg.jpg" video="/assets/projects/crave/login.mp4" title="Easy Sign-In" text="We save your credentials in your browser’s LocalStorage to reduce any sign-in friction."></VideoText>
                    </TrackVisibility>
                    <TrackVisibility>
                        <VideoText image="/assets/projects/crave/filtersImg.jpg" video="/assets/projects/crave/filters.mp4" title="Smart Filters" text="Not sure what you’re craving? Use the filters to find snacks that feed your mood. "></VideoText>
                    </TrackVisibility>
                    <TrackVisibility>
                        <VideoText image="/assets/projects/crave/searchImg.jpg" video="/assets/projects/crave/search.mp4" title="Easy Search" text="Easily search for your favorite snacks, and if you can’t find it -- don’t worry, leave a request."></VideoText>
                    </TrackVisibility>
                    <TrackVisibility>
                        <VideoText image="/assets/projects/crave/itemDescImg.jpg" video="/assets/projects/crave/itemDesc.mp4" title="Add to Cart" text="Read through snack reviews as you customise your order."></VideoText>
                    </TrackVisibility>
                    <TrackVisibility>
                        <VideoText image="/assets/projects/crave/checkoutImg.jpg" video="/assets/projects/crave/checkout.mp4" title="One Click Checkout" text="Make any last edits, fill in your delivery details, and.... checkout! "></VideoText>
                    </TrackVisibility>
                </Grid>
            </Grid>
        </>
    )
}