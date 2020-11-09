import React from 'react';
import { Grid, Typography, Hidden, Tooltip } from '@material-ui/core';

const font = 'Segoe UI';


export default function Story() {
    
    function handleBuddhaMethod() {
        var temp = document.getElementById("BuddhaMethodology");
        if (temp.style.display === 'none') {
        temp.style.display = 'inline';
        }
        else {
        temp.style.display = 'none';
        }
    }
    
    return(
        <div>
            <Grid container direction="row" justify="center" style={{backgroundColor: 'white', border: '5px solid #efefef', outline: 'none', width: '70vw', 'maxHeight': '75vh', 'overflowY': 'auto', alignItems: 'center', 'paddingBottom': '5vh', 'paddingTop': '5vh'}}>
                <Grid container direction="row" justify="center">
                    <Grid item xs={10} md={5} style={{marginTop: '1vh'}}>
                    <Grid container direction="column" justify="center" style={{alignItems: 'center'}}>
                        <img id="Gautam Buddha" src="/assets/buddh.jpg" alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%'}}/>
                        <img id="Gautam Buddha" src="/assets/buddhaeyes.jpg" alt="Gautam Buddha" title="Gautam Buddha" style={{'width': '90%', marginTop: '5px'}}/>
                    </Grid>
                    </Grid>
                    <Grid item xs={10} md={6} style={{marginTop: '1vh', display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems: 'left'}}>
                    <Typography id="story-modal" variant="caption" style={{fontFamily: font}}>
                        'Circle of Light' is a 43-by-39 inch oil portrait of the Gautam Buddha. The Guatam Buddha is an important figure in Hindu mythology, famous for his surrender of the materialistic world in pursuit of complete enlightenment and self-actualisation. His ideology and way-of-life attracts hundreds of thousands of followers. This painting is inspired by another painting I had seen in a book. <br/> 
                        <br/>
                        In the portrait, Buddha’s facial features are softened and symmetricalised as a manifestation of his ideology attracting a multitude of followers, as in accordance with the Theory of Evolutionary Advantage. His eyelids are painted half-open to radiate calmness and serenity, as achieved through meditation. This also allows observers to feel as if the Buddha is looking right at them regardless of where they position themselves and thus suggesting a quality of being omniscient. Around Buddha’s head, an aura has been painted to illustrate the high pedestal followers place him on. Moreover, given the asssociation of the colors blue and white with the ocean and sky, shades of these hues have been used throughout the portrait to emphasise the theme of embracing the natural. <br/> 
                        <br/>
                        A bright “Circle of Light” illustrates the Buddha's heart to visually define his state of complete internal enlightenment. Just as he preaches to his pupils in order to share his knowledge, tendrils of this “Circle of Light” extend from his soul and merge with his surroundings. The color palette of yellow, orange, and red accentuates the portrayal of Buddha as a beacon of hope and fresh beginnings. 
                        <br/> <br/>
                    </Typography>
                    <Typography variant="caption" style={{fontFamily: font}} onClick={()=>handleBuddhaMethod()}>
                        Methodology: (click to toggle show/ hide)<br/>
                    </Typography>
                    <Typography id="BuddhaMethodology" variant="caption" style={{fontFamily: font, display:'none'}}>
                        As the canvas was large, I started by pencilling out a 10*10 grid - this allowed me to later maintain symmetry while sketching the portrait. I then drew a rough pencil sketch of the Buddha as this was the main object of my painting. Then, to even the tone and decrease the absorption of the oil paint by the canvas, I painted the entire canvas with a thick white base coat to prepare my canvas for the firs coat. I started with the background, using a large brush to paint the top corners in a deep, royal blue. Then, I used a slightly thinner brush to create the aura around Buddha’s head, rotating the brush in a circular motion as I started from the centre and moved to the corners, decreasing the pressure exerted on the brush to paint the different hues of blue as the palette moved from light blue towards the centre to dark blue in the extreme corners. After this, I had to wait for a few days to allow the paint to semi-dry before I began detailing Buddha’s facial features. As this was the first coat of oil paints out of three, my goal was to outline the more general features rather than expending energy focusing on the inticrate details. I first painted the Buddha's hair given this was a dark color; this was done to prevent it from smudging into the lighter shades used while painting his forehead. I then painted the forehead, cheekbones, and ears in a slightly lighter shade of blue, using paints of red and white to create highlights and tone. Once this was done, I painted the Buddha’s neck in a darker blue so as to greatly accentuate the “circle of light” in his chest - represented in the bright shades of yellow, orange, red, and green. Thus, my first coat was complete. 
                        <br/> <br/> 
                        Before starting my second coat, I had to wait for the first coat of paint to dry. However, this time, I had to wait for longer (about two-three weeks) to ensure thorough drying as I was to resume painting from the very top, and didn’t want to smudge the lower half while doing so. The primary purpose behind the second coat was to perfect all the background illustrations. It hence focused on detailed shading to create smooth transitions from one hue to another without allowing individual brush strokes to show. This time, I detailed Buddha’s facial features as well, creating the effect of light coming from within by highlighting his central facial section. And thus, with the completion of the second coat, I perfected my painting’s background. The process of waiting continued once again. I then began work on my third coat, focused on perfecting and finely detailing the portrait’s main object - the Buddha’s face. This was by far the most difficult aspect of the painting - especially the eyes - as I had to be doubly careful to ensure that the features radiated serenity while also ensuring that my brush strokes did, at no point, touch the surrounding background. Only after painting this layer and allowing it to dry completely was I able to add the final finishing touches to the painting. I ensured that not only was the border between the Buddha and the background sharp, but also painted the sides of the canvas with a dark bluish-black paint to cover any strokes that went astray down the sides. To mark my painting’s completion, I then used a thin brush to paint my name in the right-hand corner in white. <br/>
                        <br/>
                    </Typography>
                    <Typography variant="caption" style={{fontFamily: font}}>
                        Painted: May 2014 <br/>
                        <br/>
                    </Typography>
                    
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}