import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Grid, Typography, Backdrop, Fade, Hidden, Tooltip, Chip } from '@material-ui/core';

import crave from './Media/Projects/Crave.jpg';
import craveFilters from './Media/Projects/filters.mp4';
import craveLogin from './Media/Projects/login.mp4';
import craveSearch from './Media/Projects/search.mp4';
import craveItemDesc from './Media/Projects/itemDesc.mp4';
import craveCheckout from './Media/Projects/checkout.mp4';
import filtersImg from './Media/Projects/filtersImg.jpg';
import loginImg from './Media/Projects/loginImg.jpg';
import searchImg from './Media/Projects/searchImg.jpg';
import itemDescImg from './Media/Projects/itemDescImg.jpg';
import checkoutImg from './Media/Projects/checkoutImg.jpg';

import metta from './Media/Projects/Metta.jpg';

import ps1Me from './Media/Projects/ps1.png';
import ps2Me from './Media/Projects/ps2.png';
import refMe from './Media/Projects/ref.jpg';
import waveTshirt from './Media/Projects/waveTshirt.png';
import waveLogo from './Media/Projects/waveLogo.png';


const pink='#F7CAC9';
const blue='#bee3f1';
const grey = '#efefef';

const font = 'Segoe UI';
const textStyle = {fontFamily: font, fontWeight: 'lighter'};
const titleStyle = {fontFamily: font, fontWeight: 'normal'};
const imageStyle = {width: '100%', marginBottom: '1vh'};
const chipStyle = {color: 'white', border: '2px solid white', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh'};

export default function Story() {

  const [openCrave, setOpenCrave] = React.useState(false);
  const [openMetta, setOpenMetta] = React.useState(false);
  const [openPortfolio, setOpenPortfolio] = React.useState(false);

  const [lastFilter, setLastFilter] = React.useState("");

  function handleOpen(props) {
    props(true);
  };

  function handleClose(props) {
    props(false);
  };

  function filter(props,chip) {
    if (props === "All") {
      var arr = ["Web-Dev","Photoshop","Hackathon"];
      for (var i = 0; i < arr.length; i++) {
        var x = document.getElementsByClassName(arr[i]);
          for (var j = 0; j < x.length; j++) {
            x[j].style.display = 'inline';
          }
      }
    }
    else {
      var arr = ["Web-Dev","Photoshop","Hackathon"];
      for (var i = 0; i < arr.length; i++) {
        var x = document.getElementsByClassName(arr[i]);
          for (var j = 0; j < x.length; j++) {
            x[j].style.display = 'none';
          }
      }

      var x = document.getElementsByClassName(props);
      for (var i = 0; i < x.length; i++) {
        x[i].style.display = 'inline';
      }
    }
    var x = document.getElementById(lastFilter);
    if (x !== null) {
      x.style.border='2px solid white';
      x.style.color='white';
      x.style.backgroundColor="transparent";
    }
    x = document.getElementById(chip);
    x.style.backgroundColor='white';
    x.style.color=blue;
    setLastFilter(chip);
    
  }

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
    <div style={{'padding': '5vh 0vw 2vh 0vw', backgroundColor: blue}}>
      <Grid container direction="row" justify="center">
        <Chip className="filterProjects" id="All" variant="outlined" label="All" clickable="true" style={chipStyle} onClick={()=>filter("All","All")}/>
        <Chip className="filterProjects" id="Web Development" variant="outlined" label="Web Development" clickable="true" style={chipStyle} onClick={()=>filter("Web-Dev","Web Development")}/>
        <Chip className="filterProjects" id="Adobe Photoshop" variant="outlined" label="Adobe Photoshop" clickable="true" style={chipStyle} onClick={()=>filter("Photoshop","Adobe Photoshop")}/>
        <Chip className="filterProjects" id="Hackathons" variant="outlined" label="Hackathons" clickable="true" style={chipStyle} onClick={()=>filter("Hackathon","Hackathons")}/>
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop: '1vh'}}>
        <Grid className="Web-Dev" item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '1vw', 'margin-left': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPortfolio)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            (this): Web Developer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Web-Dev" item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '1vw', 'margin-left': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenMetta)}>
          <img id="Metta" src={metta} alt="Metta Capital Advisors LLP" title="Metta Capital Advisors LLP" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            MettaCapital: Web Developer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          MettaCapital is a leading advisory firm offering services along various facets of investment banking. <br/>
          I specialised as the sole web-developer, using the ReactJS library with a Material UI framework to develop their website from the ground u...
          </Typography>
        </Grid>
        <Grid className="Web-Dev" item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '1vw', 'margin-left': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenCrave)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Crave: Front-End Developer, Founder
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
        <Grid className="Hackathon" item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '1vw', 'margin-left': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPortfolio)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Automated Schedule Generator
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Adobe Photoshop" item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '1vw', 'margin-left': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenMetta)}>
          <img id="Adjustment Layers" src={ps1Me} alt="Adjustment Layers" title="Adjustment Layers" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Adobe Photoshop
          </Typography>
          <Typography variant="caption" style={textStyle}>
          
          </Typography>
        </Grid>
        <Grid className="Adobe Photoshop" item direction="column" xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'border-radius': '15px', 'margin-right': '1vw', 'margin-left': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenCrave)}>
          <img id="T-Shirt Design" src={waveLogo} alt="T-Shirt Design" title="T-Shirt Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           Adobe Photoshop
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
        onClose={() => {handleClose(setOpenCrave)}}
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
                  <Tooltip title="Login" arrow="true" placement="right">
                    <img className="craveImage" id="loginImg" alt="Crave Feature" src={loginImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid black','margin-bottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveLogin,"loginImg")}/>
                  </Tooltip>
                  <Tooltip title="Filters" arrow="true" placement="right">
                    <img className="craveImage" id="filtersImg" alt="Crave Feature" src={filtersImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveFilters,"filtersImg")}/>
                  </Tooltip>
                  <Tooltip title="Search" arrow="true" placement="right">
                    <img className="craveImage" id="searchImg" alt="Crave Feature" src={searchImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveSearch,"searchImg")}/>
                  </Tooltip>
                  <Tooltip title="Item Description" arrow="true" placement="right">
                   <img className="craveImage" id="itemDescImg" alt="Crave Feature" src={itemDescImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveItemDesc,"itemDescImg")}/>
                  </Tooltip>
                  <Tooltip title="Checkout" arrow="true" placement="right">
                    <img className="craveImage" id="checkoutImg" alt="Crave Feature" src={checkoutImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','margin-bottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveItemDesc,"checkoutImg")}/>
                  </Tooltip>
                </Grid>
                <Grid item xs={8} style={{'padding-top': '5vh'}}>
                  <video id="craveVideo" alt="Crave Feature" src={craveLogin} type="video/mp4" style={{'width': '100%'}} controls autoPlay muted/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'padding-top': '2vh', 'padding-bottom': '5vh'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, under LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer for Crave.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. <span style={{float: 'right'}}>Apr-May 2020</span><br/>
                    (Hosted locally for demo) <br/>
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
          <Hidden mdUp>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '90vw', 'max-height': '75vh', 'overflow-y': 'auto', alignItems: 'center'}}>
              <Grid container direction="column" justify="center">
                <Grid container direction="row" justify="center" style={{'padding-top': '5vh'}}>
                <Tooltip title="Login" arrow="true" placement="right">
                    <img className="craveImage" id="loginImg" alt="Crave Feature" src={loginImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid black',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveLogin,"loginImg")}/>
                  </Tooltip>
                  <Tooltip title="Filters" arrow="true" placement="right">
                    <img className="craveImage" id="filtersImg" alt="Crave Feature" src={filtersImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveFilters,"filtersImg")}/>
                  </Tooltip>
                  <Tooltip title="Search" arrow="true" placement="right">
                    <img className="craveImage" id="searchImg" alt="Crave Feature" src={searchImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveSearch,"searchImg")}/>
                  </Tooltip>
                  <Tooltip title="Item Description" arrow="true" placement="right">
                   <img className="craveImage" id="itemDescImg" alt="Crave Feature" src={itemDescImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveItemDesc,"itemDescImg")}/>
                  </Tooltip>
                  <Tooltip title="Checkout" arrow="true" placement="right">
                    <img className="craveImage" id="checkoutImg" alt="Crave Feature" src={checkoutImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveItemDesc,"checkoutImg")}/>
                  </Tooltip>
                </Grid>
                <Grid container direction="row" justify="center" style={{'padding-top': '2vh'}}>
                  <video id="craveVideo" alt="Crave Feature" src={craveLogin} type="video/mp4" style={{'width': '90%'}} controls autoPlay muted/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'padding-top': '2vh', 'padding-bottom': '5vh'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, under LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer for Crave.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. (Hosted locally for demo) <br/>
                    Apr-May 2020
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </div>
        </Fade>
      </Modal>
      <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby="image-modal-"
        aria-describedby="story-modal-"
        open={openMetta}
        onClose={() => {handleClose(setOpenMetta)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={openMetta}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'max-height': '75vh', 'overflow-y': 'auto', alignItems: 'center'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={11} style={{'padding-top': '5vh'}}>
                <iframe src="https://usclavalab.org/" title="Metta Capital Advisors LLP" allowFullScreen="true" style={{'width': '100%', height: '50vh'}}/>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={10} style={{'padding-top': '2vh', 'padding-bottom': '5vh'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  MettaCapital is a leading advisory firm offering services along various facets. I specialised as the sole web-developer, using the ReactJS library with a Material UI framework to develop their website from the ground up.
                  <br/> <br/>
                  Tech Stack: ReactJs library, Material UI framework. <span style={{float: 'right'}}>May-June 2020</span> <br/>
                  APIs: 'window-scroll-position' (used to style navigation bar on homepage), 'google-maps' <br/>
                  (Hosted on)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        </Fade>
      </Modal>
      <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby="image-modal-"
        aria-describedby="story-modal-"
        open={openPortfolio}
        onClose={() => {handleClose(setOpenPortfolio)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={openPortfolio}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'max-height': '75vh', 'overflow-y': 'auto', alignItems: 'center'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={11} style={{'padding-top': '5vh'}}>
                <iframe src="https://usclavalab.org/" title="Portfolio" allowFullScreen="true" style={{'width': '100%', height: '50vh'}}/>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={10} style={{'padding-top': '2vh', 'padding-bottom': '5vh'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framework.
                  <br/> <br/>
                  Tech Stack: ReactJs library, Material UI framework. <span style={{float: 'right'}}>June 2020</span> <br/>
                  APIs: 'typist' (used to create the typist effect on the home-page), 'google-maps' <br/>
                  (Hosted on GitHub Pages)
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </div>
        </Fade>
      </Modal>
    </div>
    
  );
}