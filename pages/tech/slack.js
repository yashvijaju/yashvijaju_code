import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { DividerLeft } from '../../components/Partials/Divider'
import { Footer } from '../../components/Projects/Footer'

const primary = '#4A154B';
const primary_25 = '#36C5F0';
const secondary = '#4A154B';
const tertiary = '#36C5F0';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
    },
    divider: {
        margin: '5vh 5vw 2.5vh',
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

export default function Story() {
    const classes = useStyles();

    return(
        <>
            <Cover project_name="Slack : Software Engineer Intern" bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={"Slack"} role={"Software Engineer Intern"} year={"May - August 2022"} category={"Tech"} team={"Deployment Engineering"} tools={<div>Go, Kubernetes</div>} tools1={<div>Go<br/>Kubernetes</div>} tools2={<div></div>} introduction={<div>I interned as a Software Engineer at Slack in 2022, with the Deployment Engineering team.</div>}/>
            </Grid>

            <DividerLeft text="WORK SUMMARY" borderColor={primary_25} textColor={primary}/>

            <Fade>
                <Grid container direction="column" className={classes.container} style={{color: primary}}>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>1.&emsp;&emsp;Developed a templating library in Go to automatically generate Kubernetes configuration files for deploying the different versions</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>2.&emsp;&emsp;Reduced configuration file sizes from 500+ to 50 lines and launched to Slack's internal command line for 1000+ engineers to use</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>3.&emsp;&emsp;Prototyped new functionalities using Slack's design libraries on Figma and pitched to senior executives during the internal hackathon</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>4.&emsp;&emsp;Won 2nd position in the Salesforce intern pitch competition from amongst 1800+ interns globally; presented sustainability initiatives</Typography>
                </Grid>
            </Fade>

            <Footer prev="FOUNDER : CRAVE" prev_link="/startups/crave" prev_category="tech" next="SOFTWARE ENGINEER INTERN : TWO SIGMA" next_link="/tech/two-sigma" next_category="tech" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}