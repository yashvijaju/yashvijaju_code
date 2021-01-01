import React from 'react';
import Link from 'next/link'
import { Grid, Typography, Hidden, Chip, Snackbar } from '@material-ui/core';
import { CancelOutlined,LaptopChromebookRounded, ColorLensRounded, WorkOutlineRounded, SearchRounded, FormatSizeRounded, EmojiSymbolsRounded, StarOutlineRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'


const pink='#F7CAC9'; 
const blue='#bee3f1';
const grey = '#efefef'; 
const title = 'grey';

const chipStyle = {color: 'grey', border: '2.5px solid grey', borderRadius: '20px', marginRight: '1vw', fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};
const chipStyleSelected = {color: title, border: '2.5px solid grey', backgroundColor: 'white' , borderRadius: '20px', marginRight: '1vw', fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};

const itemStyle = {backgroundColor: 'white', padding: '2.5vh 2.5vw 2.5vh 2.5vw', 'borderRadius': '15px', 'marginRight': '1vw', 'marginLeft': '1vw', cursor: 'pointer', marginBottom: '2vh'}

const useStyles = makeStyles((theme) => ({
  container: {
      padding: '0 5vw',
  },
  item_desc: {
    fontWeight: 'lighter',
    '&:hover' : {
      color: 'red',
    }
  },
  item_title: {
    fontWeight: '500',
    margin: '0.5vh 0',
    '&:hover' : {
      color: 'red',
    }
  },
  image: {
    width: '100%', 
    marginBottom: '1vh',
    '&:hover' : {
      opacity: '50%',
    }
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
      <Grid container direction="row" justify="center" style={{padding: '2vh 4vw 0 4vw'}}>
        <Chip className="filterProjects" id="Featured" variant="outlined" label="Featured" clickable={true} style={(lastFilter==="Featured") ? chipStyleSelected : chipStyle} onClick={()=>filter("Featured","Featured")} icon={<StarOutlineRounded style={{color: (lastFilter==="Featured") ? 'grey' : 'grey'}} />}/>
        <Chip className="filterProjects" id="All" variant="outlined" label="All" clickable={true} style={(lastFilter==="All") ? chipStyleSelected : chipStyle} onClick={()=>filter("All","All")}/>
        <Chip className="filterProjects" id="Tech" variant="outlined" label="Tech" clickable={true} style={(lastFilter==="Tech") ? chipStyleSelected : chipStyle} onClick={()=>filter("Tech","Tech")} icon={<LaptopChromebookRounded style={{color: (lastFilter==="Tech") ? 'grey' : 'grey'}} />} />
        <Chip className="filterProjects" id="Entrepreneurship" variant="outlined" label="Entrepreneurship" clickable={true} style={(lastFilter==="Entrepreneurship") ? chipStyleSelected : chipStyle} onClick={()=>filter("Entrepreneurship","Entrepreneurship")} icon={<SearchRounded style={{color: (lastFilter==="Entrepreneurship") ? 'grey' : 'grey'}} />}/>
        <Chip className="filterProjects" id="Digital Art" variant="outlined" label="Digital Art" clickable={true} style={(lastFilter==="Digital Art") ? chipStyleSelected : chipStyle} onClick={()=>filter("Digital Art","Digital Art")} icon={<FormatSizeRounded style={{color: (lastFilter==="Digital Art") ? 'grey' : 'grey'}} />}/>
        <Chip className="filterProjects" id="Traditional Art" variant="outlined" label="Traditional Art" clickable={true} style={(lastFilter==="Traditional Art") ? chipStyleSelected : chipStyle} onClick={()=>filter("Traditional Art","Traditional Art")}  icon={<ColorLensRounded style={{color: (lastFilter==="Traditional Art") ? 'grey' : 'grey'}} />} />
        <Chip className="filterProjects" id="Professional" variant="outlined" label="Professional" clickable={true} style={(lastFilter==="Professional") ? chipStyleSelected : chipStyle} onClick={()=>filter("Professional","Professional")} icon={<WorkOutlineRounded style={{color: (lastFilter==="Professional") ? 'grey' : 'grey'}} />}/>
        <Chip className="filterProjects" id="Side Projects" variant="outlined" label="Side Projects" clickable={true} style={(lastFilter==="Side Projects") ? chipStyleSelected : chipStyle} onClick={()=>filter("Side Projects","Side Projects")} icon={<EmojiSymbolsRounded style={{color: (lastFilter==="Side Projects") ? 'grey' : 'grey'}} />}/>
      </Grid>
      <Grid container direction="row" justify="center" style={{marginTop: '3vh'}}>
        <Link href="/art/100-days-of-buttons">
          <Grid className="item" id="Digital Art, Featured, Side Projects" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Manifesto Design" src="/assets/covers/100-days-of-des.png" alt="100 Days of Buttons Design" title="100 Days of Buttons Design" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            100 Days of Buttons: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I undertook the 100 Days of Design challenge; every day, I designed a button along with developing its corresponding css stylesheet.
            </Typography>
          </Grid>
        </Link>
        <Link href="/startups/crave">
          <Grid className="item" id="Tech, Entrepreneurship, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Crave" src="/assets/covers/crave.png" alt="Crave" title="Crave" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Crave: Front-End Developer, Founder
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Crave is a web app platform that delivers international, exotic snacks to students on campuses at affordable rates, on demand.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/dancing-on-the-moon">
          <Grid className="item" id="Traditional Art, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Dancing on the Moon" src="/assets/covers/dancing-on-the-moon.png" alt="Dancing on the Moon" title="Dancing on the Moon" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            'Dancing on the Moon': Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            ‘Dancing on the Moon’ is a four-piece oil painting of two dancers caught mid-motion that illustrates how time slows down for the dancers.
            </Typography>
          </Grid>
        </Link>
        <Link href="/startups/pride-for-labour">
          <Grid className="item" id="Entrepreneurship, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Pride For Labor" src="/assets/covers/pfl.png" alt="Pride For Labour" title="Pride For Labour" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            Pride For Labour: Founder
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I founded Pride For Labour (PFL) in grade 10, with a mission to empower domestic labour and instil pride and respect in the occupation.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/cartoon-portrait">
          <Grid className="item" id="Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Adjustment Layers" src="/assets/covers/cartoon-portrait.png" alt="Adjustment Layers" title="Adjustment Layers" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Cartoon Portrait: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I designed this cartoon illustration using Adobe Photoshop's various tools, such as adjustment layers, paths, and layer masks.
            </Typography>
          </Grid>
        </Link>
        <Link href="/startups/a2z">
          <Grid className="item" id="Entrepreneurship" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="A2Z" src="/assets/covers/a2z.png" alt="A2Z" title="A2Z" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            A2Z: Founder, Co-Editor
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Founded as a backyard summer project, A2Z is an advertisement-driven bi-monthly magazine distributed to 400+ flats in my housing society.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/manifesto">
          <Grid className="item" id="Digital Art, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Manifesto Design" src="/assets/covers/manifesto.png" alt="Manifesto Design" title="Manifesto Design" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            Manifesto: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            This manifesto is a Adobe Indesign redesign for Bruce Mau's Incomplete Manifesto for Growth, and is the product of numerous iterations.
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/portfolio">
          <Grid className="item" id="Tech, Digital Art, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Portfolio" src="/assets/covers/portfolio.png" alt="Portfolio" title="Portfolio" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              (this): Developer, Designer
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I designed and developed this portfolio to document my projects in software engineering, art and design, and entrepreneurship.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/quilling">
          <Grid className="item" id="Entrepreneurship, Traditional Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Quilling" src={"/assets/covers/quilling.png"} alt="Quilling" title="Quilling" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Quilling: Artist, Startup
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Quilling is an art style where paper is rolled into different shapes; I designed and sold hand-made goods at boutique exhibitions in India.
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/schedule-generator">
          <Grid className="item" id="Side Projects, Featured, Tech" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Trojan Hacks Schedule Generator" src="/assets/covers/schedule-generator.png" alt="Trojan Hacks Schedule Generator" title="Trojan Hacks Schedule Generator" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Schedule Generator: Developer
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            For a hackathon, we automated the creation and optimization of a USC student's class schedule based on the student’s list of classes.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/tshirt-logo">
          <Grid className="item" id="Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="T-Shirt Design" src="/assets/covers/tshirt-logo.png" alt="T-Shirt Design" title="T-Shirt Design" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            T-Shirt Logo: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I designed this cartoon illustration using Adobe Photoshop's various tools, such as adjustment layers, layer effects, masks, and paths.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/animation">
          <Grid className="item" id="Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Photoshop Animation" src="/assets/covers/animation.png" alt="Photoshop Animation" title="Photoshop Animation" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            Keyframe Animation: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            This keyframe animation was inspired by Bruce Mau’s Incomplete Manifesto for Growth. Created using Adobe Photoshop's animation tools.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/circle-of-light">
          <Grid className="item" id="Traditional Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Gautam Buddha" src="/assets/covers/circle-of-light.png" alt="Gautam Buddha" title="Gautam Buddha" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
            'Circle of Light': Artist 
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha that portrays his state of enlightenment and widespread teachings.
            </Typography>
          </Grid>
        </Link>
        <Link href="/work/ispirt">
          <Grid className="item" id="Professional, Tech, Featured" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="iSPIRT" src="/assets/covers/ispirt.png" alt="iSPIRT" title="iSPIRT" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              iSPIRT: Software Intern
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            iSPIRT is a think tank that develops societal platforms in India. I have worked on multiple projects, including the India Covid Model.
            </Typography>
          </Grid>
        </Link>
        <Link href="/art/kathak">
          <Grid className="item" id="Traditional Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Kathak" src="/assets/covers/kathak.png" alt="Kathak" title="Kathak" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Kathak: Artist
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Kathak is a popular style of Indian classical dance. I have been practicing  and performing the Jaipur Gharana of Kathak since the age of 4.
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/first-robotics-competition">
          <Grid className="item" id="Tech, Side Projects" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="FRC" src="/assets/covers/frc.png" alt="FRC" title="FRC" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              First Robotics Competition: Member, Safety Captain 
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I participated in the First Robotics Competition as a member and Safety Captain of Team 6024-R Factor, the first team from India.
            </Typography>
          </Grid>
        </Link>
        <Link href="/work/mcdonald">
          <Grid className="item" id="Professional, Tech" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="McDonald's Hardcastle Restaurants Private Limited" src="/assets/covers/mcdonald.png" alt="McDonald's Hardcastle Restaurants Private Limited" title="McDonald's Hardcastle Restaurants Private Limited" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              McDonald's Hardcastle Restaurants: Product Development Intern
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            I beta-tested and analyzed the pilot feature “On The Go”, conceptualised to deliver food to customers en-route.
            </Typography>
          </Grid>
        </Link>
        <Link href="/work/bookmyshow">
          <Grid className="item" id="Professional, Tech" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="BookMyShow" src="/assets/covers/bms.png" alt="BookMyShow" title="BookMyShow" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              BookMyShow: Software Analyst Intern
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            BookMyShow is the largest e-ticketing company in India. I beta-tested and analyzed the software frameworks and libraries in use.
            </Typography>
          </Grid>
        </Link>
        <Link href="/tech/metta-capital">
          <Grid className="item" id="Tech, Professional, Digital Art" item xs={10} sm={5} md={3} style={itemStyle}>
            <img id="Metta" src="/assets/covers/metta-capital.png" alt="Metta Capital Advisors LLP" title="Metta Capital Advisors LLP" className={classes.image}/>
            <Typography variant="body1" className={classes.item_title}>
              Metta Capital: Developer, Designer
            </Typography>
            <Typography variant="caption" className={classes.item_desc}>
            Metta Capital Advisors LLP is a boutique investment bank in India. I was contracted to design and develop the company’s website.
            </Typography>
          </Grid>
        </Link>        
      </Grid>
    </div>
  );
}