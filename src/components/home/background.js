import React, {useState, useEffect, useCallback} from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {MobileStepper, IconButton, Button, Typography, makeStyles} from "@material-ui/core"
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import {navigate} from 'gatsby';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: '0 0.5rem',
        minWidth: '20rem', 
        height: '2.75rem', 
        borderRadius: 15,
        display: 'grid',
        placeItems: 'center',
        background: theme.palette.primary.main,
        color: 'white',
        transitionDuration: '.7s',
        textDecoration: 'none',
        "&:hover" : {
            color: theme.palette.primary.main,
            background: 'white'
        }
    },
    mobileStepper: {
        maxWidth: '25rem',
        flexGrow: 1,
        backgroundColor: "rgba(0, 0, 1, 0.1)",
        transitionDuration: '1s',
        border: '1px '
    },
    stepGrid: {
        transitionDuration: '1s ease', 
        width: '40%',
        marginTop: '-4rem', 
        background: "rgba(0, 0, 0, 0.1)", 
        display: 'grid', 
        placeItems: 'center stretch',
        [theme.breakpoints.down("sm")]: {
            marginTop: -20,
            minWidth: '4rem',
            width: '100%'
        }
    },
    bgNav: {
        color: 'rgb(255,255,255,0.5)', 
        transform: 'scale(2.5)',
        [theme.breakpoints.down('sm')] : {
            transform: 'scale(1)'
        }
    },
    bgDiv: {
        position: "relative", 
        zIndex: 3, 
        color: "white", 
        minWidth: '50vw', 
        minHeight: "70vh", 
        display: "grid", 
        placeItems: "center",
        [theme.breakpoints.down('sm')]: {
            height: '100%',
            maxHeight: '80vh'
        },
        [theme.breakpoints.down('xs')]: {
            minHeight: '95vh'
        }
    },
    heading: {
        fontSize: '38px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '32px'
        }
    },
    heading5: {
        fontSize: '36px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '30px'
        }
    },
    content: { 
        height: "40vh", 
        display: "grid", 
        placeItems: "center", 
        marginTop: '2rem',
        [theme.breakpoints.down('md')]: {
            height: '28vh'
        },
        [theme.breakpoints.down('xs')]: {
            height: '35vh'
        }
    }

    
}));


const primaryBg = (
        <StaticImage
            style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
                background: "center no-repeat",
                backgroundSize: "cover",
                zIndex: 1,
                backgroundColor: 'black',
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={2 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt="photo"
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={
                "../../images/photo3.jpg"
            }
            formats={["auto", "webp", "avif"]}
            
        />
    )

const secondaryBg = (
        <StaticImage
            style={{
                gridArea: "1/1",
                // You can set a maximum height for the image, if you wish.
                // maxHeight: 600,
                background: "center no-repeat",
                backgroundSize: "cover",
                zIndex: 1,
                backgroundColor: 'black',
                transitionDuration: '2s'
            }}
            layout="fullWidth"
            // You can optionally force an aspect ratio for the generated image
            aspectRatio={2 / 1}
            // This is a presentational image, so the alt should be an empty string
            alt="photo"
            // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
            src={
                "../../images/photo1.jpg"
            }
            formats={["auto", "webp", "avif"]}
            
        />
    )

const tertiaryBg = (
    <StaticImage
        style={{
            gridArea: "1/1",
            // You can set a maximum height for the image, if you wish.
            // maxHeight: 600,
            background: "center no-repeat",
            backgroundSize: "cover",
            zIndex: 1,
            backgroundColor: 'black',
            transitionDuration: '2s'
        }}
        layout="fullWidth"
        // You can optionally force an aspect ratio for the generated image
        aspectRatio={2 / 1}
        // This is a presentational image, so the alt should be an empty string
        alt="photo"
        // Assisi, Perúgia, Itália by Bernardo Ferrari, via Unsplash
        src={
            "../../images/photo2.jpg"
        }
        formats={["auto", "webp", "avif"]}
        
    />
)

const Background = (props) => {

    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((activeStep + 3 + 1)%3);
    };

    const handleBack = () => {
        setActiveStep((activeStep + 3 - 1)%3);
    };

    const autoNext = useCallback(() => {
        // do something!
        setActiveStep((activeStep + 3 + 1)%3);
    },[activeStep]);

    useEffect(() => {
        const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
          autoNext();
        }, 2500)
      
        return () => clearInterval(intervalId); //This is important
       
      }, [autoNext])
    const classes = useStyles();
    // console.log(activeStep)
    return (
        <div>
            <div style={{ display: "grid", background: 'black', transitionDelay: '1s', transitionDuration: '1s ease'}}>
                {/* You can use a GatsbyImage component if the image is dynamic */}
                {/* Implement Slideshow/Carousel */}
                {activeStep === 1 ? secondaryBg : (activeStep === 2 ? tertiaryBg : primaryBg)}
                <div
                    style={{
                        // By using the same grid area for both, they are stacked on top of each other
                        gridArea: "1/1",
                        position: "relative",
                        zIndex: 2,
                        // This centers the other elements inside the hero component
                        placeItems: "center",
                        display: "grid",
                        background: "rgba(0, 0, 0, 0.75)"
                    }}
                >
                {/* Any content here will be centered in the component */}
                    <div className={classes.bgDiv}>
                        <div className={classes.content}>
                            <Typography className={classes.heading}>
                                {activeStep === 1 ? "Checkout the Bus" : (activeStep === 2 ? "Visit a Shop" : "Connect to a Screen")}
                                
                            </Typography>
                            <Typography variant="h3">One Click</Typography>
                            <Typography className={classes.heading5} gutterBottom>Book your media now</Typography>
                            
                            <Button className={classes.button} variant="contained" onClick={() => navigate('/inventory')}>Check Inventory</Button>
                        </div>
                        <div className={classes.stepGrid}>
                            <MobileStepper
                                variant="dots"
                                steps={3}
                                position="static"
                                activeStep={activeStep}
                                className={classes.mobileStepper}
                                nextButton={
                                    <IconButton onClick={handleNext}>
                                        <KeyboardArrowRight className={classes.bgNav}/>
                                    </IconButton>
                                }
                                backButton={
                                    <IconButton onClick={handleBack}>
                                        <KeyboardArrowLeft className={classes.bgNav} />
                                    </IconButton>
                                }
                            />
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default Background