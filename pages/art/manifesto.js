import React from 'react';
import { Grid, Divider, Typography, Hidden } from '@material-ui/core';
import { KeyboardArrowLeftOutlined, KeyboardArrowRightOutlined } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'

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
      marginBottom: '1vh',
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
      border: '1px solid #B0D9F7',
      height: 'auto',
      width: '30%',
      margin: '0 0 1vh',
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
      <Cover project_name={<span>Redesign for Bruce Mau’s <br/> <i>Incomplete Manifesto for Growth</i></span>} bg_color={tertiary} title_color={secondary}></Cover>
      <Grid container className={classes.container}>
          <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={<div>Graphic Designer<br/><br/></div>} year={"March-April 2020"} category={"Digital Art"} team={<div>Independent Class Project, <br/> Des 332A: Typography</div>} tools={<div>Adobe InDesign <br/> Riso Printer</div>} tools1={<div>Adobe InDesign, Riso Printer</div>} tools2={<div></div>} introduction={<div>This manifesto is inspired by <a href="http://newmediaabington.pbworks.com/f/mau_an_incomplete_manifesto_for_growth.pdf" target="_blank" rel="noreferrer noopener"><u>Bruce Mau's Incomplete Manifesto for Growth</u></a>. Written in 1998, his manifesto outlines 43 "rules" by which one should live their life. To create this manifesto, I summaried and encapsulated his ideologies in three simple phrases: 1. Break the rules, 2. Chase the unconventional, and 3. Live in extremes; or don't, and used these phrases to guide the theme of my design. <br/> This manifesto was designed with the intent to be printed using a Risograph, although the Covid-19 global pandemic prevented this later.</div>}/>
      </Grid>

      <Divider className={classes.divider}/>

      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12} container direction="row" alignItems="center" className={classes.spacing}>
          <Typography variant="caption" className={classes.title_rotated_text}>iteration<br/><br/></Typography>
          <Hidden xsDown>
            <Typography variant="h3" fontWeight={100} className={classes.title_title_text}><b>one</b> : layout & structure</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" fontWeight={100} className={classes.title_title_text}><b>one</b> : layout & structure</Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Typography variant="body2">
            Before designing the manifesto, I first encapsulated the fundamental themes behind Bruce Mau’s Incomplete Manifesto for Growth in three phrases: <br/>
            1. Break the rules  <br/>
            2. Chase the unconventional <br/>
            3. Live in extremes; or don't <br/>
            <br/> 
            The designs below are manifestations of these three themes, explored through a varied use of lines, angles, overlays, and other components of digital design. The objective of the first set of iterations was to create a wireframe for the manifesto and these designs hence focus more on the creation of a basic structure and layout. <br/>
            <br/>
            In all three designs, the text has been printed in a variety of angles in an attempt to break free from the conventional rule of design that dictates a hierarchy from left to right, top to bottom. Additionally, the text has been re-arranged to digress from the typical ascending order seen in numerical systems. <br/>
            <br/>
            A plethora of lines that extend beyond the borders of the page have been drawn to emphasise that the manifesto is, indeed, incomplete as there is no prescribed path leading to “growth” but there exists rather a continuous process that is unique to each individual. These lines are created with different lengths and angles to further highlight this theme.
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
          <img className={classes.image} src="/assets/projects/manifesto/d1_1.png"/>
          <img className={classes.image} src="/assets/projects/manifesto/d1_2.png"/>
          <img className={classes.image} src="/assets/projects/manifesto/d1_3.png"/>
        </Grid>
      </Grid>
      
      <Divider className={classes.content_divider}/>

      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12} container direction="row" justify="flex-end" alignItems="center" className={classes.spacing}>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text_right}>color palette & space : <b>two</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text_right}>color palette & space : <b>two</b></Typography>
          </Hidden>
          <Typography variant="caption" className={classes.title_rotated_text_right}>iteration<br/><br/></Typography>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Typography variant="body2" align="right">
            The structures and layouts in this set are a stylistic amalgmation of the previous designs. They explore the aforementioned themes through whitespace, color palettes, and offset-layers.<br/>
            <br/>
            In addition to the lines and angles, the designs below share offset layers albeit with differing color palettes. The offset has been created to symbolise the gap between individual and society. An individual’s conformation to societal expectations and norms has been depicted by the lack of offset in a few areas. However, these instances should not dominate human life and instead occur in minority.<br/>
            <br/>
            Whitespace is expored through repetition of the title. In the second and third designs, the repetitions are not always fully legible, illustrating the underlying theme of the list as being a partial rulebook where the missing rules are understood and defined by each reader, individually. <br/>
            <br/>
            The color palettes highlight the theme of “[living] in extremes” through heavy contrast. In the first two designs, a combination of red and black print against a solid white background illustrates the increased brilliance red exhibits against black than against white. Similarly, in the third design, red contrasts white more than yellow. A parallel is drawn between these observations and an individual’s path of growth.
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
          <img className={classes.image} src="/assets/projects/manifesto/d2_1.png"/>
          <img className={classes.image} src="/assets/projects/manifesto/d2_2.png"/>
          <img className={classes.image} src="/assets/projects/manifesto/d2_3.png"/>
        </Grid>
      </Grid>

      <Divider className={classes.content_divider_right}/>

      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12} container direction="row" alignItems="center" className={classes.spacing}>
          <Typography variant="caption" className={classes.title_rotated_text}>iteration<br/><br/></Typography>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text}><b>three</b> : typography</Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text}><b>three</b> : typography</Typography>
          </Hidden>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Typography variant="body2">
            The designs in this set explore the previous illustrations with greater focus towards the more inticrate details such as font sizes, text alignment, and color palettes, alongside a multitude of other details that cumulatively set the tone for the final manifesto design.<br/>
            <br/>
            A notable change in layout is seen in the bottom left; previously, “Bruce Mau, 1998” was printed with an offset, but has now been replaced with an angled reflection. Although the offset signalled a gap between individual and society, the angle of the reflection illustrates that the manifesto is not a perfect portrayal of Bruce Mau’s ideologies and mental models, but rather a work in progress. <br/>
            <br/>
            A range of font-sizes has been used in these designs, exploring the importance of assigning weightage to the different facets of an individual’s growth. The line crosses through the title to, once again, portray how the manifesto does not dictate a perfect recipe for growth but rather creates a unique mental model.
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row">
          <img className={classes.image} style={{'marginRight': '5%'}} src="/assets/projects/manifesto/d3_1.png"/>
          <img className={classes.image} src="/assets/projects/manifesto/d3_2.png"/>
        </Grid>
      </Grid>
      
      <Divider className={classes.content_divider}/>

      <Grid container direction="column" className={classes.container}>
        <Grid item xs={12} container direction="row" justify="flex-end" alignItems="center" className={classes.spacing}>
          <Hidden xsDown>
            <Typography variant="h3" className={classes.title_title_text_right}>final : <b>four</b></Typography>
          </Hidden>
          <Hidden smUp>
            <Typography variant="h5" className={classes.title_title_text_right}>final : <b>four</b></Typography>
          </Hidden>
          <Typography variant="caption" className={classes.title_rotated_text_right}>iteration<br/><br/></Typography>
        </Grid>
        <Grid item xs={12} className={classes.spacing}>
          <Typography variant="body2" align="right">
            The final color palette employs tones of pink and blue as these colors are in balance ie no color overpowers the other. Moreover, when overlayed, they create a new stronger tone, akin to how Bruce Mau’s manifesto could lead to exponential growth when combined with an individual’s own perceptions and perspectives regarding the rules, or lack of, of life.
          </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
          <img className={classes.image} style={{'width': '65%'}} src="/assets/projects/manifesto/d4_2.png"/>
          <img className={classes.image} src="/assets/projects/manifesto/d4_1.jpg"/>
        </Grid>
      </Grid>

      <Divider className={classes.content_divider_right}/>
      
    </>

    
    //                 Break the rules <br/>
    //                 Because <br/>
    //                 Sometimes <br/>
    //                 You need to break <br/>
    //                 The box <br/>
    //                 To think beyond <br/>
    //                 <br/>
    //                 Chase the unconventional <br/>
    //                 Because <br/>
    //                 You aren't a sheep <br/>
    //                 Following the "normal" <br/>
    //                 You are a human <br/>
    //                 Creating new <br/>
    //                 Normals <br/>
    //                 <br/>
    //                 Live in extremes <br/>
    //                 ...or don't <br/>
    //                 Because <br/>
    //                 There's only <br/>
    //                 A yes <br/>
    //                 Or <br/>
    //                 A no <br/>
    //                 --
    //                 
    )
}