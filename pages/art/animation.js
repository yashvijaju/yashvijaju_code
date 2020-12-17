import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'

const primary = '#000000';
const primary_25 = '#979797';
const secondary = '#000000';
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
    video: {
        border: '2px solid #000000',
        borderRadius: '20px',
        height: 'auto',
        width: '100%',
        outline: 'none',
    },
    title: {
        color: secondary,
        margin: '0 0 1vh',
    },
    text: {
        color: primary,
        margin: '2vh 0',
    }
}));

export default function Story() {
  const classes = useStyles();
  
  return(
      <>
      <Cover project_name="Keyframe Animation" bg_color={tertiary} title_color={secondary}></Cover>
      <Grid container className={classes.container}>
          <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Graphic Designer"} year={"April 2020"} category={<div>Digital Art <br/> <br/></div>} team={"Individual Class Project, Des 332A: Typography"} tools={<div>Adobe Photoshop</div>} tools1={<div>Adobe Photoshop</div>} tools2={<div></div>} introduction={<div>Capture accidents, because “the wrong answer is the right answer in search of a different question.”  <br/>The animation here is inspired by Bruce Mau’s Incomplete Manifesto for Growth. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us against accidents by creating a red “accident” and capturing it inside prison bars made from all the warning signs.</div>}/>
      </Grid>

      <Divider className={classes.divider}/>

      <Grid container direction="row" className={classes.container} justify="center">
        <Grid item xs={12} sm={5} container direction="column">
          <Typography variant="body1" className={classes.title}>
            <b>Iteration 1</b>
          </Typography>
          <Grid item xs={12}>
            <video className="Animation" id="Video Animation" src="/assets/projects/keyframe-animation/animation_1.mp4" alt="Animation" title="Animation" className={classes.video} autoPlay controls muted/>
          </Grid>
        </Grid>
        <Hidden xsDown>
          <Grid item xs={2} container justify="center" alignItems="center">
            <Typography variant="h2" className={classes.title}>
              ⇝
            </Typography>
          </Grid>
        </Hidden>
        <Hidden smUp>
          <Grid item xs={2} container justify="center" alignItems="center" style={{margin: '2vh 0 1vh'}}>
            <Typography variant="h2" className={classes.title}>
              ↯
            </Typography>
          </Grid>
        </Hidden>
        
        <Grid item xs={12} sm={5} container direction="column">
          <Typography variant="body1" className={classes.title}>
            <b>Iteration 4</b>
          </Typography>
          <Grid item xs={12} justify="center">
            <video className="Animation" id="Video Animation" src="/assets/projects/keyframe-animation/animation_2.mp4" alt="Animation" title="Animation" className={classes.video} autoPlay controls muted/>
          </Grid>
        </Grid>
      </Grid>
      </>
  )
}

// export default function Story() {
//     return(
//         <div>
//           <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
//             <Grid container direction="row" justify="center">
//                 <Grid item xs={10} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                   <video className="Animation" id="Video Animation" src="/assets/animation.mp4" alt="Animation" title="Animation" style={{'width': '90%'}} autoPlay controls muted/>
//                 </Grid>
//               <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
//                 <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
//                   Capture accidents <br/>
//                   because <br/>
//                   “The wrong answer is the right answer <br/>
//                   In search of a different question” <br/>
//                   <br/>
//                   Everywhere I go <br/>
//                   Neon yellow signs warn me <br/>
//                   Be careful <br/>
//                   Prevent accidents <br/>
//                   <br/>
//                   Yet <br/>
//                   I create an accident <br/>
//                   And capture it <br/>
//                   In prison bars <br/>
//                   Made from all the warning signs <br/>
//                   <br/>
//                   My head spins <br/>
//                   Bright red <br/>
//                   Screaming "No" <br/>
//                   <br/>
//                   But I paint it <br/>
//                   Neon yellow <br/>
//                   --
//                   <br/> <br/>                  
                 
//                   Inspiration: Bruce Mau's <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span> <br/>
//                   Adobe Tools: Adobe Photoshop Keyframe Animation <br/>
//                   Created: Apr 2020
//                 </Typography>
//               </Grid>
//             </Grid>
//           </Grid>
//         </div>
//     )
// }