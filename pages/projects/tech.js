import React from 'react';
import Link from 'next/link';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { FooterAll } from '../../components/Projects/Footer'

const primary = '#4E4E4E';
const primary_25 = '#72D77C';
const secondary = '#43B14E';
const tertiary = '#EFEFEF';
const tertiary_25 = '#C5C5C5';


const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
    },
    text: {
        color: primary,
    },
    skills: {
        backgroundColor: primary,
        borderRadius: '15px',
        color: primary_25,
        padding: '3vh 3vw',
    },
    skills_content: {
        [theme.breakpoints.down('xs')]: {
            width: '95%',
            marginBottom: '7.5vh'
        },
    },
    project_title: {
        color: secondary,
        marginRight: '1vw', 
        backgroundColor: tertiary, 
        padding: '0.75vh 1vw', 
        borderRadius: '5px', 
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            padding: '1vh 3vw', 
            marginBottom: '1vh',
        },
    },
    project_text: {
        color: secondary,
    },
    tag: {
        borderRadius: '10px', 
        padding: '0.75vh 1vw', 
        border: '1px solid #000000', 
        borderColor: tertiary_25, 
        margin: '1.5vh 1vw 0 0', 
        color: tertiary_25,
        [theme.breakpoints.down('xs')]: {
            margin: '1.5vh 2vw 0 0', 
            padding: '1vh 3vw', 
        },
    }
}));

function ProjectTag(props) {
    const classes = useStyles();


    return(
        <>
            <Typography variant="caption" className={classes.tag}>
                <b>{props.tag}</b>
            </Typography>
        </>
    )
}

function ProjectCard(props) {
    const classes = useStyles();
    
    return(
        <>
            <Grid container direction="row" alignItems="center">
                <Link href={props.link}>
                    <Typography variant="body2" className={classes.project_title}>
                        <b>{props.title}</b>
                    </Typography>
                </Link>
                <Typography variant="body2" className={classes.project_text}>
                    {props.text}
                </Typography>
            </Grid>
            <Grid container direction="row" style={{marginBottom: '5vh'}}>
                {props.tags.map(tag => <ProjectTag tag={tag} key={tag}/>)}
            </Grid>
        </>
    )
}


export default function Story() {
    const classes = useStyles();

    return(
        <>
            <Cover project_name="<tech>" bg_color={tertiary} title_color={secondary}></Cover>

            <Fade>
                <Grid container className={classes.container}>
                    <Typography variant="h5" className={classes.text} style={{margin: '5vh 0'}}>
                        tech&rarr;<b>skills</b> 
                    </Typography>
                    <Grid item xs={12} container direction="row" justifyContent="space-between" className={classes.skills}>
                        <Grid item className={classes.skills_content}>
                            <Typography variant="body2" color="inherit">
                                skills&rarr;<b>Programming Languages</b> <br/>
                                <br/>
                                C++<br/>
                                Go <br/>
                                Java<br/>
                                JavaScript<br/>
                                Python <br/>
                                TypeScript<br/>
                            </Typography>
                        </Grid>
                        <Grid item className={classes.skills_content}>
                            <Typography variant="body2" color="inherit">
                                skills&rarr;<b>Full-Stack Web Dev</b><br/>
                                <br/>
                                Angular <br/>
                                React <br/>
                                Next <br/>
                                MongoDB  <br/>
                                MySQL <br/>
                                REST APIs <br/>
                            </Typography>
                        </Grid>
                        <Grid item className={classes.skills_content}>
                            <Typography variant="body2" color="inherit">
                                skills&rarr;<b>Mobile Dev</b><br/>
                                <br/>
                                Android Studio<br/>
                                React Native<br/>
                            </Typography>
                        </Grid>
                        <Grid item className={classes.skills_content}>
                            <Typography variant="body2" color="inherit">
                                skills&rarr;<b>Tools and Protocols</b><br/>
                                <br/>
                                Active Directory  <br/>
                                AWS  <br/>
                                OAuth 2.0  <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>
            <Grid container className={classes.container}>
                <Typography variant="h5" className={classes.text} style={{margin: '5vh 0'}}>
                    tech&rarr;<b>projects</b>
                </Typography>

                <ProjectCard title="TWO SIGMA" text="I developed an internal tool to make service entitlements visible using Angular, Java, and TypeScript, saving up to 100 hours annually." tags={["angular","java","typescript","api"]} link="/tech/two-sigma"/>
                
                <Fade bottom>
                <ProjectCard title="SLACK" text="I developed a templating library in Go to automatically generate Kubernetes configuration files for deploying the different versions." tags={["go","kubernetes"]} link="/tech/slack"/>
                <ProjectCard title="CRAVE" text="A progressive web app that delivers international, exotic snacks to students on campuses at affordable rates, on demand." tags={["javascript xml","react","redux","materialize"]} link="/startups/crave"/>
                <ProjectCard title="PORTFOLIO" text="A documentation of my projects in software engineering, art and design, and entrepreneurship." tags={["javascript xml","next.js","material ui"]} link="/tech/portfolio"/>
                <ProjectCard title="SCHEDULE GENERATOR" text="An automated solution for the creation and optimization of a USC student's class schedule based on the student’s list of proespective classes." tags={["python","c++","beautiful soup 4", "tkinter"]} link="/tech/schedule-generator"/>
                <ProjectCard title="ISPIRT — INDIA COVID MODEL" text="An epidemiological SEIR model to predict coronavirus infection trends in different districts and states in India over the next 15-30 days." tags={["python","flask","plotly","flourish","numpy","aws(s3,ec2","google analytics","wordpress"]} link="/tech/ispirt"/>
                <ProjectCard title="iSPIRT — VOLUNTEER MANAGEMENT TOOL" text="A custom LinkedIn-style directory for the internal team, with volunteer journeys mapped for admin use." tags={["javascript xml","next.js","mongodb","oauth 2.0","active directory","sso"]} link="/tech/ispirt"/>
                <ProjectCard title="CLIENT WEBSITE — METTA CAPITAL" text="A static responsive website designed and developed for a client." tags={["javascript xml","react.js","godaddy","github pages"]} link="/tech/metta-capital"/>
                </Fade>
            </Grid>

            <FooterAll divider={tertiary_25} title={primary} subtitle={secondary}/>
        </>
    )
}