import React from 'react';
import { Grid, Divider, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'
import { Fade } from 'react-reveal';
// Components
import { Cover } from '../../components/Projects/Cover'
import { Intro } from '../../components/Projects/Intro'
import { DividerLeft } from '../../components/Partials/Divider'
import { ProblemStatement } from '../../components/Projects/Problem_Statement'
import { Footer } from '../../components/Projects/Footer'

const primary = '#9E0D1B';
const primary_25 = '#F5C9C6';
const secondary = '#DA291C';
const tertiary = '#FFCC00';

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
        transition: '0.25s linear',
        '&:hover': {
            backgroundColor: primary,
            color: tertiary,
            transform: 'scale(1.15)',
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
    product_container: {
        margin: '2.5vh 0',
    },
    product_table: {
        backgroundColor: tertiary,
        borderRadius: '30px',
    },
    product_table_cell: {
        color: primary,
        borderBottom: 'none',
    },
    product_table_header: {
        color: primary,
        borderBottom: '1px solid #9E0D1B',
    },
    product_table_left_header: {
        color: primary,
        borderRight: '1px solid #9E0D1B',
        borderBottom: 'none',
    },
    map_image: {
        margin: '3vh 0 0',
        width: '100%', 
        height: 'auto',
        borderRadius: '30px',
        border: '1px solid #9E0D1B',
        [theme.breakpoints.down('xs')]: {
            margin: '3vh 0 ',
        },
    },
    box_text: {
        backgroundColor: tertiary,
        border: '1px solid #9E0D1B',
        borderRadius: '30px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '3vh 3vw',
        width: '47.5%',
        height: 'auto',
        boxSizing: 'border-box',
    },
    new_map_image: {
        // margin: '3vh 0 0',
        width: '49%', 
        height: 'auto',
        borderRadius: '30px',
        border: '1px solid #9E0D1B',
    },
    evaluation_box: {
        backgroundColor: tertiary,
        borderRadius: '30px',
        padding: '3vh 3vw',
        boxSizing: 'border-box',
        height: '100%',
    },
    text: {
        color: primary,
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

    function createData(comparison, mcdonald, uber, burgerking) {
        return { comparison, mcdonald, uber, burgerking };
    }
    
    const rows = [
        createData('Restrictions on vehicle movement', 'vehicle is en-route, food is picked up at a pre-designated place', 'vehicle is parked for a long period of time', 'vehicle needs to be in a heavy traffic area for ~30 minutes'),
        createData('Cities delivered to', '(now) major cities in west and south India', 'global (6000 cities, 45 countries+)', 'only available in Mexico City'),
        createData('Delivery radius from the franchise', '10 metre radius from the franchise / pre-designated pickup location', 'five mile radius, but customizable by the customer', '1.86 miles (3 kilometre) radius from the franchise'),
        createData('Menu items available for delivery', 'entire menu is available', 'entire menu is available', 'only the Traffic Jam Whopper is available'),
      ];
      

    return(
        <>
            <Cover project_name="McDonald's : Product Development Intern" bookmark="/assets/bookmarks/bookmark-mcdonald.svg"  bookmarkTitle="/assets/bookmarks/bookmark-mcdonald-title.svg"  bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={<div>McDonald's Hardcastle Restaurants <br/> Pvt Ltd</div>} role={"Product Development Intern"} year={"July 2019"} category={"Work"} team={<div>N/A <br/> <br/></div>} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>Hardcastle Restaurants Private Limited operates the West and South franchises of McDonald's in India. <br/>I interned as a Product Developer at McDonald’s in July 2019, where I assisted with beta-testing, analyzing, and improving the  pilot feature “On The Go”. On The Go was conceptualised to deliver food to customers en-route. </div>}/>
            </Grid>

            <Divider className={classes.divider}/>

            <Grid container className={classes.container}>
                <ProblemStatement text="Hunger pangs and cravings come with no time stamp; what do you do when you are commuting by car on a hectic schedule and your stomach is growling? What if there is simply no available parking space near the McDonald’s franchise? What if you are across the street, on a very busy road, and just do not have the time to drive to the McDonald’s?" title_color={secondary} text_color={primary} bg_color={tertiary}/>

                <Grid container className={classes.text_container}>
                    <Typography className={classes.solution_overview} variant="body1">
                    <u><b>SOLUTION OVERVIEW</b></u>
                    </Typography>
                    <Typography className={classes.text} variant="body2">
                    “On The Go” is a new feature that is under pilot-testing by McDonald's Delivery. This feature would allow customers to order food in advance and have it delivered to their car en-route their commute. This would also simplify store pick-ups for customers as the hassle of parking and waiting in a queue to order would be eradicated.
                    </Typography>
                </Grid>

                <Grid container className={classes.options_container} id="work_summary">
                    <Nav text="Work Summary" link="#work_summary"/>
                    <Nav text="Product Analysis" link="#product_analysis"/>
                    <Nav text="Beta Testing" link="#beta_testing"/>
                    <Nav text="Data Analysis" link="#data_analysis"/>
                    <Nav text="Extension" link="#extension"/>
                </Grid>
            </Grid>

            <Fade>
                <DividerLeft text="WORK SUMMARY" borderColor={tertiary} textColor={secondary}/>
                <Grid container direction="column" className={classes.container} style={{color: primary}}>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>1.&emsp;&emsp;Analysed and beta-tested McDonald's pilot feature: On The Go (food delivery en-route).</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>2.&emsp;&emsp;Visited McDonald's franchises to conduct market research through interaction and observation of consumers.</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>3.&emsp;&emsp;Compared statistical success data from pilot runs and user-flow for similar services (Uber Eats, Burger King Traffic Jam Whopper). Also analysed complaints registered in the last month.</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}} id="product_analysis">4.&emsp;&emsp;Mapped API calls to pilot feature to capture usage trends and identify key stores to run second run of testing.</Typography>
                    <Typography variant="body2" style={{marginBottom: '3vh'}}>5.&emsp;&emsp;Proposed technological, product, and marketing modifications to existing pilot model to boost success rate.</Typography>
                </Grid>

                <DividerLeft text="PRODUCT ANALYSIS" borderColor={tertiary} textColor={secondary}/>
                <Grid container direction="column" className={classes.container}>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>Assumptions about the Target Audience</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}}>1. The typical costumer travels predominantly in a car, with no differentiation between privately owned vehicles and taxi-cab services (Uber, Ola) <br/> <br/>
                            2. The typical costumer orders McDonald’s via the McDelivery mobile application / website instead of ordering from food-delivery services (Swiggy, Zomato) <br/> <br/>
                            3. The typical costumer drives a route which is not dominated by highways and freeways as these roadways are unavailable to provide for accessible pickup-points <br/> <br/>
                            4. The typical costumer prefers food delivery over dining in when eating McDonald’s</Typography>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>Competitive Comparison</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                        <TableContainer className={classes.product_table}>
                            <Table>
                                <TableHead>
                                <TableRow>
                                    <TableCell className={classes.product_table_header}></TableCell>
                                    <TableCell align="left" className={classes.product_table_header}><Typography variant="caption"><b>McDonald’s On The Go</b></Typography></TableCell>
                                    <TableCell align="left" className={classes.product_table_header}><Typography variant="caption"><b>Uber Eats (McDonald’s)</b></Typography></TableCell>
                                    <TableCell align="left" className={classes.product_table_header}><Typography variant="caption"><b>Burger King Traffic Jam Whopper</b></Typography></TableCell>
                                </TableRow>
                                </TableHead>
                                <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.comparison}>
                                    <TableCell component="th" scope="row" className={classes.product_table_left_header}><Typography variant="caption"><b>{row.comparison}</b></Typography></TableCell>
                                    <TableCell align="left" className={classes.product_table_cell}><Typography variant="caption">{row.mcdonald}</Typography></TableCell>
                                    <TableCell align="left" className={classes.product_table_cell}><Typography variant="caption">{row.uber}</Typography></TableCell>
                                    <TableCell align="left" className={classes.product_table_cell}><Typography variant="caption">{row.burgerking}</Typography></TableCell>
                                    </TableRow>
                                ))}
                                </TableBody>
                            </Table>
                            </TableContainer>
                        </Grid>
                    </Grid>
                    <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                        <Grid item xs={12} sm={2}>
                            <Typography variant="body2" style={{color: secondary}}>Customer Value Proposition</Typography>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Typography variant="body2" style={{color: primary}} id="beta_testing">
                                1. On The Go provides the greatest degrees of convenience for customers as they would no longer have to step outside the comfort of their car to pick up McDonald’s meals. The value proposition increases multifold when considering situations where customers may not find available parking space near the franchise, may be driving on the opposite side of the road, or even driving their way through high traffic. <br/> <br/>
                                2. On The Go’s seamless integration with the McDelivery mobile application and wesbite poses a non-existant learning curve for existing customers.  <br/> <br/>
                                3. On The Go converts all McDonald’s franchises into (virtual) drive-thrus.
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                
                <DividerLeft text="BETA TESTING" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid item xs={12} style={{margin: '0 0 3vh'}}> 
                        <Typography variant="body2" style={{color: primary}}>On The Go was beta tested in July 2019 across five McDonald’s franchises in South Bombay. The infographics below display stats and maps from this pilot run, including consumer data and franchise locations at which On The Go was tested.
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sm={5} container direction="column"> 
                        <Grid item xs={12} container direction="row" justify="space-between">
                            <div className={classes.box_text} id="box_test">
                                <Typography variant="h3" className={classes.text} style={{marginBottom: '3vh'}}>&nbsp;2.4%</Typography>
                                <Typography variant="body2" align="center" className={classes.text}>of searches for On The Go were on routes served by pilot franchises</Typography>
                            </div>
                            <div className={classes.box_text}>
                                <Typography variant="h3" className={classes.text} style={{marginBottom: '3vh'}}>&nbsp;40.3%</Typography>
                                <Typography variant="body2" align="center" className={classes.text}>of attempts to place orders for On The Go delivery led to successful checkouts</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} container id="data_analysis">
                            <img src="/assets/projects/mcdonald/beta_map_zoom.jpg" className={classes.map_image}/>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={7} container direction="row" justify="flex-end">
                        <img src="/assets/projects/mcdonald/beta_map.jpg" className={classes.image} style={{width: '96%'}}/>
                    </Grid>
                </Grid>

                <DividerLeft text="DATA ANALYSIS" borderColor={tertiary} textColor={secondary}/>
                <Grid container className={classes.container}>
                    <Grid item xs={12} style={{margin: '0 0 3vh'}}> 
                        <Typography variant="body2" style={{color: primary}}>The five stores that this program is being piloted at are all centered in South Mumbai. However, a study made into the area from which consumers are trying to access this feature displayed different results. <br/> <br/>
                        A total of about 19,000 API calls were analysed. The consumer’s route’s start and end points were selected and reverse-geocoded (address found using lat & long). This was then filtered down to limit the calls to those made in Mumbai. About 3000 calls, excluding duplicate calls (4000), remained. <br/> <br/>
                        These lat-long coordinates were then mapped onto a google-maps layout, with a map containing all the McDonald’s stores in Mumbai strewn over this. <br/> <br/>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} container direction="row" justify="space-between"> 
                        <img src="/assets/projects/mcdonald/data_map_1.jpg" className={classes.new_map_image}/>
                        <img src="/assets/projects/mcdonald/data_map_2.jpg" className={classes.new_map_image}/>
                    </Grid>
                    <Grid item xs={12} container direction="row" justify="space-between" style={{marginTop: '3vh'}}> 
                        <img src="/assets/projects/mcdonald/data_map_3.jpg" className={classes.new_map_image}/>
                        <img src="/assets/projects/mcdonald/data_map_4.jpg" className={classes.new_map_image}/>
                    </Grid>
                    <Grid item xs={12} style={{margin: '0 0 3vh'}} id="extension"> 
                        <Typography variant="body2" style={{color: primary}}><br/> <br/>Using this, different stores can be identified where the pilot-testing might yield better results, with an increased number of GC-calls. For example, Infiniti Mall Malad, Andheri Station, Vile Parle, Nirmal Lifestyle Mulund, and Bandra Linking Road, appear to be McDonald’s franchises around areas that have received greater interest in “On the Go” than South Mumbai stores.
                        </Typography>
                    </Grid>
                </Grid>
    
                <DividerLeft text="EXTENSION" borderColor={tertiary} textColor={secondary}/>  
                <Grid container className={classes.container}>
                    <Grid item xs={12}>
                        <Typography variant="body2" style={{color: primary}}>
                            On The Go — potential features to increase customer value proposition
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} style={{margin: '1vh 0'}}>
                        <Grid item xs={6}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Audio Control</b></Typography>
                                <Typography variant="body2" className={classes.text}>Audio control is in accordance with strong safety standards for individuals ordering from McDonald’s On The Go while driving</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Delivery En-Route</b></Typography>
                                <Typography variant="body2" className={classes.text}>Establish delivery locations on roadways within a 1-2 mile radius from the franchise to reduce detours taken by customers</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" style={{color: primary}}>
                            On The Go — UI / UX and technology recommendations to improve customer experience
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} style={{margin: '1vh 0'}}>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Explain App Persmissions</b></Typography>
                                <Typography variant="body2" className={classes.text}>When the application is launched, permission is requested to “display over other apps”. If a user doesn’t understand what this means, he/ she may not be able to actually navigate into the McDelivery app</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Multi-Step Onboarding</b></Typography>
                                <Typography variant="body2" className={classes.text}>A customer needs to zoom in to select a pickup location (location markers overlap: there are two markers per store). This should be broken into two steps, select a store, and then identify a pickup location near the selected store</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Convert to PWA</b></Typography>
                                <Typography variant="body2" className={classes.text}>Create the McDelivery website as a progressive web application (PWA) since customers may prefer using multi-purpose services such as Uber Eats over installing another application</Typography>
                            </div>
                        </Grid>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="body2" style={{color: primary}}>
                            McDonald’s — potential features to increase customer value proposition
                        </Typography>
                    </Grid>
                    <Grid container spacing={3} style={{margin: '1vh 0'}}>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Loyalty Programme</b></Typography>
                                <Typography variant="body2" className={classes.text}>These should ideally extend beyond monetary benefits, as those can be accrued from third-party services such as Zomato as well, and instead appeal to the customer’s emotions</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Subscription Plans</b></Typography>
                                <Typography variant="body2" className={classes.text}>Subscriptions to a McDonald’s meal on a weekly / monthly / annual schedule would increase customer retention while exploring a yet-to-be-explored avenue in fast-food</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Chatbot</b></Typography>
                                <Typography variant="body2" className={classes.text}>AI Chatbots are gaining in popularity around the world. Developing a chatbot to assist with e-orders, answering questions and providing FnB recommendations, would enhance the customer experience</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Emoji-based Orders</b></Typography>
                                <Typography variant="body2" className={classes.text}>Pioneered by Domino’s, customers would first create their “burger profile”, which is their favorite McDonald’s meal, on their McDelivery account. Once the McDelivery and social media accounts are linked, the customer can order food using just emojis</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Real-Time Menu Updates</b></Typography>
                                <Typography variant="body2" className={classes.text}>Allow stores to update the menus based on ingredient availabilities to ensure that orders are not placed for items that are temporarily unavailable</Typography>
                            </div>
                        </Grid>
                        <Grid item xs={6} sm={4}>
                            <div className={classes.evaluation_box}>
                                <Typography variant="h6" align="left" className={classes.text} style={{marginBottom: '1vh'}}><b>Real-Time Tracking</b></Typography>
                                <Typography variant="body2" className={classes.text}>According to the MDS-Complaints for June 2019, a majority of customer were upset with delays in delivery time. Real-time tracking would improve accuracies of delivery ETA while involving the customer in the process</Typography>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Fade>

            <Footer prev="FIRST ROBOTICS COMPETITION" prev_link="/tech/first-robotics-competition" prev_category="tech, side projects" next="SOFTWARE ENGINEER INTERN : BOOKMYSHOW" next_link="/work/bookmyshow" next_category="tech, work" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}