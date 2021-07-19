import React from 'react';
import {Grid, Button, Typography, makeStyles} from "@material-ui/core"
import StorefrontIconOutlined from '@material-ui/icons/Storefront';
import TvIconOutlined from '@material-ui/icons/Tv';
import AirportShuttleIconOutlined from '@material-ui/icons/AirportShuttle';
import {navigate} from 'gatsby';

const useStyles = makeStyles(theme => ({
    root : {
        width: '100%',
        height: '100%'
    },
    container: {
        maxWidth: '75vw', 
        padding: '3rem', 
        color: 'white', 
        background: 'rgb(0,0,0,0.1)',
        [theme.breakpoints.down('md')]: {
            maxWidth: '100vw',
            padding: '2rem'
        },
        [theme.breakpoints.down('sm')]: {
            maxWidth: '70vw',
            padding: '1rem'
        },
        [theme.breakpoints.down('xs')]: {
            maxWidth: '100vw'
        },

    },
    heading: {
        fontSize: '25px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '20px'
        }
    },
    text: {
        fontSize: '14px',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px'
        }
    },
    btn: {
        width: '100%',
        "&:hover": {
            background: 'white',
            color: 'black'
        }
    }
}))


const MediaTypes = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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
                <Grid flex align="center" spacing={5} container className={classes.container}>
                <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                    <Typography variant="subtitle2">BILLBOARDS</Typography>
                    <Grid style={{padding: '1.75rem 1rem'}}>
                        <TvIconOutlined  style={{transform: 'scale(3.5)'}}/>
                    </Grid>
                    <Grid style={{padding: '1rem 0'}}>
                        <Typography className={classes.heading} gutterBottom>Static and Digital Billboards</Typography>
                        <Typography className={classes.text} variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae.</Typography>
                    </Grid>
                    <Grid>
                        <Button className={classes.btn} fullWidth color="inherit" variant="outlined" onClick={()=>navigate("/inventory/billboards")}>Get Started</Button>
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
                        <Typography className={classes.heading} gutterBottom>Digital Screens in Shops</Typography>
                        <Typography className={classes.text} variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae.</Typography>
                    </Grid>
                    <Grid>
                        <Button className={classes.btn} fullWidth color="inherit" variant="outlined" onClick={()=>navigate("/inventory/shops")}>Get Started</Button>
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
                        <Typography className={classes.heading} gutterBottom>Digital Screens in Buses</Typography>
                        <Typography className={classes.text} variant="caption" align="left">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae. 
                        </Typography>
                    </Grid>
                    <Grid>
                        <Button className={classes.btn} fullWidth color="inherit" variant="outlined">Get Started</Button>
                    </Grid>
                    </Grid>
                </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default MediaTypes