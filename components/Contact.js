import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { EmailOutlined, LinkedIn, GitHub } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'

const blue='#bee3f1';
const grey = '#000000';

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
            <Grid item xs={12} sm={4} container justifyContent="flex-end" className={classes.alignXs}>
              <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="large" className={classes.icon}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://www.linkedin.com/in/yashvi-jaju/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" className={classes.icon}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://github.com/yashvijaju/" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" className={classes.icon}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://dribbble.com/yashvijaju/" target="_blank" rel="noopener noreferrer"><svg className={classes.icon} style={{width: '32px'}} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M50 0C22.397 0 0 22.397 0 50C0 77.603 22.397 100 50 100C77.5488 100 100 77.603 100 50C100 22.397 77.5488 0 50 0ZM83.026 23.0477C88.9913 30.3145 92.5705 39.5879 92.679 49.6204C91.269 49.3492 77.1692 46.4751 62.961 48.2646C62.6356 47.5597 62.3644 46.8004 62.0391 46.0412C61.1714 43.9805 60.1952 41.8655 59.2191 39.859C74.9458 33.4599 82.1041 24.2408 83.026 23.0477ZM50 7.37527C60.846 7.37527 70.7701 11.4425 78.308 18.1128C77.5488 19.1974 71.0954 27.82 55.9111 33.5141C48.9154 20.6616 41.1605 10.141 39.9675 8.5141C43.167 7.75488 46.5293 7.37527 50 7.37527ZM31.833 11.3883C32.9718 12.9067 40.564 23.4816 47.6681 36.0629C27.7115 41.3774 10.0868 41.269 8.18872 41.269C10.9544 28.0369 19.9024 17.0282 31.833 11.3883ZM7.26681 50.0542C7.26681 49.6204 7.26681 49.1866 7.26681 48.7527C9.11063 48.8069 29.8265 49.0781 51.1388 42.679C52.3861 45.0651 53.5249 47.5054 54.6095 49.9458C54.0672 50.1085 53.4707 50.2712 52.9284 50.4338C30.9111 57.538 19.1974 76.9523 18.2213 78.5792C11.4425 71.0412 7.26681 61.0087 7.26681 50.0542ZM50 92.7332C40.1302 92.7332 31.0195 89.3709 23.8069 83.731C24.5662 82.1584 33.243 65.4555 57.321 57.0499C57.4295 56.9957 57.4837 56.9957 57.5922 56.9414C63.6117 72.5054 66.0521 85.5748 66.7028 89.3167C61.551 91.5401 55.9111 92.7332 50 92.7332ZM73.807 85.4122C73.3731 82.8091 71.0955 70.3362 65.5098 54.9892C78.9046 52.8742 90.6182 56.3449 92.0824 56.833C90.2386 68.7093 83.4056 78.9588 73.807 85.4122Z" fill="currentColor"/></svg></a>
            </Grid>
          </Grid>
      {/* </Hidden> */}
    </div>
    
  );
}