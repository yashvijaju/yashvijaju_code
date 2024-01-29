import React  from 'react';
import Link from 'next/link';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';
import { Fade } from 'react-reveal';

const grey = '#efefef'

const descriptor = {color: '#43b14e', fontWeight: '600'}

export default function AboutMe() {
    return(
        <div>
            <Fade bottom>
            <Grid container direction="row" style={{'padding': '10vh 2vw 5vh 2vw'}}>
                <Grid item xs={1}/>
                <Hidden smUp>
                    <Grid item xs={10} style={{backgroundColor: grey, 'borderRadius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                        <Typography variant="h6" style={{paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="caption" style={{fontWeight: 'lighter'}}>
                            void aboutMe(int argc, char *argv[]) &#123;  <br/>
                            &emsp; &emsp;> SoftwareEngineer* Yashvi = new SoftwareEngineer(); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>university</span> = University of <br/> &emsp; &emsp; Southern California '24 <br/> &emsp; &emsp; (senior); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>major</span> = Computer Science <br/> &emsp; &emsp; and Business Administration; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = The Bomber Mafia <br/> &emsp; &emsp; (Malcolm Gladwell); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = Southwest Bot; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>prevInternAt</span> = Two Sigma, Slack, Smarty.AI, Tour.Video; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>prevFellowAt</span> = Kleiner Perkins Engineering Fellow; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyActiveAt</span> =<a href="https://troylabs.vc/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>TroyLabs (startup accelerator)</a>; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontWeight: 'lighter', color: '#0000EE'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={10} style={{backgroundColor: grey, 'borderRadius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                        <Typography variant="h5" style={{paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="body2" style={{fontWeight: 'lighter'}}>
                            void aboutMe(int argc, char *argv[]) &#123;  <br/>
                            &emsp; &emsp;> SoftwareEngineer* Yashvi = new SoftwareEngineer(); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>university</span> = University of Southern California '24 (senior); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>major</span> = Computer Science and Business Administration; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = The Bomber Mafia (Malcolm Gladwell); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = Southwest Bot; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>prevInternAt</span> = Two Sigma, Slack, Smarty.AI, Tour.Video; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>prevFellowAt</span> = Kleiner Perkins Engineering Fellow; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyActiveAt</span> = <a href="https://troylabs.vc/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>TroyLabs (startup accelerator)</a>; <br/>

                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE', fontWeight: 'lighter'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
            </Fade>
        </div>
    )
}