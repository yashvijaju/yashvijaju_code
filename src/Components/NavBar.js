import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return(
        <div>
            <Fade in={true} timeout={16000}>
                <AppBar elevation={0} style={{ alignItems:"center", 'background-color': "transparent"}}>
                    <Toolbar>
                        <NavLink to="/my-story" style={{'text-decoration':'none', 'padding-right': '2vw'}}>
                            <Typography variant="body1" style={{color:"#000000"}}>
                                My Story
                            </Typography>
                        </NavLink>
                        <NavLink to="/my-story" style={{'text-decoration':'none'}}>
                            <Typography variant="body1" style={{color:"#000000"}}>
                                Contact Me
                            </Typography>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </Fade>
        </div>
    );
}