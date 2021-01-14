import React from 'react';
import { Grid, Divider, Typography, Hidden, Tooltip } from '@material-ui/core';
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
    image: {
        border: '1px solid #9E0D1B',
        height: 'auto',
        width: '100%',
        margin: '2vh 0',
        transition: 'all .5s ease-in-out', 
        '&:hover': {
            cursor: 'pointer',
            transform: 'scale(1.15)',
        }
    },
    circle: {
        width: '50pt',
        height: '50pt',
        borderRadius: '50%',
        backgroundColor: tertiary,
        display: 'inline-flex',
        zIndex: '-1',
        [theme.breakpoints.down('xs')]: {
            width: '30pt',
            height: '30pt',
        },
    },
    title: {
        display: 'inline-block',
        margin: '0 0 0 -30pt',
        zIndex: '1',
        color: secondary,
        [theme.breakpoints.down('xs')]: {
            margin: '0 0 0 -20pt',
        },
    },
    text: {
        color: primary,
        margin: '2vh 0',
    }
}));

function ContentItem(props) {
    const classes = useStyles();

    return(
        <>
        <Grid item xs={12} container direction="row" alignItems="center">
            <div className={classes.circle}></div>
            <Hidden xsDown>
                <Typography variant="h3" className={classes.title}>{props.title}</Typography>
            </Hidden>
            <Hidden smUp>
                <Typography variant="h5" className={classes.title}>{props.title}</Typography>
            </Hidden>
        </Grid>
        <Grid item xs={12} container direction="column">
            <Typography variant="body2" className={classes.text}>
                {props.text}
            </Typography>
            <Grid container direction="row">
                {props.images}
            </Grid>
        </Grid>
        </>
    )
}

function ContentItemText(props) {
    const classes = useStyles();

    return(
        <>
        <Grid item xs={12}>
            <Typography variant="body2" className={classes.text}>
                {props.text}
            </Typography>
        </Grid>
        <Grid item xs={12} container direction="row" justify="space-between">
            {props.images}
        </Grid>
        </>
    )
}


