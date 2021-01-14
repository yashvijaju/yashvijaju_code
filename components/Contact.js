import React from 'react';
import { Grid, Typography, TextField, Hidden, Divider } from '@material-ui/core';
import { EmailOutlined, LinkedIn, Instagram, Facebook, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';


const blue='#bee3f1';
const grey = '#000000';
const greyy = '#efefef';
const font = 'Segoe UI';

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '5vh 5vw 2vh',
    [theme.breakpoints.down('sm')]: {
        margin: '0 0 5vh 0',
    },
    [theme.breakpoints.down('xs')]: {
        margin: '2vh 0 5vh 0',
    },
},
  icon: {
    color: blue,
    transition: '0.2s',
    '&:hover': {
      color: grey,
      transform: 'scale(1.25)',
    }
  },
  send_button: {
    backgroundColor: blue, 
    color:'black', 
    padding: '1.5vh 2vw 1.5vh 2vw',
    borderRadius:'25px',
    boxShadow: '4px 4px grey',
    '&:hover': {
      backgroundColor: blue,
      color: grey,
      transform: 'translate(3px,3px)',
      boxShadow: '1px 1px grey',
    }
  },
  alignXs: {
    [theme.breakpoints.down('xs')]: {
      marginTop: '2vh',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'flex-start',
    }
  }
}));

export default function Contact() {
  const classes = useStyles();

  const [bodyText,setBodyText] = React.useState("");

  function handleClick() {
    var x= document.getElementById("Body");
    setBodyText(x.value);
  }

  return (
    <div>
      
        <Grid container direction="row" alignItems="center" className={classes.container}>
            <Grid item xs={12} sm={8} container direction="column">
              <Typography variant="h3" style={{color:blue, fontWeight: 'bold'}}>
                What's your story?
              </Typography>
              <Typography variant="h6" style={{color:grey, fontWeight: 'lighter'}}>
                I would love to hear from you, let's schedule a coffee chat!
              </Typography>
            </Grid>
            <Grid item xs={12} sm={4} container justify="flex-end" className={classes.alignXs}>
              <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="large" className={classes.icon}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://www.linkedin.com/in/yashvi-jaju/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" className={classes.icon}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://github.com/yjaju/" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" className={classes.icon}/></a>
            </Grid>
          </Grid>
      {/* </Hidden> */}
    </div>
    
  );
}