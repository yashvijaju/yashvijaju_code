import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'
import { Footer } from '../../components/Projects/Footer'

const primary = '#3B3B3B';
const primary_25 = '#43B14E';
const secondary = '#3B3B3B';
const tertiary = '#43B14E';

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
        borderColor: primary,
        borderRadius: '10px',
        height: 'auto',
        width: 'auto',
        maxWidth: '40vw',
        maxHeight: '40vh',
        margin: '0 1vw 0 0',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            width: 'auto',
            maxWidth: '90vw',
            maxHeight: '50vh',
            margin: '0 0 1vh 0',
        },
        transition: 'all .5s ease-in-out', 
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.15)',
        }
    },
}));


function Step_Component(props) {
    const classes = useStyles();

    return (
        <Grid item xs container direction="row" justifyContent="space-between" style={{marginBottom: '10vh'}}>
            <Grid item xs={12} sm={2}>
                <Typography variant="h5" style={{color: '#05602F'}}>
                    <b>Step {props.step_num}</b>
                </Typography>
                
            </Grid>
            <Grid item xs={12} sm={10} container direction="column" justifyContent="center">
                <Typography variant="body2" style={{color: primary, marginBottom: '1vh'}}>
                    {props.text}
                </Typography>
                <Grid container direction="row">
                    {props.images}
                </Grid>
            </Grid>
        </Grid>
    )
}


export default function Story() {
    const classes = useStyles();
    
    return(
        <>
        <Cover project_name="Automated Schedule Generator" bookmark="/assets/bookmarks/bookmark-schedule-generator.svg" bookmarkTitle="/assets/bookmarks/bookmark-schedule-generator-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Developer"} year={"November 2019"} category={<div>Tech <br/> <br/></div>} team={<div>Team Project, <br/> TrojanHacks 2019</div>} tools={<div><u>Software:</u> Beautiful Soup 4, Tkinter <br/><u>Languages:</u> Python, C++</div>} tools1={<div><u>Software:</u> <br/> Beautiful Soup 4 <br/> Tkinter <br/></div>} tools2={<div><u>Languages:</u> <br/>  Python <br/> C++</div>} introduction={<div>In under 18 hours, at TrojanHacks, we automated the process of generating schedules for school. <br/>The program receives the student’s list of classes as an input, and generates optimized schedules as output. <br/>Submitted on <a href="https://devpost.com/software/usc-schedule-maker-t6zf70" target="_blank" rel="noreferrer noopener"><u>Devpost</u></a>, ranked 3rd at the hackathon.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container direction="column" className={classes.container}>
            <Fade bottom>
                <Step_Component step_num="1" text="The program receives the student’s list of classes as an input, and generates optimized schedules as output." images={<><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator1.png"/></>}/>

                <Step_Component step_num="2" text="To generate the schedules, the program utilizes the Beautiful Soup API to scrape data for the student’s classes from USC’s Web Registration platform. A .csv file is created with each class’s data to improve the program’s efficiency — the local storage is searched before the API runs." images={<><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator2.png"/><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator3.png"/></>}/>

                <Step_Component step_num="3" text="The program also allows students to filter and customise their schedules by defining constraints on class timings. These constraints can include upper and lower bounds for class timings, minimum break between two classes, no classes on specific weekdays, etc."/>

                <Step_Component step_num="4" text="Using all this data, the program then generates all the possible schedules for the student. These are optimised to divide class-hours evenly over the week. The schedules can then be viewed through the Tkinter graphic user interface." images={<><Hidden xsDown><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator4.png"/></Hidden><Hidden xsDown><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator5.png" style={{'width': '20vw', height: '16.34vw'}}/></Hidden><Hidden smUp><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator5.png"/></Hidden><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator6.png"/></>}/>
            </Fade>
        </Grid>

        <Footer prev="QUILLING" prev_link="/art/quilling" prev_category="traditional art" next="TSHIRT LOGO" next_link="/art/tshirt-logo" next_category="digital art" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}