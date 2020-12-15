import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        alignItems: 'center',
        padding: '5vh 0 2vh',
    },
    border: {
        borderBottom: '5px solid black',
        width: '100%',
    },
    content: {
        padding: '0 10px 0 10px',
        whiteSpace: 'nowrap',
    }
}));

export function DividerLeft(props) {
    const classes = useStyles();

    return(
        <>
            <div className={classes.container} id={props.id}>
                <div className={classes.border} style={{width: '5vw', borderColor: props.borderColor}}/>
                <span className={classes.content}>
                    <Typography variant="body1" style={{color: props.textColor}}>{props.text}</Typography>
                </span>
                <div className={classes.border} style={{borderColor: props.borderColor}}/>
            </div>
        </>
    )
}