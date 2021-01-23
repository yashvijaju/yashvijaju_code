import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Divider, Hidden } from '@material-ui/core'
// Icons
import { ArrowForwardIos, ArrowBackIos, Apps } from '@material-ui/icons'
import { EmailOutlined, LinkedIn, Instagram, Facebook, GitHub } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
        [theme.breakpoints.down('sm')]: {
            margin: '0 0 5vh 0',
            padding: '0 5vw',
        },
        [theme.breakpoints.down('xs')]: {
            margin: '-5vh 0 5vh 0',
        },
    },
    divider: {
        margin: '15vh 5vw 5vh',
        display: 'flex',
        width: '90vw',
        backgroundColor: props => props.divider,
        [theme.breakpoints.down('xs')]: {
            margin: '5vh 5vw 5vh',
        },
    },
    menu: {
        color: props => props.divider,
        transition: '0.25s ease-in-out',
        '&:hover': {
            color: props => props.title,
            transform: 'scale(1.25)',
        },
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    icon: {
        color: props => props.title,
        cursor: 'pointer',
        transition: '0.25s ease-in-out',
        '&:hover': {
            transform: 'scale(1.25)',
        }
    },
    title: {
        color:  props => props.title, 
        cursor: 'pointer',
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.75rem',
        },
        transition: '0.25s ease-in-out',
        '&:hover': {
            transform: 'scale(1.25)',
        }
    },
    subtitle: {
        color: props => props.subtitle,
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.5rem',
        },
    },
    rightNav: {
        [theme.breakpoints.down('xs')]: {
            paddingTop: '10vh',
        },
    },
    image: {
        width: '90%',
        height: 'auto',
        position: 'relative',
        top: '2.5vh',
        transform: 'scale(1.75)',
        zIndex: '-1',
        [theme.breakpoints.down('sm')]: {
            top: '3.5vh',
            transform: 'scale(1.75)',
        },
        [theme.breakpoints.down('xs')]: {
            top: '4vh',
            left: '7.5vw',
            transform: 'scale(4)',
        },
    },
    link: {
        color: props => props.subtitle,
        padding: '0.5vh 1.25vw',
        borderRadius: '5px',
        '&:hover': {
            color: props => props.title,
            cursor: 'pointer',
            backgroundColor: 'pink',
        }
    },
    text_footer_all: {
        color: props => props.subtitle,
    },
    icon_footer_all: {
        color: props => props.subtitle,
        padding: '1vh',
        boxSizing: 'content-box',
        borderRadius: '5px',
        '&:hover': {
            color: props => props.title,
            cursor: 'pointer',
            backgroundColor: 'pink',
        }
        // marginLeft: '1vw',
    },
    container_footer_all: {
        padding: '0 5vw',
        [theme.breakpoints.down('xs')]: {
            margin: '-2vh 0 0',
        },
    }
}));

export function Footer(props) {
    const classes = useStyles(props);
    const router = useRouter()

    function handleScroll(props) {
        if (router.pathname !== "/") {
            router.push('/');
            window.scrollTo(0,0);
            // return;
        }
        window.scrollTo(0,props);
        if (props === 0) {
            var x = document.getElementById("scroll up");
            if (x !== null) {
                x.style.display = 'none';
            }
            var y = document.getElementById("scroll down");
            if (y !== null) {
                y.style.display = 'inline';
            }
        }
        else {
            x = document.getElementById("scroll up");
            if (x !== null) {
                x.style.display = 'inline';
            }
            y = document.getElementById("scroll down");
            if (y !== null) {
                y.style.display = 'none';
            }
        }
    }

    return(
        <>
            <Divider className={classes.divider}/>
            <Grid container className={classes.container} direction="row" justify="space-between" alignItems="center">
                <Grid item>
                    <Grid container direction="row" alignItems="center">
                        <Grid item>
                            <Link href={props.prev_link}>
                                <ArrowBackIos className={classes.icon}/>
                            </Link>
                        </Grid>
                        <Grid item style={{marginLeft: '2vw'}}>
                            <Grid container direction="column">
                                <Link href={props.prev_link}>
                                    <Typography variant="body1" className={classes.title}>
                                        <b>{props.prev}</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" className={classes.subtitle}>
                                    {props.prev_category}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Apps className={classes.menu} onClick={()=>handleScroll(window.innerHeight * 1.4)}/>
                </Grid>
                <Grid item className={classes.rightNav}>
                    <Grid container direction="row" alignItems="center">
                        <Grid item style={{marginRight: '2vw'}}>
                            <Grid container direction="column">
                                <Link href={props.next_link}>
                                    <Typography variant="body1" align="right" className={classes.title}>
                                        <b>{props.next}</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="right" className={classes.subtitle}>
                                    {props.next_category}
                                </Typography>
                            </Grid>
                        </Grid>
                        <Grid item>
                            <Link href={props.next_link}>
                                <ArrowForwardIos className={classes.icon}/>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <FooterAll divider={props.divider} title={props.title} subtitle={props.subtitle}/>
        </>
    )
}

