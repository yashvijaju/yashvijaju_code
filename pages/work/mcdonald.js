import React from 'react';
import { Grid, Divider, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
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
            width: '50%',
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
    text: {
        color: primary,
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
            <Cover project_name="McDonald's : Product Development Intern" bg_color={tertiary} title_color={secondary}></Cover>
            <Grid container className={classes.container}>
                <Intro title_color={primary_25} text_color={primary} company={"McDonald's Hardcastle Restaurants Pvt Ltd"} role={"Product Development Intern"} year={"July 2019"} category={"Work"} team={"N/A"} tools={<div>N/A</div>} tools1={<div>N/A</div>} tools2={<div></div>} introduction={<div>Hardcastle Restaurants Private Limited operates the West and South franchises of McDonald's in India. <br/>I interned as a Product Developer at McDonald’s in July 2019, where I assisted with beta-testing, analyzing, and improving the  pilot feature “On The Go”. On The Go was conceptualised to deliver food to customers en-route. </div>}/>
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
                    <Grid item xs={2}>
                        <Typography variant="body2" style={{color: secondary}}>Assumptions about the Target Audience</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body2" style={{color: primary}}>1. The typical costumer travels predominantly in a car, with no differentiation between privately owned vehicles and taxi-cab services (Uber, Ola) <br/> <br/>
                        2. The typical costumer orders McDonald’s via the McDelivery mobile application / website instead of ordering from food-delivery services (Swiggy, Zomato) <br/> <br/>
                        3. The typical costumer drives a route which is not dominated by highways and freeways as these roadways are unavailable to provide for accessible pickup-points <br/> <br/>
                        4. The typical costumer prefers food delivery over dining in when eating McDonald’s</Typography>
                    </Grid>
                </Grid>
                <Grid container direction="row" justify="space-between" item xs={12} className={classes.product_container}>
                    <Grid item xs={2}>
                        <Typography variant="body2" style={{color: secondary}}>Competitive Comparison</Typography>
                    </Grid>
                    <Grid item xs={9}>
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
                    <Grid item xs={2}>
                        <Typography variant="body2" style={{color: secondary}}>Customer Value Proposition</Typography>
                    </Grid>
                    <Grid item xs={9}>
                        <Typography variant="body2" style={{color: primary}}>
                            1. On The Go provides the greatest degrees of convenience for customers as they would no longer have to step outside the comfort of their car to pick up McDonald’s meals. The value proposition increases multifold when considering situations where customers may not find available parking space near the franchise, may be driving on the opposite side of the road, or even driving their way through high traffic. <br/> <br/>
                            2. On The Go’s seamless integration with the McDelivery mobile application and wesbite poses a non-existant learning curve for existing customers.  <br/> <br/>
                            3. On The Go converts all McDonald’s franchises into (virtual) drive-thrus.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            
            <DividerLeft id="beta_testing" text="BETA TESTING" borderColor={tertiary} textColor={secondary}/>
            <Grid container className={classes.container}>
                <Grid item xs={12}> 
                    <Typography variant="body2" style={{color: primary}}>On The Go was beta tested in July 2019 across five McDonald’s franchises in South Bombay. The infographics below display stats and maps from this pilot run, including consumer data and franchise locations at which On The Go was tested.
                    </Typography>
                </Grid>
                <Grid item xs={6} container direction="column"> 
                    
                </Grid>
            </Grid>

            <DividerLeft id="data_analysis" text="DATA ANALYSIS" borderColor={tertiary} textColor={secondary}/>
            <Grid container className={classes.container}>
            </Grid>

            <DividerLeft id="extension" text="EXTENSION" borderColor={tertiary} textColor={secondary}/>
            <Grid container className={classes.container}>
            </Grid>
        </>
    )
}