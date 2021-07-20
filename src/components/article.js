import React, {useState, useEffect} from 'react';

import {Typography, Grid, makeStyles} from '@material-ui/core';
// import { StaticImage } from "gatsby-plugin-image"

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '65vw',
        alignItems: 'flex-start',
        height: '100%',
        [theme.breakpoints.down('md')] : {
            flexDirection: 'column',
            justifyContent: 'center',
            width: '100%',
            alignItems: 'center',
            maxWidth: '25rem'
        },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '95vw'
        }
    },
    imgDiv: {
        width: '35vw',
        alignSelf: 'center',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '90vw'
        },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '95vw'
        }
    },
    contentDiv: {
        width: '28vw', 
        alignSelf: 'flex-start',
        [theme.breakpoints.down('md')] : {
            width: '100%',
            maxWidth: '35vw',
            alignSelf: 'center',
        },
        [theme.breakpoints.down('xs')] : {
            maxWidth: '25rem'
        }

    },
    img: {
        height: '340px',
        width: '480px',
        [theme.breakpoints.down("sm")]: {
            height: '240px',
            width: '360px',
        },
        [theme.breakpoints.down("xs")]: {
            width: '85vw',
        }
    }
}));

const Img = (data) => {
   
    // const [pads, setPads] = useState(true)

    // useEffect(()=>{
    //     setPads(window.screen.width > 500);
    // },[])

    const classes = useStyles();
    return (
        <div className={classes.imgDiv}>
            <div style={{display: 'grid', placeItems: 'center', background: 'black', padding: '1rem', borderRadius: '10px', margin: '1rem 0'}}>
                <img  
                    alt={data.title}
                    src={data.src}
                    layout="fixed"
                    className={classes.img}
                />
            </div>
        </div>
    )
}

const Content = (data) => {
    const classes = useStyles();
    return (
        <div className={classes.contentDiv}>
            <h1>{data.h1 ? data.h1 : "Register"}</h1>
            <h4>{data.h4 ? data.h4 : "Advertizer or Media Owner"}</h4>
            <Typography align="justify" variant="body1">
                {data.typo ? data.typo : "Lorem Ipsum"}
            </Typography>
            
        </div>
    )
}
const Article = (props) => {
    const classes = useStyles();
    const [desktop, setDesktop] = useState(true)
    const reverse = props.reverse ? props.reverse : false;
    const data = Object.keys(props.data).length > 0 ? props.data : "";
    console.log(data)
    
    useEffect(()=>{
        setDesktop(window.screen.width > 1276);
    },[])

    return (
        <div
            style={{
            // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
                padding: '1rem 0'
            }}
        >
            
            <h1 style={{textAlign: 'center', fontSize: '2rem', margin: '2rem 0'}}>{data.heading}</h1>
            
                {(reverse && desktop) ? (
                    (
                        <Grid className={classes.root}>
                            {Content(data.content)}
                            {Img(data.img)}
                        </Grid>
                    )
                ) : (
                    <Grid className={classes.root}>
                        {Img(data.img)}
                        {Content(data.content)}
                    </Grid>
                )}
                
                
                
                
        </div>
    )
}

export default Article