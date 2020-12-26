import React from 'react';
import Link from 'next/link'
import { Grid, Typography, Hidden, Chip, Snackbar } from '@material-ui/core';
import { CancelOutlined,LaptopChromebookRounded, ColorLensRounded, WorkOutlineRounded, SearchRounded, FormatSizeRounded, EmojiSymbolsRounded, StarOutlineRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'


const pink='#F7CAC9'; 
const blue='#bee3f1';
const grey = '#efefef'; 
const title = 'grey';

const chipStyle = {color: 'white', border: '2.5px solid white', borderRadius: '20px', marginRight: '1vw', fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};
const chipStyleSelected = {color: title, border: '2.5px solid grey', backgroundColor: 'white' , borderRadius: '20px', marginRight: '1vw', fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};

const itemStyle={backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}

const useStyles = makeStyles((theme) => ({
  container: {
      padding: '0 5vw',
  },
  item_desc: {
    fontWeight: 'lighter',
  },
  item_title: {
    fontWeight: 'normal',
  },
  image: {
    width: '100%', 
    marginBottom: '1vh'
  },
}));

export default function Story() {
  const classes = useStyles();

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

  function filter(props,chip) {
    setFilterNotifRender(1);
    clearTimeout(timer);
    if (props === "All") {
      var x = document.getElementsByClassName("item");
        for (var j = 0; j < x.length; j++) {
          x[j].style.display = 'inline';
        }
    }
    else {
      x = document.getElementsByClassName("item");
      for (j = 0; j < x.length; j++) {
        console.log(x[j]);
        if (x[j].id.includes(props)) {
          x[j].style.display = 'inline';
        }
        else {
          x[j].style.display = 'none';
        }
      }
    }
    setLastFilter(chip);
  }

  return (
    <div style={{'padding': '5vh 0vw 2vh 0vw', backgroundColor: blue}}>
      <Typography variant="h5" style={{paddingBottom: '1vh', fontWeight: 'bolder', color: title, textAlign: 'center'}}>
          &#123; My Projects &#125;
      </Typography>
      <Typography variant="body1" style={{paddingBottom: '3vh', fontWeight: 'normal', color: title, textAlign: 'center'}}>
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
        <Chip className="filterProjects" id="Featured" variant="outlined" label="Featured" clickable={true} style={(lastFilter==="Featured") ? chipStyleSelected : chipStyle} onClick={()=>filter("Featured","Featured")} icon={<StarOutlineRounded style={{color: (lastFilter==="Featured") ? 'grey' : 'white'}} />}/>
        <Chip className="filterProjects" id="All" variant="outlined" label="All" clickable={true} style={(lastFilter==="All") ? chipStyleSelected : chipStyle} onClick={()=>filter("All","All")}/>
        <Chip className="filterProjects" id="Tech" variant="outlined" label="Tech" clickable={true} style={(lastFilter==="Tech") ? chipStyleSelected : chipStyle} onClick={()=>filter("Tech","Tech")} icon={<LaptopChromebookRounded style={{color: (lastFilter==="Tech") ? 'grey' : 'white'}} />} />
        <Chip className="filterProjects" id="Startups" variant="outlined" label="Startups" clickable={true} style={(lastFilter==="Startups") ? chipStyleSelected : chipStyle} onClick={()=>filter("Startups","Startups")} icon={<SearchRounded style={{color: (lastFilter==="Startups") ? 'grey' : 'white'}} />}/>
        <Chip className="filterProjects" id="Digital Art" variant="outlined" label="Digital Art" clickable={true} style={(lastFilter==="Digital Art") ? chipStyleSelected : chipStyle} onClick={()=>filter("Digital Art","Digital Art")} icon={<FormatSizeRounded style={{color: (lastFilter==="Digital Art") ? 'grey' : 'white'}} />}/>
        <Chip className="filterProjects" id="Traditional Art" variant="outlined" label="Traditional Art" clickable={true} style={(lastFilter==="Traditional Art") ? chipStyleSelected : chipStyle} onClick={()=>filter("Traditional Art","Traditional Art")}  icon={<ColorLensRounded style={{color: (lastFilter==="Traditional Art") ? 'grey' : 'white'}} />} />
        <Chip className="filterProjects" id="Professional" variant="outlined" label="Professional" clickable={true} style={(lastFilter==="Professional") ? chipStyleSelected : chipStyle} onClick={()=>filter("Professional","Professional")} icon={<WorkOutlineRounded style={{color: (lastFilter==="Professional") ? 'grey' : 'white'}} />}/>
        <Chip className="filterProjects" id="Side Projects" variant="outlined" label="Side Projects" clickable={true} style={(lastFilter==="Side Projects") ? chipStyleSelected : chipStyle} onClick={()=>filter("Side Projects","Side Projects")} icon={<EmojiSymbolsRounded style={{color: (lastFilter==="Side Projects") ? 'grey' : 'white'}} />}/>
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop: '1vh'}}>
        <Link href="/startups/crave">
          <Grid className="item" id="Tech, Startups, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Crave" src="/assets/projects/crave/crave.jpg" alt="Crave" title="Crave" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Crave: Front-End Developer, Founder
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Crave is a delivery service specialising in bringing international food to university students at affordable rates. I specialised as the front-end Techeloper, using the ReactJS library with a Materialize framework to build a Progressive Web Application. The website was locally hosted fo...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/dancing-on-the-moon">
          <Grid className="item" id="Traditional Art, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Dancing on the Moon" src="/assets/projects/dancing-on-the-moon/dancing-on-the-moon.jpg" alt="Dancing on the Moon" title="Dancing on the Moon" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            'Dancing on the Moon': Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            'Dancing on the Moon' is a four-piece abstract oil painting that tries to capture motion in a picture. Tried to capture motion in a picture, but captured the beauty of motion instea... <br/>
            </Typography>
          </Grid>
        </Link>
        <Link href="/startups/pride-for-labour">
          <Grid className="item" id="Startups" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Pride For Labor" src="/assets/projects/pride-for-labour/gratitude_4.jpg" alt="Pride For Labour" title="Pride For Labour" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            Pride For Labour: Founder
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. Domestic labour isn’t a respected occupation, but that has to change. To solve this, I founded Pride For Labou...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/cartoon-portrait">
          <Grid className="item" id="Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Adjustment Layers" src="/assets/projects/cartoon-portrait/ps1.png" alt="Adjustment Layers" title="Adjustment Layers" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Cartoon Portrait: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I used Adobe Photoshop to convert my portrait into this cartoon. To create this, I first stacked many Solid Color Adjustment Layers on top of one another. Then, I used the Pen Tool to trace portions of the original image to create a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the...
            </Typography>
          </Grid>
        </Link>
        <Link href="/startups/a2z">
          <Grid className="item" id="Startups" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="A2Z" src="/assets/projects/a2z/a2z_2_1.jpg" alt="A2Z" title="A2Z" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            A2Z: Founder, Co-Editor
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            At the age of 12, I founded A2Z as a backyard summer project with 5 friends. A2Z started as a pay-per-issue magazine that  quickly converted into an advertisement-driven bi-monthly magazine distributed to 400+ flats in my building/ society free of cost. As the founder and edi...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/manifesto">
          <Grid className="item" id="Digital Art, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Manifesto Design" src="/assets/projects/manifesto/d4_1.jpg" alt="Manifesto Design" title="Manifesto Design" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            Manifesto: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            This manifesto is inspired by Bruce Mau's <span style={{fontStyle: 'italic'}}> Incomplete Manifesto for Growth</span>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I first encapsulated his manifesto into three simple phrases: 1. Break the rules 2. Chase the unconv...
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/portfolio">
          <Grid className="item" id="Tech, Digital Art, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Portfolio" src="/assets/projects/portfolio/portfolio1_0.jpg" alt="Portfolio" title="Portfolio" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              (this): Techeloper, Designer
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I designed this website to document my projects, including and extending beyond the realms of Computer Science. I developed this website via the ReactJS library and a Material UI framewo...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/quilling">
          <Grid className="item" id="Startups, Traditional Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Quilling" src={"/assets/projects/quilling/quilling_10.jpg"} alt="Quilling" title="Quilling" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Quilling: Artist, Startup
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Quilling is an art of paper filigree in which strips of paper are rolled using a slitted-tool to create coils of paper. These coils are then shaped as desired, and the loose end of pap...
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/schedule-generator">
          <Grid className="item" id="Side Projects, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Trojan Hacks Schedule Generator" src="/assets/projects/schedule-generator/schedule-generator1.png" alt="Trojan Hacks Schedule Generator" title="Trojan Hacks Schedule Generator" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Automated Schedule Generator: Developer
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            In under 18 hours, we automated the process of generating schedules. Our program allows users to input all the classes they'd like to register for. It then uses the Beautiful Soup API to scra...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/tshirt-logo">
          <Grid className="item" id="Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="T-Shirt Design" src="/assets/projects/tshirt-logo-design/tshirt-logo-design.png" alt="T-Shirt Design" title="T-Shirt Design" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            T-Shirt Logo: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I used Adobe Photoshop to design a logo for a beach-themed t-shirt. To create this, I first created three Adjustment Layers (light blue, dark blue, and yellow) and used the Pen Tool to trace portions of the original image. With this, I created a Path, converted the path into a Selection, and deleted it from the Layer Mask to display the selection in the... 
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/animation">
          <Grid className="item" id="Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Photoshop Animation" src="/assets/projects/keyframe-animation/animationImg.jpg" alt="Photoshop Animation" title="Photoshop Animation" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            Keyframe Animation: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Capture accidents, because “the wrong answer is the right answer in search of a different question.” The animation here is inspired by Bruce Mau’s <span style={{fontStyle: 'italic'}}> Incomplete Manifesto for Growth</span>. The saturated yellow background with black text visually juxtaposes the conventional signs that warn us aga...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/circle-of-light">
          <Grid className="item" id="Traditional Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Gautam Buddha" src="/assets/projects/circle-of-light/circle-of-light.jpg" alt="Gautam Buddha" title="Gautam Buddha" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            'Circle of Light': Artist 
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. This painting is inspired by another painting I had seen in a book. The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and sel...
            </Typography>
          </Grid>
        </Link>
        <Link href="/work/ispirt">
          <Grid className="item" id="Professional, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="iSPIRT" src="/assets/ispirt.jpg" alt="iSPIRT" title="iSPIRT" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              iSPIRT: Software Intern
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I participated in the First Robotics Competition (a robotics competition, simulating sports-tournaments with industry-grade equipent) as a member and Safety Captain of Team 6024-R Factor, the first team from Ind...
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/kathak">
          <Grid className="item" id="Traditional Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Kathak" src="/assets/projects/kathak/kathak7.jpg" alt="Kathak" title="Kathak" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Kathak: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I have been practicing Kathak (Jaipur Gharana) and Bharatnatyam, two popular styles of Indian classical dance, from the age of 4. When I look down, I see a bunch of ghungroos adorning my fe...
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/first-robotics-competition">
          <Grid className="item" id="Side Projects" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="FRC" src="/assets/projects/first-robotics-competiton/frc.jpg" alt="FRC" title="FRC" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              First Robotics Competition: Member, Safety Captain 
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I participated in the First Robotics Competition (a robotics competition, simulating sports-tournaments with industry-grade equipent) as a member and Safety Captain of Team 6024-R Factor, the first team from Ind...
            </Typography>
          </Grid>
        </Link>
        <Link href="/work/mcdonald">
          <Grid className="item" id="Professional" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="McDonald's Hardcastle Restaurants Private Limited" src="/assets/mcdonald.png" alt="McDonald's Hardcastle Restaurants Private Limited" title="McDonald's Hardcastle Restaurants Private Limited" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              McDonald's Hardcastle Restaurants Private Limited: Product Development Intern
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Hardcastle Restaurants Private Limited operates the West and South franchises of McDonald's in India. I interned as a product developer in July 2019, and assisted with the new pilot fea...
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/metta-capital">
          <Grid className="item" id="Tech, Professional" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Metta" src="/assets/projects/metta/metta.jpg" alt="Metta Capital Advisors LLP" title="Metta Capital Advisors LLP" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              MettaCapital: Techeloper, Designer
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            MettaCapital is a boutique investment bank. I specialised as the sole Techeloper, using the ReactJS library with a Material UI framework to develop their website from the ground u...
            </Typography>
          </Grid>
        </Link>
        <Link href="/work/bookmyshow">
          <Grid className="item" id="Professional" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="BookMyShow" src="/assets/bms.png" alt="BookMyShow" title="BookMyShow" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              BookMyShow: Software Analyst Intern
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            BookMyShow is a digital ticketing company with a dominant share of events and entertainment ticketing in India. I interned as a software analyst in July 2018, and assisted with beta-testi...
            </Typography>
          </Grid>
        </Link>
      </Grid>
    </div>
  );
}