import React from "react";
import Navbar from "../components/navbar"
import Footer from "../components/footer"

const HowItWorks = () => {
    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem'}}>
                <h1 style={{textAlign: 'center'}}>How It Works?</h1>
                <div>
                    Some thing to write here
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default HowItWorks