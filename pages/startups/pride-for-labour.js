import React from 'react';
import { Grid, Divider, Typography, Hidden } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'
import { Footer } from '../../components/Projects/Footer'

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
    },
    poster_image: {
      width: '40%',
      [theme.breakpoints.only('sm')]: {
        width: '60%',
        margin: '0 0 1vh',
      },
      height: 'auto',
      border: '1px solid #9E0D1B',
      borderRadius: '20px',
    },
    gratitude_image: {
      width: '100%',
      border: '1px solid #9E0D1B',
      borderRadius: '20px',
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
    <Fade>
      <Typography variant="body1" className={classes.title} style={{color: primary}}><b>{props.title}</b></Typography>
    </Fade>
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
        <Cover project_name="Pride For Labour" bookmark="/assets/bookmarks/bookmark-pride-for-labour.svg"  bookmarkTitle="/assets/bookmarks/bookmark-pride-for-labour-title.svg" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"Pride For Labour"} role={"Co-Founder"} year={"2016-2019"} category={"Social Entrepreneurship"} team={"Oberoi Intl School Community"} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>"I believe in the dignity of labor, whether with head or hand; that the world owes no man a living but that it owes every man an opportunity to make a living." –John Rockefeller. <br/>Domestic labour isn’t a respected occupation, but that has to change. To solve this, I founded Pride For Labour (PFL) in grade 10, with a mission to empower domestic labour and instil pride and respect in the occupation.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container className={classes.container} id="container">
          <ProblemStatement title_color={secondary} text_color={primary} bg_color={tertiary} text={<div>Domestic labour is one of the most under-respected occupations, especially in developing economies. Poor legal protection, illteracy, poverty, and exploitation, amongst numerous other factors, prevent domestic workers from standing up to demand respect from society. <br/><br/>In India, for example, domestic workers are asked to use bathrooms built outside of households, eat meals on the kitchen floor, live in extremely small houses, use different lifts than those used by building society residents, and work 15-17 hours daily — all while earning less than 200$ every month.</div>} media={<div className={classes.problem_statement}></div>}/>
          
          <Grid container className={classes.text_container}>
            <Fade>
              <Typography className={classes.solution_overview} variant="body1">
                <u><b>SOLUTION OVERVIEW</b></u>
              </Typography>
              <Typography className={classes.text} variant="body2">
              I co-founded Pride For Labour in Grade 10 with two of my highschool friends, Dipanjli Murarka and Rhea Mathias. Pride For Labour started as a school assignment, but grew into a larger initiatve over the years and, today, truly defines who I am as an individual. <br/> <br/> Over the years, we developed Pride For Labour into a multi-phased program, securing school support and participation from hundreds of members of our school community.
              </Typography>
            </Fade>
          </Grid>
        </Grid>

        <EmptyContainer style={{paddingLeft: '8vw', width: '95vw', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} content={<div><Title title={<div>1. Identifying and Understanding the Problem</div>}/><Text text={<div>In order to truly understand the problem, we conducted a series of social experiments. These experiments helped us analyse the treatment of domestic workers and employer sensitivity at households, levels of recognition and appreciation of the staff’s contributions to the school environment, and overall relationships between employer and employee. <br/><br/>To gain a holistic understanding of the typical environment in households, we conducted a series of interviews with pairs of employers and employees. We also drew heavily from each of our own experiences and interactions at home. <br/><br/>At school, we conducted a social experiment where we stood in the lifts with the didis (female domestic worker) and bhaiyyas (male domestic worker) who manned the lifts. In the lifts, we observed interactions between the staff and other individuals. We were disappointed to find that out of the 162 individuals we witnessed enter the lifts, only 51 interacted with the staff. To put things into perpective, that’s a meager 31.48%.<br/><br/>Our findings showed us that although domestic workers were happy with their jobs, they didn’t feel recognised, appreciated, or respected. They also did not want their children to follow in their footsteps.<br/><br/> (Fall, 2016) </div>}/></div>}></EmptyContainer>

        <EmptyContainer style={{paddingRight: '8vw', width: '95vw', marginLeft: '5vw', borderTopRightRadius: '0', borderBottomRightRadius: '0', textAlign: 'right'}} content={<div><Title title={<div>2. Spreading Awareness</div>}/>
        <Grid container direction="row" justifyContent="space-between">
          <Hidden xsDown>
            <Grid item xs={12} sm={4} container direction="row">
              <img className={classes.poster_image} style={{marginRight: '10%'}} src="/assets/projects/pride-for-labour/poster_1.jpg" alt="Campaign Poster" title="Campaign Poster"/>
              <img className={classes.poster_image} src="/assets/projects/pride-for-labour/poster_2.jpg" alt="Campaign Poster" title="Campaign Poster"/>
            </Grid>
          </Hidden>
          <Grid item xs={12} sm={8}>
            <Text text={<div>After identifying the problem, we realised that most individuals weren’t privy to the problem. Thus, our logical next step was to focus on spreading awareness about the lack of dignity in the domestic labour industry. To achieve this, we conducted school-wide campaigns. <br/><br/>We hung posters around the school to remind students, teachers, and parents alike to acknowledge the work done by the domestic staff by expressing their gratitude. We also performed a skit with the younger students, to train them to adopt a mental model that doesn’t differentiate between people in different professions.<br/><br/>Our campaign was so successful that our principal once wrote in an email addressed to the entire school community: <br/>“How do you pick an OIS kid when he’s out of uniform?  Wait until he gets out of the lift;  the OIS kids are the ones who say “thank you” to the lift operator.”<br/><br/> (Fall, 2016 - Fall, 2018) </div>}/>
          </Grid>
          <Hidden smUp>
            <Grid item xs={12} sm={4} container direction="row" justifyContent="space-between" style={{marginTop: '2vh'}}>
              <img className={classes.poster_image} src="/assets/projects/pride-for-labour/poster_1.jpg" alt="Campaign Poster" title="Campaign Poster"/>
              <img className={classes.poster_image} src="/assets/projects/pride-for-labour/poster_2.jpg" alt="Campaign Poster" title="Campaign Poster"/>
            </Grid>
          </Hidden>
        </Grid>
        </div>}></EmptyContainer>

        <EmptyContainer style={{paddingLeft: '8vw', width: '95vw', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} content={<div><Title title={<div>3. Expressing Gratitude</div>}/>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <Text text={<div>Over time, we realised that although expressing one’s gratitude through verbal means was crucial to the Pride For Labour movement, it wasn’t enough. A physical token of our appreciation would serve as a better permanent reminder that their work — and existence, really — truly did matter. With this in mind, we organised a school-wide Secret Santa.<br/><br/>Over a single weekend, we received 400+ gifts from our super enthusiastic community. Each gift was newly-bought specially for the staff, wrapped in beautiful paper, and sent with heartfelt messages of thanks. <br/><br/>For Christmas, we gifted each member of the domestic workforce, and received smiles so wide and blessings so dear that we knew we had managed to touch their hearts, if only temporarily. <br/><br/> (Christmas, 2018) </div>}/>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.gratitude_image} src="/assets/projects/pride-for-labour/gratitude_1.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
          <Grid item xs={6}>
            <img className={classes.gratitude_image}src="/assets/projects/pride-for-labour/gratitude_2.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
          <Grid item xs={6}>
            <img className={classes.gratitude_image} src="/assets/projects/pride-for-labour/gratitude_3.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.gratitude_image} src="/assets/projects/pride-for-labour/gratitude_4.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.gratitude_image} src="/assets/projects/pride-for-labour/gratitude_5.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
        </Grid>
        </div>}></EmptyContainer>

        <EmptyContainer style={{paddingRight: '8vw', width: '95vw', marginLeft: '5vw', borderTopRightRadius: '0', borderBottomRightRadius: '0', textAlign: 'right'}} content={<div><Title title={<div>4. Swapping Shoes to better Understand Domestic Work</div>}/>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <Text text={<div>Although our Secret Santa was a huge success, we understood that this was temporary. To truly foster strong relationships built on mutual appreciation and respect, we had to bring about a paradigmatic shift in our societies. The mistreatment of domestic workers was perceived to be natural, and we had to change this.<br/><br/>To lead change in this direction, we decided to step into the shoes of domestic workers. One saturday, we invited the staff to dress in casual attire and report late to work. When they reached, we ushered them to classrooms and auditoriums where we projected movies for them to enjoy. In the meantime, we requested over a hundred student, teacher, and parent volunteers to clean the 8-storey campus. As we sanitised every desk and wiped clean every window pane over 8-storeys, sweating profusely (we switched the air conditioners off, to simulate the typical working conditions) as we cleaned for hours, each one of us truly understood just how difficult and strenuous the work was. <br/><br/>With this newfound appreciation and awe for the individuals who ensured our school was always spick-and-span, day-in and day-out, we sat down for lunch together.<br/><br/>That day, each volunteer walked out the school gates with sincere respect for domestic labour, and we inched towards our goal.<br/><br/> (Labour Day, 2019) </div>}/>
          </Grid>
          <Grid item xs={7}>
            <img className={classes.gratitude_image}src="/assets/projects/pride-for-labour/efforts_1.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
          <Grid item xs={5}>
            <img className={classes.gratitude_image} src="/assets/projects/pride-for-labour/efforts_2.jpg" alt="Pride For Labour" title="Pride For Labour"/>
          </Grid>
        </Grid>
        </div>}></EmptyContainer>

        <EmptyContainer style={{paddingLeft: '8vw', width: '95vw', borderTopLeftRadius: '0', borderBottomLeftRadius: '0'}} content={<div><Title title={<div>5. Developing a Chain Reaction</div>}/>
        <Grid container direction="row" spacing={1}>
          <Grid item xs={12}>
            <Text text={<div>Over the years, we sparked conversations surrounding respect and dignity for domestic labour, and only hope that we were successful in triggering a chain reaction. <br/><br/>Our work is far from over, and I plan to take Pride For Labour with me, wherever I go.</div>}/>
          </Grid>
        </Grid>
        </div>}></EmptyContainer>

        <Footer prev="DANCING ON THE MOON" prev_link="/art/dancing-on-the-moon" prev_category="traditional art" next="CARTOON PORTRAIT" next_link="/art/cartoon-portrait" next_category="digital art" title={secondary} subtitle={primary} divider={primary_25}/>


        {/* The lift's doors stretched wide open <br/>
        <span style={{fontStyle: 'italic'}}>6th floor</span> <br/>
        I waited while teachers and students ahead spilled out <br/>
        It was my turn <br/>
        I took a step ahead <br/>
        Turned around <br/>
        "Thank you <span style={{fontStyle: 'italic'}}>didi</span>" <br/>
        <br/>
        <span style={{fontStyle: 'italic'}}>Didi</span> smiled <br/>
        I was the only one who thanked her that day <br/> */}
      </>
    ) 
}