export default function Story() {
    const classes = useStyles();
    
    return(
        <>
        <Cover project_name="Circle of Light : Gautam Buddha" bg_color={tertiary} title_color={secondary}></Cover>
        <Grid container className={classes.container}>
            <Intro title_color={primary_25} text_color={primary} company={"N/A"} role={"Artist"} year={"2014"} category={<div>Traditional Art <br/> <br/></div>} team={"Independent Project"} tools={<div><u>Art Supplies:</u> Oil Paints, Canvas, Frame</div>} tools1={<div><u>Art Supplies:</u> <br/>Oil Paints <br/>Canvas <br/>Frame <br/></div>} tools2={<div></div>} introduction={<div>Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and self-actualisation. His ideology and way-of-life attracts hundreds of thousands of followers. <br/> This painting is inspired by another artist's work.</div>}/>
        </Grid>

        <Divider className={classes.divider}/>

        <Grid container direction="column" className={classes.container}>
            <Fade>
                <ContentItem title="about the painting" text={<div>'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and self-actualisation. His ideology and way-of-life attracts hundreds of thousands of followers. This painting is inspired by another painting I had seen in a book. <br/> <br/>In the portrait, Buddha’s facial features are softened and symmetricalised as a manifestation of his ideology attracting a multitude of followers, as in accordance with the Theory of Evolutionary Advantage. His eyelids are painted half-open to radiate calmness and serenity, as achieved through meditation. This also allows observers to feel as if the Buddha is looking right at them regardless of where they position themselves and thus suggesting a quality of being omniscient. Around Buddha’s head, an aura has been painted to illustrate the high pedestal followers place him on. Moreover, given the asssociation of the colors blue and white with the ocean and sky, shades of these hues have been used throughout the portrait to emphasise the theme of embracing the natural. <br/><br/>A bright “Circle of Light” illustrates the Buddha's heart to visually define his state of complete internal enlightenment. Just as he preaches to his pupils in order to share his knowledge, tendrils of this “Circle of Light” extend from his soul and merge with his surroundings. The color palette of yellow, orange, and red accentuates the portrayal of Buddha as a beacon of hope and fresh beginnings.</div>} images={<><img className={classes.image} src="/assets/projects/circle-of-light/circle-of-light.jpg" style={{margin: '0 0 10vh 0'}}/></>}/>

                <ContentItem title="methodology" text={<div>As the canvas was large, I started by pencilling out a 10*10 grid - this allowed me to later maintain symmetry while sketching the portrait. I then drew a rough pencil sketch of the Buddha as this was the main object of my painting. Then, to even the tone and decrease the absorption of the oil paint by the canvas, I painted the entire canvas with a thick white base coat to prepare my canvas for the first coat. <br/><br/>I started with the background, using a large brush to paint the top corners in a deep, royal blue. Then, I used a slightly thinner brush to create the aura around Buddha’s head, rotating the brush in a circular motion as I started from the centre and moved to the corners, decreasing the pressure exerted on the brush to paint the different hues of blue as the palette moved from light blue towards the centre to dark blue in the extreme corners. <br/><br/>After this, I had to wait for a few days to allow the paint to semi-dry before I began detailing Buddha’s facial features. As this was the first coat of oil paints out of three, my goal was to outline the more general features rather than expending energy focusing on the inticrate details. I first painted the Buddha's hair given this was a dark color; this was done to prevent it from smudging into the lighter shades used while painting his forehead. I then painted the forehead, cheekbones, and ears in a slightly lighter shade of blue, using paints of red and white to create highlights and tone. <br/><br/>Once this was done, I painted the Buddha’s neck in a darker blue so as to greatly accentuate the “circle of light” in his chest - represented in the bright shades of yellow, orange, red, and green. Thus, my first coat was complete.</div>} images={<><img className={classes.image} src="/assets/projects/circle-of-light/circle-of-light-eyes.jpg"/></>}/>

                <ContentItemText text={<div>Before starting my second coat, I had to wait for the first coat of paint to dry. However, this time, I had to wait for longer (about two-three weeks) to ensure thorough drying as I was to resume painting from the very top, and didn’t want to smudge the lower half while doing so. The primary purpose behind the second coat was to perfect all the background illustrations. It hence focused on detailed shading to create smooth transitions from one hue to another without allowing individual brush strokes to show. <br/><br/>This time, I detailed Buddha’s facial features as well, creating the effect of light coming from within by highlighting his central facial section. And thus, with the completion of the second coat, I perfected my painting’s background. <br/><br/>The process of waiting continued once again. </div>} images={<><img className={classes.image} src="/assets/projects/circle-of-light/circle-of-light-zoom-1.jpg" style={{width: '25%'}}/><img className={classes.image} src="/assets/projects/circle-of-light/circle-of-light-zoom-2.jpg" style={{width: '25%'}}/><img className={classes.image} src="/assets/projects/circle-of-light/circle-of-light-zoom-3.jpg" style={{width: '43.5%'}}/></>}/>

                <ContentItemText text={<div>I then began work on my third coat, focused on perfecting and finely detailing the portrait’s main object - the Buddha’s face. This was by far the most difficult aspect of the painting - especially the eyes - as I had to be doubly careful to ensure that the features radiated serenity while also ensuring that my brush strokes did, at no point, touch the surrounding background.<br/><br/> Only after painting this layer and allowing it to dry completely was I able to add the final finishing touches to the painting. I ensured that not only was the border between the Buddha and the background sharp, but also painted the sides of the canvas with a dark bluish-black paint to cover any strokes that went astray down the sides. <br/><br/>To mark my painting’s completion, I then used a thin brush to paint my name in the right-hand corner in white.</div>}/>
            </Fade>
        </Grid>

        <Footer prev="KEYFRAME ANIMATION" prev_link="/art/animation" prev_category="digitl art" next="SOFTWARE ENGINEER INTERN : iSPIRT" next_link="/work/ispirt" next_category="tech, work" title={secondary} subtitle={primary} divider={primary_25}/>
        </>
    )
}