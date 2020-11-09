import React from 'react';
import { Grid, Typography, Hidden, Chip, Snackbar } from '@material-ui/core';
import { CancelOutlined } from '@material-ui/icons';


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


  const [lastFilter, setLastFilter] = React.useState("All");

  const [openNotifs, setOpenNotifs] = React.useState(true);
  const [openFilterNotifs, setOpenFilterNotifs] = React.useState(false);
  const [filterNotifRender, setFilterNotifRender] = React.useState(0);
  
  const timer = setTimeout(handleOpenNotif,20000);

  function handleOpenNotif() {
    if (filterNotifRender === 0) {
      setOpenFilterNotifs(true);
      setFilterNotifRender(1);
    }
    else {
      setOpenFilterNotifs(false);
      clearTimeout(timer);
    }
  }

  const handleCloseNotif = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpenNotifs(false);
    setOpenFilterNotifs(false);
    clearTimeout(timer);
  };

  function handleOpen(props) {
    props(true);
  };


  function filter(props,chip) {
    setFilterNotifRender(1);
    clearTimeout(timer);
    if (props === "All") {
      var arr = ["Web-Dev","Hackathon","Startups","Traditional Art", "Digital Art", "Professional"];
      for (var i = 0; i < arr.length; i++) {
        var x = document.getElementsByClassName(arr[i]);
          for (var j = 0; j < x.length; j++) {
            x[j].style.display = 'inline';
          }
      }
    }
    else {
      arr = ["Web-Dev","Hackathon","Startups","Traditional Art", "Digital Art", "Professional"];
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


  return (
    <div style={{'padding': '5vh 0vw 2vh 0vw', backgroundColor: blue}}>
      <Typography variant="h5" style={{'fontFamily': font, paddingBottom: '1vh', fontWeight: 'bolder', color: 'white', textAlign: 'center'}}>
          &#123; My Projects &#125;
      </Typography>
      <Typography variant="body1" style={{'fontFamily': font, paddingBottom: '3vh', fontWeight: 'normal', color: 'white', textAlign: 'center'}}>
          click on a project to learn more
      </Typography>
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
      <Grid container direction="row" justify="center" style={{padding: '0 4vw 0 4vw'}}>
        <Chip className="filterProjects" id="All" variant="outlined" label="All" clickable={true} style={chipStyleAll} onClick={()=>filter("All","All")}/>
        <Chip className="filterProjects" id="Web Dev" variant="outlined" label="Web Dev" clickable={true} style={chipStyle} onClick={()=>filter("Web-Dev","Web Dev")}/>
        <Chip className="filterProjects" id="Startups" variant="outlined" label="Startups" clickable={true} style={chipStyle} onClick={()=>filter("Startups","Startups")}/>
        <Chip className="filterProjects" id="Digital Art" variant="outlined" label="Digital Art" clickable={true} style={chipStyle} onClick={()=>filter("Digital Art","Digital Art")}/>
        <Chip className="filterProjects" id="Traditional Art" variant="outlined" label="Traditional Art" clickable={true} style={chipStyle} onClick={()=>filter("Traditional Art","Traditional Art")}/>
        <Chip className="filterProjects" id="Professional" variant="outlined" label="Professional" clickable={true} style={chipStyle} onClick={()=>filter("Professional","Professional")}/>
        <Chip className="filterProjects" id="Hackathons" variant="outlined" label="Side Projects" clickable={true} style={chipStyle} onClick={()=>filter("Hackathon","Hackathons")}/>
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop: '1vh'}}>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenCrave)}>
          <img id="Crave" src="/assets/crave.jpg" alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Crave: Front-End Developer, Founder
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Crave is a delivery service specialising in bringing international food to university students at affordable rates. I specialised as the front-end web-developer, using the ReactJS library with a Materialize framework to build a Progressive Web Application. The website was locally hosted fo...
          </Typography>
        </Grid>
        <Grid className="Traditional Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenDancers)}>
          <img id="Dancers" src="/assets/dancers.jpg" alt="Dancers" title="Dancers" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           'Dancing on the Moon': Artist
          </Typography>
          <Typography variant="caption" style={textStyle}>
          'Dancing on the Moon' is a four-piece abstract oil painting that tries to capture motion in a picture. Tried to capture motion in a picture, but captured the beauty of motion instea... <br/>
          </Typography>
        </Grid>
        <Grid className="Startups" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPFL)}>
          <img id="Pride For Labor" src="/assets/pfl_3.JPG" alt="Pride For Labor" title="Pride For Labor" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           Pride For Labour: Founder
          </Typography>
          <Typography variant="caption" style={textStyle}>
          "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. Domestic labour isn’t a respected occupation, but that has to change. To solve this, I founded Pride For Labou...
          </Typography>
        </Grid>
        <Grid className="Digital Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenComic)}>
          <img id="Adjustment Layers" src="/assets/ps1.png" alt="Adjustment Layers" title="Adjustment Layers" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Cartoon Portrait: Artist
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I used Adobe Photoshop to convert my portrait into this cartoon. To create this, I first stacked many Solid Color Adjustment Layers on top of one another. Then, I used the Pen Tool to trace portions of the original image to create a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the...
          </Typography>
        </Grid>
        <Grid className="Startups" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenA2Z)}>
          <img id="A2Z" src="/assets/a2z.jpg" alt="A2Z" title="A2Z" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           A2Z: Founder, Co-Editor
          </Typography>
          <Typography variant="caption" style={textStyle}>
          At the age of 12, I founded A2Z as a backyard summer project with 5 friends. A2Z started as a pay-per-issue magazine that  quickly converted into an advertisement-driven bi-monthly magazine distributed to 400+ flats in my building/ society free of cost. As the founder and edi...
          </Typography>
        </Grid>
        <Grid className="Digital Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenRiso)}>
          <img id="Manifesto Design" src="/assets/d4_1.jpg" alt="Manifesto Design" title="Manifesto Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
          Manifesto: Artist
          </Typography>
          <Typography variant="caption" style={textStyle}>
          This manifesto is inspired by Bruce Mau's <span style={{fontStyle: 'italic'}}> Incomplete Manifesto for Growth</span>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I first encapsulated his manifesto into three simple phrases: 1. Break the rules 2. Chase the unconv...
          </Typography>
        </Grid>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenPortfolio)}>
          <img id="Portfolio" src="/assets/portfolio.jpg" alt="Portfolio" title="Portfolio" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            (this): Web Developer, Designer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
          </Typography>
        </Grid>
        <Grid className="Startups" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenQuilling)}>
          <img id="Quilling" src={"/assets/quilling3.jpg"} alt="Quilling" title="Quilling" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Quilling: Artist, Startup
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Quilling is an art of paper filigree in which strips of paper are rolled using a slitted-tool to create coils of paper. These coils are then shaped as desired, and the loose end of pap...
          </Typography>
        </Grid>
        <Grid className="Hackathon" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenTrojanHacks)}>
          <img id="Trojan Hacks Schedule Generator" src="/assets/trojanhacks3.png" alt="Trojan Hacks Schedule Generator" title="Trojan Hacks Schedule Generator" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Automated Schedule Generator: Developer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          In under 18 hours, we automated the process of generating schedules. Our program allows users to input all the classes they'd like to register for. It then uses the Beautiful Soup API to scra...
          </Typography>
        </Grid>
        <Grid className="Digital Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenTshirt)}>
          <img id="T-Shirt Design" src="/assets/waveLogo.png" alt="T-Shirt Design" title="T-Shirt Design" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           T-Shirt Logo: Artist
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I used Adobe Photoshop to design a logo for a beach-themed t-shirt. To create this, I first created three Adjustment Layers (light blue, dark blue, and yellow) and used the Pen Tool to trace portions of the original image. With this, I created a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the... 
          </Typography>
        </Grid>
        <Grid className="Digital Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenAnimation)}>
          <img id="Photoshop Animation" src="/assets/animationImg.jpg" alt="Photoshop Animation" title="Photoshop Animation" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
          Keyframe Animation: Artist
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Capture accidents, because “the wrong answer is the right answer in search of a different question.” The animation here is inspired by Bruce Mau’s <span style={{fontStyle: 'italic'}}> Incomplete Manifesto for Growth</span>. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us aga...
          </Typography>
        </Grid>
        <Grid className="Traditional Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenBuddha)}>
          <img id="Gautam Buddha" src="/assets/buddh.jpg" alt="Gautam Buddha" title="Gautam Buddha" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
           'Circle of Light': Artist 
          </Typography>
          <Typography variant="caption" style={textStyle}>
          'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. This painting is inspired by another painting I had seen in a book. The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and sel...
          </Typography>
        </Grid>
        <Grid className="Professional" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenIspirt)}>
          <img id="iSPIRT" src="/assets/ispirt.jpg" alt="iSPIRT" title="iSPIRT" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            iSPIRT: Software Intern
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I participated in the First Robotics Competition (a robotics competition, simulating sports-tournaments with industry-grade equipent) as a member and Safety Captain of Team 6024-R Factor, the first team from Ind...
          </Typography>
        </Grid>
        <Grid className="Traditional Art" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenKathak)}>
          <img id="Crave" src="/assets/kathak4.jpg" alt="Crave" title="Crave" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            Kathak: Artist
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I have been practicing Kathak (Jaipur Gharana) and Bharatnatyam, two popular styles of Indian classical dance, from the age of 4. When I look down, I see a bunch of ghungroos adorning my fe...
          </Typography>
        </Grid>
        <Grid className="Hackathon" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenRobotics)}>
          <img id="FRC" src="/assets/frc.jpg" alt="FRC" title="FRC" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            First Robotics Competition: Member, Safety Captain 
          </Typography>
          <Typography variant="caption" style={textStyle}>
          I participated in the First Robotics Competition (a robotics competition, simulating sports-tournaments with industry-grade equipent) as a member and Safety Captain of Team 6024-R Factor, the first team from Ind...
          </Typography>
        </Grid>
        <Grid className="Professional" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenMcD)}>
          <img id="McDonald's Hardcastle Restaurants Private Limited" src="/assets/mcdonald.png" alt="McDonald's Hardcastle Restaurants Private Limited" title="McDonald's Hardcastle Restaurants Private Limited" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            McDonald's Hardcastle Restaurants Private Limited: Product Development Intern
          </Typography>
          <Typography variant="caption" style={textStyle}>
          Hardcastle Restaurants Private Limited operates the West and South franchises of McDonald's in India. I interned as a product developer in July 2019, and assisted with the new pilot fea...
          </Typography>
        </Grid>
        <Grid className="Web-Dev" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenMetta)}>
          <img id="Metta" src="/assets/Metta.jpg" alt="Metta Capital Advisors LLP" title="Metta Capital Advisors LLP" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            MettaCapital: Web Developer, Designer
          </Typography>
          <Typography variant="caption" style={textStyle}>
          MettaCapital is a boutique investment bank. I specialised as the sole web-developer, using the ReactJS library with a Material UI framework to develop their website from the ground u...
          </Typography>
        </Grid>
        <Grid className="Professional" item xs={10} sm={5} md={3} style={{backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}} onClick={()=>handleOpen(setOpenBMS)}>
          <img id="BookMyShow" src="/assets/bms.png" alt="BookMyShow" title="BookMyShow" style={imageStyle}/>
          <Typography variant="body1" style={titleStyle}>
            BookMyShow: Software Analyst Intern
          </Typography>
          <Typography variant="caption" style={textStyle}>
          BookMyShow is a digital ticketing company with a dominant share of events and entertainment ticketing in India. I interned as a software analyst in July 2018, and assisted with beta-testi...
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}