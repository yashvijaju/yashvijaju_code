import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Grid, Typography, Backdrop, Fade, Hidden } from '@material-ui/core';

import crave from './Media/Projects/Crave.jpg';
import craveFilters from './Media/Projects/filters.mp4';
import craveLogin from './Media/Projects/login.mp4';
import craveSearch from './Media/Projects/search.mp4';
import craveItemDesc from './Media/Projects/itemDesc.mp4';
import filtersImg from './Media/Projects/filtersImg.jpg';
import loginImg from './Media/Projects/loginImg.jpg';
import searchImg from './Media/Projects/searchImg.jpg';
import itemDescImg from './Media/Projects/itemDescImg.jpg';


const pink='#F7CAC9';
const blue='#bee3f1';
const grey = '#efefef';

const font = 'Segoe UI';
const textStyle = {fontFamily: font, fontWeight: 'lighter'};
const titleStyle = {fontFamily: font, fontWeight: 'normal'};
const imageStyle = {width: '100%'};

export default function Story() {

  const [openCrave, setOpenCrave] = React.useState(false);

  function handleOpenCrave() {
    setOpenCrave(true);
  };

  function handleCloseCrave() {
    setOpenCrave(false);
  };

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
  

  return (
    <div>
      <Grid container direction="row" style={{'padding': '5vh 2vw 2vh 2vw', backgroundColor: blue}}>
        <Grid item xs={1}/>
        <Grid item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '2vw', cursor: 'pointer'}} onClick={()=>handleOpenCrave()}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Crave: Front-End Developer, Founder
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
        <Grid item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '2vw', cursor: 'pointer'}}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Crave: Front-End Developer, Founder
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
      </Grid>


      <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby="image-modal-"
        aria-describedby="story-modal-"
        open={openCrave}
        onClose={() => {handleCloseCrave()}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={openCrave}>
        <div>
          <Hidden smDown>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'max-height': '75vh', 'overflow-y': 'auto', alignItems: 'center'}}>
              <Grid container direction="row" justify="center">
                <Grid item xs={2} spacing={1} direction="column" style={{'padding-top': '5vh'}}>
                  <img className="craveImage" id="filtersImg" src={filtersImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '1vh'}} onClick={()=>handlecraveVideo(craveFilters,"filtersImg")}/>
                  <img className="craveImage" id="loginImg" src={loginImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '1vh'}} onClick={()=>handlecraveVideo(craveLogin,"loginImg")}/>
                  <img className="craveImage" id="searchImg" src={searchImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '1vh'}} onClick={()=>handlecraveVideo(craveSearch,"searchImg")}/>
                  <img className="craveImage" id="itemDescImg" src={itemDescImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '1vh'}} onClick={()=>handlecraveVideo(craveItemDesc,"itemDescImg")}/>
                </Grid>
                <Grid item xs={8} style={{'padding-top': '5vh'}}>
                  <video id="craveVideo" src={craveLogin} style={{'width': '100%'}} controls autoplay muted="true"/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'padding-top': '2vh', 'padding-bottom': '5vh'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, with LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer for Crave.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. <br/>
                    (Hosted locally for demo)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '90vw', 'max-height': '75vh', 'overflow-y': 'auto', alignItems: 'center'}}>
              <Grid container direction="column" justify="center">
                <Grid container direction="row" justify="center" style={{'padding-top': '5vh'}}>
                  <img className="craveImage" id="filtersImg" src={filtersImg} style={{'width': '20%', cursor: 'pointer', border: '1px solid #bee3f1', marginRight: '5px'}} onClick={()=>handlecraveVideo(craveFilters,"filtersImg")}/>
                  <img className="craveImage" id="loginImg" src={loginImg} style={{'width': '20%', cursor: 'pointer', border: '1px solid #bee3f1', marginRight: '5px'}} onClick={()=>handlecraveVideo(craveLogin,"loginImg")}/>
                  <img className="craveImage" id="searchImg" src={searchImg} style={{'width': '20%', cursor: 'pointer', border: '1px solid #bee3f1', marginRight: '5px'}} onClick={()=>handlecraveVideo(craveSearch,"searchImg")}/>
                  <img className="craveImage" id="itemDescImg" src={itemDescImg} style={{'width': '20%', cursor: 'pointer', border: '1px solid #bee3f1', marginRight: '5px'}} onClick={()=>handlecraveVideo(craveItemDesc,"itemDescImg")}/>
                </Grid>
                <Grid container direction="row" justify="center" style={{'padding-top': '2vh'}}>
                  <video id="craveVideo" src={craveLogin} style={{'width': '90%'}} controls autoplay muted="true"/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'padding-top': '2vh', 'padding-bottom': '5vh'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, with LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer for Crave.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. <br/>
                    (Hosted locally for demo)
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </div>
        </Fade>
      </Modal>
    </div>
    
  );
}