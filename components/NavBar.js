import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { Typography, Hidden, Toolbar, AppBar, Fade, Grid, Menu, MenuItem } from '@material-ui/core'
import { EmailOutlined, LinkedIn } from '@material-ui/icons';


const font = 'Segoe UI';

export default function NavBar(props) {
    const router = useRouter()
    const [anchorEl, setAnchorEl] = React.useState(null);

    function handleScroll(props) {
        if (router.pathname !== "/") {
            router.push('/');
            window.scrollTo(0,0);
            // return;
        }
        window.scrollTo(0,props);
        if (props === 0) {
            var x = document.getElementById("scroll up");
            if (x !== null) {
                x.style.display = 'none';
            }
            var y = document.getElementById("scroll down");
            if (y !== null) {
                y.style.display = 'inline';
            }
        }
        else {
            x = document.getElementById("scroll up");
            if (x !== null) {
                x.style.display = 'inline';
            }
            y = document.getElementById("scroll down");
            if (y !== null) {
                y.style.display = 'none';
            }
        }
    }
    return(
        <div style={{height: '5vh', position: 'absolute', top: '0'}} id={props.id}>
            <Fade in={true} timeout={16000}>
                <AppBar elevation={0} style={{'backgroundColor': "white", opacity: '0.5', padding: '0vh 2vw 0vh 2vw'}}>
                    <Toolbar>
                        <Hidden smUp>
                            <Grid item xs={3} style={{display:'flex', flexDirection:'row',justifyContent:'start', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', fontWeight:'lighter'}} onClick={()=>handleScroll(0)}> Yashvi Jaju &nbsp; | </Typography>
                            </Grid>
                            <Grid item xs={10} style={{display:'flex', flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw', fontWeight:'lighter'}} onClick={()=>handleScroll(window.innerHeight * 0.4)}>
                                    About Me
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw', fontWeight:'lighter'}} onClick={(e)=>setAnchorEl(e.currentTarget)}>
                                    Projects
                                </Typography>
                                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={()=>setAnchorEl(null)} style={{opacity: '50%', marginTop: '3vh', marginLeft: '-3.5vw'}} elevation={0}>
                                    <MenuItem onClick={()=>{handleScroll(window.innerHeight * 1.4);setAnchorEl(null)}} selected={true} dense={true}>
                                        <Typography variant="caption" style={{color:"#000000", cursor: 'pointer', fontWeight:'lighter'}}>
                                            All Projects
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={()=>setAnchorEl(null)} dense={true}>
                                        <Link href="/projects/tech">
                                            <Typography variant="caption" style={{color:"#000000", cursor: 'pointer', fontWeight:'lighter'}}>
                                                Tech
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={()=>setAnchorEl(null)} dense={true}>
                                        <Link href="/projects/art-and-design">
                                            <Typography variant="caption" style={{color:"#000000", cursor: 'pointer', fontWeight:'lighter'}}>
                                                Art & Design
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                                <Typography variant="caption" style={{color:"#000000",fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}}>
                                    <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontFamily: font, color: 'black', fontWeight:'lighter'}}>Resume</a>
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
                                <Typography variant="caption" style={{color:'#000000'}}>Developer x Designer</Typography>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <a href="mailto:yjaju@usc.edu" target="_blank" rel="noopener noreferrer"><EmailOutlined fontSize="small" style={{color:'#000000'}}/></a>
                                <Typography variant="caption" style={{color:'#000000'}}> &nbsp; | &nbsp; </Typography>
                                <a href="https://www.linkedin.com/in/yashvi-jaju/" target="_blank" rel="noopener noreferrer"><LinkedIn fontSize="small" style={{color:'#000000'}}/></a>
                            </Grid>
                            <Grid item xs={7} style={{display:'flex', flexDirection:'row',justifyContent:'flex-end', alignItems:'center'}}>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={()=>handleScroll(window.innerHeight * 0.75)}>
                                    About Me
                                </Typography>
                                <Typography variant="caption" style={{color:"#000000", fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}} onClick={(e)=>setAnchorEl(e.currentTarget)}>
                                    Projects
                                </Typography>
                                <Menu anchorEl={anchorEl} keepMounted open={Boolean(anchorEl)} onClose={()=>setAnchorEl(null)} style={{opacity: '50%', marginTop: '3vh', marginLeft: '-1.05vw'}} elevation={0}>
                                    <MenuItem onClick={()=>{handleScroll(window.innerHeight * 1.4);setAnchorEl(null)}} selected={true} dense={true}>
                                        <Typography variant="caption" style={{color:"#000000", cursor: 'pointer'}}>
                                            All Projects
                                        </Typography>
                                    </MenuItem>
                                    <MenuItem onClick={()=>setAnchorEl(null)} dense={true}>
                                        <Link href="/projects/tech">
                                            <Typography variant="caption" style={{color:"#000000", cursor: 'pointer'}}>
                                                Tech
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                    <MenuItem onClick={()=>setAnchorEl(null)} dense={true}>
                                        <Link href="/projects/art-and-design">
                                            <Typography variant="caption" style={{color:"#000000", cursor: 'pointer'}}>
                                                Art & Design
                                            </Typography>
                                        </Link>
                                    </MenuItem>
                                </Menu>
                                <Typography variant="caption" style={{color:"#000000",fontFamily: font, cursor: 'pointer', paddingRight: '4vw'}}>
                                    <a href="https://drive.google.com/file/d/1UYa99LI9qB2Mj7QITz1ezya8gDcA9Bd7" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', fontFamily: font, color: 'black'}}>Resume</a>
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