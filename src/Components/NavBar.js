import React from 'react'
import { Typography, Hidden, Toolbar, AppBar, Fade, Grid } from '@material-ui/core'
import { EmailOutlined, LinkedIn } from '@material-ui/icons';

import resume from './Media/YashviJaju—Resume.pdf';

const font = 'Segoe UI';

export default function NavBar() {
    function handleScroll(props) {
        window.scrollTo(0,props);
    }
    return(
        <div style={{height: '5vh', opacity: '0.75'}}>
            <Fade in={true} timeout={16000}>
                <AppBar elevation={0} style={{'backgroundColor': "white", padding: '0vh 2vw 0vh 2vw'}}>
                    <Toolbar>
                        <Hidden smUp>
                            <Grid item xs={3} style={{display:'flex', flexDirection:'row',justifyContent:'start', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', fontWeight:'lighter'}} onClick={()=>handleScroll(0)}> Yashvi Jaju &nbsp; | </Typography>
                            </Grid>
                            <Grid item xs={10} style={{display:'flex', flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw', fontWeight:'lighter'}} onClick={()=>handleScroll(window.innerHeight * 0.4)}>
                                    About Me
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw', fontWeight:'lighter'}} onClick={()=>handleScroll(window.innerHeight * 1)}>
                                    Projects
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000",fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}}>
                                    <a href={resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontFamily: font, color: 'black', fontWeight:'lighter'}}>Resume</a>
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', fontWeight:'lighter'}} onClick={()=>handleScroll(window.innerHeight * 20)}>
                                    Contact
                                </Typography>
                            </Grid>
                        </Hidden>
                        <Hidden xsDown>
                            <Grid item xs={5} style={{display:'flex', flexDirection:'row',justifyContent:'start', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(0)}> Yashvi Jaju </Typography>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <Typography variant="caption" style={{color:'#000000'}}>Developer</Typography>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="small" style={{color:'#000000'}}/></a>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <a href="https://www.linkedin.com/in/yashvi-jaju/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="small" style={{color:'#000000'}}/></a>
                            </Grid>
                            <Grid item xs={7} style={{display:'flex', flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 0.75)}>
                                    About Me
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 1.4)}>
                                    Projects
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000",fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}}>
                                    <a href={resume} target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontFamily: font, color: 'black'}}>Resume</a>
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 10)}>
                                    Contact
                                </Typography>
                            </Grid>
                        </Hidden>
                            
                    </Toolbar>
                </AppBar>
            </Fade>
        </div>
    );
}