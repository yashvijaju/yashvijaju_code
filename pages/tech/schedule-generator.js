import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'

const primary = '#9E0D1B';
const primary_25 = '#E6C2C6';
const secondary = '#F23838';
const tertiary = '#FFDCD0';

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
        border: '1px solid #9E0D1B',
        height: 'auto',
        width: 'auto',
        maxWidth: '40vw',
        maxHeight: '40vh',
        margin: '0 1vw 0 0',
        [theme.breakpoints.down('xs')]: {
            height: 'auto',
            width: 'auto',
            maxWidth: '90vw',
            maxHeight: '50vh',
            margin: '0 0 1vh 0',
        },
    },
}));


function Step_Component(props) {
    const classes = useStyles();

    return (
        <Grid item xs container direction="row" justify="space-between" style={{marginBottom: '10vh'}}>
            <Grid item xs={12} sm={2}>
                <Typography variant="h5" style={{color: primary}}>
                    <b>Step {props.step_num}</b>
                </Typography>
                
            </Grid>
            <Grid item xs={12} sm={10} container direction="column" justify="center">
                <Typography variant="body2" style={{color: primary, marginBottom: '1vh'}}>
                    {props.text}
                </Typography>
                <Grid container direction="row">
                    {props.images}
                </Grid>
            </Grid>
        </Grid>
    )
}


export default function Story() {
    const classes = useStyles();
    
    return(
        <>
        <Cover project_name="Automated Schedule Generator" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Developer"} year={"November 2019"} category={<div>Tech <br/> <br/></div>} team={"Team Project, TrojanHacks 2019"} tools={<div><u>Software:</u> Beautiful Soup 4, Tkinter <br/><u>Languages:</u> Python, C++</div>} tools1={<div><u>Software:</u> <br/> Beautiful Soup 4 <br/> Tkinter <br/></div>} tools2={<div><u>Languages:</u> <br/>  Python <br/> C++</div>} introduction={<div>In under 18 hours, at TrojanHacks, we automated the process of generating schedules for school. <br/>The program receives the student’s list of classes as an input, and generates optimized schedules as output. <br/>Submitted on Devpost, ranked 3rd at the hackathon.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container direction="column" className={classes.container}>
            <Step_Component step_num="1" text="The program receives the student’s list of classes as an input, and generates optimized schedules as output." images={<><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator1.png"/></>}/>

            <Step_Component step_num="2" text="To generate the schedules, the program utilizes the Beautiful Soup API to scrape data for the student’s classes from USC’s Web Registration platform. A .csv file is created with each class’s data to improve the program’s efficiency -- the local storage is searched before the API runs." images={<><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator2.png"/><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator3.png"/></>}/>

            <Step_Component step_num="3" text="The program also allows students to filter and customise their schedules by defining constraints on class timings. These constraints can include upper and lower bounds for class timings, minimum break between two classes, no classes on specific weekdays, etc."/>

            <Step_Component step_num="4" text="Using all this data, the program then generates all the possible schedules for the student. These are optimised to divide class-hours evenly over the week. The schedules can then be viewed through the Tkinter graphic user interface." images={<><Hidden xsDown><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator4.png"/></Hidden><Hidden xsDown><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator5.png" style={{'width': '20vw', height: '16.34vw'}}/></Hidden><Hidden smUp><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator5.png"/></Hidden><img className={classes.image} src="/assets/projects/schedule-generator/schedule-generator6.png"/></>}/>
        </Grid>
        
        </>
    )
    // const [trojanHacksSrc, setTHSrc] = React.useState("/assets/trojanhacks1.png");
    // const [trojanHacksId, setTHId] = React.useState(1);

    

    // return(
    //     <div>
    //         <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
    //             <Grid container direction="column" justify="center" alignItems="center">
    //                 <Grid item xs={10} style={{marginTop: '1vh'}}>
    //                 <Grid container direction="row" justify="center" style={{alignItems: 'center'}}>
    //                     <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //                     <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleTrojanHacks("prev")}} style={{cursor: 'pointer'}}/>
    //                     </Grid>
    //                     <Grid item xs={10} style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
    //                     <img id="Trojan Hacks Schedule Maker" src={trojanHacksSrc} alt="Trojan Hacks Schedule Maker" title="Trojan Hacks Schedule Maker" style={{'width': '98%', paddingBottom: '1vh'}}/>
    //                     <Typography variant="caption" align="center">Step {trojanHacksId}</Typography>
    //                     </Grid>
    //                     <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //                     <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleTrojanHacks("next")}} style={{cursor: 'pointer'}}/>
    //                     </Grid>
    //                 </Grid>
    //                 </Grid>
    //                 <Grid item xs={10} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
    //                 <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
    //                     cout &lsaquo; &lsaquo; In under 18 hours, we automated the process of generating schedules. Our program allows users to input all the classes they'd like to register for. It then uses the Beautiful Soup API to scrape the web and get the class-data from USC's Web Registration platform. A .csv file is created for each class. Then, the program allows users to filter their schedules by earliest class, etc. Using this data, the program then generates schedules while trying to spread out class-hours evenly over the 5 days of the week. The generated schedules can then be viewed through the Tkinter graphic user interface;<br/>
    //                     <br/>
    //                     The project was submitted for TrojanHacks 2019 and won 3rd place.
                        
    //                     <br/> <br/>
    //                     Tech Stack: Beautiful Soup 4 (Web Scraping), Tkinter Library (GUI) <br/>
    //                     Languages: C++, Python <br/>
    //                     Submitted on Devpost: https://devpost.com/software/usc-schedule-maker-t6zf70 <br/>
    //                     Created: November 2019 <br/>
    //                     <br/>

    //                 </Typography>
    //                 </Grid>
    //             </Grid>
    //         </Grid>
    //     </div>
    // )
}