import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { DividerLeft } from '../../components/Partials/Divider'

const primary = '#DF1827';
const primary_25 = '#30475E';
const secondary = '#DF1827';
const tertiary = '#E8E8E8';

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
            <Cover project_name="BookMyShow : Software Analyst Intern" bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={"BookMyShow"} role={"Software Analyst"} year={"July 2018"} category={"Work"} team={"N/A"} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>BookMyShow is a digital ticketing company with a dominant share of events and entertainment ticketing in India. <br/>I interned as a Software Analyst at BookMyShow in July 2018, where I assisted with beta-testing the BookMyShow Partner App and analysing the software frameworks and libraries in use.</div>}/>
            </Grid>

            <Divider className={classes.divider}/>

            <DividerLeft text="WORK SUMMARY" borderColor={primary_25} textColor={primary}/>

            <Grid container direction="column" spacing={12} className={classes.container} style={{color: primary_25, marginTop: '5vh'}}>
                <Typography variant="body2" style={{marginBottom: '3vh'}}>1.&emsp;&emsp;Beta-tested BookMyShow’s Partner App</Typography>
                <Typography variant="body2" style={{marginBottom: '3vh'}}>2.&emsp;&emsp;Analysed the software frameworks and libraries used by BookMyShow</Typography>
                <Typography variant="body2" style={{marginBottom: '3vh'}}>3.&emsp;&emsp;Submitted a paper about BookMyShow’s technology stack</Typography>
                <Typography variant="body2" style={{marginBottom: '3vh'}}>Unfortunately, any further disclosure of information would lead to a breach of the confidentiality agreement.</Typography>
            </Grid>
        </>
    )
}