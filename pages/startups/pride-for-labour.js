import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'

const primary = '#9E0D1B';
const primary_25 = '#E6C2C6';
const secondary = '#F23838';
const tertiary = '#FFDCD0';
const quaternary = '#FFF3EF';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
    },
    empty_container: {
      padding: '3vw',
      borderRadius: '30px',
      position: 'relative', 
      backgroundColor: quaternary,
      [theme.breakpoints.down('xs')]: {
          padding: '5vw',
      },
      margin: '0 0 10vh',
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
    problem_statement: {
        width: '100%',
    },
    solution_overview: {
        margin: '2.5vh 0 2.5vh',
        color: secondary, 
        [theme.breakpoints.down('xs')]: {
          margin: '7.5vh 0 0',
        },
    },
    text_container: {
        padding: '3vw',
        [theme.breakpoints.down('xs')]: {
          padding: '5vw',
        },
    },
    title: {
        fontWeight: 'bold',
        margin: '0 0 2vh',
        color: primary,
        [theme.breakpoints.down('xs')]: {
            margin: '0',
        },
    },
    text: {
        // textAlign: 'justify',
    }
}));

function EmptyContainer(props) {
  const classes = useStyles();
  return(
    <>
      <Grid style={props.style} className={classes.empty_container} container direction="column">
        {props.content}
      </Grid>
    </>
  )
}

function Title(props) {
  const classes = useStyles();
  return(
    <Typography variant="body1" className={classes.title} style={{color: primary}}><b>{props.title}</b></Typography>
  )
}

function Text(props) {
  const classes = useStyles();
  return(
    <Typography variant="body2" className={classes.text} style={{color: primary}}>{props.text}</Typography>
  )
}

