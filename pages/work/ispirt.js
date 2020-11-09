import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={1}/>
                    <Grid item xs={4} md={4} style={{marginTop: '1vh'}}>
                    <img id="iSPIRT" src="/assets/ispirt.jpg" alt="iSPIRT" title="iSPIRT" style={{'width': '100%', paddingBottom: '1vh'}}/>
                    </Grid>
                    <Grid item xs={1}/>
                    <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        cout &lsaquo; &lsaquo; iSPIRT is a not-for-profit think tank that evangelises and develops societal tech platforms such as IndiaStack to transform India by solving some of her hard problems by addressing financial inclusion, affordable healthcare and access to education. iSPIRT team includes volunteers that created Aadhar, the largest public identity database in the world; <br/> <br/>
                        I interned as a software developer: <br/>
                        <br/>
                        June 2020 - Present: <br/>
                        • Working on the India COVID-19 SEIR Model: a predictive model for districts in India <br/>
                        <a href="https://indiacovidmodel.in" target="_blank" rel="noopener noreferrer">https://indiacovidmodel.in</a> <br/>
                        <br/>
                        
                        July 2017: <br/>
                        • Beta-tested iSPIRT’s open source digital education app <br/>
                        • Assisted in editing a technical paper on ‘Digital Yatra’, a project to digitise travel and make Indian airports paperless through linkage with Aadhar. This is now being rolled out through pilot programs at select airports in India <br/>
                        
                        <br/> <br/>
                        Intern: June 2020 - ongoing (Remote); July 2017 (Bangalore) <br/>
                        <br/>
                    </Typography>
                    </Grid>
                    <Grid item xs={1}/>
                </Grid>
            </Grid>
        </div>
    )
}