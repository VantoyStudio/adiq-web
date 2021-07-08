import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
const AllMedia = () => {
    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem'}}>
                <h1 style={{textAlign: 'center'}}>Browse All Media</h1>
                <div>
                    Some thing to write here
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default AllMedia;