export function FooterAll(props) {
    const classes = useStyles(props);
    const router = useRouter()

    function handleScroll(props) {
        if (router.pathname !== "/") {
            router.push('/');
            window.scrollTo(0,0);
            // return;
        }
        window.scrollTo(0,props);
        if (props === 0) {
            var x = document.getElementById("scroll up");
            if (x !== null) {
                x.style.display = 'none';
            }
            var y = document.getElementById("scroll down");
            if (y !== null) {
                y.style.display = 'inline';
            }
        }
        else {
            x = document.getElementById("scroll up");
            if (x !== null) {
                x.style.display = 'inline';
            }
            y = document.getElementById("scroll down");
            if (y !== null) {
                y.style.display = 'none';
            }
        }
    }

    return(
        <>
            <Divider className={classes.divider} style={{marginTop: '5vh'}}/>

            <Grid container className={classes.container_footer_all} direction="row" justify="space-between" alignContent="space-between">
                <Grid item xs={1}>
                    <img src="/assets/logo.jpg" className={classes.image} style={{marginRight: '1vw'}}/>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={6} container direction="column" justify="space-between">
                        <Grid container direction="row">
                            <Typography variant="subtitle2" className={classes.link} onClick={()=>handleScroll(0)}>HOME</Typography>
                            <Typography variant="subtitle2" className={classes.link} onClick={()=>handleScroll(window.innerHeight * 0.85)}>ABOUT ME</Typography>
                        </Grid>
                        <Grid container direction="row">
                            <Typography variant="subtitle2" className={classes.link} onClick={()=>handleScroll(window.innerHeight * 1.7)}>ALL PROJECTS</Typography>
                            <Link href="/projects/art-and-design">
                                <Typography variant="subtitle2" className={classes.link}>ART & DESIGN</Typography>
                            </Link>
                            <Link href="/projects/tech">
                                <Typography variant="subtitle2" className={classes.link}>TECH</Typography>
                            </Link>
                        </Grid>
                        <Grid container direction="row">
                            <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                                <Typography variant="subtitle2" className={classes.link} onClick={()=>handleScroll(0)}>RESUME</Typography>
                            </a>
                            <Typography variant="subtitle2" className={classes.link} onClick={()=>handleScroll(window.innerHeight * 20)}>CONTACT ME</Typography>
                        </Grid>
                    </Grid>
                </Hidden>
                <Grid item xs={7} sm={5} container direction="column" alignItems="flex-end" justify="space-between">
                    <Typography variant="subtitle2" className={classes.text_footer_all}>Email: yjaju@usc.edu</Typography>
                    <Typography variant="subtitle2" className={classes.text_footer_all}>© 2020 Yashvi Jaju</Typography>
                    <Grid container direction="row" justify="flex-end">
                        <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer">
                            <EmailOutlined fontSize="medium" className={classes.icon_footer_all}/>
                        </a>
                        {/* <Typography variant="body1" style={{color:props.subtitle}}> &nbsp; | &nbsp; </Typography> */}
                        <a href="https://www.linkedin.com/in/yashvi-jaju/" target="_blank" rel="noopener noreferrer">
                            <LinkedIn fontSize="medium" className={classes.icon_footer_all}/>
                            </a>
                        {/* <Typography variant="body1" style={{color:props.subtitle}}> &nbsp; | &nbsp; </Typography> */}
                        <a href="https://github.com/yjaju/" target="_blank" rel="noopener noreferrer">
                            <GitHub fontSize="medium" className={classes.icon_footer_all}/>
                        </a>
                    </Grid>
                </Grid>
            </Grid>

            <div style={{height: '1vh', width: '100vw'}}/>
        </>
    )
}