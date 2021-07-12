import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Article from "../components/article"
import {makeStyles} from '@material-ui/core';
import photo from "../images/photo.jpg"
import photo2 from "../images/photo2.jpg"

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        fontSize: '2.5rem'
    }
    
}));

const HowItWorks = () => {

    const classes = useStyles();

    const articles = {
        login: {
            heading: "Login or Register",
            img: {
                src: photo,
                title: 'signage'
            },
            content: {
                h1: "Register or Login",
                h4: "Advertizer or Media Owner",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        },
        media: {
            heading: "Browse and Select Media",
            img: {
                src: photo2,
                title: 'signage'
            },
            content: {
                h1: "Select Media",
                h4: "Filter and Select media from browsing Inventory",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        },
        campaign: {
            heading: "Run your Campaign",
            img: {
                src: photo,
                title: 'signage'
            },
            content: {
                h1: "Upload your Campaign",
                h4: "Target your campaigns geographically on range of media outlets",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        }
    };

    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem', width: '100%'}}>
                <h1 className={classes.heading}>How It Works?</h1>
                <h3 style={{textAlign: 'center'}}>Check our our outdoor advertizement inventory</h3>
                <h5 style={{textAlign: 'center', marginBottom: '3rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <hr style={{width: '70%'}}/>
                <Article data={articles.login}/>
                <hr style={{width: '70%'}}/>
                <Article data={articles.media} reverse={true}/>
                <hr style={{width: '70%'}}/>
                <Article data={articles.campaign}/>
            </main>
            <Footer />
        </div>
    )
}

export default HowItWorks