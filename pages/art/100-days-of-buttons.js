import React from 'react';
import { Grid, Divider, Typography, Hidden } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { Footer } from '../../components/Projects/Footer'
// Animations
import { Fade } from 'react-reveal';

const primary = '#298FD7';
const primary_25 = '#B0D9F7';
const secondary = '#298FD7';
const tertiary = '#FFDCD0';

const useStyles = makeStyles((theme) => ({
  container: {
      padding: '0 5vw',
      color: primary,
  },
  spacing: {
    marginBottom: '2vh',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2vh',
    },
  },
  divider: {
      margin: '5vh 5vw 7.5vh',
      display: 'flex',
      width: '90vw',
      background: primary_25,
      [theme.breakpoints.down('xs')]: {
          margin: '5vh 5vw 5vh',
      },
  },
  content_divider: {
    width: '75vw',
    height: '1vh',
    background: tertiary,
    margin: '5vh 0 10vh',
  },
  content_divider_right: {
    width: '75vw',
    height: '1vh',
    background: tertiary,
    margin: '5vh 25vw 10vh',
  },
  image: {
    //   border: '1px solid #B0D9F7',
      height: 'auto',
      width: '90%',
      margin: '0 0 1vh',
      [theme.breakpoints.down('xs')]: {
        marginBottom: '2vh',
        width: '100%',
      },
  },
  image_right: {
    height: 'auto',
    width: '90%',
    margin: '0 0 1vh',
    marginLeft: '5vw',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '2vh',
      width: '100%',
      marginLeft: '0vw',
    },
  },
  title_rotated_text: {
    transform: 'rotate(-90deg)',
    width: '50pt',
    height: '50pt',
    borderRadius: '50%',
    backgroundColor: tertiary,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-1',
  },
  title_title_text: {
    display: 'inline-block',
    marginLeft: '-25pt',
    zIndex: '1',
  },
  title_rotated_text_right: {
    transform: 'rotate(90deg)',
    width: '50pt',
    height: '50pt',
    borderRadius: '50%',
    backgroundColor: tertiary,
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: '-1',
  },
  title_title_text_right: {
    display: 'inline-block',
    marginRight: '-25pt',
    zIndex: '1',
  }
}));

