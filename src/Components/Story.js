import React, { Component }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import lava from './Media/lava.jpg'
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

export default function LandingPage() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img src={lava} alt="lava" onClick={handleOpen} style={{width: '25vw'}}/>
      <Modal
        style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
        aria-labelledby="image-modal"
        aria-describedby="story-modal"
        open={open}
        onClose={handleClose}
        closeAfterTransition={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div style={{backgroundColor: 'white', border: '2px solid #000', boxShadow: 'shadows[5]', width: '50vw', 'max-height': '75vh', 'overflow-y': 'auto', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <img id="image-modal"src={lava} alt="lava" style={{'width': '40vw', 'padding-top': '5vh'}}></img>
            <p id="story-modal" style={{'padding-left': '5vw', 'padding-right': '5vw'}}>Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote goes heeeree Interesting story anecdote</p>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}