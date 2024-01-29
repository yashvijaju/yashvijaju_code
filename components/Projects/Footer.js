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
            <Grid container className={classes.container} direction="row" justifyContent="space-between" alignItems="center">
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

            <Grid container className={classes.container_footer_all} direction="row" justifyContent="space-between" alignContent="space-between">
                <Grid item xs={1}>
                    <img src="/assets/logo.png" className={classes.image} style={{marginRight: '1vw'}}/>
                </Grid>
                <Hidden xsDown>
                    <Grid item xs={6} container direction="column" justifyContent="space-between">
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
                <Grid item xs={7} sm={5} container direction="column" alignItems="flex-end" justifyContent="space-between">
                    <Typography variant="subtitle2" className={classes.text_footer_all}>Email: yjaju@usc.edu</Typography>
                    <Typography variant="subtitle2" className={classes.text_footer_all}>© 2020 Yashvi Jaju</Typography>
                    <Grid container direction="row" justifyContent="flex-end">
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
                        <a href="https://dribbble.com/yashvijaju/" target="_blank" rel="noopener noreferrer">
                            <svg className={classes.icon_footer_all} style={{width: '24px'}} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z" fill="currentColor"/></svg>
                        </a>
                    </Grid>
                </Grid>
            </Grid>

            <div style={{height: '1vh', width: '100vw'}}/>
        </>
    )
}