export default function Story() {
  const classes = useStyles();
    return(
      <>
        <Cover project_name="Pride For Labour" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"Pride For Labour"} role={"Co-Founder"} year={"2016-2019"} category={"Social Entrepreneurship"} team={"Oberoi Intl School Community"} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>"I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. <br/>Domestic labour isn’t a respected occupation, but that has to change. To solve this, I founded Pride For Labour (PFL) in grade 10, with a mission to empower domestic labour and instil pride and respect in the occupation.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container className={classes.container} id="container">
          <ProblemStatement title_color={secondary} text_color={primary} bg_color={tertiary} text={<div>Domestic labour is one of the most under-respected occupations, especially in developing economies. Poor legal protection, illteracy, poverty, and exploitation, amongst numerous other factors, prevent domestic workers from standing up to demand respect from society. <br/><br/>In India, for example, domestic workers are asked to use bathrooms built outside of households, eat meals on the kitchen floor, live in extremely small houses, use different lifts than those used by building society residents, and work 15-17 hours daily -- all while earning less than 200$ every month.</div>} media={<div className={classes.problem_statement}></div>}/>
          
          <Grid container className={classes.text_container}>
            <Typography className={classes.solution_overview} variant="body1">
              <u><b>SOLUTION OVERVIEW</b></u>
            </Typography>
            <Typography className={classes.text} variant="body2">
            I co-founded Pride For Labour in Grade 10 with two of my highschool friends, Dipanjli Murarka and Rhea Mathias. Pride For Labour started as a school assignment, but grew into a larger initiatve over the years and, today, truly defines who I am as an individual. <br/> <br/> Over the years, we developed Pride For Labour into a multi-phased program, secured school support, and participation from hundreds of members of our school community.
            </Typography>
          </Grid>
        </Grid>

        <EmptyContainer style={{paddingLeft: '8vw', width: '95vw', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} content={<div><Title title={<div>1. Identifying and Understanding the Problem</div>}/><Text text={<div>In order to truly understand the problem, we conducted a series of social experiments. These experiments helped us analyse the treatment of domestic workers and employer sensitivity at households, levels of recognition and appreciation of the staff’s contributions to the school environment, and overall relationships between employer and employee. <br/><br/>To gain a holistic understanding of the typical environment in households, we conducted a series of interviews with pairs of employers and employees. We also drew heavily from each of our own experiences and interactions at home. <br/><br/>At school, we conducted a social experiment where we stood in the lifts with the didis (female domestic worker) and bhaiyyas (male domestic worker) who manned the lifts. In the lifts, we observed interactions between the staff and other individuals. We were disappointed to find that out of the 162 individuals we witnessed enter the lifts, only 51 interacted with the staff. To put things into perpective, that’s a meager 31.48%.<br/><br/>Our findings showed us that although domestic workers were happy with their jobs, they didn’t feel recognised, appreciated, or respected. They also did not want their children to follow in their footsteps.</div>}/></div>}></EmptyContainer>

        <EmptyContainer style={{paddingRight: '8vw', width: '95vw', marginLeft: '5vw', borderTopRightRadius: '0', borderBottomRightRadius: '0', textAlign: 'right'}} content={<div><Title title={<div>2. Spread Awareness</div>}/><Text text={<div>After identifying the problem, we realised that most individuals weren’t privy to the problem. Thus, our logical next step was to focus on spreading awareness about the lack of dignity in the domestic labour industry. To achieve this, we conducted school-wide campaigns. <br/><br/>We hung posters around the school to remind students, teachers, and parents alike to acknowledge the work done by the domestic staff by expressing their gratitude. We also performed a skit with the younger students, to train them to adopt a mental model that doesn’t differentiate between people in different professions.<br/><br/>Our campaign was so successful that our principal once wrote in an email addressed to the entire school community: <br/>“How do you pick an OIS kid when he’s out of uniform?  Wait until he gets out of the lift;  the OIS kids are the ones who say “thank you” to the lift operator.”</div>}/></div>}></EmptyContainer>
        {/* <div>
          <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
            <Grid container direction="row" justify="center">
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pflcollage.jpg" alt="PFL" title="PFL" style={{'width': '100%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pfl_1.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                  <img src="/assets/pfl_2.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
              <Grid item xs={10} style={{marginTop: '1vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                  The lift's doors stretched wide open <br/>
                  <span style={{fontStyle: 'italic'}}>6th floor</span> <br/>
                  I waited while teachers and students ahead spilled out <br/>
                  It was my turn <br/>
                  I took a step ahead <br/>
                  Turned around <br/>
                  "Thank you <span style={{fontStyle: 'italic'}}>didi</span>" <br/>
                  <br/>
                  <span style={{fontStyle: 'italic'}}>Didi</span> smiled <br/>
                  I was the only one who thanked her that day <br/>
                  --
                  <br/> <br/>


                  "I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. <br/>
                  Domestic labour isn’t a respected occupation, but that has to change. <br/>
                  <br/>

                  To solve this, I founded Pride For Labor (PFL) in grade 10. <br/>
                    • Conducted social experiments to analyse treatment of domestic staff and employer sensitivity to their conditions <br/>
                    • Designed a multi-phased program, secured school support, and participation of 500+ parents/ students <br/>
                    1. Organised student and teacher volunteers to clean the 8-storey campus while the staff was treated to lunch and movies <br/>
                    2. Collected 400+ gifts, distributed to support staff for Christmas, 2018 <br/>
                    3. Conducted campaigns to increase awareness amongst students to respect domestic staff <br/>
                    <br/>
                  A little effort is all it takes to spread a smile, and I want to make a revolution, one smile at a time.
                  <br/> <br/>
                  Location: Oberoi International School, Mumbai <br/>
                  Founded: 2016 <br/>
                  <br/>
                </Typography>
              </Grid>
              <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pfl_3.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                  <img src="/assets/pfl_4.JPG" alt="PFL" title="PFL" style={{'width': '50%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
                <Grid item xs={10} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <img src="/assets/pflcollage2.jpg" alt="PFL" title="PFL" style={{'width': '100%', padding: '3px 3px 3px 3px'}}/>
                </Grid>
            </Grid>
          </Grid>
        </div> */}
      </>
    ) 
}