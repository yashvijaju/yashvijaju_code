import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip, Tabs, Tab } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles'
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { DividerLeft } from '../../components/Partials/Divider'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'

const primary = '#9E0D1B';
const primary_25 = '#F5C9C6';
const secondary = '#DA291C';
const tertiary = '#FFE295';

const useStyles = makeStyles((theme) => ({
    container: {
        padding: '0 5vw',
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
    text_container: {
        padding: '3vw',
        [theme.breakpoints.down('xs')]: {
          padding: '5vw',
        },
    },
    solution_overview: {
        margin: '2.5vh 0 2.5vh',
        color: secondary, 
        [theme.breakpoints.down('xs')]: {
          margin: '7.5vh 0 0',
        },
    },
    options_container: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '2.5vh 0 5vh',
    },
    options_option: {
        textAlign: 'center',
        padding: '2.5vh 0',
        backgroundColor: tertiary,
        color: primary,
        '&:hover': {
            backgroundColor: primary,
            color: tertiary,
        },
        borderRadius: '20px',
        cursor: 'pointer',
    },
    options_option_link: {
        width: '19%',
        [theme.breakpoints.down('xs')]: {
            width: '49%',
            marginBottom: '1vh',
        },
    },
    evaluation_box: {
        backgroundColor: tertiary,
        borderRadius: '30px',
        padding: '3vh 3vw',
        boxSizing: 'border-box',
        height: '100%',
        '&:hover': {
            backgroundColor: primary,
            color: tertiary,
        },
    },
    text: {
        color: primary,
    },
    title: {
        color: secondary,
    },
    image: {
        width: '100%', 
        height: 'auto',
    },
}));

function Nav(props) {
    const classes = useStyles();

    return(
        <a href={props.link} className={classes.options_option_link}>
            <Grid item className={classes.options_option}>
                <Typography variant="body2">
                    {props.text}
                </Typography>
            </Grid>
        </a>
    )
}

