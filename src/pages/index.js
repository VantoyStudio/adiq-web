import React, {useEffect, useState, useRef} from "react"
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import { StaticImage } from "gatsby-plugin-image"
import {Grid, Button, Typography, TextField} from "@material-ui/core"
import StorefrontIconOutlined from '@material-ui/icons/Storefront';
import TvIconOutlined from '@material-ui/icons/Tv';
import AirportShuttleIconOutlined from '@material-ui/icons/AirportShuttle';
import EventNoteIconOutlined from '@material-ui/icons/EventNote';
import PersonIconOutlined from '@material-ui/icons/Person';
import VisibilityIconOutlined from '@material-ui/icons/Visibility';
import SearchIcon from '@material-ui/icons/Search';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
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
      const show = window.scrollY > 770
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])
  return (
    <div>
      <Navbar scroll={navBackground}/>
      {/* <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          background: 'black',
          width: '98.25vw',
          height: '90vh'
        }}
      >
        <StaticImage
          src=""
          alt="billboards"
          placeholder="blurred"
          layout="fixed"
          width={1280}
          height={720}
          
        />
      </div> */}

      <div style={{ display: "grid", background: 'black' }}>
      {/* You can use a GatsbyImage component if the image is dynamic */}
        {/* Implement Slideshow/Carousel */}
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
            "../images/photo2.jpg"
          }
          formats={["auto", "webp", "avif"]}
          
        />
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
          <div style={{position: "relative", zIndex: 3, color: "white", minWidth: '50vw', minHeight: "70vh", display: "grid", placeItems: "center"}}>
            <div style={{ minHeight: "30vh", display: "grid", placeItems: "center"}}>
              <Typography variant="h3">Connect to a Screen</Typography>
              <Typography variant="h2">One Click</Typography>
              <Typography variant="h5">Book your media now</Typography>
              <Button style={{margin: '0 0.5rem', width: '100%', height: '2.75rem', borderRadius: 5}} variant="contained" color="primary"> Get Started </Button>
            </div>
            {/* <div style={{width: '100%'}}>
            <Grid flex align="center" container>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
              <Grid style={{padding: '1rem', background: 'rgb(76,77,78,0.75)', borderRadius: '1rem', maxWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                  <Grid>
                    BILLBOARDS
                  </Grid>
                  <Grid style={{padding: '1.5rem 1rem'}}>
                    <TvIcon style={{transform: 'scale(3)'}}/>
                  </Grid>
                </Grid>
                <Button style={{background: 'rgb(223,225,226,0.8)', width: '43%', marginTop: '0.5rem'}}>
                  Book Now
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Grid style={{padding: '1rem', background: 'rgb(76,77,78,0.75)', borderRadius: '1rem', maxWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                  <Grid>
                    SHOPS
                  </Grid>
                  <Grid style={{padding: '1.5rem 1rem'}}>
                    <StorefrontIcon style={{transform: 'scale(3)'}}/>
                  </Grid>
                </Grid>
                <Button style={{background: 'rgb(223,225,226,0.8)', width: '43%', marginTop: '0.5rem'}}>
                  Book Now
                </Button>
              </Grid>
              <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                <Grid style={{padding: '1rem', background: 'rgb(76,77,78,0.75)', borderRadius: '1rem', maxWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                  <Grid>
                    <Typography>BUS</Typography>
                  </Grid>
                  <Grid style={{padding: '1.5rem 1rem'}}>
                    <AirportShuttleIcon style={{transform: 'scale(3)'}}/>
                  </Grid>
                </Grid>
                <Button style={{background: 'rgb(223,225,226,0.8)', width: '43%', marginTop: '0.5rem'}}>
                  Book Now
                </Button>
              </Grid>
            </Grid>
            </div>   */}
          </div>
        </div>
      </div>
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          color: 'white', 
          background: 'rgb(0,0,0,0.97)',
          padding: '2rem 0'
        }}
      >
        <Typography variant="h3" color="ineherit">Media Types</Typography>
        <Grid flex align="center" spacing={5} container style={{maxWidth: '60vw', padding: '3rem', color: 'white', background: 'rgb(0,0,0,0.1)'}}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2">BILLBOARDS</Typography>
              <Grid style={{padding: '1.75rem 1rem'}}>
                <TvIconOutlined  style={{transform: 'scale(3.5)'}}/>
              </Grid>
              <Grid style={{padding: '1rem 0'}}>
                <Typography gutterBottom>Static and Digital Billboards</Typography>
                <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae.</Typography>
              </Grid>
              <Grid>
                <Button fullWidth color="inherit" variant="outlined">Get Started</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2">SHOPS</Typography>
              <Grid style={{padding: '1.75rem 1rem'}}>
                <StorefrontIconOutlined style={{transform: 'scale(3.5)'}}/>
              </Grid>
              <Grid style={{padding: '1rem 0', height: '100%'}}>
                <Typography gutterBottom>Digital Screens in Shops</Typography>
                <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae.</Typography>
              </Grid>
              <Grid>
                <Button fullWidth color="inherit" variant="outlined">Get Started</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Typography variant="subtitle2">BUS</Typography>
              <Grid style={{padding: '1.75rem 1rem'}}>
                <AirportShuttleIconOutlined style={{transform: 'scale(4)'}}/>
              </Grid>
              <Grid style={{padding: '1rem 0'}}>
                <Typography gutterBottom>Digital Screens in Buses</Typography>
                <Typography variant="caption" align="left">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae. 
                </Typography>
              </Grid>
              <Grid>
                <Button fullWidth color="inherit" variant="outlined">Get Started</Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
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
        <Grid flex align="center" container style={{maxWidth: '60vw', padding: '3rem', color: 'white', background: 'black'}}>
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
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
          padding: '2rem 0'
        }}
      >
        <Typography variant="h4" color="ineherit">How It Works?</Typography>
        <Grid flex align="center" container style={{maxWidth: '60vw', padding: '3rem'}}>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Grid>
                <Typography gutterBottom variant="subtitle2">Step 1</Typography>
              </Grid>
              <Grid style={{padding: '1.5rem 1rem'}}>
                <SearchIcon  style={{transform: 'scale(3)'}}/>
              </Grid>
              <Grid>
                <Typography>Browse</Typography>
                <Typography variant="caption">Media Types and Locations</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Grid>
                <Typography gutterBottom variant="subtitle2">Step 2</Typography>
              </Grid>
              <Grid style={{padding: '1.5rem 1rem'}}>
                <AssessmentIcon style={{transform: 'scale(3)'}}/>
              </Grid>
              <Grid>
                <Typography>Compare</Typography>
                <Typography variant="caption">Compare Media types</Typography>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
            <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
              <Grid>
                <Typography gutterBottom variant="subtitle2">Step 3</Typography>
              </Grid>
              <Grid style={{padding: '1.5rem 1rem'}}>
                <MonetizationOnIcon style={{transform: 'scale(3)'}}/>
              </Grid>
              <Grid>
                <Typography>Pay</Typography>
                <Typography variant="caption">Pay up</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
      {/* Contact form */}
      <Typography variant="h3">Contact Us</Typography>
      <Grid container spacing={10} style={{padding: '3rem', width: '70%'}}>
        <Grid item xs={12} md={6} lg={6}>
            <StaticImage  
              alt="photo"
              src="../images/photo.jpg"
              layout="fixed"
              width={450}
              height={300}
            />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <form>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <TextField 
                label="Name" 
                type="text"
                variant="outlined"
                size="small"
              />
              <TextField label="email" size="small" type="email" variant="outlined" margin="dense"/>
              <TextField label="message" size="small" type="text" multiline rows={7} variant="outlined" margin="dense"/>
            </div>
            <div style={{marginTop: 15, width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
              <Button type="submit" style={{width: '50%'}} variant="outlined" color="primary"> Submit </Button>
            </div>
          </form>
        </Grid>
      </Grid>

      </div>  
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
