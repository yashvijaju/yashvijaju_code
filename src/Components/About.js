import React  from 'react';
import { Grid, Typography } from '@material-ui/core';

const pink='#F7CAC9';
const blue='#bee3f1';
const grey = '#efefef'
const font = 'Segoe UI';

const descriptor = {color: '#43b14e', fontWeight: 'normal'}

export default function AboutMe() {
    return(
        <div>
            <Grid container direction="row" style={{'padding': '10vh 2vw 5vh 2vw'}}>
                <Grid item xs={1}/>
                <Grid item xs={10} style={{backgroundColor: grey, 'border-radius': '15px', padding: '4vh 4vw 4vh 4vw'}}>
                    <Typography style={{'font-size': 'min(2.5vw, 15px)', 'font-family': font, fontWeight: 'lighter'}}>
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
                        &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyReading</span> = The Game of Thrones: A Feast for Crows; <br/>
                        &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyLearning</span> = Web-Development and UI-UX frameworks; <br/>
                        &emsp; &emsp;> Yashvi-><span style={descriptor}>currentlyBuilding</span> = A website for MettaCapital; <br/>
                        &#125;
                    </Typography>
                </Grid>
                
            </Grid>
        </div>
    )
}