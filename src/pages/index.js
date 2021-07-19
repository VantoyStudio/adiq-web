import React, {useEffect, useState, useRef} from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import Background from "../components/home/background"
import MediaTypes from "../components/home/mediatypes"
import Contact from "../components/home/contact"
import HowItWorks from "../components/home/howitworks"
// import Features from "../components/home/features"

import {Grid, Typography} from "@material-ui/core"

import EventNoteIconOutlined from '@material-ui/icons/EventNote';
import PersonIconOutlined from '@material-ui/icons/Person';
import VisibilityIconOutlined from '@material-ui/icons/Visibility';

// styles
// const pageStyles = {
//   color: "#232129",
//   padding: 96,
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }

// markup
const IndexPage = () => {
  const [navBackground, setNavBackground] = useState(false)
  const navRef = useRef()
  navRef.current = navBackground
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 1300
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    window.document.addEventListener('scroll', handleScroll)
    return () => {
      window.document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      {/* <main>
        <title>AD-IQ</title>
      </main> */}
      <Navbar scroll={navBackground}/>
      <Background />
      <MediaTypes />
      {/* <Features /> */}
      {/* Achievements */}
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          color: 'white', 
          background: 'black',
          padding: '2rem 0'
        }}
      >
        <Typography variant="h3" color="ineherit">Achievements</Typography>
        <Grid flex align="center" container style={{maxWidth: '75vw', padding: '3rem', color: 'white', background: 'black'}}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Grid style={{padding: '1.5rem 1rem'}}>
                <EventNoteIconOutlined  style={{transform: 'scale(3)'}}/>
              </Grid>
              <Grid>
                <Typography>50,000+</Typography>
                <Typography>Bookings</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Grid style={{padding: '1.5rem 1rem'}}>
                <PersonIconOutlined style={{transform: 'scale(3)'}}/>
              </Grid>
              <Grid>
                <Typography>200+</Typography>
                <Typography>Users</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Grid style={{padding: '1.5rem 1rem'}}>
                <VisibilityIconOutlined style={{transform: 'scale(3)'}}/>
              </Grid>
              <Grid>
                <Typography>50,000+</Typography>
                <Typography>Impressions</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      {/* How it works */}
      <HowItWorks />
      <Contact />  
      {/* <main style={pageStyles}>
        
        <title>Home Page</title>
        
        <img
          alt="Gatsby G Logo"
          src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
        />
      </main> */}
      <Footer />
    </div>
  )
}

export default IndexPage
