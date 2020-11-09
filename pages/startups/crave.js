import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {

    function handlecraveVideo(video,image) {
        var y = document.getElementById("craveVideo");
        y.src = video;
        y.play();
        var a = document.getElementsByClassName("craveImage");
        var i;
        for (i = 0; i < a.length; i++) {
          a[i].style.border='1px solid #bee3f1';
        }
        var x = document.getElementById(image);
        x.style.border='1px solid black';
    };

    return(
        <div>
            <Hidden smDown>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center'}}>
                <Grid container direction="row" justify="center">
                <Grid item xs={2} style={{'paddingTop': '5vh'}}>
                    <Tooltip title="Login" arrow={true} placement="right">
                    <img className="craveImage" id="loginImg" alt="Crave Feature" src="/assets/loginImg.jpg" style={{'width': '75%', cursor: 'pointer', border: '1px solid black','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo("/assets/login.mp4","loginImg")}/>
                    </Tooltip>
                    <Tooltip title="Filters" arrow={true} placement="right">
                    <img className="craveImage" id="filtersImg" alt="Crave Feature" src="/assets/filtersImg.jpg" style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo("/assets/filters.mp4","filtersImg")}/>
                    </Tooltip>
                    <Tooltip title="Search" arrow={true} placement="right">
                    <img className="craveImage" id="searchImg" alt="Crave Feature" src="/assets/searchImg.jpg" style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo("/assets/search.mp4","searchImg")}/>
                    </Tooltip>
                    <Tooltip title="Item Description" arrow={true} placement="right">
                    <img className="craveImage" id="itemDescImg" alt="Crave Feature" src="/assets/itemDescImg.jpg" style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo("/assets/itemDesc.mp4","itemDescImg")}/>
                    </Tooltip>
                    <Tooltip title="Checkout" arrow={true} placement="right">
                    <img className="craveImage" id="checkoutImg" alt="Crave Feature" src="/assets/checkoutImg.jpg" style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo("/assets/checkout.mp4","checkoutImg")}/>
                    </Tooltip>
                </Grid>
                <Grid item xs={8} style={{'paddingTop': '5vh'}}>
                    <video id="craveVideo" alt="Crave Feature" src="/assets/login.mp4" type="video/mp4" style={{'width': '100%'}} controls autoPlay muted/>
                </Grid>
                </Grid>
                <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    cout &lsaquo; &lsaquo; Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, under LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer;
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework, Progressive Web Application. <br/>
                    (Hosted locally for demo) <br/>
                    Created: Apr-May 2020
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            </Hidden>
            <Hidden mdUp>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '90vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center'}}>
                <Grid container direction="column" justify="center">
                <Grid container direction="row" justify="center" style={{'paddingTop': '5vh'}}>
                <Tooltip title="Login" arrow={true} placement="right">
                    <img className="craveImage" id="loginImg" alt="Crave Feature" src="/assets/loginImg.jpg" style={{'width': '16.5%', cursor: 'pointer', border: '1px solid black',marginRight: '5px'}} onClick={()=>handlecraveVideo("/assets/login.mp4","loginImg")}/>
                    </Tooltip>
                    <Tooltip title="Filters" arrow={true} placement="right">
                    <img className="craveImage" id="filtersImg" alt="Crave Feature" src="/assets/filtersImg.jpg" style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo("/assets/filters.mp4","filtersImg")}/>
                    </Tooltip>
                    <Tooltip title="Search" arrow={true} placement="right">
                    <img className="craveImage" id="searchImg" alt="Crave Feature" src="/assets/searchImg.jpg" style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo("/assets/search.mp4","searchImg")}/>
                    </Tooltip>
                    <Tooltip title="Item Description" arrow={true} placement="right">
                    <img className="craveImage" id="itemDescImg" alt="Crave Feature" src="/assets/itemDescImg.jpg" style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo("/assets/itemDesc.mp4","itemDescImg")}/>
                    </Tooltip>
                    <Tooltip title="Checkout" arrow={true} placement="right">
                    <img className="craveImage" id="checkoutImg" alt="Crave Feature" src="/assets/checkoutImg.jpg" style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo("/assets/checkout.mp4","checkoutImg")}/>
                    </Tooltip>
                </Grid>
                <Grid container direction="row" justify="center" style={{'paddingTop': '2vh'}}>
                    <video id="craveVideo" alt="Crave Feature" src="/assets/login.mp4" type="video/mp4" style={{'width': '90%'}} controls autoPlay muted/>
                </Grid>
                </Grid>
                <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    cout &lsaquo; &lsaquo; Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, under LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer;
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. (Hosted locally for demo) <br/>
                    Created: Apr-May 2020
                    </Typography>
                </Grid>
                </Grid>
            </Grid>
            </Hidden>
        </div>
    )
}