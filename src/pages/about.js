import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"
const AboutPage = () => {
    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem'}}>
                <h1 style={{textAlign: 'center'}}>About Us</h1>
                <div>
                    This is a about page
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default AboutPage