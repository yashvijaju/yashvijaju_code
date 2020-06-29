import React from 'react'
import { Typography, Hidden, Toolbar, AppBar, Fade, Grid } from '@material-ui/core'
import { EmailOutlined, LinkedIn } from '@material-ui/icons';

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
                        <Grid item xs={6}>
                            <Grid container style={{alignItems:'left'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(0)}> Yashvi Jaju </Typography>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <Typography variant="caption" style={{color:'#000000'}}>Developer</Typography>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="small" style={{color:'#000000'}}/></a>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <a href="https://www.linkedin.com/in/yashvi-jaju-61a3a3125/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="small" style={{color:'#000000'}}/></a>
                            </Grid>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid container direction="row" justify="flex-end">
                                <Hidden smUp>
                                    <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 0.4)}>
                                        About Me
                                    </Typography>
                                    <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 1)}>
                                        My Projects
                                    </Typography>
                                    <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 5)}>
                                        Contact
                                    </Typography>
                                </Hidden>
                                <Hidden xsDown>
                                    <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 0.75)}>
                                        About Me
                                    </Typography>
                                    <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 1.4)}>
                                        My Projects
                                    </Typography>
                                    <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 5)}>
                                       Contact
                                    </Typography>
                                </Hidden>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </Fade>
        </div>
    );
}