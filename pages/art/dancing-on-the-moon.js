import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'

const primary = '#9C4721';
const primary_25 = '#CDA28F';
const secondary = '#9C4721';
const tertiary = '#FFFAD0';

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
    width: '100%',
  },
  text: {
      color: primary,
  }
}));

export default function Story() {
  const classes = useStyles();

  return(
    <>
          <Cover project_name="Dancing on the Moon" bg_color={tertiary} title_color={secondary}></Cover>
          <Grid container className={classes.container}>
              <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Artist"} year={"2016"} category={"Traditional Art"} team={"Personal Project"} tools={<div>Oil Paints <br/>Texture Paint, Palette Knife <br/>Canvases</div>} tools1={<div>Oil Paints <br/>Texture Paint, Palette Knife <br/>Canvases</div>} tools2={<div></div>} introduction={<div>‘Dancing on the Moon’ is an oil painting of two dancers caught mid-motion. <br/>This piece illustrates how although time doesn’t stop, our emotions and actions influence our perceptions of the speed of time. In this instant, time “slows down” for both dancers as they perform their dance routine, each moment stretched as wide as their bodies.</div>}/>
          </Grid>

          <Divider className={classes.divider}/>

          <Grid container direction="row" justify="space-between" alignItems="center" className={classes.container}>
            <Grid item xs={12} sm={8}>
              <img className={classes.image} src="/assets/projects/dancing-on-the-moon/dancing-on-the-moon.jpg" alt="Dancing on the Moon" title="Dancing on the Moon"/>
            </Grid>
            <Hidden smUp>
              <Grid item xs={12} sm={3} container justify="center" align="center" style={{margin: '5vh 0 0'}}>
                <Typography className={classes.text} variant="caption">
                  Tried to capture motion <br/>
                  In a picture <br/>
                  But captured the beauty of motion <br/>
                  Because <br/>
                  Time doesn't wait for you <br/>
                  Or me <br/>

                  <br/>

                  tick tock <br/>

                  <br/>

                  Ignores all borders <br/>
                  As we move <br/>
                  From one timeframe to another <br/>
                  Lost in time <br/>
                  Dancing on the moon <br/>
                  
                  <br/>
                </Typography>
              </Grid>
            </Hidden>
            <Hidden smDown>
              <Grid item xs={12} sm={3}>
                <Typography className={classes.text} variant="caption">
                  Tried to capture motion <br/>
                  In a picture <br/>
                  But captured the beauty of motion <br/>
                  Because <br/>
                  Time doesn't wait for you <br/>
                  Or me <br/>

                  <br/>

                  tick tock <br/>

                  <br/>

                  Ignores all borders <br/>
                  As we move <br/>
                  From one timeframe to another <br/>
                  Lost in time <br/>
                  Dancing on the moon <br/>
                  
                  <br/>
                </Typography>
              </Grid>
            </Hidden>
            
          </Grid>
      
    </>
  )
}