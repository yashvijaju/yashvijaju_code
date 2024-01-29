import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import Link from 'next/link'
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
    item: {
      backgroundColor: 'white', 
      padding: '2.5vh 2.5vw 2.5vh 2.5vw', 
      borderRadius: '15px',
      margin: '0 1vw 2vh',
      transition: '0.25s',
      '&:hover': {
          transform: 'scale(1.05)',
          cursor: 'pointer',
          color: 'red',
          border: '1px solid grey',
      }
    },
    item_desc: {
      fontWeight: 'lighter',
    },
    item_title: {
      fontWeight: '500',
      margin: '0.5vh 0',
    },
    image: {
      width: '100%', 
      marginBottom: '1vh',
    }
  }));

export function ProjectCard(props) {       
    const classes = useStyles();

    const className_item = clsx("item", classes.item);


    return(
        <Link href={props.link}>
          <Grid className={className_item} id={props.labels} item xs={10} sm={5} md={3} >
            <img id={props.img_title} src={props.img_src} alt={props.img_title} title={props.img_title} className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
                {props.title}
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
                {props.description}
            </Typography>
          </Grid>
        </Link>
    )
}; 
