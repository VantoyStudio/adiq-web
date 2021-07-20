import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Article from "../components/article"
import {makeStyles, Paper} from '@material-ui/core';
import photo from "../images/photo.jpg"
import photo2 from "../images/photo2.jpg"
import StepperForm from "../components/stepper-form";

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        fontSize: '2.5rem'
    },
    paper: {
        minHeight: '30rem',
        width: '70rem',
        padding: '2rem',
        [theme.breakpoints.down('md')]: {
            width: '100%',
            maxWidth: '85vw',
            padding: '1rem'
        }
    }
    
}));


const BecomeAPartner = () => {

    const classes = useStyles();
    const articles = {
        register: {
            heading: "Register yourself",
            img: {
                src: photo,
                title: 'signage'
            },
            content: {
                h1: "Why should you register?",
                h4: "Add your media details and become Media Owner",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        },
        media: {
            heading: "Connect your Media",
            img: {
                src: photo2,
                title: 'signage'
            },
            content: {
                h1: "Configure our CMS",
                h4: "Connect yourself",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        },
    };

    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem'}}>
                <h1 className={classes.heading}>Become our Out Of Home partner</h1>
                <h3 style={{textAlign: 'center'}}>Media owners are our partners</h3>
                <h5 style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <hr style={{width: '70%'}}/>
                <Article data={articles.register}/>
                <hr style={{width: '70%'}}/>
                <Article data={articles.media} reverse={true}/>
                <hr style={{width: '70%'}}/>
                <h2 style={{textAlign: 'center'}}>Become our Out Of Home partner</h2>
                <h3 style={{textAlign: 'center'}}>Register yourself with this form</h3>
                <p style={{textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </p>
                <div style={{display: 'grid', placeItems: 'center'}}>
                    <Paper elevation={3} className={classes.paper}>
                        <StepperForm />
                    </Paper>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default BecomeAPartner