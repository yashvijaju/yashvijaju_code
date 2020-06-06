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

import { Grid, Backdrop, Fade, Typography } from '@material-ui/core';
import {KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined} from '@material-ui/icons';

const minImages = 1;
const maxImages = 21;

const imageStyle = {width: '100%', cursor: 'pointer'}

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
      setImageDesc(x.title);
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
      setImageDesc(x.title);
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
        <Grid item xs={12} style={{'padding-bottom': '1vh'}}>
          <Typography variant="subtitle1">
            It is said that a picture can speak a thousand words. So, here's my story, a collection of memories.
          </Typography>
        </Grid>
        <Grid container spacing={1} xs={6} md={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item>
            <p id="kyuText" style={{display: 'none'}}>Kyu? (Why?) | 24th November, 2017. Indore, India |
            "Papa, ye kya hain? Voh kaun hain? Kyun aaya? Kidhar se aaya? Batao na!" ("Papa, what is this? Who is that? Why did he come? Where did he come from? Tell me!")

            As a child, I spurted questions out faster than anyone could answer them, and this picture captures me right in the act.

            This memory encapsulates an interaction with my beautiful great-grandmother in Indore, India. I don't recall this day to exactitude, but I believe we were in the midst of a simple card game where cards are dealt face-down and players alternate to play their top card in the centre pile. If the numbers match, the player wins the pile. My great-grandmother was dealing the cards and I was questioning her, fingers spread to form the classic sign for "why".

            Reliving this day, years later, what strikes me as interesting is that my great-grandmother spoke in Marwadi, a common Rajasthani dialect, while I spoke in Hindi. I don't know how we kept a conversation going, but this image stands to prove that emotions surpass language.</p>
            <img id="16" src={kyu} alt="lab" title="Kyu? (Why?) 24th November, 2017. Indore, India" onClick={() => {setImageSrc(kyu); setImageDesc(document.getElementById("kyuText").textContent); setImageOrder(16); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item>
            <img id="13" src={kathak} alt="lab" onClick={() => {setImageSrc(kathak); setImageDesc("lab"); setImageOrder(13); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="1" src={lava} alt="lava" title="i love u" onClick={() => {setImageSrc(lava); setImageDesc("lava"); setImageOrder(1); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="2" src={pfl} alt="pfl" title="i dont" onClick={() => {setImageSrc(pfl); setImageDesc("pfl"); setImageOrder(2); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="3" src={mentalfam} alt="lab" onClick={() => {setImageSrc(mentalfam); setImageDesc("lab"); setImageOrder(3); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="4" src={rfl} alt="lab" onClick={() => {setImageSrc(rfl); setImageDesc("lab"); setImageOrder(4); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="5" src={frcspecs} alt="lab" onClick={() => {setImageSrc(frcspecs); setImageDesc("lab"); setImageOrder(5); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="6" src={backstage} alt="lab" onClick={() => {setImageSrc(backstage); setImageDesc("lab"); setImageOrder(6); handleOpen()}} style={imageStyle}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} xs={6} md={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="7" src={frcworld} alt="lab" onClick={() => {setImageSrc(frcworld); setImageDesc("lab"); setImageOrder(7); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item  style={{position: 'relative', top: '0'}}>
            <img id="8" src={indo} alt="lab" onClick={() => {setImageSrc(indo); setImageDesc("lab"); setImageOrder(8); handleOpen()}} style={{width: '100%', cursor: 'pointer', position: 'relative', top: '0'}}/>
          </Grid>
          <Grid item >
            <img id="9" src={tedx} alt="lab" onClick={() => {setImageSrc(tedx); setImageDesc("lab"); setImageOrder(9); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="10" src={train} alt="lab" onClick={() => {setImageSrc(train); setImageDesc("lab"); setImageOrder(10); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="11" src={sjtwin} alt="lab" onClick={() => {setImageSrc(sjtwin); setImageDesc("lab"); setImageOrder(11); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="12" src={holi} alt="lab" onClick={() => {setImageSrc(holi); setImageDesc("lab"); setImageOrder(12); handleOpen()}} style={imageStyle}/>
          </Grid>
        </Grid>
        <Grid container spacing={1} xs={6} md={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="14" src={frcslacks} alt="lab" onClick={() => {setImageSrc(frcslacks); setImageDesc("lab"); setImageOrder(14); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="15" src={play} alt="lab" onClick={() => {setImageSrc(play); setImageDesc("lab"); setImageOrder(15); handleOpen()}} style={{width: '100%', cursor: 'pointer', position: 'relative', top: '0'}}/>
          </Grid>
          <Grid item >
            <img id="17" src={kathak2} alt="lab" onClick={() => {setImageSrc(kathak2); setImageDesc("lab"); setImageOrder(17); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="18" src={frc} alt="lab" onClick={() => {setImageSrc(frc); setImageDesc("lab"); setImageOrder(18); handleOpen()}} style={imageStyle}/>
          </Grid> 
        </Grid>
        <Grid container spacing={1} xs={6} md={3} direction="column" style={{'padding': '0vh 1vw 0vh 0vw'}}>
          <Grid item >
            <img id="19" src={scuba} alt="lab" onClick={() => {setImageSrc(scuba); setImageDesc("lab"); setImageOrder(19); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item  >
            <img id="20" src={lab} alt="lab" onClick={() => {setImageSrc(lab); setImageDesc("lab"); setImageOrder(20); handleOpen()}} style={imageStyle}/>
          </Grid>
          <Grid item >
            <img id="21" src={cpr} alt="lab" onClick={() => {setImageSrc(cpr); setImageDesc("lab"); setImageOrder(21); handleOpen()}} style={imageStyle}/>
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