export default function Story() {
    const classes = useStyles();

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };    

    return(
        <>
            <Cover project_name="iSPIRT : (Balloon) Volunteer" bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={<div>iSPIRT</div>} role={"(Balloon) Volunteer"} year={"June 2020-ongoing"} category={"Work"} team={<div>N/A</div>} tools={<div>Python, Flask, Plotly, Wordpress, Flourish, AWS (S3, EC2), Google Analytics, Next.js, MongoDB, Active Directory, OAuth 2.0, Figma, Adobe CC </div>} tools1={<div>Python, Flask <br/>Plotly <br/>Wordpress<br/>Flourish<br/>AWS (S3, EC2)<br/>Google Analytics</div>} tools2={<div>Next.js <br/>MongoDB<br/>Active Directory<br/>OAuth 2.0<br/>Figma<br/>Adobe CC </div>} introduction={<div>iSPIRT is a not-for-profit think tank that evangelises and develops societal tech platforms such as IndiaStack to transform India by solving some of her hard problems by addressing financial inclusion, affordable healthcare and access to education. The iSPIRT team includes volunteers that created Aadhar, the largest public identity database in the world. <br/>My first project was with the India COVID-19 SEIR Model: a predictive model for districts in India. My second project was with the iSPIRT Leadership: I created a volunteer management tool for the team.</div>}/>
            </Grid>

            <Divider className={classes.divider}/>

            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor={primary}
                textColor={primary}
                centered
                >
                <Tab label="Project 1: Predictive Covid Model"/>
                <Tab label="Project 2: Volunteer Management Tool"/>
            </Tabs>
            <TabPanel value={value} index={0}>
                <Grid container className={classes.container}>
                    <ProblemStatement text="When India locked down back in March, there was just one question on everyone’s mind: How can we flatten the curve? Public data allowed us insights into the past trend for the coronavirus, but this didn’t help individuals and governments, alike, to plan for the future. Will it be safe to travel next week? Which city is expected to see a spike in fatal cases? Can we reallocate resources and efforts to contain the virus?" title_color={secondary} text_color={primary} bg_color={tertiary}/>

                    <Grid container className={classes.text_container}>
                        <Typography className={classes.solution_overview} variant="body1">
                        <u><b>SOLUTION OVERVIEW</b></u>
                        </Typography>
                        <Typography className={classes.text} variant="body2">
                        Chiseled for ~90 days, the India COVID-19 SEIR model, which went live mid June, 2020, is the digital public good to meet this purpose. It pulls publicly available data to predict infection trends across all of India’s districts over the next 15-30 days.
                        </Typography>
                    </Grid>

                    <Grid container className={classes.options_container} id="work_summary">
                        <Nav text="Work Summary" link="#work_summary"/>
                        <Nav text="Live Model" link="#live_model"/>
                        <Nav text="Tech Specs" link="#tech_specs"/>
                        <Nav text="Use Cases" link="#use_cases"/>
                        <Nav text="Reflection" link="#reflection"/>
                    </Grid>
                </Grid>

                
                <DividerLeft text="WORK SUMMARY" borderColor={tertiary} textColor={secondary}/>
                <Grid container direction="column" className={classes.container} style={{color: primary}}>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>1.&emsp;&emsp;Developed the India Covid Model website with WordPress (indiacovidmodel.in)</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>2.&emsp;&emsp;Monitored data source for API depreciation and modified source code to accommodate for format changes in raw data</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>3.&emsp;&emsp;Updated data visualisations using Flourish</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}} id="live_model">4.&emsp;&emsp;Created data visualisations using Dash (Plotly). Automated data updation through AWS-S3 and external APIs (analytics.indiacovidmodel.in)</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>5.&emsp;&emsp;Published technical articles <a href="https://medium.com/@indiacovidmodel/india-covid-19-model-foundations-94ec7abc2794" target="_blank" rel="noreferrer noopener">(Medium)</a> <a href="https://pn.ispirt.in/bending-indias-covid-19-curve-through-science-data-led-models/" target="_blank" rel="noreferrer noopener">(iSPIRT Blog)</a><a href="https://indiacovidmodel.in/blog/" target="_blank" rel="noreferrer noopener">(Model Blog)</a></Typography>
                </Grid>

                <DividerLeft text="LIVE MODEL" borderColor={tertiary} textColor={secondary}/>
                <Grid container direction="column" className={classes.container}>
                    <Grid item xs={12}>
                        <iframe src="http://indiadistrictmodel.indiacovidmodel.in/"/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2">Powered by data-led scientific rigor, the India COVID-19 SEIR Model delivers early infection trends for every district in India. The model is geared to help Indians from all walks of life plan life and work decisions around their region’s projected trends over the next 15-30 days. Hospitals can use the model to plan for a surge in demand for resources (beds, ICUs, ventilators); local and national level leaders across private and public sectors can use the model to decide how best to contain the spread of the disease and re-open safely. Epidemiologists can use the model to define how different behavioral and environmental factors affect disease transmission. <a href="https://indiacovidmodel.in/use-cases" target="_blank" rel="noreferrer noopener">(https://indiacovidmodel.in/use-cases/)</a></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe src="https://analytics.indiacovidmodel.in/"/>
                    </Grid>
                </Grid>
                
                <DividerLeft text="TECH SPECS" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <iframe src="https://indiacovidmodel.in/tech-specs/"/>
                    </Grid>
                </Grid>

                <DividerLeft text="USE CASES" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container} spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <a href="https://indiacovidmodel.in/wp-content/uploads/2020/06/User-Individuals-Businesses.pdf" target="_blank" rel="noreferrer noopener">
                            <div className={classes.evaluation_box}>
                                <Typography variant="h5" align="center" className={classes.text}>Individuals & Businesses</Typography>
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a href="https://indiacovidmodel.in/wp-content/uploads/2020/06/User-Scientists.pdf" target="_blank" rel="noreferrer noopener">
                            <div className={classes.evaluation_box}>
                                <Typography variant="h5" align="center" className={classes.text}>Scientists & Researchers</Typography>
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a href="https://indiacovidmodel.in/wp-content/uploads/2020/06/User-Policy-Makers.pdf" target="_blank" rel="noreferrer noopener">
                            <div className={classes.evaluation_box}>
                                <Typography variant="h5" align="center" className={classes.text}>Policy-Makers</Typography>
                            </div>
                        </a>
                    </Grid>
                </Grid>
    
                <DividerLeft text="REFLECTION" borderColor={tertiary} textColor={secondary}/>  
                <Grid container className={classes.container}>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>My contribution</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>
                                Over the last few months, I've been an active balloon volunteer with iSPIRT, helping develop and maintain the India COVID-19 SEIR Model — a predictive model for the coronavirus in India for the upcoming 15 to 30 days. <br/><br/>
                                My primary role, as a software engineer, involved the creation of a functioning website for our model, general upkeeping of the model (monitoring our data-source for API depreciation and modifying our source code to accommodate for changes in raw data), generating data visualisations on Flourish (analysing data generated by our model using Python), and later automating the generation of these data-visualisations (creating a Python Flask web-app using Plotly libraries, deploying on an AWS EC2 instance, and pulling from and pushing to S3 buckets for later use). <br/><br/>
                                Moreover, I was also involved with the non-technical aspects of the project ie modelling use-cases, and writing articles for our blogs on Medium and website.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>What I learned</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>
                                The months I spent working on the India Covid Model were packed with a plethora of learnings, some of which are encapsulated here: <br/><br/>
                                1. Interacting with the most brilliant software engineers, data scientists, designers, journalists, and thought leaders in India, I learned how to create and deliver a solution that benefits the community.<br/><br/>
                                2. I had almost no experience with Python until I got involved with iSPIRT; within two weeks, I learned to use Python libraries like Plotly, Numpy, and Pandas, and used this knowledge to parse and analyse real-time data. Through this exercise, I didn’t just familiarize myself with a completely new language and its libraries, but also learned to teach myself through documentation, existing source code, and other resources available on the internet.<br/><br/>
                                3. From building software to evaluating google analytics, the project functioned almost like a startup, imparting me with knowledge, skills, and experience across the various facets of entrepreneurship.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Grid container className={classes.container}>
                    <ProblemStatement text="The iSPIRT team comprises of an approximate ~100 active volunteers at any given time. However, the cumulative number of individuals who have contributed to iSPIRT’s efforts over the years, without filtering against length of commitment, is much larger. Currently, the volunteers are identified via a Google Sheets database. However, this makes it impossible to track volunteer movements across the plethora of projects and internal roles over a long period of time." title_color={secondary} text_color={primary} bg_color={tertiary}/>

                    <Grid container className={classes.text_container}>
                        <Typography className={classes.solution_overview} variant="body1">
                        <u><b>SOLUTION OVERVIEW</b></u>
                        </Typography>
                        <Typography className={classes.text} variant="body2">
                        To solve for the lack of an internal database, I developed a volunteer management system for the iSPIRT team. The tool is currently undergoing extensive beta-testing.
                        </Typography>
                    </Grid>

                    <Grid container className={classes.options_container} id="work_summary">
                        <Nav text="Work Summary" link="#work_summary"/>
                        <Nav text="Current System" link="#current_system"/>
                        <Nav text="Design" link="#design"/>
                        <Nav text="Development" link="#development"/>
                        <Nav text="Reflection" link="#reflection"/>
                    </Grid>
                </Grid>
                
                <DividerLeft text="WORK SUMMARY" borderColor={tertiary} textColor={secondary}/>
                <Grid container direction="column" className={classes.container} style={{color: primary}}>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>1.&emsp;&emsp;Understood the logistics and design behind the iSPIRT system</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>2.&emsp;&emsp;Noted the pain points in the current system and outlined a high-level design for the tool via Trello Boards. The outline was edited and re-edited with feedback from the iSPIRT Leadership.</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>3.&emsp;&emsp;Designed a working prototype of the tool on Figma. This, too, was edited time and again with feedback from the iSPIRT Leadership and UI / UX specialists</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>4.&emsp;&emsp;Identified and researched the technology stack (Next.js, MongoDB, Azure Active Directory, OAuth 2.0) to build the volunteer management system</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>5.&emsp;&emsp;Developed the frontend in accordance with the Figma prototype</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>6.&emsp;&emsp;Designed the database schema and mapping between the frontend and backend (highlighting the backend process triggered when interacting with each component in the frontend)</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}} id="current_system">7.&emsp;&emsp;Developed the backend in accordance with the frontend-backend map and database schema</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}} id="current_system">8.&emsp;&emsp;Beta tested with iSPIRT Leadership (ongoing). Developing iterations with added features and edits to the system based on feedback received.</Typography>
                </Grid>

                <DividerLeft text="CURRENT SYSTEM" borderColor={tertiary} textColor={secondary}/>
                <Grid container direction="column" className={classes.container}>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}><u>iSPIRT System</u></Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>iSPIRT is a not-for-profit think-tank where volunteers come together to build public goods for India. To maintain and manage a volunteer system, iSPIRT classifies its volunteers based on volunteer type, code of ethic level, rooms, pillars, and playgrounds to list a few. <br/><br/>
                            The volunteer types used by iSPIRT include: 1. Balloon Volunteer, 2. Balloon Volunteer Alumni, 3. Volunteer, 4. Core Volunteer, 5. Anchor Volunteer, and 6. Volunteer Alumni. These are “states” a volunteer can go through during their iSPIRT journey.<br/><br/>
                            There are 4 code of ethics levels: 1, 2, 3, and 4. These are analogous to security clearances that determine which “room” a volunteer can volunteer in, and are used to ensure the community’s interests are placed above any volunteer’s private interests.<br/><br/>
                            Rooms, pillars, and playgrounds are metaphors used to classify projects. Volunteers work in rooms — this is where public goods are built. Each room is divided into four pillars (policy, market catalysts, playbooks, platforms). Playgrounds are where entrepreneurs use the public goods built in each of the four pillars.<br/><br/>
                            The system is governed by the Volunteer Fellowship Council (VFC).</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}><u>Pain Points <br/>(for the VFC)</u></Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>1. No data is present to track a volunteer’s history ie the volunteer’s journey through the different states, code of ethics levels, rooms, pillars, and playgrounds over time. <br/>
                            2. Changes in a volunteer’s state need to be manually updated on the excel database and on the iSPIRT website.<br/>
                            3. Every state change needs to be approved by each member of the VFC. This is done via social media channels before any edits are made to the database.<br/>
                            4. Comments can’t be associated with a volunteer’s progress.<br/>
                            5. The excel database captures only active volunteers and alumni. The system does not track balloon volunteer alumni.</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}><u>Pain Points <br/>(for Volunteers)</u></Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>1. No public database is available that captures all the active and inactive volunteers. This makes it difficult to network with other volunteers when assistance is required. <br/>
                            2. No data is available surrounding volunteers’ expertise and specializations. This makes it difficult to network with other volunteers when assistance is required.<br/>
                            3. No single-sign-on (SSO) system across the iSPIRT resources</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>
                
                <DividerLeft text="DESIGN" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Typography variant="body1" className={{classes.title}}>
                            <u>1. High-Level Designs</u>
                        </Typography>
                    </Grid>
                </Grid>

                <DividerLeft text="DEVELOPMENT" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container} spacing={3}>
                    
                </Grid>
    
                <DividerLeft text="REFLECTION" borderColor={tertiary} textColor={secondary}/>  
                <Grid container className={classes.container}>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>My contribution</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>
                            Over the last few months, I've been an active balloon volunteer with iSPIRT, helping develop Zastra, a volunteer management tool. <br/><br/>
                            As the product designer, UI UX designer, and software engineer, I wore multiple hats throughout the creation of the tool. <br/><br/>
                            My first role, as a product designer, involved the high-level mapping of the software solution. Before designing the tool, I first conversed with a few iSPIRT volunteers, including the VFC, Volunteer Operations, and regular volunteers. These conversations enabled me to understand the purpose driving the tool from different perspectives while also functioning as a foundation for the tool.<br/><br/>
                            My second role, as a UI UX designer, involved the creation of working prototypes for the software. I fulfilled this role via using Figma and Adobe Creative Cloud. I interacted with the iSPIRT leadership throughout the design process, making minor and major modifications to adapt the designs for the primary audience. I also gleaned powerful insights from UI UX specialists who volunteer with iSPIRT.<br/><br/>
                            My third role, as a software engineer, involved the development of the software. I utilized an extensive tech stack, including Next.Js, MongoDB, Active Directory, OAuth 2.0, Workplace by Facebook SSO, and Google Suite SSO. I began with the frontend, an area of old familiarity, and then sketched a mapping between frontend functionality and backend APIs before writing API routes for the backend. Amidst this process, I also created multiple schemas for the non-relational database, although I continued optimizing these schemas until the very end.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>What I learned</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>
                            The months I spent working on Zastra, the volunteer management tool, were packed with a plethora of learnings, some of which are encapsulated here: <br/><br/>
                            1. Interacting with the most brilliant software engineers, data scientists, designers, journalists, and thought leaders in India, I learned how to create and deliver a solution that benefits the community.<br/><br/>
                            2. This was the first full-stack application I made; I was new to the entire design and tech stack. Self-learning and understanding the stacks through documentation, existing source code, and other resources available on the internet, I developed the tool from the ground up. It took longer and resulted in me dedicating all my waking hours to the tool, but I learned how to self-learn and create for the real-world.<br/><br/>
                            3. The opportunity to build a software solution, from design to development, really opened my eyes to different aspects of the process of creation. Undertaking these vastly different roles, with mentors to guide me through each role, I grew to understand and adopt the mental models and frameworks underlying each of these facets.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </TabPanel>

            
        </>
    )
}