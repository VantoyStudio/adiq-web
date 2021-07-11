import React from 'react';
import { StaticImage } from "gatsby-plugin-image"
import {Button, Typography} from "@material-ui/core"


const Background = (props) => {
    return (
        <div>
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
                "../../images/photo2.jpg"
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
        </div>
    )
}

export default Background