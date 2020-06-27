import React from 'react';
import Modal from '@material-ui/core/Modal';
import { Grid, Typography, Backdrop, Fade, Hidden, Tooltip, Chip, Snackbar } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined, ExpandMoreOutlined, CancelOutlined } from '@material-ui/icons';

import portfolio from './Media/Projects/portfolio.jpg';
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

import pflcollage from './Media/Projects/pflcollage.jpg';
import pflcollage2 from './Media/Projects/pflcollage2.jpg';
import pfl1 from './Media/Projects/pfl_1.JPG';
import pfl2 from './Media/Projects/pfl_2.JPG';
import pfl3 from './Media/Projects/pfl_3.JPG';
import pfl4 from './Media/Projects/pfl_4.JPG';

import a2z from './Media/Projects/a2z.jpg';
import a2z2 from './Media/Projects/a2z2.jpg';
import a2z3 from './Media/Projects/a2z3.jpg';
import buddha from './Media/Projects/buddh.jpg';
import buddhaeyes from './Media/Projects/buddhaeyes.jpg';
import dancers from './Media/Projects/dancers.jpg';
import frc from './Media/Projects/frc.jpg';

import kathak1 from './Media/Projects/kathak1.png';
import kathak2 from './Media/Projects/kathak2.jpg';
import kathak3 from './Media/Projects/kathak3.jpg';
import kathak4 from './Media/Projects/kathak4.jpg';


const pink='#F7CAC9';
const blue='#bee3f1';
const grey = '#efefef';

