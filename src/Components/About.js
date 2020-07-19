import React  from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';
import { AttachFile } from '@material-ui/icons';

const grey = '#efefef'
const font = 'Segoe UI';

const descriptor = {color: '#43b14e', fontWeight: '600'}

export default function AboutMe() {
    return(
        <div>
            <Grid container direction="row" style={{'padding': '10vh 2vw 5vh 2vw'}}>
                <Grid item xs={1}/>
                <Hidden smUp>
                    <Grid item xs={10} style={{backgroundColor: grey, 'borderRadius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                        <Typography variant="h6" style={{'fontFamily': font, paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="caption" style={{'fontFamily': font, fontWeight: 'lighter'}}>
                            void aboutMe(int argc, char *argv[]) &#123;  <br/>
                            &emsp; &emsp;> Innovator* Yashvi = new Innovator(); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>university</span> = University of <br/> &emsp; &emsp; Southern California '23; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>major</span> = Computer Science and <br/> &emsp; &emsp; Business Administration; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>skills</span> = ["C++", "ReactJs", <br/> &emsp; &emsp; "Material UI", "Git", "Adobe Photoshop", <br/> &emsp; &emsp; "Typography"]; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>interests</span> = ["Code", "Create", <br/> &emsp; &emsp;"Bake", "Quill", "Paint", "Kathak", <br/> &emsp; &emsp;"Volunteer", "Learn", "Photo Diaries"]; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = When <br/> &emsp; &emsp; Breath Becomes Air; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyLearning</span> = Web-<br/> &emsp; &emsp;Development and UI-UX frameworks; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = Flask <br/> &emsp; &emsp;-based Dash website for COVID-19; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyDesigning</span> = 100 <br/> &emsp; &emsp;Days of Design (buttons); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyInterningAt</span> = iSPIRT <br/> &emsp; &emsp;(think-tank); <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontWeight: 'lighter', fontFamily: font, color: 'black'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
                <Hidden xsDown>
                    <Grid item xs={10} style={{backgroundColor: grey, 'borderRadius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                        <Typography variant="h5" style={{'fontFamily': font, paddingBottom: '2vh', fontWeight: 'normal', color: '#43b14e'}}>
                            &#123; About Me &#125;
                        </Typography>
                        <Typography variant="body2" style={{'fontFamily': font, fontWeight: 'lighter'}}>
                            void aboutMe(int argc, char *argv[]) &#123;  <br/>
                            &emsp; &emsp;> Innovator* Yashvi = new Innovator(); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>lastName</span> = Jaju; <br/> 
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>university</span> = University of Southern California '23; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>major</span> = Computer Science and Business Administration; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>minor</span> = Entrepreneurship; <br/>
                            <br/>
                            
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>skills</span> = ["C++", "ReactJs", "Material UI", "Git", "Adobe Photoshop", "Typography"]; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>interests</span> = ["Code", "Create", "Bake", "Quill", "Paint", "Kathak", "Social Volunteer", "Learn", "Photo Diaries"]; <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = When Breath Becomes Air; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyLearning</span> = Data-Visualisation Tools (Plotly: Dash); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = Flask-based Dash website for COVID-19; <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyDesigning</span> = 100 Days of Design (buttons); <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyInterningAt</span> = iSPIRT (think-tank); <br/>
                            <br/>
                            &emsp; &emsp;> Yashvi-><span style={descriptor}>Resume</span> = <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontWeight: 'lighter', fontFamily: font, color: 'black'}}><AttachFile fontSize="small" style={{color:'grey'}}/> click to open; <br/>
                            </a>
                            &#125;
                        </Typography>
                    </Grid>
                </Hidden>
            </Grid>
        </div>
    )
}