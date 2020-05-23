import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
        <AppBar elevation={1} style={{ alignItems:"center", 'background-color': "white"}}>
            <Toolbar>
                <Typography variant="body1" style={{color:"#000000"}}>
                My Story &nbsp; &nbsp; &nbsp; &nbsp;
                Contact Me
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;