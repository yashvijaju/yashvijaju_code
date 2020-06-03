import React from 'react';
import NavBar from './NavBar'
import Modal from '@material-ui/core/Modal';
import lava from './Media/lava.jpg'
import { Grid, Backdrop, Fade } from '@material-ui/core';


export default function Story() {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
      <NavBar></NavBar>
      <Grid container>
        
      </Grid>
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