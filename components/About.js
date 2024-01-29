import React  from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';

const grey = '#efefef'

const descriptor = {color: '#43b14e', fontWeight: '600'}

export default function AboutMe() {
    return(
        <div>
            <Grid container direction="row" style={{'padding': '5vh 2vw'}}>
                <Grid item xs={1}/>
                <Hidden smUp>
                    <Grid item xs={10}>
                        <Typography variant="h6" style={{paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="caption" style={{fontWeight: 'lighter'}}>
                            void aboutMe() &#123;  <br/>
                            <div style={{paddingLeft: '20px'}}>
                                &gt; SoftwareEngineer* Yashvi = new SWE(); <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>lastName</span> = Jaju; <br/> 
                                    <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>university</span> = University of Southern California '24 (senior); <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>major</span> = Computer Science and Business Administration; <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                                    <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>currentlyReading</span> = The Bomber Mafia (Malcolm Gladwell); <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>currentlyBuilding</span> = Southwest Bot; <br/>
                                    <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>prevInternAt</span> = Two Sigma, Slack, Smarty.AI, Tour.Video; <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>prevFellowAt</span> = Kleiner Perkins Engineering Fellow; <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>currentlyActiveAt</span> =<a href="https://troylabs.vc/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>TroyLabs (startup accelerator)</a>; <br/>
                                    <br/>
                                &gt; Yashvi&rarr;<span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontWeight: 'lighter', color: '#0000EE'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                                </a>
                            </div>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={10} style={{display: 'flex', flexDirection: 'column', alignItems: 'center', 'borderRadius': '15px', padding: '4vh 4vw'}}>
                        <Typography variant="h5" style={{paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="body2" style={{fontWeight: 'lighter'}}>
                            void aboutMe() &#123;  <br/>
                            &emsp; &emsp;&gt; SoftwareEngineer* Yashvi = new SoftwareEngineer(); <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>university</span> = University of Southern California '24 (senior); <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>major</span> = Computer Science and Business Administration; <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>currentlyReading</span> = The Bomber Mafia (Malcolm Gladwell); <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>currentlyBuilding</span> = Southwest Bot; <br/>
                            <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>prevInternAt</span> = Two Sigma, Slack, Smarty.AI, Tour.Video; <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>prevFellowAt</span> = Kleiner Perkins Engineering Fellow; <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>currentlyActiveAt</span> = <a href="https://troylabs.vc/" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE'}}>TroyLabs (startup accelerator)</a>; <br/>

                            <br/>
                            &emsp; &emsp;&gt; Yashvi&rarr;<span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{color: '#0000EE', fontWeight: 'lighter'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}