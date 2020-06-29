import React from 'react';
import { Grid, Typography, TextField, Hidden, Divider } from '@material-ui/core';
import { EmailOutlined, LinkedIn, Instagram, Facebook, GitHub } from '@material-ui/icons';


const blue='#bee3f1';
const grey = '#000000';
const greyy = '#efefef';
const font = 'Segoe UI';

export default function Contact() {
  const [bodyText,setBodyText] = React.useState("");

  function handleClick() {
    var x= document.getElementById("Body");
    setBodyText(x.value);
  }

  return (
    <div>
      <Hidden mdUp>
        <Grid container direction="row" alignItems="center" style={{'padding': '5vh 2vw 2vh 2vw'}}>
          <Grid item xs={1}/>
          <Grid item xs={11} style={{display:'flex',flexDirection:'column'}}>
            <Typography variant="h4" style={{color:blue, fontFamily: font, fontWeight: 'bold'}}>
              What's your story?
            </Typography>
            <Typography variant="body1" style={{color:grey,fontFamily: font, fontWeight: 'lighter', paddingBottom:'2vh'}}>
              I wanna know, let's schedule a coffee chat!
            </Typography>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={10} style={{display: 'flex', flexDirection: 'column', alignItems:'left', paddingBottom:'2vh'}}>
            
            <TextField multiline rows={2} fullwidth id="Body" placeholder="" label="Send me a message:" style={{fontFamily:font, fontStyle: 'italic'}}/>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={1}/>
          <Grid item xs={10} style={{display: 'flex', flexDirection: 'column', alignItems:'left', paddingBottom:'2vh'}}>
            <a href={"mailto:yjaju@usc.edu?body="+bodyText} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} onClick={()=>handleClick()}><Typography variant="body2" style={{fontFamily:font, backgroundColor:blue, color:'black', padding: '1.5vh 2vw 1.5vh 2vw'}}>SEND</Typography></a>
          </Grid>
          <Grid item xs={1}/>
          <Grid item xs={12}>
            <Divider variant="middle" style={{marginTop: '4vh', marginBottom:'4vh'}}/>
          </Grid>
          <Grid item xs={12} style={{display:'flex', flexDirection:'column'}}>
            <Grid container direction="row" justify="center">
              <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="large" style={{color:blue}}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://www.linkedin.com/in/yashvi-jaju-61a3a3125/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" style={{color:blue}}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://www.instagram.com/yashvijaju/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram fontSize="large" style={{color:blue}}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://www.facebook.com/yashvi.jaju.3" target="_blank" rel="noopener noreferrer"><Facebook fontSize="large" style={{color:blue}}/></a>
              <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
              <a href="https://github.com/yjaju/" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" style={{color:blue}}/></a>
            </Grid>
          </Grid>
        </Grid>
      </Hidden>
      
      <Hidden smDown>
        <Grid container direction="row" alignItems="center" style={{'padding': '5vh 2vw 2vh 2vw'}}>
            <Grid item xs={1}/>
            <Grid item xs={4} style={{display:'flex',flexDirection:'column'}}>
              <Typography variant="h3" style={{color:blue, fontFamily: font, fontWeight: 'bold'}}>
                What's your story?
              </Typography>
              <Typography variant="h6" style={{color:grey,fontFamily: font, fontWeight: 'lighter'}}>
                I wanna know, let's schedule a coffee chat!
              </Typography>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5} style={{display: 'flex', flexDirection: 'column', alignItems:'left'}}>
              <Typography variant="body1" style={{fontFamily:font, fontWeight:'lighter'}}>
                Send me a message:
              </Typography>
              <TextField multiline rows={2} fullwidth id="Body" placeholder="" label="" style={{fontFamily:font, fontStyle: 'italic'}}/>
            </Grid>
          </Grid> 
          <Grid container direction="row" alignItems="center" style={{'padding': '0vh 2vw 5vh 2vw'}}>
            <Grid item xs={1}/>
            <Grid item xs={4} style={{display:'flex',flexDirection:'column'}}>
              <Grid container direction="row">
                <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="large" style={{color:blue}}/></a>
                <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
                <a href="https://www.linkedin.com/in/yashvi-jaju-61a3a3125/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="large" style={{color:blue}}/></a>
                <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
                <a href="https://www.instagram.com/yashvijaju/?hl=en" target="_blank" rel="noopener noreferrer"><Instagram fontSize="large" style={{color:blue}}/></a>
                <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
                <a href="https://www.facebook.com/yashvi.jaju.3" target="_blank" rel="noopener noreferrer"><Facebook fontSize="large" style={{color:blue}}/></a>
                <Typography variant="h6" style={{color:blue}}> &nbsp; | &nbsp; </Typography>
                <a href="https://github.com/yjaju/" target="_blank" rel="noopener noreferrer"><GitHub fontSize="large" style={{color:blue}}/></a>
              </Grid>
            </Grid>
            <Grid item xs={1}/>
            <Grid item xs={5} style={{display: 'flex', flexDirection: 'column', alignItems:'left'}}>
              <a href={"mailto:yjaju@usc.edu?body="+bodyText} target="_blank" rel="noopener noreferrer" style={{textDecoration:'none'}} onClick={()=>handleClick()}><Typography variant="body2" style={{fontFamily:font, backgroundColor:blue, color:'black', padding: '1.5vh 2vw 1.5vh 2vw', borderRadius:'25px'}}>SEND</Typography></a>
            </Grid>
          </Grid>
      </Hidden>
    </div>
    
  );
}