import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade';
import { NavLink } from 'react-router-dom';

const font = 'Segoe UI';

export default function NavBar() {
    return(
        <div style={{height: '5vh', opacity: '0.5'}}>
            <Fade in={true} timeout={16000}>
                <AppBar elevation={0} style={{alignItems:"center", 'backgroundColor': "white"}}>
                    <Toolbar>
                        <NavLink to="/" style={{textDecoration:'none', 'paddingRight': '2vw'}}>
                            <Typography variant="body1" style={{color:"#000000", fontFamily: font}}>
                                Home
                            </Typography>
                        </NavLink>
                    </Toolbar>
                </AppBar>
            </Fade>
        </div>
    );
}