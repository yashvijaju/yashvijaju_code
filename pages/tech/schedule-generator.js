import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';

const font = 'Segoe UI';


export default function Story() {
    const [trojanHacksSrc, setTHSrc] = React.useState("/assets/trojanhacks1.png");
    const [trojanHacksId, setTHId] = React.useState(1);

    
    function handleTrojanHacks(props) {
        if (props === "next") {
        if (trojanHacksId === 1) {
            setTHId(2);
            setTHSrc("/assets/trojanhacks2.png");
        }
        else if (trojanHacksId === 2) {
            setTHId(3);
            setTHSrc("/assets/trojanhacks3.png");
        }
        else if (trojanHacksId === 3) {
            setTHId(4);
            setTHSrc("/assets/trojanhacks4.png");
        }
        else if (trojanHacksId === 4) {
            setTHId(1);
            setTHSrc("/assets/trojanhacks1.png");
        }
        }
        if (props === "prev") {
        if (trojanHacksId === 1) {
            setTHId(4);
            setTHSrc("/assets/trojanhacks4.png");
        }
        else if (trojanHacksId === 2) {
            setTHId(1);
            setTHSrc("/assets/trojanhacks1.png");
        }
        else if (trojanHacksId === 3) {
            setTHId(2);
            setTHSrc("/assets/trojanhacks2.png");
        }
        else if (trojanHacksId === 4) {
            setTHId(3);
            setTHSrc("/assets/trojanhacks3.png");
        }
        }
    }

    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="column" justify="center" alignItems="center">
                    <Grid item xs={10} style={{marginTop: '1vh'}}>
                    <Grid container direction="row" justify="center" style={{alignItems: 'center'}}>
                        <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleTrojanHacks("prev")}} style={{cursor: 'pointer'}}/>
                        </Grid>
                        <Grid item xs={10} style={{display:'flex', flexDirection: 'column', alignItems:'center'}}>
                        <img id="Trojan Hacks Schedule Maker" src={trojanHacksSrc} alt="Trojan Hacks Schedule Maker" title="Trojan Hacks Schedule Maker" style={{'width': '98%', paddingBottom: '1vh'}}/>
                        <Typography variant="caption" align="center">Step {trojanHacksId}</Typography>
                        </Grid>
                        <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                        <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleTrojanHacks("next")}} style={{cursor: 'pointer'}}/>
                        </Grid>
                    </Grid>
                    </Grid>
                    <Grid item xs={10} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        cout &lsaquo; &lsaquo; In under 18 hours, we automated the process of generating schedules. Our program allows users to input all the classes they'd like to register for. It then uses the Beautiful Soup API to scrape the web and get the class-data from USC's Web Registration platform. A .csv file is created for each class. Then, the program allows users to filter their schedules by earliest class, etc. Using this data, the program then generates schedules while trying to spread out class-hours evenly over the 5 days of the week. The generated schedules can then be viewed through the Tkinter graphic user interface;<br/>
                        <br/>
                        The project was submitted for TrojanHacks 2019 and won 3rd place.
                        
                        <br/> <br/>
                        Tech Stack: Beautiful Soup 4 (Web Scraping), Tkinter Library (GUI) <br/>
                        Languages: C++, Python <br/>
                        Submitted on Devpost: https://devpost.com/software/usc-schedule-maker-t6zf70 <br/>
                        Created: November 2019 <br/>
                        <br/>

                    </Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}