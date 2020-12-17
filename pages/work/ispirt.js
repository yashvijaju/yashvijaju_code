import React, { useState } from 'react';
import { Grid, Divider, Typography } from '@material-ui/core';

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
const tertiary_25 = '#FFF1CA';

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
    inner_nav: {
        cursor: 'pointer',
        padding: '0 0 1vh',
        margin: '0 0 5vh',
        color: primary,
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
    options_option_link_tech: {
        width: '30%',
    },
    case_box: {
        backgroundColor: tertiary,
        color: primary,
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
    image_rounded: {
        width: '100%', 
        height: 'auto',
        border: '1px solid #9E0D1B',
        borderRadius: '20px',
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

function TechNav(props) {
    const classes = useStyles();

    return(
        <a href={props.link} className={classes.options_option_link_tech}>
            <Grid item className={classes.options_option}>
                <Typography variant="h6">
                    {props.text}
                </Typography>
                <Typography variant="caption">
                    {props.subtitle}
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


            <Grid container justify="space-between" className={classes.container}>
                <Grid item xs={5} container justify="flex-end">
                    <Typography variant="body2" className={classes.inner_nav} style={{borderBottom: (value===0) ? '5px solid #9E0D1B' : '0px solid #9E0D1B'}} onClick={()=>setValue(0)}>
                        Project 1 : Predictive Covid Model
                    </Typography>
                </Grid>
                <Grid item xs={5} container justify="flex-start">
                    <Typography variant="body2" className={classes.inner_nav} style={{borderBottom: (value===1) ? '5px solid #9E0D1B' : '0px solid #9E0D1B'}} onClick={()=>setValue(1)}>
                        Project 2 : Volunteer Management Tool
                    </Typography>
                </Grid>
            </Grid>

            {(value === 0) && 
            <>
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
                        <iframe src="http://indiadistrictmodel.indiacovidmodel.in/" width="100%" height="1000px" style={{border: '1px solid #9E0D1B', outline: 'none'}}/>
                    </Grid>
                    <Grid item xs={12} style={{margin: '5vh 0'}}>
                        <Typography variant="body2" className={classes.text}>Powered by data-led scientific rigor, the India COVID-19 SEIR Model delivers early infection trends for every district in India. The model is geared to help Indians from all walks of life plan life and work decisions around their region’s projected trends over the next 15-30 days. Hospitals can use the model to plan for a surge in demand for resources (beds, ICUs, ventilators); local and national level leaders across private and public sectors can use the model to decide how best to contain the spread of the disease and re-open safely. Epidemiologists can use the model to define how different behavioral and environmental factors affect disease transmission. <a href="https://indiacovidmodel.in/use-cases" target="_blank" rel="noreferrer noopener">(https://indiacovidmodel.in/use-cases/)</a></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <iframe src="https://analytics.indiacovidmodel.in/" width="100%" height="1000px" style={{border: '1px solid #9E0D1B', outline: 'none'}}/>
                    </Grid>
                </Grid>
                
                <DividerLeft text="TECH SPECS" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <iframe src="http://indiacovidmodel.in/tech-specs/" width="100%" height="1000px" style={{border: '1px solid #9E0D1B', outline: 'none'}}/>
                    </Grid>
                </Grid>

                <DividerLeft text="USE CASES" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container} spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <a href="https://indiacovidmodel.in/wp-content/uploads/2020/06/User-Individuals-Businesses.pdf" target="_blank" rel="noreferrer noopener">
                            <div className={classes.case_box}>
                                <Typography variant="body1" align="center">Individuals & Businesses</Typography>
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a href="https://indiacovidmodel.in/wp-content/uploads/2020/06/User-Scientists.pdf" target="_blank" rel="noreferrer noopener">
                            <div className={classes.case_box}>
                                <Typography variant="body1" align="center">Scientists & Researchers</Typography>
                            </div>
                        </a>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <a href="https://indiacovidmodel.in/wp-content/uploads/2020/06/User-Policy-Makers.pdf" target="_blank" rel="noreferrer noopener">
                            <div className={classes.case_box}>
                                <Typography variant="body1" align="center">Policy-Makers</Typography>
                            </div>
                        </a>
                    </Grid>
                </Grid>
    
                <DividerLeft text="REFLECTION" borderColor={tertiary} textColor={secondary}/>  
                <Grid container className={classes.container}>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}><u>My contribution</u></Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <Typography variant="body2" style={{color: primary}}>
                                Over the last few months, I've been an active balloon volunteer with iSPIRT, helping develop and maintain the India COVID-19 SEIR Model — a predictive model for the coronavirus in India for the upcoming 15 to 30 days. <br/><br/>
                                My primary role, as a software engineer, involved the creation of a functioning website for our model, general upkeeping of the model (monitoring our data-source for API depreciation and modifying our source code to accommodate for changes in raw data), generating data visualisations on Flourish (analysing data generated by our model using Python), and later automating the generation of these data-visualisations (creating a Python Flask web-app using Plotly libraries, deploying on an AWS EC2 instance, and pulling from and pushing to S3 buckets for later use). <br/><br/>
                                Moreover, I was also involved with the non-technical aspects of the project ie modelling use-cases, and writing articles for our blogs on Medium and website.
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}><u>What I learned</u></Typography>
                        </Grid>
                        <Grid item xs={12} sm={10}>
                            <Typography variant="body2" style={{color: primary}}>
                                The months I spent working on the India Covid Model were packed with a plethora of learnings, some of which are encapsulated here: <br/><br/>
                                1. Interacting with the most brilliant software engineers, data scientists, designers, journalists, and thought leaders in India, I learned how to create and deliver a solution that benefits the community.<br/><br/>
                                2. I had almost no experience with Python until I got involved with iSPIRT; within two weeks, I learned to use Python libraries like Plotly, Numpy, and Pandas, and used this knowledge to parse and analyse real-time data. Through this exercise, I didn’t just familiarize myself with a completely new language and its libraries, but also learned to teach myself through documentation, existing source code, and other resources available on the internet.<br/><br/>
                                3. From building software to evaluating google analytics, the project functioned almost like a startup, imparting me with knowledge, skills, and experience across the various facets of entrepreneurship.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </>
            }

            {(value === 1) && 
            <>
                <Grid container className={classes.container}>
                    <ProblemStatement text="The iSPIRT team comprises of an approximate ~100 active volunteers at any given time. However, the cumulative number of individuals who have contributed to iSPIRT’s efforts over the years, without filtering against length of commitment, is much larger. Currently, the volunteers are identified via a Google Sheets database. However, this makes it impossible to track volunteer movements across the plethora of projects and internal roles over a long period of time." title_color={secondary} text_color={primary} bg_color={tertiary}/>

                    <Grid container className={classes.text_container}>
                        <Typography className={classes.solution_overview} variant="body1">
                        <u><b>SOLUTION OVERVIEW</b></u>
                        </Typography>
                        <Typography className={classes.text} variant="body2">
                        To solve for the lack of an internal database, I developed a volunteer management system for the iSPIRT team. The tool is currently undergoing extensive beta-testing. <br/><br/>
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
                        <Grid item xs={12} sm={10}>
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
                        <Grid item xs={12} sm={10}>
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
                        <Grid item xs={12} sm={10}>
                            <Typography variant="body2" style={{color: primary}}>1. No public database is available that captures all the active and inactive volunteers. This makes it difficult to network with other volunteers when assistance is required. <br/>
                            2. No data is available surrounding volunteers’ expertise and specializations. This makes it difficult to network with other volunteers when assistance is required.<br/>
                            3. No single-sign-on (SSO) system across the iSPIRT resources</Typography>
                        </Grid>
                    </Grid>
                    
                </Grid>

                <DividerLeft text="DESIGN" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid item xs={12} container direction="column">
                        <Typography variant="body2" className={classes.title}>
                            <b><u>1. High-Level Designs</u></b>
                        </Typography>
                        <Typography variant="body2" className={classes.text} style={{margin: '2vh 0 1vh'}}>
                            Before designing the product, I first mapped the high-level volunteer journey:
                        </Typography>
                        <img src="/assets/projects/ispirt/high_level.jpg" className={classes.image} style={{marginTop: '1vh'}}/>
                    </Grid>
                    {/* <Grid item xs={12} container style={{margin: '4vh 0'}}>
                        <Typography variant="body2" className={classes.text}>
                            The VFC volunteer flow: <br/><br/>
                        </Typography>
                        <Grid item xs={12} container direction="row" justify="space-between">
                            <Grid item xs={4} container direction="column">
                                <Typography variant="body2" className={classes.text}>
                                    1. Find volunteer in database <br/><br/>
                                </Typography>
                                <img src="/assets/projects/ispirt/vfc_1.jpg" className={classes.image}/>
                            </Grid>
                            <Grid item xs={3} container direction="column">
                                <Typography variant="body2" className={classes.text}>
                                    2. Update volunteer status <br/><br/>
                                </Typography>
                                <img src="/assets/projects/ispirt/vfc_2.jpg" className={classes.image}/>
                            </Grid>
                            <Grid item xs={4} container direction="column">
                                <Typography variant="body2" className={classes.text}>
                                    3. Complete checklist (associate comments / notes with every change in a volunteer's state)
                                </Typography>
                                <img src="/assets/projects/ispirt/vfc_3.jpg" className={classes.image}/>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} container>
                        <Typography variant="body2" className={classes.text}>
                            The regular volunteer flow:
                        </Typography>
                        <Grid item xs={12} container direction="row" justify="space-between">
                            <Grid item xs={5} container direction="column">
                                <Typography variant="body2" className={classes.text}>
                                    1. Find volunteer in database
                                </Typography>
                                <img src="/assets/projects/ispirt/reg_1.jpg" className={classes.image}/>
                            </Grid>
                            <Grid item xs={4} container direction="column">
                                <Typography variant="body2" className={classes.text}>
                                    2. Filter by active volunteers, expertise, location, etc
                                </Typography>
                                <img src="/assets/projects/ispirt/reg_2.jpg" className={classes.image}/>
                            </Grid>
                            <Grid item xs={2}></Grid>
                        </Grid>
                    </Grid> */}
                    <Grid item xs={12} container direction="column">
                        <Typography variant="body1" className={classes.title} style={{margin: '2vh 0 1vh'}}>
                            <b><u>2. Figma</u></b>
                        </Typography>
                        <Grid item xs={12} container direction="row" justify="space-between">
                            <Grid item xs={7} container direction="row">
                                <iframe src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FJ8QNI1GivY4xJtMK59GkVT%2FZastra%3Fscaling%3Dcontain%26node-id%3D84%253A6" width="100%" height="700px" style={{border: '1px solid #9E0D1B', outline: 'none', borderRadius: '20px'}}/>
                            </Grid>
                            <Grid item xs={4} container direction="column" justify="space-between" style={{padding: '3vw', backgroundColor: tertiary_25, borderRadius: '20px'}}>
                                <img src="/assets/projects/ispirt/figma_1.jpg" className={classes.image_rounded}/>
                                <img src="/assets/projects/ispirt/figma_3.jpg" className={classes.image_rounded}/>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>

                <DividerLeft text="DEVELOPMENT" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid container direction="row" justify="space-between">
                        <TechNav text="Next.js" subtitle="frontend & backend" link="#next.js"/>
                        <TechNav text="MongoDB" subtitle="database" link="#mongodb"/>
                        <TechNav text="Active Directory" subtitle="sso & identity and access management" link="#active_directory"/>
                    </Grid>
                    <Grid item xs={12} id="next.js">
                        <Typography variant="body2" className={classes.title} style={{margin: '4vh 0 1vh'}}>
                            <b><u>1. Next.js: frontend and backend solution</u></b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} id="mongodb">
                        <Typography variant="body2" className={classes.title} style={{margin: '4vh 0 1vh'}}>
                            <b><u>2. MongoDB: database solution</u></b>
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                        A NoSQL database has been used to store the variety of data available. Given below are a few schemas used to store data. <br/>
                        The volunteer schema is used to store volunteer information. The data format is slightly different depending on volunteer authentication (VFC Activity is shown solely for Volunteer Operations and VFC members). <br/>
                        The email templates are used to automate emails sent to volunteers when certain events occur. <br/>
                        The general settings allow dropdown options to be easily modified -- a single modification to the settings updates the dropdown menus throughout the application.<br/>
                        The rooms are used to autocomplete volunteer rooms. <br/>
                        The admin control keeps track of users with admin access.
                        </Typography>

                        <Grid container direction="row" justify="space-between" spacing={5} style={{margin: '2vh 0 0'}}>
                            <Grid item xs={6} style={{margin: '2vh 0 0', backgroundColor: tertiary_25, borderRadius: '20px', padding: '2vh'}}>
                                <Typography variant="body2" className={classes.text}>
                                    <b>Volunteer Schema:</b> <br/><br/>
                                </Typography>
                                <Typography variant="caption" className={classes.text}>
                                    “_id” : “Yashvi-Jaju” <br/>
                                    “Name” : “Yashvi Jaju” <br/>
                                    “First Name” : “Yashvi” <br/>
                                    “Last Name” : “Jaju” <br/>
                                    “User ID” : “YashviJaju@ispirt.in” <br/>
                                    “Admin Settings Public” :  <br/>
                                    &emsp;“Volunteer Type” : “Balloon Volunteer” <br/>
                                    &emsp;“Code of Ethics Level” : “1” <br/>
                                    &emsp;“Status” : “Active” <br/>
                                    &emsp;“External Positioning Title” : “None” <br/>
                                    &emsp;“Email Address” : “yashvi@ispirt.in” <br/>
                                    &emsp;“Mobile Number” : “123456789” <br/>
                                    &emsp;“Location” : “Mumbai” <br/>
                                    “Admin Settings Private” : <br/>
                                    &emsp;“New User” : “true” <br/>
                                    &emsp;“Google Group Membership” : “volunteer@ispirt.in” <br/>
                                    &emsp;“Google Sub-Group Membership” : “None” <br/>
                                    &emsp;“Auth” : “VFC” <br/>
                                    &emsp;“History” : <br/>
                                    &emsp;&emsp; 0 : “Date” : “21/9/2020” <br/>
                                    &emsp;&emsp;&emsp;“From” : “Non Volunteer” <br/>
                                    &emsp;&emsp;&emsp;“To” : “Core Volunteer” <br/>
                                    &emsp;&emsp;&emsp;“Suggested By” : “Z Admin” <br/>
                                    &emsp;&emsp;&emsp;“Approval Count” : “0” <br/>
                                    &emsp;&emsp;&emsp;“Comments” : “Added to the iSPIRT community on 21/9/2020” <br/>
                                    &emsp;“VFC Approvals” : <br/>
                                    &emsp;&emsp; 0 :  <br/>
                                    &emsp;“VFC Activity” : <br/>
                                    &emsp;&emsp; 0 : “Volunteer Name” : “Volunteer One” <br/>
                                    &emsp;&emsp;&emsp;“Volunteer ID” : “Volunteer-One” <br/>
                                    &emsp;&emsp;&emsp;“Volunteer Type” : “Balloon Volunteer” <br/>
                                    &emsp;&emsp;&emsp;“Date” : “28/9/2020” <br/>
                                    &emsp;&emsp;&emsp;“Type” : “create new user” <br/>
                                    &emsp;&emsp; 1 : “Volunteer Name” : “Volunteer Two” <br/>
                                    &emsp;&emsp;&emsp;“Volunteer ID” : “Volunteer-Two” <br/>
                                    &emsp;&emsp;&emsp;“Updated Content” : “None” <br/>
                                    &emsp;&emsp;&emsp;“Original Content” : “Temp-Volunteer” <br/>
                                    &emsp;&emsp;&emsp;“Tag” : “Mentees” <br/>
                                    &emsp;&emsp;&emsp;“Date” : “1/10/2020” <br/>
                                    &emsp;&emsp;&emsp;“Type” : “edit volunteer details” <br/>
                                    &emsp;&emsp; 2 : “Volunteer Type” : “Non Volunteer” <br/>
                                    &emsp;&emsp;&emsp;“Updated Content” : “There has been an update in your iSPIRT volunteer status.” <br/>
                                    &emsp;&emsp;&emsp;“Original Content” : “Namaste” <br/>
                                    &emsp;&emsp;&emsp;“Category” : “State Change” <br/>
                                    &emsp;&emsp;&emsp;“Date” : “1/10/2020” <br/>
                                    &emsp;&emsp;&emsp;“Type” : “edit global email settings <br/>
                                    &emsp;“Labels” :  <br/>
                                    &emsp;&emsp; 0 : “Balloon Volunteer” <br/>
                                    &emsp;&emsp; 1 : “Yellow” <br/>
                                    “Personal Profile” : <br/>
                                    &emsp;“Mentees” :  <br/>
                                    &emsp;&emsp; 0 : “_id” : “Volunteer-One” <br/>
                                    &emsp;&emsp;&emsp;“Name” : “Volunteer One” <br/>
                                    &emsp;&emsp; 1 : “_id” : “Volunteer-Two” <br/>
                                    &emsp;&emsp;&emsp;“Name” : “Volunteer Two” <br/>
                                    &emsp;“Mentors” :  <br/>
                                    &emsp;&emsp; 0 : “_id” : “Volunteer-Three” <br/>
                                    &emsp;&emsp;&emsp;“Name” : “Volunteer Three” <br/>
                                    &emsp;&emsp; 1 : “_id” : “Volunteer-Four” <br/>
                                    &emsp;&emsp;&emsp;“Name” : “Volunteer Four” <br/>
                                    &emsp;“Rooms” :  <br/>
                                    &emsp;&emsp; 0 : “Zastra” <br/>
                                    &emsp;&emsp; 1 : “India Covid Model” <br/>
                                    &emsp;“Labels” :  <br/>
                                    &emsp;&emsp; 0 : “Developer” <br/>
                                    &emsp;&emsp; 1 : “UI / UX Designer” <br/>
                                    &emsp;&emsp; 2 : “Kathak” <br/>
                                    &emsp;“Profile Image” :  <br/>
                                    &emsp;&emsp; “Small” : “/images/ispirt_small.svg” <br/>
                                    &emsp;&emsp; “HD” : “/images/ispirt_hd.svg” <br/>
                                    &emsp;“About Me” : “Hi! I am Yashvi Jaju, a balloon volunteer with iSPIRT.” <br/>
                                </Typography>
                            </Grid>
                            <Grid item xs={6} container direction="column">
                                <Grid item style={{margin: '0vh 0 0', backgroundColor: tertiary_25, borderRadius: '20px', padding: '2vh'}}>
                                    <Typography variant="body2" className={classes.text}>
                                        <b>Email Templates:</b> <br/><br/>
                                    </Typography>
                                    <Typography variant="caption" className={classes.text}> 
                                        “_id” : “Email Templates” <br/>
                                        “Type” :  <br/>
                                        &emsp;0 : “Introductory” <br/>
                                        &emsp;1 : “State Change” <br/>
                                        &emsp;2 : “Exit” <br/>
                                        “Introductory” : <br/>
                                        &emsp;“Non Volunteer” : “Welcome to iSPIRT!” <br/>
                                        &emsp;“Balloon Volunteer” : “Welcome to iSPIRT!” <br/>
                                        &emsp;“Balloon Volunteer Alumni” : “Welcome to iSPIRT!” <br/>
                                        &emsp;“Volunteer” : “Welcome to iSPIRT!” <br/>
                                        &emsp;“Core Volunteer” : “Welcome to iSPIRT!” <br/>
                                        &emsp;“Anchor Volunteer” : “Welcome to iSPIRT!” <br/>
                                        &emsp;“Volunteer Alumni” : “Welcome to iSPIRT!” <br/>
                                        “State Change” : <br/>
                                        &emsp;“Balloon Volunteer” : “Your iSPIRT volunteer status has been updated; you're now a Balloon Volunteer.” <br/>
                                        &emsp; ... <br/>
                                        &emsp;“Volunteer Alumni” : “Your iSPIRT volunteer status has been updated; you're now a Volunteer Alumni.” <br/>
                                        “Exit” : <br/>
                                        &emsp;“Balloon Volunteer” : “We’re sorry to see you go.” <br/>
                                        &emsp; ... <br/>
                                        &emsp;“Volunteer Alumni” : “We’re sorry to see you go.” <br/>
                                    </Typography>
                                </Grid>
                                <Grid item style={{margin: '2vh 0 0', backgroundColor: tertiary_25, borderRadius: '20px', padding: '2vh'}}>
                                    <Typography variant="body2" className={classes.text}>
                                        <b>General Settings:</b> <br/><br/>
                                    </Typography>
                                    <Typography variant="caption" className={classes.text}>
                                        “_id” : “General Settings” <br/>
                                        “Volunteer Type” :  <br/>
                                        &emsp;0 : “Non Volunteer” <br/>
                                        &emsp;1 : “Balloon Volunteer” <br/>
                                        &emsp;2 : “Balloon Volunteer Alumni” <br/>
                                        &emsp;3 : “Volunteer” <br/>
                                        &emsp;4 : “Core Volunteer” <br/>
                                        &emsp;5 : “Anchor Volunteer” <br/>
                                        &emsp;6 : “Volunteer Alumni” <br/>
                                        “External Positioining Titles” :  <br/>
                                        &emsp;0 : “Alumni” <br/>
                                        &emsp;... <br/>
                                        &emsp;10 : “None” <br/>
                                        “Code of Ethics Level” :  <br/>
                                        &emsp;0 : “1” <br/>
                                        &emsp;1 : “2” <br/>
                                        &emsp;2 : “3” <br/>
                                        &emsp;3 : “4” <br/>
                                        “Status” :  <br/>
                                        &emsp;0 : “Active” <br/>
                                        &emsp;1 : “Inactive” <br/>
                                        “Auth” :  <br/>
                                        &emsp;0 : “General” <br/>
                                        &emsp;1 : “Volunteer Operations” <br/>
                                        &emsp;2 : “VFC” <br/>
                                        “Google Group Membership” :  <br/>
                                        &emsp;0 : “alumni@ispirt.in” <br/>
                                        &emsp;1 : “volunteer@ispirt.in” <br/>
                                        &emsp;2 : “advisor@ispirt.in” <br/>
                                        &emsp;3 : “None” <br/>
                                        “Google Sub-Group Membership” :  <br/>
                                        &emsp;0 : “corevolunteer@ispirt.in” <br/>
                                        &emsp;1 : “None” <br/>
                                    </Typography>
                                </Grid>
                                <Grid item style={{margin: '2vh 0 0', backgroundColor: tertiary_25, borderRadius: '20px', padding: '2vh'}}>
                                    <Typography variant="body2" className={classes.text}>
                                        <b>Admin Control:</b> <br/><br/>
                                    </Typography>
                                    <Typography variant="caption" className={classes.text}>
                                    “_id” : “Admin Control” <br/>
                                    “Volunteer Operations” :  <br/>
                                    &emsp;0 : “Volunteer One” <br/>
                                    &emsp;1 : “Volunteer Two” <br/>
                                    “VFC” :  <br/>
                                    &emsp;0 : “Volunteer Three” <br/>
                                    &emsp;1 : “Volunteer Four” <br/>
                                    </Typography>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} id="active_directory">
                        <Typography variant="body2" className={classes.title} style={{margin: '4vh 0 1vh'}}>
                            <b><u>3. Active Directory: sso & identity and access management solution</u></b>
                        </Typography>
                        <Typography variant="body2" className={classes.text}>
                        Azure’s Active Directory solution has been used for identity and access management purposes. To that extent, the application functions as a user interface to the Active directory. <br/>
                        When a user is created on the application, a user is initialised on Active Directory as well. Depending on the volunteer’s type, the active directory enables SSO on Workplace by Facebook and Google Suite.
                        </Typography>
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
            </>
            }
        </>
    )
}