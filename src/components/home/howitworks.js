import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import AssessmentIcon from '@material-ui/icons/Assessment';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import {Grid, Typography, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        height: '100%'
    },
    heading: {
        [theme.breakpoints.down('sm')] : {
            fontSize: '18px'
        }
    },
    container: {
        maxWidth: '70vw', 
        padding: '3rem',
        display: 'flex',
        [theme.breakpoints.down('md')] : {
            padding: '1rem',
            maxWidth: '75%', 
        }
    }
}))
const HowItWorks = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
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
                <Typography className={classes.heading} variant="h4" color="ineherit">How It Works?</Typography>
                <Grid align="center" container className={classes.container}>
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4} >
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
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
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
                <Grid item xs={12} sm={4} md={4} lg={4} xl={4}>
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
        </div>
    )
}

export default HowItWorks