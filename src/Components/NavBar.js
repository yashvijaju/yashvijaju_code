import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Fade from '@material-ui/core/Fade';

export default function NavBar() {
    return(
        <div>
            <Fade in={true} timeout={8000}>
                <AppBar elevation={1} style={{ alignItems:"center", 'background-color': "white"}}>
                    <Toolbar>
                        <Typography variant="body1" style={{color:"#000000"}}>
                        My Story &nbsp; &nbsp; &nbsp; &nbsp;
                        Contact Me
                        </Typography>
                    </Toolbar>
                </AppBar>
                
            </Fade>
        </div>
    );
}