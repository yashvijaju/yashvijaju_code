import React from 'react'
import { Typography, Hidden, Toolbar, AppBar, Fade } from '@material-ui/core'
import { NavLink } from 'react-router-dom';

const font = 'Segoe UI';

export default function NavBar() {
    function handleScroll(props) {
        window.scrollTo(0,props);
    }
    return(
        <div style={{height: '5vh', opacity: '0.75'}}>
            <Fade in={true} timeout={16000}>
                <AppBar elevation={0} style={{alignItems:"center", 'backgroundColor': "white"}}>
                    <Toolbar>
                        <Hidden smUp>
                            <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(0)}>
                                Home
                            </Typography>
                            <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 0.4)}>
                                About Me
                            </Typography>
                            <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 1)}>
                                My Projects
                            </Typography>
                        </Hidden>
                        <Hidden xsDown>
                            <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(0)}>
                                Home
                            </Typography>
                            <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 0.75)}>
                                About Me
                            </Typography>
                            <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer'}} onClick={()=>handleScroll(window.innerHeight * 1.4)}>
                                My Projects
                            </Typography>
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </Fade>
        </div>
    );
}