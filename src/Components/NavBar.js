import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

const NavBar = () => {
    return(
        <div>
        <AppBar position="sticky">
            <Toolbar style={{'background-color': "#61dafb", position: "sticky"}}>
                <Typography variant="title">
                React & Material-UI Sample Application
                </Typography>
            </Toolbar>
        </AppBar>
        </div>
    )
}
export default NavBar;