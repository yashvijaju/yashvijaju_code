import React, { useEffect } from 'react';
import Link from 'next/link'
import { Grid, Typography, Chip, Snackbar } from '@material-ui/core';
import { CancelOutlined,LaptopChromebookRounded, ColorLensRounded, WorkOutlineRounded, SearchRounded, FormatSizeRounded, EmojiSymbolsRounded, StarOutlineRounded } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
import { ProjectCard } from './Projects/ProjectCard';
import clsx from 'clsx';

const pink='#F7CAC9'; 
const blue='#bee3f1';
const grey = '#efefef'; 
const title = 'grey';

const chipStyle = {};
const chipStyleSelected = {color: 'black', border: '2.5px solid grey', backgroundColor: 'white' , borderRadius: '20px', marginRight: '1vw', fontWeight: 'bolder', fontSize: '2vh', marginBottom: '1vh', paddingBottom: '1.5vh', paddingTop: '1.5vh'};

const useStyles = makeStyles((theme) => ({
  container: {
    padding: '0 5vw',
  },
  filter: {
    color: 'grey', 
    border: '2.5px solid grey', 
    borderRadius: '20px', 
    marginRight: '1vw', 
    fontWeight: 'bolder', 
    fontSize: '2vh', 
    marginBottom: '1vh', 
    padding: '1.5vh 0',
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
      color: 'black',
    }
  }
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

  useEffect(() => {
    var x = document.getElementsByClassName("item");
    for (var j = 0; j < x.length; j++) {
      if (x[j].id.includes("Featured")) {
        x[j].style.display = 'inline';
      }
      else {
        x[j].style.display = 'none';
      }
    }
    setLastFilter("Featured");
  }, []); 

  const className_filter = clsx("filterProjects", classes.filter);

  return (
    <div style={{'padding': '5vh 0vw 2vh 0vw', backgroundColor: blue}}>
      {/* <Fade bottom> */}
        <Typography variant="h5" style={{paddingBottom: '1vh', fontWeight: 'bolder', color: title, textAlign: 'center'}}>
            &#123; My Projects &#125;
        </Typography>
        <Typography variant="body1" style={{paddingBottom: '3vh', fontWeight: 'normal', color: title, textAlign: 'center'}}>
            click on a project to learn more
        </Typography>
      
        <Snackbar
          anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
          }}
          open={openFilterNotifs}
          autoHideDuration={4000}
          onClose={handleCloseNotif}
          message="Click on a project to learn more"
          id="notif1"
          action={
            <CancelOutlined size="small" aria-label="close" color="inherit" style={{cursor: 'pointer'}} onClick={handleCloseNotif}/>
          }
        />
        <Grid container direction="row" justify="center" style={{padding: '2vh 4vw 0 4vw'}}>
          <Chip className={className_filter} id="All" variant="outlined" label="All" clickable={true} style={(lastFilter==="All") ? chipStyleSelected : chipStyle} onClick={()=>filter("All","All")}/>
          <Chip className={className_filter} id="Featured" variant="outlined" label="Featured" clickable={true} style={(lastFilter==="Featured") ? chipStyleSelected : chipStyle} onClick={()=>filter("Featured","Featured")} icon={<StarOutlineRounded style={{color: 'inherit'}} />}/>
          <Chip className={className_filter} id="Tech" variant="outlined" label="Tech" clickable={true} style={(lastFilter==="Tech") ? chipStyleSelected : chipStyle} onClick={()=>filter("Tech","Tech")} icon={<LaptopChromebookRounded style={{color: 'inherit'}} />} />
          <Chip className={className_filter} id="Entrepreneurship" variant="outlined" label="Entrepreneurship" clickable={true} style={(lastFilter==="Entrepreneurship") ? chipStyleSelected : chipStyle} onClick={()=>filter("Entrepreneurship","Entrepreneurship")} icon={<SearchRounded style={{color: 'inherit'}} />}/>
          <Chip className={className_filter} id="Digital Art" variant="outlined" label="Digital Art" clickable={true} style={(lastFilter==="Digital Art") ? chipStyleSelected : chipStyle} onClick={()=>filter("Digital Art","Digital Art")} icon={<FormatSizeRounded style={{color: 'inherit'}} />}/>
          <Chip className={className_filter} id="Traditional Art" variant="outlined" label="Traditional Art" clickable={true} style={(lastFilter==="Traditional Art") ? chipStyleSelected : chipStyle} onClick={()=>filter("Traditional Art","Traditional Art")}  icon={<ColorLensRounded style={{color: 'inherit'}} />} />
          <Chip className={className_filter} id="Professional" variant="outlined" label="Professional" clickable={true} style={(lastFilter==="Professional") ? chipStyleSelected : chipStyle} onClick={()=>filter("Professional","Professional")} icon={<WorkOutlineRounded style={{color: 'inherit'}} />}/>
          <Chip className={className_filter} id="Side Projects" variant="outlined" label="Side Projects" clickable={true} style={(lastFilter==="Side Projects") ? chipStyleSelected : chipStyle} onClick={()=>filter("Side Projects","Side Projects")} icon={<EmojiSymbolsRounded style={{color: 'inherit'}} />}/>
        </Grid>
      {/* </Fade> */}
      <Grid container direction="row" justify="center" style={{marginTop: '3vh'}}>
        <ProjectCard link="/art/100-days-of-buttons" img_title="100 Days of Buttons" img_src="/assets/covers/100-days-of-des.png"
          labels="Digital Art, Featured, Side Projects"
          title="100 Days of Buttons: Artist" description="I undertook the 100 Days of Design challenge; every day, I designed a button along and developed its corresponding css stylesheet."
        />
        <ProjectCard link="/startups/crave" img_title="Crave" img_src="/assets/covers/crave.png"
          labels="Tech, Entrepreneurship, Featured"
          title="Crave: Front-End Developer, Founder" description="Crave is a web app platform that delivers international, exotic snacks to students on campuses at affordable rates, on demand."
        />
        <ProjectCard link="/art/dancing-on-the-moon" img_title="Dancing on the Moon" img_src="/assets/covers/dancing-on-the-moon.png"
          labels="Traditional Art, Featured"
          title="'Dancing on the Moon': Artist" description="‘Dancing on the Moon’ is a four-piece oil painting of two dancers caught mid-motion that illustrates the expansion of time and space."
        />
        <ProjectCard link="/startups/pride-for-labour" img_title="Pride For Labour" img_src="/assets/covers/pfl.png"
          labels="Entrepreneurship, Featured"
          title="Pride For Labour: Founder" description="Pride For Labour (PFL) was founded in 2016 with a mission to empower domestic labour and instil pride and respect in the occupation."
        />
        <ProjectCard link="/art/cartoon-portrait" img_title="Cartoon Portrait" img_src="/assets/covers/cartoon-portrait.png"
          labels="Digital Art, Featured"
          title="Cartoon Portrait: Artist" description="I designed this cartoon illustration using Adobe Photoshop's various tools, such as adjustment layers, paths, and layer masks."
        />
        <ProjectCard link="/work/ispirt" img_title="iSPIRT" img_src="/assets/covers/ispirt.png"
          labels="Professional, Tech, Featured"
          title="iSPIRT: Software Intern" description="iSPIRT is a think tank that develops societal platforms in India. I have worked on multiple projects, including the India Covid Model."
        />
        <ProjectCard link="/startups/a2z" img_title="A2Z" img_src="/assets/covers/a2z.png"
          labels="Entrepreneurship"
          title="A2Z: Founder, Co-Editor" description="Founded as a backyard summer project, A2Z is an advertisement-driven bi-monthly magazine distributed to 400+ flats in my housing society."
        />
        <ProjectCard link="/art/manifesto" img_title="Manifesto" img_src="/assets/covers/manifesto.png"
          labels="Digital Art, Featured"
          title="Manifesto: Artist" description="This manifesto is a Adobe Indesign redesign for Bruce Mau's Incomplete Manifesto for Growth, and is the product of numerous iterations."
        />
        <ProjectCard link="/tech/portfolio" img_title="Portfolio" img_src="/assets/covers/portfolio.png"
          labels="Tech, Digital Art, Featured"
          title="(this): Developer, Designer" description="I designed and developed this portfolio to document my projects in software engineering, art and design, and entrepreneurship."
        />
        <ProjectCard link="/art/quilling" img_title="Quilling" img_src="/assets/covers/quilling.png"
          labels="Entrepreneurship, Traditional Art"
          title="Quilling: Artist, Entrepreneur" description="Quilling is an art style where paper is rolled into different shapes; I designed and sold hand-made goods at boutique exhibitions in India."
        />
        <ProjectCard link="/tech/schedule-generator" img_title="Schedule Generator" img_src="/assets/covers/schedule-generator.png"
          labels="Side Projects, Featured, Tech"
          title="Schedule Generator: Developer" description="For a hackathon, we automated the creation and optimization of a USC student's class schedule based on the student’s list of classes."
        />
        <ProjectCard link="/art/tshirt-logo" img_title="T-Shirt Logo" img_src="/assets/covers/tshirt-logo.png"
          labels="Digital Art"
          title="T-Shirt Logo: Artist" description="I designed this cartoon illustration using Adobe Photoshop's various tools, such as adjustment layers, layer effects, masks, and paths."
        />
        <ProjectCard link="/art/animation" img_title="Keyframe Animation" img_src="/assets/covers/animation.png"
          labels="Digital Art"
          title="Keyframe Animation: Artist" description="Inspired by Bruce Mau’s Incomplete Manifesto for Growth, this keyframe animation was created with Adobe Photoshop."
        />
        <ProjectCard link="/art/circle-of-light" img_title="Circle of Light" img_src="/assets/covers/circle-of-light.png"
          labels="Traditional Art"
          title="'Circle of Light': Artist" description="'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha that portrays his state of enlightenment and widespread teachings."
        />
        <ProjectCard link="/art/kathak" img_title="Kathak" img_src="/assets/covers/kathak.png"
          labels="Traditional Art"
          title="Kathak: Artist" description="Kathak is a popular style of Indian classical dance. I have been practicing  and performing the Jaipur Gharana of Kathak since the age of 4."
        />
        <ProjectCard link="/tech/first-robotics-competition" img_title="First Robotics Competition" img_src="/assets/covers/frc.png"
          labels="Side Projects"
          title="First Robotics Competition: Member, Safety Captain" description="I participated in the First Robotics Competition as a member and Safety Captain of Team 6024-R Factor, the first team from India."
        />
        <ProjectCard link="/work/mcdonald" img_title="McDonald's Hardcastle Restaurants Private Limited" img_src="/assets/covers/mcdonald.png"
          labels="Professional, Tech"
          title="McDonald's Hardcastle Restaurants: Product Development Intern" description="I beta-tested and analyzed the pilot feature “On The Go”, conceptualised to deliver food to customers en-route."
        />
        <ProjectCard link="/work/bookmyshow" img_title="BookMyShow" img_src="/assets/covers/bms.png"
          labels="Professional, Tech"
          title="BookMyShow: Software Analyst Intern" description="BookMyShow is the largest e-ticketing company in India. I beta-tested and analyzed the software frameworks and libraries in use."
        />
        <ProjectCard link="/tech/metta-capital" img_title="Metta Capital Advisors LLP" img_src="/assets/covers/metta-capital.png"
          labels="Professional, Tech, Digital Art"
          title="Metta Capital: Developer, Designer" description="Metta Capital Advisors LLP is a boutique investment bank in India. I was contracted to design and develop the company’s website."
        />
      </Grid>
    </div>
  );
}