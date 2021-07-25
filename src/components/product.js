import React from 'react'
import {Typography, makeStyles} from '@material-ui/core'
import photo from '../images/photo.jpg'

const useStyles = makeStyles(theme => ({
    root: {
       width: '100%',
       height: '100%' 
    },
    top: {
        width: '98%',
        padding: '8px', 
        display: 'flex', 
        justifyContent: 'space-around',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column',
            padding: '5px',
            width: '100%',
        }
    },
    description: {
        width: '98%', 
        padding: '1rem', 
        display: 'flex', 
        justifyContent: 'space-evenly',
        [theme.breakpoints.down('sm')]: {
            padding: '5px',
            width: '100%'
        }
        
    },
    imgDiv: {
        border: '1px solid black', 
        display:'flex', alignItems: 'center', 
        justifyContent: 'center', background: 'black', 
        height: '30vh', width: '40%', 
        borderRadius: '10px',
        [theme.breakpoints.down('sm')] : {
            width: '100%',
            marginBottom: '19px'
        }
    },
    mapDiv: {
        border: '2px solid black', 
        height: '30vh', width: '40%', borderRadius: '10px', display:'flex', alignItems: 'center', 
        justifyContent: 'center',
        [theme.breakpoints.down('sm')] : {
            width: '100%'
        }
    },
    des2: {
        padding: '1rem', 
        height: '100%', 
        width: '92%', 
        borderRadius: '10px',
        [theme.breakpoints.down('sm')]: {
            padding: '5px', 
            height: '100%', 
            width: '100%', 
        }
    },
    innerDesc: {
        display: 'flex',
        [theme.breakpoints.down('sm')]: {
            flexDirection: 'column'
        }
    }

}))

const ProductPage = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className={classes.top}>
                <div className={classes.imgDiv}>
                    <img alt="product_img" src={photo} style={{height:'98%', width: '98%', borderRadius: '10px'}}></img>
                </div>
                <div className={classes.mapDiv}>
                    <h3>Map View</h3>
                </div>
            </div>
            <div className={classes.description}>
                <div className={classes.des2}>
                    <div className={classes.innerDesc}>
                        <div style={{width: '100%'}}>
                            <Typography variant="caption">Full Address</Typography>
                            <Typography variant="h5" gutterBottom>Mohammadpur, Dhaka - 1200</Typography>
                            
                            <Typography variant="caption">Division</Typography>
                            <Typography variant="h5" gutterBottom>Dhaka, Bangladesh</Typography>
                            
                            <Typography variant="caption">Owner(s)</Typography>
                            <Typography variant="h5" gutterBottom>Samir Brothers and Co.</Typography>
                        </div>
                        <div style={{width: '100%'}}>
                            <Typography variant="caption">Estimated Reach</Typography>
                            <Typography variant="h5" gutterBottom>5000 - 10000 per hour</Typography>

                            <Typography variant="caption">Height</Typography>
                            <Typography variant="h5" gutterBottom>18 ft</Typography>
                            
                            <Typography variant="caption">Visible Area</Typography>
                            <Typography variant="h5" gutterBottom>12ft x 16ft</Typography>
                        </div>
                    </div>
                    <div>
                        <Typography variant="caption">Price</Typography>
                        <Typography variant="h4">BDT 100,000</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductPage