import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center'}}>
                <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'paddingTop': '5vh'}}>
                    <iframe src="https://mettacapital.in" title="Metta Capital Advisors LLP" allowFullScreen={true} style={{'width': '100%', height: '50vh', border: '3px solid black'}}/>
                </Grid>
                <Grid item xs={10} style={{display:'flex',flexDirection:'row',justifyContent:'left'}}>
                    <a href="https://mettacapital.in" target="_blank" rel="noopener noreferrer" style={{cursor: 'pointer', textDecoration: 'none', color:'black'}}>
                    <Typography variant="caption" style={{fontStyle:'italic'}}>click to open in a new tab (https://mettacapital.in) </Typography>
                    </a>
                </Grid>
                </Grid>
                <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    print( "MettaCapital is a boutique investment bank. I specialised as the sole web-developer, using the ReactJS library with a Material UI framework to develop their website from the ground up." ) <br/>
                    <br/>
                    Features: Navigation bar changes color based on scroll position (homepage), three different designs for persona modals to re nder design as responsive (team page), transactions slidebar using arrays (transactions page). Initially used a Google Maps API to run on the contact page, but public github hosting changed that.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Material UI framework. <br/>
                    APIs: 'window-scroll-position' (used to style navigation bar on homepage) <br/>
                    Hosted on Github Pages, custom domain <br/>
                    Created: May-June 2020
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
        </div>
    )
}