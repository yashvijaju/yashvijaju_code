import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {

    return(
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', justifyContent: 'center'}}>
            <Grid item xs={10} style={{'paddingTop': '5vh', display: 'flex', flexDirection: 'column'}}>
              <img src="/assets/portfolioCode.jpg" title="Portfolio Code" alt="Portfolio Code" style={{'width': '100%', height: 'auto'}}/>
              <Typography variant="caption" style={{fontStyle: 'italic', textAlign:'left'}}>code snippet: functions used to handle notifications, opening and closing of modals, and the modal for Crave</Typography>
            </Grid>
            <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
              <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                alert( "I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framework." )
                <br/> <br/>
                Features: Filter projects by categories, Integrated contact-me form, 9 different modal designs to illustrate project descriptions (special emphasis on designs made for Crave, Manifesto and Pride For Labor), Custom pre-loading and 404 pages, Typewriter animation on landing page
                <br/> <br/>
                Tech Stack: ReactJs library, Material UI framework. (Hosted on GitHub Pages) <br/>
                Design Stack: Adobe Photoshop to edit photos <br/>
                APIs: none <br/>
                Created: June 2020 <br/>
              </Typography>
            </Grid>
          </Grid>
        </div>
    )
}