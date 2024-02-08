import React from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { DividerLeft } from '../../components/Partials/Divider'
import { Footer } from '../../components/Projects/Footer'

const primary = '#000000';
const primary_25 = '#009aa6';
const secondary = '#ffffff';
const tertiary = '#009aa6';

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
            <Cover project_name="Two Sigma : Software Engineer Intern" bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={"Two Sigma"} role={"Software Engineer Intern"} year={"May - August 2023"} category={"Tech"} team={"Financial Analytics Engineering"} tools={<div>Go, Kubernetes</div>} tools1={<div>Angular<br/>Java<br/>TypeScript<br/>APIs</div>} tools2={<div></div>} introduction={<div>I interned as a Software Engineer at Two Sigma in 2023, with the Financial Analytics Engineering team, under the Platform Engineering pillar.</div>}/>
            </Grid>

            <DividerLeft text="WORK SUMMARY" borderColor={primary_25} textColor={primary}/>

            <Fade>
                <Grid container direction="column" className={classes.container} style={{color: primary}}>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>1.&emsp;&emsp;Developed an internal tool to make service entitlements visible using Angular, Java, and TypeScript, saving up to 100 hours annually</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>2.&emsp;&emsp;Enhanced data security by enabling non-technical owners to manage user access and streamlined processes for users to gain access</Typography>
                </Grid>
            </Fade>

            <Footer prev="SOFTWARE ENGINEER INTERN : SLACK" prev_link="/tech/slack" prev_category="tech" next="FOUNDER : CRAVE" next_link="/startups/crave" next_category="tech" title={primary_25} subtitle={primary_25} divider={primary_25}/>
        </>
    )
}