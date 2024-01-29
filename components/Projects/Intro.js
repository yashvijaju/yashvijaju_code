import React from 'react';
import { Grid, Typography, Hidden } from '@material-ui/core';

var title = '#000000'; 
var text = '#000000';

function TitleText(props) {
    return (
        <Grid item xs container direction="column">
            <Typography variant="button" style={{color: title}}>{props.title}</Typography>
            <Typography variant="caption" style={{color: text}}>{props.text}</Typography>
        </Grid>
    )
}

function TitleTextStack(props) {
    return (
        <Grid item xs container direction="column">
            <Typography variant="button" style={{color: title}}>{props.title}</Typography>
            <Grid item xs container direction="row" justifyContent="space-between">
                <Typography variant="caption" style={{color: text}}>{props.text1}</Typography>
                <Typography variant="caption" style={{color: text}}>{props.text2}</Typography>
            </Grid>
        </Grid>
        
    )
}

export function Intro(props) {       
    title = props.title_color;
    text = props.text_color;

    return(
        <>
            <Hidden smDown>
                <Grid container direction="row" justifyContent="space-between" spacing={6}>
                    <Grid item xs={10} container direction="column"> 
                        <Grid container direction="row" justifyContent="space-between" style={{ padding: '3vh 0' }}>
                            <TitleText title="Company" text={props.company}></TitleText>
                            <TitleText title="Role" text={props.role}></TitleText>
                            <TitleText title="Year" text={props.year}></TitleText>
                            <TitleText title="Category" text={props.category}></TitleText>
                        </Grid>
                        <Grid container direction="row">
                            <TitleText title="Introduction" text={props.introduction}></TitleText>
                        </Grid>
                    </Grid>
                    <Grid item xs={2} container direction="column"> 
                        <Grid container direction="row" justifyContent="space-between" style={{ padding: '3vh 0' }}>
                            <TitleText title="Team" text={props.team}></TitleText>
                        </Grid>
                        <TitleTextStack title="Tools & Stack" text1={props.tools1} text2={props.tools2}></TitleTextStack>
                    </Grid>
                </Grid>
            </Hidden>
            <Hidden mdUp>
                <Grid item container direction="column" justifyContent="space-between" spacing={3}>
                    <Grid item xs={12} container direction="row" justifyContent="space-between">
                        <TitleText title="Company" text={props.company}></TitleText>
                        <TitleText title="Year" text={props.year}></TitleText>
                    </Grid>
                    <Grid item xs={12} container direction="row" justifyContent="space-between">
                        <TitleText title="Role" text={props.role}></TitleText>
                        <TitleText title="Team" text={props.team}></TitleText>
                    </Grid>
                    <Grid item xs={12} container direction="row" justifyContent="space-between">
                        <TitleText title="Tools & Stack" text={props.tools}></TitleText>
                        <TitleText title="Category" text={props.category}></TitleText>
                    </Grid>
                    <TitleText title="Introduction" text={props.introduction}></TitleText>
                </Grid>
            </Hidden>
        </>
    )
}; 