export default function Story() {
  const classes = useStyles();

  return(
    <>
      <Cover project_name={<span>100 Days of Design : Buttons</span>} bookmark="/assets/bookmarks/bookmark-100-days-of-buttons.svg"  bookmarkTitle="/assets/bookmarks/bookmark-100-days-of-buttons-title-.svg"  bg_color={tertiary} title_color={secondary}></Cover>
      <Grid container className={classes.container}>
          <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={<div>Graphic Designer</div>} year={"July - Oct, 2020"} category={"Digital Art"} team={<div>Independent Project</div>} tools={<div>Adobe Illustrator</div>} tools1={<div>Adobe Illustrator</div>} tools2={<div></div>} introduction={<div>A button is the most simple component on any user interface. It serves only one function — to allow a user to navigate to their desired outcome. Thus, it is both, easy and difficult, to design a button. Every button should stand out and prompt the user to act, while not detracting away from the rest of the UI. <br/>These thoughts in mind, I undertook the 100 Days of Design challenge, where, each day, I designed a different button. Through the process, I broke free of my mental barriers in design and pushed my creativity to new heights.<br/>To challenge myself further, I noted the css styles required to create the button design as well.</div>}/>
      </Grid>

      <Divider className={classes.divider}/>

      <Fade>
      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12} container direction="row" alignItems="center" className={classes.spacing}>
          <Typography variant="caption" className={classes.title_rotated_text}>one-five<br/><br/></Typography>
          <Hidden xsDown>
            <Typography variant="h3" fontWeight={100} className={classes.title_title_text}><b>day one</b> to <b> hundred</b> : a compilation</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" fontWeight={100} className={classes.title_title_text}><b>day 1</b> to <b> 100</b> : a compilation</Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Typography variant="body2">
          <b>18th July - 25th October</b> <br/>
          This page includes each of the hundred buttons, in a variety of colors and sizes.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <img className={classes.image} src="/assets/projects/100-days-of-buttons/100_days_of_des-page-006.jpg" style={{width: '100%'}}/>
        </Grid>
      </Grid>
      
      <Divider className={classes.content_divider}/>

      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12} container direction="row" justify="flex-end" alignItems="center" className={classes.spacing}>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text_right}><b>day one</b> to <b>twenty</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text_right}><b>day one</b> to <b>twenty</b></Typography>
          </Hidden>
          <Typography variant="caption" className={classes.title_rotated_text_right}>one/five<br/><br/></Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.spacing}>
          <Typography variant="body2" align="right">
          <b>18th July - 6th August</b> <br/>
          <br/>
          The objective of the design challenge was to break free of my mental barriers to design and push my creative limits.<br/>
          <br/>
          To ensure I didn’t detract from this objective, I used only one typeface — Lato.<br/>
          <br/>
          Moreover, to challenge myself further, I noted the css styles required to create each button design as well.<br/>
          <br/>
          I began with exploring rectangular and circular designs, toying with the three-dimensionality of the button via shadows, lines, and color. Over time, my designs grew more illustrative, reminders of objects around us.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img className={classes.image_right} src="/assets/projects/100-days-of-buttons/100_days_of_des-page-001.jpg" />
        </Grid>
      </Grid>

      <Divider className={classes.content_divider_right}/>

      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12} container direction="row" alignItems="center" className={classes.spacing}>
          <Typography variant="caption" className={classes.title_rotated_text}>two/five<br/><br/></Typography>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text}><b>day twenty-one</b> to <b>forty</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text}><b>day twenty-one</b> to <b>forty</b></Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={8} container direction="row">
          <img className={classes.image} src="/assets/projects/100-days-of-buttons/100_days_of_des-page-002.jpg"/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.spacing}>
          <Typography variant="body2" align="left">
          <b>7th August - 26th August</b> <br/>
          <br/>
          During this period, I continued with my illustrative streak; the first set of buttons were inspired by pianos, wall hangings, carton boxes, DVD players, switches, and tickets. <br/>
          <br/>
          Towards the latter half of this period, the designs toggled between abstract and illustrative, although a larger proportion were more abstract that illustrative.<br/>
          <br/>
          With the button created on day twenty-six, I broke free of a mental barrier by containing a round-edge rectangle within a sharp-edge rectangle. Hereafter, numerous button designs embraced differently aligned edges in the outer and inner containers.
          </Typography>
        </Grid>
      </Grid>
      
      <Divider className={classes.content_divider}/>

      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12} container direction="row" justify="flex-end" alignItems="center" className={classes.spacing}>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text_right}><b>day forty-one</b> to <b>sixty</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text_right}><b>day forty-one</b> to <b>sixty</b></Typography>
          </Hidden>
          <Typography variant="caption" className={classes.title_rotated_text_right}>three/five<br/><br/></Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.spacing}>
          <Typography variant="body2" align="right">
          <b>27th August - 15th September</b> <br/>
          <br/>
          During this period, I continued creating designs that balanced illustrations and abstractions.<br/>
          <br/>
          Towards the latter half of the period, the designs appear to be conjunctions of regular shapes, such as rectangles, circles, and lines, in different arrangements. <br/>
          <br/>
          With the button created on day ffity-one, I broke free of another mental barrier by designing a border-less button. Hereafter, numerous button designs embraced border-less patterns as they grew increasingly abstract.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img className={classes.image_right} src="/assets/projects/100-days-of-buttons/100_days_of_des-page-003.jpg" />
        </Grid>
      </Grid>

      <Divider className={classes.content_divider_right}/>

      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12} container direction="row" alignItems="center" className={classes.spacing}>
          <Typography variant="caption" className={classes.title_rotated_text}>four/five<br/><br/></Typography>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text}><b>day sixty-one</b> to <b>eighty</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text}><b>day sixty-one</b> to <b>eighty</b></Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} sm={8} container direction="row">
          <img className={classes.image} src="/assets/projects/100-days-of-buttons/100_days_of_des-page-004.jpg"/>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.spacing}>
          <Typography variant="body2" align="left">
          <b>16th September - 5th October</b> <br/>
          <br/>
          During this period, I continued creating designs that balanced illustrations and abstractions. <br/>
          <br/>
          Although minimally, I explored typography in design through the buttons created in the latter half of the sprint. With this I leveraged typographic elements such as kerning, white space, and contrast, to drive experiences and evoke emotions.
          </Typography>
        </Grid>
      </Grid>
      
      <Divider className={classes.content_divider}/>

      <Grid container direction="row" className={classes.container}>
        <Grid item xs={12} container direction="row" justify="flex-end" alignItems="center" className={classes.spacing}>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text_right}><b>day eighty-one</b> to <b>hundred</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text_right}><b>day eighty-one</b> to <b>hundred</b></Typography>
          </Hidden>
          <Typography variant="caption" className={classes.title_rotated_text_right}>five/five<br/><br/></Typography>
        </Grid>
        <Grid item xs={12} sm={4} className={classes.spacing}>
          <Typography variant="body2" align="right">
          <b>6th October - 25th October</b> <br/>
          <br/>
          During this period, I continued creating designs that balanced illustrations and abstractions.<br/>
          <br/>
          This sprint represents a clear juxtaposition between simple asbtract design, and complex illustrative design. The designs on day ninety-two and eighty-three pose a paragon for this contrast.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={8}>
          <img className={classes.image_right} src="/assets/projects/100-days-of-buttons/100_days_of_des-page-005.jpg" />
        </Grid>
      </Grid>

      <Divider className={classes.content_divider_right}/>
      
      </Fade>
      <Footer prev="WEB DEVELOPER : CLIENT" prev_link="/tech/metta-capital" prev_category="tech, work" next="CRAVE" next_link="/startups/crave" next_category="tech, entrepreneurship" title={secondary} subtitle={primary} divider={primary_25}/>
    </> 
    )
}