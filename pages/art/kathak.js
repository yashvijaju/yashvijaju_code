import React from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { Footer } from '../../components/Projects/Footer'

const primary = '#543884';
const primary_25 = '#FF6FA5';
const secondary = '#3C1580';
const tertiary = '#FFD1DC';

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
        borderRadius: '20px',
        height: 'auto',
        width: '100%',
        transition: 'all .5s ease-in-out', 
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.15)',
        }
    },
    container_content: {
        margin: '0 0 3vh',
    },
    text: {
        color: primary,
    }
}));


export default function Story() {
    const classes = useStyles();

    return(
        <>
        <Cover project_name="Kathak" bookmark="/assets/bookmarks/bookmark-kathak.svg"  bookmarkTitle="/assets/bookmarks/bookmark-kathak-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Artist"} year={"2005-ongoing"} category={<div>Traditional Art<br/><br/><br/></div>} team={"Independent Project"} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>Kathak is a popular style of Indian classical dance that combines poetry with rhythmic movement to aid in storytelling.<br/>I have been practicing the Jaipur Gharana of Kathak since the age of 4 under Guru Kakoli, Guru Pavitra, and Guru Mili. Over the years, I have performed on multiple stages around the city and partaked in a handful of competitions as well. </div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container direction="row" justifyContent="space-between" className={classes.container}>
            <Grid item xs={6} container direction="column">
                <Fade>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak1.jpg"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text}>
                                When I look down <br/>
                                I see a bunch of <span style={{fontStyle: 'italic'}}>ghungroos</span> <br/>
                                Adorning my feet <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak3.jpg"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text}>
                                When I dance <br/>
                                My <span style={{fontStyle: 'italic'}}>ghungroos</span> sound like <br/>
                                Chains breaking <br/>
                                And music coming to life <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak5.jpg"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text}>
                            Time slows down <br/>
                            But I don't <br/>
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak7.jpg"/>
                        </Grid>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text}>
                                And when I look up <br/>
                                I am the wind <br/> 
                            </Typography>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
            <Grid item xs={6} container direction="column" style={{paddingTop: '20vh'}}>
                <Fade>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text} align="right">
                                It has been 14 years <br/>
                                Since I wore 10 <span style={{fontStyle: 'italic'}}>ghungroos</span> <br/>
                                Tiny bells tied together with a red thread <br/>
                                Today I wear 150 <br/>
                                But I feel light <br/>
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak2.jpg"/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text} align="right">
                                I stare at one spot <br/> 
                                And spin <br/>
                                One <br/>
                                Two <br/>
                                Three <br/>
                                Forty <br/>
                                Hundred <br/>
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak4.jpg"/>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" className={classes.container_content}>
                        <Grid item xs={4}>
                            <Typography variant="body2" className={classes.text} align="right">
                                I am unstoppable <br/>
                                Like the wind <br/>
                                A force to be reckoned with <br/>
                            </Typography>
                        </Grid>
                        <Grid item xs={7}>
                            <img className={classes.image} src="/assets/projects/kathak/kathak6.jpg"/>
                        </Grid>
                    </Grid>
                </Fade>
            </Grid>
        </Grid>

        <Footer prev="SOFTWARE ENGINEER INTERN : ISPIRT" prev_link="/work/ispirt" prev_category="work, tech" next="First Robotics Competition" next_link="/tech/first-robotics-competition" next_category="tech, side projects" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}