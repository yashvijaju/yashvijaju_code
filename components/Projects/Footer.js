import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Grid, Divider, Hidden } from '@material-ui/core'
import { ArrowForwardIos, ArrowBackIos, Apps } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
        [theme.breakpoints.down('sm')]: {
            margin: '0 0 5vh 0',
            padding: '0 5vw',
        },
    },
    divider: {
        margin: '15vh 5vw 5vh',
        display: 'flex',
        width: '90vw',
        background: 'black',
        [theme.breakpoints.down('xs')]: {
            margin: '5vh 5vw 5vh',
        },
    },
    menu: {
        color: props => props.divider,
        '&:hover': {
            color: props => props.title,
        },
        cursor: 'pointer',
    },
    icon: {
        color: props => props.title,
        cursor: 'pointer',
    },
    title: {
        color:  props => props.title, 
        cursor: 'pointer',
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
            <Divider className={classes.divider} style={{backgroundColor: props.divider}}/>
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
                                <Typography variant="body2" style={{color: props.subtitle}}>
                                    {props.prev_category}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Apps className={classes.menu} onClick={()=>handleScroll(window.innerHeight * 1.4)}/>
                </Grid>
                <Grid item>
                    <Grid container direction="row" alignItems="center">
                        <Grid item style={{marginRight: '2vw'}}>
                            <Grid container direction="column">
                                <Link href={props.next_link}>
                                    <Typography variant="body1" align="right" className={classes.title}>
                                        <b>{props.next}</b>
                                    </Typography>
                                </Link>
                                <Typography variant="body2" align="right" style={{color: props.subtitle}}>
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
        </>
    )
}