import React from 'react';
import NavBar from './NavBar'
import Modal from '@material-ui/core/Modal';
import lava from './Media/lava.jpg'
import pfl from './Media/pfl.jpg'
import frcworld from './Media/frcworld.jpg'
import indo from './Media/indo.jpg'
import tedx from './Media/tedx.jpg'
import kathak from './Media/kathak.jpg'
import frcslacks from './Media/frcslacks.jpg'
import play from './Media/play.jpg'
import kyu from './Media/kyu.jpg'
import skg from './Media/skg.jpg'
import scuba from './Media/scuba.JPG'
import lab from './Media/lab.jpg'
import cpr from './Media/cpr.jpg'
import rfl from './Media/rfl.jpg'
import frcspecs from './Media/frcspecs.jpg'
import backstage from './Media/backstage.jpg'
import train from './Media/train.jpg'
import sjtwin from './Media/sjtwin.jpg'
import holi from './Media/holi.jpg'
import kathak2 from './Media/kathak2.jpg'
import frc from './Media/frc.jpg'
import mentalfam from './Media/mentalfam.jpg'

import { Grid, Backdrop, Fade } from '@material-ui/core';
import {KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined} from '@material-ui/icons';

const minImages = 1;
const maxImages = 3;

export default function Story() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen(true);
  };

  function handleClose() {
    setOpen(false);
  };

  function handleNext() {
    if (imageOrder !== maxImages) {
      let tempOrder = imageOrder+1;
      let x = document.getElementById(tempOrder);
      setImageSrc(x.src);
      setImageDesc(x.alt);
      setImageOrder(tempOrder);
      x = document.getElementById("leftPtr");
      if (tempOrder === minImages) {
        x.style.display = 'none';
      }
      else {
        x.style.display = 'flex';
      }
      x = document.getElementById("rightPtr");
      if (tempOrder === maxImages) {
        x.style.display = 'none';
      }
      else {
        x.style.display = 'flex';
      }
    }
    else {
      let x = document.getElementById("rightPtr");
      x.style.display = 'none';
    }
  }

  function handlePrev() {
    if (imageOrder !== minImages) {
      let tempOrder = imageOrder-1;
      let x = document.getElementById(tempOrder);
      setImageSrc(x.src);
      setImageDesc(x.alt);
      setImageOrder(tempOrder);
      x = document.getElementById("leftPtr");
      if (tempOrder === minImages) {
        x.style.display = 'none';
      }
      else {
        x.style.display = 'flex';
      }
      x = document.getElementById("rightPtr");
      if (tempOrder === maxImages) {
        x.style.display = 'none';
      }
      else {
        x.style.display = 'flex';
      }
    }
    else {
      let x = document.getElementById("leftPtr");
      x.style.display = 'none';
    }
    
  }

  const [imageSrc, setImageSrc] = React.useState("null");
  const [imageDesc, setImageDesc] = React.useState("null");
  const [imageOrder, setImageOrder] = React.useState("null");

  return (
    <div>
      <NavBar></NavBar>
      <Grid container direction="row" style={{'padding': '5vh 5vw 5vh 5vw'}}>
        <Grid container spacing={1} xs={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="1" src={lava} alt="lava" onClick={() => {setImageSrc(lava); setImageDesc("lava"); setImageOrder(1); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="2" src={pfl} alt="pfl" onClick={() => {setImageSrc(pfl); setImageDesc("pfl"); setImageOrder(2); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={lava} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={rfl} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={frcspecs} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={backstage} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} xs={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="3" src={frcworld} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item  style={{position: 'relative', top: '0'}}>
            <img id="3" src={indo} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer', position: 'relative', top: '0'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={tedx} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={train} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={sjtwin} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={holi} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} xs={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="3" src={kathak} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={frcslacks} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={play} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer', position: 'relative', top: '0'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={kyu} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={kathak2} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={frc} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={mentalfam} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} xs={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="3" src={scuba} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item  >
            <img id="3" src={lab} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
          <Grid item >
            <img id="3" src={cpr} alt="lab" onClick={() => {setImageSrc(lava); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={{width: '100%', cursor: 'pointer'}}/>
          </Grid>
        </Grid>
      </Grid>
        
                

        
        


      <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby={"image-modal-" + {imageSrc}}
        aria-describedby={"story-modal-" + {imageSrc}}
        open={open}
        onClose={() => {handleClose()}}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        
        <Fade in={open}>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '2px solid #000', boxShadow: 'shadows[5]', width: '50vw', 'max-height': '75vh', 'overflow-y': 'auto', alignItems: 'center'}}>
            <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}}>
              <KeyboardArrowLeftOutlined id="leftPtr" color="black" fontSize="medium" onClick={()=>{handlePrev()}} style={{cursor: 'pointer'}}/>
            </Grid>
            <Grid item xs={10}>
              <img id="image-modal" src={imageSrc} alt="lava" style={{'width': '100%', 'padding-top': '5vh'}}></img>
            </Grid>
            <Grid item xs={1} style={{display: 'flex', justifyContent: 'center'}}>
              <KeyboardArrowRightOutlined id="rightPtr" color="black" fontSize="medium" onClick={()=>{handleNext()}} style={{cursor: 'pointer'}}/>
            </Grid>
            <Grid item xs={12}>
              <p id="story-modal" style={{textAlign: 'center'}}>{imageDesc}</p>
            </Grid>
          </Grid>
        </Fade>
      </Modal>
    </div>
    
  );
}