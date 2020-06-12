import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Grid, Typography, Backdrop, Fade, Hidden, Tooltip, Chip } from '@material-ui/core';
import {KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined} from '@material-ui/icons';

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
import ps3Ref from './Media/Projects/ref.jpg';
import waveTshirt from './Media/Projects/waveTshirt.png';
import waveLogo from './Media/Projects/waveLogo.png';
import waveRef from './Media/Projects/waveRef.png';

import d1_1 from './Media/Projects/d1_1.png';
import d1_2 from './Media/Projects/d1_2.png';
import d1_3 from './Media/Projects/d1_3.png';
import d2_1 from './Media/Projects/d2_1.png';
import d2_2 from './Media/Projects/d2_2.png';
import d2_3 from './Media/Projects/d2_3.png';
import d3_1 from './Media/Projects/d3_1.png';
import d3_2 from './Media/Projects/d3_2.png';
import d4_1 from './Media/Projects/d4_1.jpg';
import animationImg from './Media/Projects/animationImg.png';
import animation from './Media/Projects/animation.mp4';

const pink='#F7CAC9';
const blue='#bee3f1';
const grey = '#efefef';

const font = 'Segoe UI';
const textStyle = {fontFamily: font, fontWeight: 'lighter'};
const titleStyle = {fontFamily: font, fontWeight: 'normal'};
const imageStyle = {width: '100%', marginBottom: '1vh'};
const chipStyle = {color: 'white', border: '2px solid white', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh'};
const chipStyleAll = {color: blue, border: '2px solid white', backgroundColor: 'white' , borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh'};

export default function Story() {

  const [openCrave, setOpenCrave] = React.useState(false);
  const [openMetta, setOpenMetta] = React.useState(false);
  const [openPortfolio, setOpenPortfolio] = React.useState(false);
  const [openComic, setOpenComic] = React.useState(false);
  const [openTshirt, setOpenTshirt] = React.useState(false); 
  const [openRiso, setOpenRiso] = React.useState(false); 
  const [openAnimation, setOpenAnimation] = React.useState(false); 
  const [openPFL, setOpenPFL] = React.useState(false); 
  const [openA2Z, setOpenA2Z] = React.useState(false); 
  const [openBuddha, setOpenBuddha] = React.useState(false); 
  const [openDancers, setOpenDancers] = React.useState(false); 
  const [TrojanHacks, setOpenTrojanHacks] = React.useState(false);

  const [lastFilter, setLastFilter] = React.useState("All");
  const [comicSrc, setComicSrc] = React.useState(ps1Me);
  const [comicId, setComicId] = React.useState(1);
  const [waveSrc, setWaveSrc] = React.useState(waveLogo);
  const [waveId, setWaveId] = React.useState(1);
  const [risoSrc, setRisoSrc] = React.useState(d1_1);
  const [risoId, setRisoId] = React.useState(1);
  const [lastFilterRiso, setLastFilterRiso] = React.useState();
  
  

  function handleOpen(props) {
    props(true);
  };

  function handleClose(props) {
    props(false);
  };

  function filter(props,chip) {
    if (props === "All") {
      var arr = ["Web-Dev","Photoshop","Hackathon","Entrepreneurship","Painting"];
      for (var i = 0; i < arr.length; i++) {
        var x = document.getElementsByClassName(arr[i]);
          for (var j = 0; j < x.length; j++) {
            x[j].style.display = 'inline';
          }
      }
    }
    else {
      arr = ["Web-Dev","Photoshop","Hackathon","Entrepreneurship","Painting"];
      for ( i = 0; i < arr.length; i++) {
        x = document.getElementsByClassName(arr[i]);
          for (j = 0; j < x.length; j++) {
            x[j].style.display = 'none';
          }
      }

      x = document.getElementsByClassName(props);
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'inline';
      }
    }
    x = document.getElementById(lastFilter);
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

  function handleComic(props) {
    if (props === "next") {
      if (comicId===1) {
      setComicSrc(ps2Me);
      setComicId(2);
      }
      else if (comicId===2) {
        setComicSrc(ps3Ref);
        setComicId(3);
      }
      else {
        setComicSrc(ps1Me);
        setComicId(1);
      }
    }
    else if (props === "prev") {
      if (comicId===1) {
        setComicSrc(ps3Ref);
        setComicId(3);
      }
      else if (comicId===2) {
        setComicSrc(ps1Me);
        setComicId(1);
      }
      else {
        setComicSrc(ps2Me);
        setComicId(2);
      } 
    }
  }

  function handleWaveLogo(props) {
    if (props === "next") {
      if (waveId===1) {
        setWaveSrc(waveTshirt);
        setWaveId(2);
      }
      else if (waveId===2) {
        setWaveSrc(waveRef);
        setWaveId(3);
      }
      else {
        setWaveSrc(waveLogo);
        setWaveId(1);
      }
    }
    else if (props === "prev") {
      if (waveId===1) {
        setWaveSrc(waveRef);
        setWaveId(3);
      }
      else if (waveId===2) {
        setWaveSrc(waveLogo);
        setWaveId(1);
      }
      else {
        setWaveSrc(waveTshirt);
        setWaveId(2);
      } 
    }
  }

  function handleRiso(props,filter,e) {
    if (props === "next") {
      if (risoId===1) {
        if (risoSrc === d1_1) {
          setRisoSrc(d1_2);
          setRisoId(2);
        }
        if (risoSrc === d2_1) {
          setRisoSrc(d2_2);
          setRisoId(2);
        }
        if (risoSrc === d3_1) {
          setRisoSrc(d3_2);
          setRisoId(2);
        }
        if (risoSrc === d4_1) {
          setRisoSrc(d4_1);
          setRisoId(1);
        }
      }
      else if (risoId===2) {
        if (risoSrc === d1_2) {
          setRisoSrc(d1_3);
          setRisoId(3);
        }
        if (risoSrc === d2_2) {
          setRisoSrc(d2_3);
          setRisoId(3);
        }
        if (risoSrc === d3_2) {
          setRisoSrc(d3_1);
          setRisoId(1);
        }
      }
      else {
        if (risoSrc === d1_3) {
          setRisoSrc(d1_1);
          setRisoId(1);
        }
        if (risoSrc === d2_3) {
          setRisoSrc(d2_1);
          setRisoId(1);
        }
      }
    }
    else if (props === "prev") {
      if (risoId===1) {
        if (risoSrc === d1_1) {
          setRisoSrc(d1_3);
          setRisoId(3);
        }
        if (risoSrc === d2_1) {
          setRisoSrc(d2_3);
          setRisoId(3);
        }
        if (risoSrc === d3_1) {
          setRisoSrc(d3_2);
          setRisoId(2);
        }
        if (risoSrc === d4_1) {
          setRisoSrc(d4_1);
          setRisoId(1);
        }
      }
      else if (risoId===2) {
        if (risoSrc === d1_2) {
          setRisoSrc(d1_1);
          setRisoId(1);
        }
        if (risoSrc === d2_2) {
          setRisoSrc(d2_1);
          setRisoId(1);
        }
        if (risoSrc === d3_2) {
          setRisoSrc(d3_1);
          setRisoId(1);
        }
      }
      else {
        if (risoSrc === d1_3) {
          setRisoSrc(d1_2);
          setRisoId(2);
        }
        if (risoSrc === d2_3) {
          setRisoSrc(d2_2);
          setRisoId(2);
        }
      } 
    }
    else if (props === "filter") {
      setRisoId(1);
      e.style.backgroundColor = blue;
      e.style.color = 'white';
      e.style.border = '2px solid white';
      if (lastFilterRiso !== undefined) {
        lastFilterRiso.style.backgroundColor = 'white';
        lastFilterRiso.style.color = blue;
        lastFilterRiso.style.border = '2px solid #bee3f1';
      }
      setLastFilterRiso(e);
      if (filter === 1) {
        setRisoSrc(d1_1);
      }
      if (filter === 2) {
        setRisoSrc(d2_1);
      }
      if (filter === 3) {
        setRisoSrc(d3_1);
      }
      if (filter === 4) {
        setRisoSrc(d4_1);
      }
    }
  }


  return (
    <div style={{'padding': '5vh 0vw 2vh 0vw', backgroundColor: blue}}>
      <Grid container direction="row" justify="center" style={{padding: '0 1.5vw 0 1.5vw'}}>
        <Chip className="filterProjects" id="All" variant="outlined" label="All" clickable={true} style={chipStyleAll} onClick={()=>filter("All","All")}/>
        <Chip className="filterProjects" id="Web Development" variant="outlined" label="Web Development" clickable={true} style={chipStyle} onClick={()=>filter("Web-Dev","Web Development")}/>
        <Chip className="filterProjects" id="Entrepreneurial Endeavours" variant="outlined" label="Entrepreneurial Endeavours" clickable={true} style={chipStyle} onClick={()=>filter("Entrepreneurship","Entrepreneurial Endeavours")}/>
        <Chip className="filterProjects" id="Painting" variant="outlined" label="Painting" clickable={true} style={chipStyle} onClick={()=>filter("Painting","Painting")}/>
        <Chip className="filterProjects" id="Adobe Photoshop & Typography" variant="outlined" label="Adobe Photoshop & Typography" clickable={true} style={chipStyle} onClick={()=>filter("Photoshop","Adobe Photoshop & Typography")}/>
        <Chip className="filterProjects" id="Hackathons" variant="outlined" label="Hackathons" clickable={true} style={chipStyle} onClick={()=>filter("Hackathon","Hackathons")}/>
        
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop: '1vh'}}>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPortfolio)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            (this): Web Developer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenMetta)}>
          <img id="Metta" src={metta} alt="Metta Capital Advisors LLP" title="Metta Capital Advisors LLP" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            MettaCapital: Web Developer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          MettaCapital is a leading advisory firm offering services along various facets of investment banking. <br/>
          I specialised as the sole web-developer, using the ReactJS library with a Material UI framework to develop their website from the ground u...
          </Typography>
        </Grid>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenCrave)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Crave: Front-End Developer, Founder
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
        <Grid className="Photoshop" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenComic)}>
          <img id="Adjustment Layers" src={ps1Me} alt="Adjustment Layers" title="Adjustment Layers" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Cartoon Portrait
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I used Adobe Photoshop to convert my portrait into this cartoon. To create this, I first stacked many Solid Color Adjustment Layers on top of one another. Then, I used the Pen Tool to trace portions of the original image to create a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the...
          </Typography>
        </Grid>
        <Grid className="Photoshop" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenTshirt)}>
          <img id="T-Shirt Design" src={waveLogo} alt="T-Shirt Design" title="T-Shirt Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           Logo Design
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I used Adobe Photoshop to design a logo for a beach-themed t-shirt. To create this, I first created three Adjustment Layers (light blue, dark blue, and yellow) and used the Pen Tool to trace portions of the original image. With this, I created a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the... 
          </Typography>
        </Grid>
        <Grid className="Photoshop" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenRiso)}>
          <img id="Manifesto Design" src={d4_1} alt="Manifesto Design" title="Manifesto Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
          Manifesto Design
          </Typography>
          <Typography variant="caption" style={textStyle}>
          This manifesto is inspired by Bruce Mau's <span style={{fontStyle: 'italic'}}> Incomplete Manifesto for Growth</span>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I first encapsulated his manifesto into three simple phrases: 1. Break the rules 2. Chase the unconv...
          </Typography>
        </Grid>
        <Grid className="Photoshop" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenAnimation)}>
          <img id="Photoshop Animation" src={animationImg} alt="Photoshop Animation" title="Photoshop Animation" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
          Keyframe Animation
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Capture accidents, because “the wrong answer is the right answer in search of a different question.” The animation here is inspired by Bruce Mau’s <span style={{fontStyle: 'italic'}}> Incomplete Manifesto for Growth</span>. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us aga...
          </Typography>
        </Grid>
        <Grid className="Entrepreneurship" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPFL)}>
          <img id="T-Shirt Design" src={waveLogo} alt="T-Shirt Design" title="T-Shirt Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           PFL
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living. <br/> –John D. Rockefeller 
          </Typography>
        </Grid>
        <Grid className="Entrepreneurship" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenA2Z)}>
          <img id="T-Shirt Design" src={waveLogo} alt="T-Shirt Design" title="T-Shirt Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           A2Z
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
        <Grid className="Painting" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenBuddha)}>
          <img id="Manifesto Design" src={d4_1} alt="Manifesto Design" title="Manifesto Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           Buddha
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
        <Grid className="Painting" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenDancers)}>
          <img id="Manifesto Design" src={d4_1} alt="Manifesto Design" title="Manifesto Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           4-Piece dancers
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. <br/>
          I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Applicat...
          </Typography>
        </Grid>
        <Grid className="Hackathon" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenTrojanHacks)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Automated Schedule Generator
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Hackathon" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen()}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Robotics
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Entrepreneurship" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen()}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Quilling
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
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
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openCrave}>
        <div>
          <Hidden smDown>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center'}}>
              <Grid container direction="row" justify="center">
                <Grid item xs={2} style={{'paddingTop': '5vh'}}>
                  <Tooltip title="Login" arrow={true} placement="right">
                    <img className="craveImage" id="loginImg" alt="Crave Feature" src={loginImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid black','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveLogin,"loginImg")}/>
                  </Tooltip>
                  <Tooltip title="Filters" arrow={true} placement="right">
                    <img className="craveImage" id="filtersImg" alt="Crave Feature" src={filtersImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveFilters,"filtersImg")}/>
                  </Tooltip>
                  <Tooltip title="Search" arrow={true} placement="right">
                    <img className="craveImage" id="searchImg" alt="Crave Feature" src={searchImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveSearch,"searchImg")}/>
                  </Tooltip>
                  <Tooltip title="Item Description" arrow={true} placement="right">
                   <img className="craveImage" id="itemDescImg" alt="Crave Feature" src={itemDescImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveItemDesc,"itemDescImg")}/>
                  </Tooltip>
                  <Tooltip title="Checkout" arrow={true} placement="right">
                    <img className="craveImage" id="checkoutImg" alt="Crave Feature" src={checkoutImg} style={{'width': '75%', cursor: 'pointer', border: '1px solid #bee3f1','marginBottom': '0.5vh'}} onClick={()=>handlecraveVideo(craveCheckout,"checkoutImg")}/>
                  </Tooltip>
                </Grid>
                <Grid item xs={8} style={{'paddingTop': '5vh'}}>
                  <video id="craveVideo" alt="Crave Feature" src={craveLogin} type="video/mp4" style={{'width': '100%'}} controls autoPlay muted/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, under LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer for Crave.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. <br/>
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
                    <img className="craveImage" id="loginImg" alt="Crave Feature" src={loginImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid black',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveLogin,"loginImg")}/>
                  </Tooltip>
                  <Tooltip title="Filters" arrow={true} placement="right">
                    <img className="craveImage" id="filtersImg" alt="Crave Feature" src={filtersImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveFilters,"filtersImg")}/>
                  </Tooltip>
                  <Tooltip title="Search" arrow={true} placement="right">
                    <img className="craveImage" id="searchImg" alt="Crave Feature" src={searchImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveSearch,"searchImg")}/>
                  </Tooltip>
                  <Tooltip title="Item Description" arrow={true} placement="right">
                   <img className="craveImage" id="itemDescImg" alt="Crave Feature" src={itemDescImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveItemDesc,"itemDescImg")}/>
                  </Tooltip>
                  <Tooltip title="Checkout" arrow={true} placement="right">
                    <img className="craveImage" id="checkoutImg" alt="Crave Feature" src={checkoutImg} style={{'width': '16.5%', cursor: 'pointer', border: '1px solid #bee3f1',marginRight: '5px'}} onClick={()=>handlecraveVideo(craveItemDesc,"checkoutImg")}/>
                  </Tooltip>
                </Grid>
                <Grid container direction="row" justify="center" style={{'paddingTop': '2vh'}}>
                  <video id="craveVideo" alt="Crave Feature" src={craveLogin} type="video/mp4" style={{'width': '90%'}} controls autoPlay muted/>
                </Grid>
              </Grid>
              <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Crave is a delivery service that specialises in bringing international food to university students at affordable rates. I collaborated with a team of 4 to ideate and prototype Crave, under LavaLab (USC's premier startup-incubator comprising the school's top ~1% of Designers, Developers, and Product Managers). I specialised as the front-end web developer for Crave.
                    <br/> <br/>
                    Tech Stack: ReactJs library, Materialize framework. (Hosted locally for demo) <br/>
                    Created: Apr-May 2020
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
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={11} style={{'paddingTop': '5vh'}}>
                <iframe src="https://usclavalab.org/" title="Metta Capital Advisors LLP" allowFullScreen={true} style={{'width': '100%', height: '50vh'}}/>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  MettaCapital is a leading advisory firm offering services along various facets. I specialised as the sole web-developer, using the ReactJS library with a Material UI framework to develop their website from the ground up.
                  <br/> <br/>
                  Tech Stack: ReactJs library, Material UI framework. <br/>
                  APIs: 'window-scroll-position' (used to style navigation bar on homepage), 'google-maps' <br/>
                  Created: May-June 2020
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
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={11} style={{'paddingTop': '5vh'}}>
                <iframe src="https://usclavalab.org/" title="Portfolio" allowFullScreen={true} style={{'width': '100%', height: '50vh'}}/>
              </Grid>
            </Grid>
            <Grid container direction="row" justify="center">
              <Grid item xs={10} style={{'paddingTop': '2vh', 'paddingBottom': '5vh'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framework.
                  <br/> <br/>
                  Tech Stack: ReactJs library, Material UI framework. (Hosted on GitHub Pages) <br/>
                  APIs: 'typist' (used to create the typist effect on the home-page), 'google-maps' <br/>
                  Created: June 2020 <br/>
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
        open={openComic}
        onClose={() => {handleClose(setOpenComic)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >

        <Fade in={openComic}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', paddingBottom: '5vh'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowLeftOutlined id="leftPtr"  fontSize="small" onClick={()=>{handleComic("prev")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={5}>
                <img className="Modal Adjustment Layers" id={comicId} src={comicSrc} alt="Adjustment Layers" title="Adjustment Layers" style={{'width': '100%', 'paddingTop': '5vh'}}></img>
              </Grid>
              <Grid item xs={1} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleComic("next")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  I used Adobe Photoshop to convert my portrait into this cartoon. To create this, I first stacked many Solid Color Adjustment Layers on top of one another. Then, I used the Pen Tool to trace portions of the original image to create a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the adjustment layer.
                  <br/><br/>
                  Adobe Photoshop Tools: Solid Color Adjustment Layers, Pen Tool, Path, Selection, Layer Masks <br/>
                  Created: Apr 2020
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
        open={openTshirt}
        onClose={() => {handleClose(setOpenTshirt)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openTshirt}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleWaveLogo("prev")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={5}>
                <img className="Modal Adjustment Layers" id={waveId} src={waveSrc} alt="Adjustment Layers" title="Adjustment Layers" style={{'width': '100%'}}/>
              </Grid>
              <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleWaveLogo("next")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={4}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  I used Adobe Photoshop to design a logo for a beach-themed t-shirt. To create this, I first created three Adjustment Layers (light blue, dark blue, and yellow) and used the Pen Tool to trace portions of the original image. With this, I created a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the Adjustment Layers. I then edited the stacking order to hide the sun behind one wave and reflect in another. To illustrate the text, I designed custom type paths that wrapped around the wave -- used two paths, one aligning text vertically and the other horizontally. Finally, rasterised the type layers and applied layer effects (stroke).
                  <br/> <br/>
                  Adobe Photoshop Tools: Adjustment Layers, Layer Masks, Custom Type (custom paths), Pen Tool, Layer Effects. <br/>
                  Created: May 2020
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
        open={openRiso}
        onClose={() => {handleClose(setOpenRiso)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openRiso}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
              <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowLeftOutlined id="leftPtr" fontSize="small" onClick={()=>{handleRiso("prev")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={5}  style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <Hidden xsDown>
                  <Grid item xs={12} style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Chip className="filterProjects" id="Iter 1" variant="outlined" label="Iteration One" clickable={true} style={{color: blue, backgroundColor: 'white', border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",1,e.target)}/>
                      <Chip className="filterProjects" id="Iter 2" variant="outlined" label="Iteration Two" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",2,e.target)}/>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Chip className="filterProjects" id="Iter 3" variant="outlined" label="Iteration Three" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",3,e.target)}/>
                      <Chip className="filterProjects" id="Iter 4" variant="outlined" label="Final" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",4,e.target)}/>
                    </Grid>
                  </Grid>
                </Hidden>
                <Hidden smUp>
                  <Grid item xs={12} style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Chip className="filterProjects" id="Iter 1" variant="outlined" label="Iteration One" clickable={true} style={{color: blue, backgroundColor: 'white', border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",1,e.target)}/>
                      <Chip className="filterProjects" id="Iter 2" variant="outlined" label="Iteration Two" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",2,e.target)}/>
                    </Grid>
                    <Grid item xs={12} sm={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Chip className="filterProjects" id="Iter 3" variant="outlined" label="Iteration Three" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",3,e.target)}/>
                      <Chip className="filterProjects" id="Iter 4" variant="outlined" label="Final" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",4,e.target)}/>
                    </Grid>
                  </Grid>
                </Hidden>
                <Grid item xs={12} style={{marginTop: '1vh'}}>
                  <img className="Riso" id={risoId} src={risoSrc} alt="Riso" title="Riso" style={{'width': '100%'}}/>
                </Grid>
              </Grid>
              <Grid item xs={1}  style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <KeyboardArrowRightOutlined id="rightPtr" fontSize="small" onClick={()=>{handleRiso("next")}} style={{cursor: 'pointer'}}/>
              </Grid>
              <Grid item xs={10} md={4} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  This manifesto is inspired by Bruce Mau's <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I first encapsulated his manifesto into three simple phrases: 1. Break the rules, &nbsp; 2. Chase the unconventional, and &nbsp; 3. Live in extremes; or don't. <br/>
                  These phrases then motivated my initial designs as seen in 'Iteration One', with a heavy use of Lines, Angles, and Overlays  to demonstrate these underlying themes. The designs in the second iteration build on the initial designs to explore Whitespace, Color Palettes, and Offset-Layers. The third iterations then further explored the aforementioned facets along with the more inticrate Font Sizes, Text Alignment, and a multitude of other finer details that set the tone for my final design. <br/>
                  The manifesto was designed with the intent to be printed using a Risograph, although the CoVid-19 global pandemic prevented this later.
                  <br/> <br/>
                  Adobe Tools: Adobe InDesign <br/>
                  Created: Mar-Apr 2020
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
        open={openAnimation}
        onClose={() => {handleClose(setOpenAnimation)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openAnimation}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={6} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <video className="Animation" id="Video Animation" src={animation} alt="Animation" title="Animation" style={{'width': '90%'}} autoPlay controls muted/>
                </Grid>
              <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  Capture accidents, because “the wrong answer is the right answer in search of a different question.” The animation here is inspired by Bruce Mau’s <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span>. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us aga...inst accidents, while the animation itself progresses to create an accident -- and then captures it within the word-bars.
                 
                  <br/> <br/>
                  Adobe Tools: Adobe Photoshop Keyframe Animation <br/>
                  Created: Apr 2020
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
        open={openPFL}
        onClose={() => {handleClose(setOpenPFL)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openPFL}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <video className="Animation" id="Video Animation" src={animation} alt="Animation" title="Animation" style={{'width': '90%'}} autoPlay controls muted/>
                </Grid>
              <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  Capture accidents, because “the wrong answer is the right answer in search of a different question.” The animation here is inspired by Bruce Mau’s <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span>. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us aga...inst accidents, while the animation itself progresses to create an accident -- and then captures it within the word-bars.
                 
                  <br/> <br/>
                  Adobe Tools: Adobe Photoshop Keyframe Animation <br/>
                  Created: Apr 2020
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