import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import photo from "../images/photo.jpg"
import photo2 from "../images/photo2.jpg"
import Article from "../components/article"

const AboutPage = () => {

    const articles = {
        adiq: {
            heading: "About AD-IQ",
            img: {
                src: photo,
                title: 'signage'
            },
            content: {
                h1: "Why AD-IQ?",
                h4: "Media Coverage",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        },
        media: {
            heading: "Mission and Vision",
            img: {
                src: photo2,
                title: 'signage'
            },
            content: {
                h1: "Connecting screens to Ads",
                h4: "Connecting your Screen anywhere",
                typo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut lacinia tortor vulputate vitae. Lorem ipsum dolor sit amet, consectetur adipi."
            }
        },
    };

    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem'}}>
                <h1 style={{textAlign: 'center'}}>About Us</h1>
                <h3 style={{textAlign: 'center'}}>Check our our outdoor advertizement inventory</h3>
                <h5 style={{textAlign: 'center'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <hr style={{width: '70%'}}/>
                <Article data={articles.adiq}/>
                <hr style={{width: '70%'}}/>
                <Article data={articles.media} reverse={true}/>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage