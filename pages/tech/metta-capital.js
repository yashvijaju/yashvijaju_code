import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
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
    embed: {
        width: '100%',
        height: '75vh', 
        border: '3px solid #9E0D1B',
        margin: '0 0 10vh 0',
    },
    title: {
        color: secondary,
        margin: '0 0 4vh 0',
    },
    text: {
        color: primary,
        margin: '0 0 2vh 0',
    }
}));

function ListItem(props) {
    const classes = useStyles();

    return(
        <>
        <Grid container className={classes.text}>
            <Grid item xs={1}>
                <Typography variant="body1"><b>{props.step}.</b></Typography>
            </Grid>
            <Grid item xs={10}>
                <Typography variant="body2">{props.text}</Typography>
            </Grid>
        </Grid>
        </>
    )
}

export default function Story() {
    const classes = useStyles();

    return(
        <>
        <Cover project_name="Metta Capital : Web Developer" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"Metta Capital Advisors LLP"} role={"UI / UX Designer, Web Developer"} year={"May-June 2020"} category={<div>Tech<br/></div>} team={"Independent Project"} tools={<div><u>Software:</u> React.Js, Hosted on Github Pages, Domain via GoDaddy <br/><u>UI / UX:</u> Figma, Material UI</div>} tools1={<div><u>Software:</u> <br/>React.Js <br/>Hosted on Github Pages <br/>Domain via GoDaddy <br/></div>} tools2={<div><u>UI / UX:</u> <br/>Figma <br/>Material UI <br/></div>} introduction={<div>Metta Capital Advisors LLP is a boutique investment bank in India. <br/>I worked closely with the CEO to design and develop the company’s website from scratch. The website is also fully responsive.<br/>Available on <a href="https://mettacapital.in" target="_blank" rel="noopener noreferrer"><u>https://mettacapital.in</u></a></div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container direction="column" className={classes.container}>
            <Grid item xs={12}>
                <iframe src="https://mettacapital.in" title="Metta Capital Advisors LLP" allowFullScreen={true} className={classes.embed}/>
            </Grid>
            <Typography variant="h5" className={classes.title}>
                <b>Notable Features</b>
            </Typography>

            <Fade>
                <ListItem step="1" text="The website is fully responsive — three different designs were created for the team modals to adapt to the standard mobile phone, tablet, and laptop/desktop screen sizes"/>
                <ListItem step="2" text="The color of the navigation bar (on the homepage) is modified depending on scroll position"/>
                <ListItem step="3" text="The transactions gallery is updated via arrays"/>
                <ListItem step="4" text="The Google Maps API was initially integrated with the contact page, but public github hosting required the key to be removed from the repository."/>
            </Fade>
        </Grid>

        <Footer prev="SOFTWARE ENGINEER INTERN : BOOKMYSHOW" prev_link="/work/bookmyshow" prev_category="work, tech" next="100 DAYS OF BUTTONS" next_link="/art/100-days-of-buttons" next_category="digital art" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )         
}