const font = 'Segoe UI';
const textStyle = {fontFamily: font, fontWeight: 'lighter'};
const titleStyle = {fontFamily: font, fontWeight: 'normal'};
const imageStyle = {width: '100%', marginBottom: '1vh'};
const chipStyle = {color: 'white', border: '2.5px solid white', borderRadius: '20px', marginRight: '1vw', fontFamily: font, fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};
const chipStyleAll = {color: blue, border: '2.5px solid white', backgroundColor: 'white' , borderRadius: '20px', marginRight: '1vw', fontFamily: font, fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};

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
  const [trojanHacks, setOpenTrojanHacks] = React.useState(false);
  const [robotics, setOpenRobotics] = React.useState(false);
  const [kathak, setOpenKathak] = React.useState(false);
  const [quilling, setOpenQuilling] = React.useState(false);

  const [lastFilter, setLastFilter] = React.useState("All");
  const [comicSrc, setComicSrc] = React.useState(ps1Me);
  const [comicId, setComicId] = React.useState(1);
  const [waveSrc, setWaveSrc] = React.useState(waveLogo);
  const [waveId, setWaveId] = React.useState(1);
  const [risoSrc, setRisoSrc] = React.useState(d1_1);
  const [risoId, setRisoId] = React.useState(1);
  const [lastFilterRiso, setLastFilterRiso] = React.useState();
  const [A2ZSrc, setA2ZSrc] = React.useState(a2z);
  const [openNotifs, setOpenNotifs] = React.useState(true);
  const [openFilterNotifs, setOpenFilterNotifs] = React.useState(false);
  const [filterNotifRender, setFilterNotifRender] = React.useState(0);
  
  var notifTimer = setTimeout(handleOpenNotif,10000);

  function handleOpenNotif() {
    if (filterNotifRender === 0) {
      setOpenFilterNotifs(true);
      setFilterNotifRender(1);
    }
    else {
      setOpenFilterNotifs(false);
    }
  }

  const handleCloseNotif = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenNotifs(false);
    setOpenFilterNotifs(false);
  };

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
      setComicId(2);
      setComicSrc(ps2Me);
      
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

  function handleA2Z(props) {
    if (A2ZSrc === a2z) {
      setA2ZSrc(a2z2);
    }
    else if (A2ZSrc === a2z2) {
      setA2ZSrc(a2z3);
    }
    else {
      setA2ZSrc(a2z);
    }
  }


  return (
    <div style={{'padding': '5vh 0vw 2vh 0vw', backgroundColor: blue}}>
      <Hidden mdUp>
        <Snackbar
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            open={openNotifs}
            autoHideDuration={4000}
            onClose={handleCloseNotif}
            message="Viewing this on a laptop is highly recommended"
            id="notif1"
            action={
              <CancelOutlined size="small" aria-label="close" color="inherit" style={{cursor: 'pointer'}} onClick={handleCloseNotif}/>
            }
        />
      </Hidden>
      <Snackbar
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        open={openFilterNotifs}
        autoHideDuration={4000}
        onClose={handleCloseNotif}
        message="Tip: use the filter buttons (:"
        id="notif1"
        action={
          <CancelOutlined size="small" aria-label="close" color="inherit" style={{cursor: 'pointer'}} onClick={handleCloseNotif}/>
        }
      />
      <Grid container direction="row" justify="center" style={{padding: '0 1.5vw 0 1.5vw'}}>
        <Chip className="filterProjects" id="All" variant="outlined" label="All" clickable={true} style={chipStyleAll} onClick={()=>filter("All","All")}/>
        <Chip className="filterProjects" id="Web Dev" variant="outlined" label="Web Dev" clickable={true} style={chipStyle} onClick={()=>filter("Web-Dev","Web Dev")}/>
        <Chip className="filterProjects" id="Startups" variant="outlined" label="Startups" clickable={true} style={chipStyle} onClick={()=>filter("Entrepreneurship","Startups")}/>
        <Chip className="filterProjects" id="Painting" variant="outlined" label="Painting" clickable={true} style={chipStyle} onClick={()=>filter("Painting","Painting")}/>
        <Chip className="filterProjects" id="Adobe Photoshop & Typography" variant="outlined" label="Adobe Photoshop & Typography" clickable={true} style={chipStyle} onClick={()=>filter("Photoshop","Adobe Photoshop & Typography")}/>
        <Chip className="filterProjects" id="Hackathons" variant="outlined" label="Hackathons" clickable={true} style={chipStyle} onClick={()=>filter("Hackathon","Hackathons")}/>
        
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop: '1vh'}}>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPortfolio)}>
          <img id="Portfolio" src={portfolio} alt="Portfolio" title="Portfolio" style={imageStyle}/>
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
          <img id="Pride For Labor" src={pfl3} alt="Pride For Labor" title="Pride For Labor" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           Pride For Labour
          </Typography>
          <Typography variant="caption" style={textStyle}>
          "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. Domestic labour isn’t a respected occupation, but that has to change. To solve this, I founded Pride For Labour (PFL) in gra...
          </Typography>
        </Grid>
        <Grid className="Entrepreneurship" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenA2Z)}>
          <img id="A2Z" src={a2z} alt="A2Z" title="A2Z" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           A2Z
          </Typography>
          <Typography variant="caption" style={textStyle}>
          At the age of 12, I founded A2Z as a backyard summer project with 5 friends. A2Z started as a pay-per-issue magazine that  quickly converted into an advertisement-driven bi-monthly magazine distributed to 400+ flats in my building/ society free of cost. As the founder and edi...
          </Typography>
        </Grid>
        <Grid className="Painting" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenBuddha)}>
          <img id="Gautam Buddha" src={buddha} alt="Gautam Buddha" title="Gautam Buddha" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           'Circle of Light': The Gautam Buddha
          </Typography>
          <Typography variant="caption" style={textStyle}>
          'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. This painting is inspired by another painting I had seen in a book. The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and sel...
          </Typography>
        </Grid>
        <Grid className="Painting" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenDancers)}>
          <img id="Dancers" src={dancers} alt="Dancers" title="Dancers" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           'Dancing on the Moon'
          </Typography>
          <Typography variant="caption" style={textStyle}>
          'Dancing on the Moon' is a four-piece abstract oil painting that tries to capture motion in a picture. Tried to capture motion in a picture, but captured the beauty of motion instea... <br/>
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
        <Grid className="Hackathon" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenRobotics)}>
          <img id="FRC" src={frc} alt="FRC" title="FRC" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Robotics
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Entrepreneurship" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenQuilling)}>
          <img id="Crave" src={crave} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Quilling
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Entrepreneurship" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenKathak)}>
          <img id="Crave" src={kathak4} alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Kathak
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I have been practicing Kathak (Jaipur Gharana) and Bharatnatyam, two popular styles of Indian classical dance, from the age of 4. When I look down, I see a bunch of ghungroos adorning my fe...
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
                <a href="https://mettacapital.in" target="_blank" rel="noopener noreferrer">"<iframe src="https://mettacapital.in" title="Metta Capital Advisors LLP" allowFullScreen={true} style={{'width': '100%', height: '50vh'}}/></a>
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
                    <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                      <Chip className="filterProjects" id="Iter 1" variant="outlined" label="Iteration One" clickable={true} style={{color: blue, backgroundColor: 'white', border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",1,e.target)}/>
                      <Chip className="filterProjects" id="Iter 2" variant="outlined" label="Iteration Two" clickable={true} style={{color: blue, border: '2px solid #bee3f1', borderRadius: '15px', marginRight: '1vw', fontFamily: font, fontSize: '1.5vh', marginBottom: '1vh'}} onClick={(e)=>handleRiso("filter",2,e.target)}/>
                    </Grid>
                    <Grid item xs={12} md={6} style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
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
                  This manifesto is inspired by Bruce Mau's <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete" target="_blank"> Incomplete Manifesto for Growth</a></span>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I first encapsulated his manifesto into three simple phrases: 1. Break the rules, &nbsp; 2. Chase the unconventional, and &nbsp; 3. Live in extremes; or don't. <br/>
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
                  Capture accidents <br/>
                  because <br/>
                  “the wrong answer is the right answer in search of a different question” <br/>
                  <br/>
                  Everywhere I go <br/>
                  Neon yellow signs warn me <br/>
                  Be careful <br/>
                  Prevent accidents <br/>
                  <br/>
                  Yet, <br/>
                  I create an accident <br/>
                  And capture it <br/>
                  In prison bars <br/>
                  Made from all the warning signs <br/>
                  <br/>
                  And I paint it neon yellow <br/>
                  --
                  <br/> <br/>                  

                  <span style={{display:'none'}}>Capture accidents, because “the wrong answer is the right answer in search of a different question”. The animation here is inspired by Bruce Mau’s <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span>. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us against accidents, while the animation itself progresses to create an accident -- and then captures it within the word-bars.</span>
                 
                  Inspiration: Bruce Mau's <span style={{fontStyle: 'italic', cursor: 'pointer'}}><a href="https://tinyurl.com/brucemauincomplete"> Incomplete Manifesto for Growth</a></span> <br/>
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
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src={pflcollage} alt="PFL" title="PFL" style={{'width': '100%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src={pfl1} alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                  <img src={pfl2} alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
              <Grid item xs={10} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  The lift's doors stretched wide open <br/>
                  <span style={{fontStyle: 'italic'}}>6th floor</span> <br/>
                  I waited while teachers and students ahead spilled out <br/>
                  It was my turn <br/>
                  I took a step ahead <br/>
                  Turned around <br/>
                  "Thank you <span style={{fontStyle: 'italic'}}>didi</span>" <br/>
                  <br/>
                  Didi smiled <br/>
                  I was the only one who thanked her that day. <br/>
                  --
                  <br/> <br/>


                  "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. <br/>
                  Domestic labour isn’t a respected occupation, but that has to change. <br/>
                  <br/>

                  To solve this, I founded Pride For Labor (PFL) in grade 10. <br/>
                    • Conducted social experiments to analyse treatment of domestic staff and employer sensitivity to their conditions <br/>
                    • Designed a multi-phased program, secured school support, and participation of 500+parents / students <br/>
                    1. Organised student and teacher volunteers to clean the 8-storey campus while the staff was treated to lunch and movies <br/>
                    2. Collected 400+ gifts and distributed to support staff for Christmas, 2018 <br/>
                    3. Conducted campaigns to increase awareness amongst students to respect domestic staff <br/>

                  A little effort is all it takes to spread a smile, and I want to make a revolution, one smile at a time.
                  <br/> <br/>
                  Location: Oberoi International School, Mumbai <br/>
                  Founded: 2016 <br/>
                  <br/>
                </Typography>
              </Grid>
              <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src={pfl3} alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                  <img src={pfl4} alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src={pflcollage2} alt="PFL" title="PFL" style={{'width': '100%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
            </Grid>
          </Grid>
        </div>
        </Fade>
      </Modal>
      <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby="image-modal"
        aria-describedby="story-modal"
        open={openA2Z}
        onClose={() => {handleClose(setOpenA2Z)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openA2Z}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="A2Zimg" src={A2ZSrc} alt="A2Z" title="A2Z" style={{'width': '70%'}}/>
                    <Grid item xs={1}>
                      <ExpandMoreOutlined id="downPtr" fontSize="large" onClick={()=>{handleA2Z("next")}} style={{cursor: 'pointer'}}/>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={4} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  At the age of 12, I founded A2Z as a backyard summer project with 5 friends. A2Z started as a pay-per-issue magazine that  quickly converted into an advertisement-driven bi-monthly magazine distributed to 400+ flats in my building/ society free of cost. <br/>
                  <br/>
                  As the founder and editor, I solely handled finances, sought advertisers, and negotiated printing costs. I edited articles and images, building the magazine with all my technical and design expertise stemming from Pages (Apple's take on Microsoft Word). <br/> <br/>
                  To sell the first issue (pay-per-issue model), I remember knocking door to door on every single flat in the hopes of selling our 100 copies. Each magazine was priced at Rs. 60 (~ $1). I remember the closed doors and the "No, sorry. We don't need this", but I also remember my sheer joy at every single purchase. I don't remember how many copies we sold that day to exactitude, but we definitely didn't sell out. We did, however, break even. And we each earned about a hundred rupees (~1.5$), and that was motivation enough to go on. 

                    <br/> <br/>
                    Founded: May 2014 <br/>
                    <br/>
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
        open={openBuddha}
        onClose={() => {handleClose(setOpenBuddha)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openBuddha}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="Gautam Buddha" src={buddha} alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%'}}/>
                    <img id="Gautam Buddha" src={buddhaeyes} alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%', marginTop: '5px'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. This painting is inspired by another painting I had seen in a book. <br/>
                    <br/>
                    The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and self-actualisation. His ideology and way-of-life attracts hundreds of thousands of followers. <br/> 
                    <br/>
                    In the portrait, Buddha’s facial features are softened and symmetricalised as a manifestation of his ideology attracting a multitude of followers, as in accordance with the Theory of Evolutionary Advantage. His eyelids are painted half-open to radiate calmness and serenity, as achieved through meditation. This also allows observers to feel as if the Buddha is looking right at them regardless of where they position themselves and thus suggesting a quality of being omniscient. Around Buddha’s head, an aura has been painted to illustrate the high pedestal followers place him on. Moreover, given the asssociation of the colors blue and white with the ocean and sky, shades of these hues have been used throughout the portrait to emphasise the theme of embracing the natural. <br/> 
                    <br/>
                    A bright “Circle of Light” has been placed where the Buddha's heart should be to visually define his state of complete internal enlightenment. Just as he preaches to his pupils in order to share his knowledge, tendrils of this “Circle of Light” have been shown to extend from his soul and merge with his surroundings. The color palette of yellow, orange, and red accentuates the portrayal of Buddha as a beacon of hope and fresh beginnings, just like the sun. 
                    
                    <br/> <br/>
                    Painted: May 2014 <br/>
                    <br/>

                    Methodology: <br/>
                    As the canvas was large, I started by pencilling out a 10*10 grid - this allowed me to later maintain symmetry while sketching the portrait. I then drew a rough pencil sketch of the Buddha as this was the main object of my painting. Then, to even the tone and decrease the absorption of the oil paint by the canvas, I painted the entire canvas with a thick white base coat to prepare my canvas for the firs coat. I started with the background, using a large brush to paint the top corners in a deep, royal blue. Then, I used a slightly thinner brush to create the aura around Buddha’s head, rotating the brush in a circular motion as I started from the centre and moved to the corners, decreasing the pressure exerted on the brush to paint the different hues of blue as the palette moved from light blue towards the centre to dark blue in the extreme corners. After this, I had to wait for a few days to allow the paint to semi-dry before I began detailing Buddha’s facial features. As this was the first coat of oil paints out of three, my goal was to outline the more general features rather than expending energy focusing on the inticrate details. I first painted the Buddha's hair given this was a dark color; this was done to prevent it from smudging into the lighter shades used while painting his forehead. I then painted the forehead, cheekbones, and ears in a slightly lighter shade of blue, using paints of red and white to create highlights and tone. Once this was done, I painted the Buddha’s neck in a darker blue so as to greatly accentuate the “circle of light” in his chest - represented in the bright shades of yellow, orange, red, and green. Thus, my first coat was complete. 
                    <br/> Before starting my second coat, I had to wait for the first coat of paint to dry. However, this time, I had to wait for longer (about two-three weeks) to ensure thorough drying as I was to resume painting from the very top, and didn’t want to smudge the lower half while doing so. The primary purpose behind the second coat was to perfect all the background illustrations. It hence focused on detailed shading to create smooth transitions from one hue to another without allowing individual brush strokes to show. This time, I detailed Buddha’s facial features as well, creating the effect of light coming from within by highlighting his central facial section. And thus, with the completion of the second coat, I perfected my painting’s background. The process of waiting continued once again. I then began work on my third coat, focused on perfecting and finely detailing the portrait’s main object - the Buddha’s face. This was by far the most difficult aspect of the painting - especially the eyes - as I had to be doubly careful to ensure that the features radiated serenity while also ensuring that my brush strokes did, at no point, touch the surrounding background. Only after painting this layer and allowing it to dry completely was I able to add the final finishing touches to the painting. I ensured that not only was the border between the Buddha and the background sharp, but also painted the sides of the canvas with a dark bluish-black paint to cover any strokes that went astray down the sides. To mark my painting’s completion, I then used a thin brush to paint my name in the right-hand corner in white.
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
        open={openDancers}
        onClose={() => {handleClose(setOpenDancers)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={openDancers}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="Dancing on the Moon" src={dancers} alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    Tried to capture motion <br/>
                    In a picture <br/>
                    But captured the beauty of motion <br/>
                    Because <br/>
                    Time doesn't wait for you <br/>
                    Or me <br/>

                    <br/>

                    tick tock <br/>

                    <br/>

                    Ignores all borders <br/>
                    As we move <br/>
                    From one timeframe to another <br/>
                    Lost in time <br/>
                    Dancing on the moon <br/>

                    --

                    <br/> <br/>
                    Painted: May 2016 <br/>
                    Medium: Oil
                    <br/>
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
        open={robotics}
        onClose={() => {handleClose(setOpenRobotics)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={robotics}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="First Robotics Competition" src={frc} alt="First Robotics Competition" title="First Robotics Competition" style={{'width': '90%'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    <span style={{fontStyle: 'italic'}}>First</span> — <br/> 
                    <br/>
                    The first time <br/>
                    I took a step <br/>
                    Through the open doors <br/>
                    At the Parle-G factory <br/>
                    (my team's workshop) <br/>
                    I was hesitant <br/>
                    And I took a step back <br/>
                    But then I saw <br/>
                    More gears in the box <br/>
                    Than people in all of Mumbai <br/>
                    And I heard <br/>
                    The soft whir <br/>
                    Of motors <br/>
                    <br/>
                    The gears in my heart <br/>
                    Clicked <br/>
                    So I took another step. <br/>
                    <br/>
                    The first time <br/>
                    He asked me to get the <br/>
                    Power Tool <br/>
                    And tighten the screws <br/>
                    I had to ask him for help <br/>
                    I didn't know machines <br/>
                    Had replaced screwdrivers as well <br/>
                    <br/>
                    After that <br/>
                    I tightened all the screws. <br/>
                    <br/>
                    The first time <br/>
                    I spent the entire evening <br/>
                    At the factory <br/>
                    I didn't realise the sun had set <br/>
                    Hours felt like seconds <br/>
                    Morning turned into night <br/>
                    <br/>
                    My world now revolved around the robot. <br/>
                    <br/>
                    The first time <br/>
                    I visited another stall <br/>
                    At the Southern Cross Regional <br/>
                    In Sydney <br/>
                    I picked up their team badge <br/>
                    And pinned it on my tracks <br/>
                    <br/>
                    The next day <br/>
                    My tracks were weighed in kilograms <br/>
                    A yellow-book for the teams <br/>
                    <br/>
                    The first time <br/>
                    They announced 6024 <br/>
                    As the recipient <br/>
                    To the Chairman's Award <br/>
                    Qualifying us for the <br/>
                    First Championship <br/>
                    I couldn't believe it <br/>
                    None of us could <br/>
                    <br/>
                    A dream come true <br/>
                    <span style={{fontStyle:'italic'}}>Houston, we have a problem</span> <br/>
                    Our hearts are beating too fast. <br/>
                    --

                    
                    <br/> <br/>
                    Team: 6024 R Factor, 1st team from Mumbai <br/>
                    Specialist Role: Safety-Captian <br/>
                    Qualified for First Championship @Houston, 2018 <br/>
                    FRC Regionals: Southern Cross Regional (Sydney), South Pacific Regional (Sydney)  <br/>
                    FRC Awards: Chairman’s Award (Southern Cross Regional), Safety Runners-Up Award (FIRST Championship, Houston) Safety Animation Award (sponsored by Underwriters Laboratories), Safety Award (Southern Cross Regional), Safety Runners-Up Award (South Pacific Regional) <br/>

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
        open={kathak}
        onClose={() => {handleClose(setOpenKathak)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={kathak}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center">
                    <img id="Kathak" src={kathak1} alt="Kathak" title="Kathak" style={{'width': '90%', paddingBottom: '0.5vh'}}/>
                    <img id="Kathak" src={kathak4} alt="Kathak" title="Kathak" style={{'width': '90%', paddingBottom: '0.5vh'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    When I look down <br/>
                    I see a bunch of <span style={{fontStyle: 'italic'}}>ghungroos</span> <br/>
                    Adorning my feet <br/>
                    <br/>
                    It has been 14 years now <br/>
                    Since I wore 10 <span style={{fontStyle: 'italic'}}>ghungroos</span> <br/>
                    Tiny bells tied together with a red thread <br/>
                    Today I wear 150 <br/>
                    But I feel light <br/>
                    <br/>
                    When I dance <br/>
                    <span style={{fontStyle: 'italic'}}>Ghungroos</span> sound like <br/>
                    Chains breaking <br/>
                    And music coming to life <br/>
                    <br/>
                    I stare at one spot <br/> 
                    And spin <br/>
                    One <br/>
                    Two <br/>
                    Three <br/>
                    Forty <br/>
                    Hundred <br/>
                    <br/>
                    Time slows down <br/>
                    But I don't <br/>
                    <br/>
                    I am unstoppable <br/>
                    Like the wind <br/>
                    A force to be reckoned with <br/>
                    <br/>
                    And when I look up <br/>
                    I am the wind <br/> 
                    --
                    <br/> <br/>

                    Images captured: December 2016

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
        open={quilling}
        onClose={() => {handleClose(setOpenQuilling)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={quilling}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="Gautam Buddha" src={buddha} alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. This painting is inspired by another painting I had seen in a book. <br/>
                    <br/>
                    The Guatam Buddha is an impo
                    
                    <br/> <br/>
                    Painted: May 2014 <br/>
                    <br/>

                    Methodology: <br/>
                    As the canvas was lar
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
        open={trojanHacks}
        onClose={() => {handleClose(setOpenTrojanHacks)}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{timeout: 500}}
      >

        <Fade in={trojanHacks}>
        <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                  <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                    <img id="Gautam Buddha" src={buddha} alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%'}}/>
                  </Grid>
                </Grid>
                <Grid item xs={10} md={5} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                    'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. This painting is inspired by another painting I had seen in a book. <br/>
                    <br/>
                    The Guatam Buddha is an impo
                    
                    <br/> <br/>
                    Painted: May 2014 <br/>
                    <br/>

                    Methodology: <br/>
                    As the canvas was lar
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