import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import {Typography, makeStyles} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

import {Link} from 'gatsby';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex", 
        minWidth: '50vw', 
        width: '80%', 
        alignItems: 'center', 
        justifyContent: "space-between",
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column'
        }
    },
    logoDiv: {
        transform: 'scale(0.9)'
    },
    linksDiv: {
        width: "70%", 
        minWidth: '20vw',
        [theme.breakpoints.down('xs')]: {
            width: '95vw',
            marginTop: '1rem'
        }
    },
    linksDiv2: {
        display: 'grid',
        padding: '0 3px'
    },
    socialDiv: {
        marginTop: '3rem',
        [theme.breakpoints.down('xs')]: {
            marginTop: '1rem'
        }
    },
    head: {
        fontSize: '16px',
        textDecoration: 'none',
        color: 'black',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        }
    }
}))

const Footer = () => {
    const classes = useStyles();
    return (
        <div style={{height: '48vh', placeItems: "center", display: "grid", gridArea: "1/1", border: '1px 0 0 0 grey'}}>
            <hr style={{width: '90%'}}/>
            <div className={classes.root}>
                <div className={classes.logoDiv}>
                    <StaticImage 
                        src="../images/logo2.png" 
                        alt="logo2" 
                        height={71} 
                        width={75} 
                        placeholder="blurred"
                        layout="fixed"
                    />
                </div>
                <div className={classes.linksDiv}>
                    <div style={{display: "flex", alignItems: 'flex-start',  justifyContent: "space-evenly" }}>
                        <div className={classes.linksDiv2}>
                            <Link to="/howitworks" className={classes.head}><strong>FAQs</strong></Link>
                            <Typography variant="caption">How it works?</Typography>
                        </div>
                        <div className={classes.linksDiv2}>
                            <Link to="/inventory" className={classes.head}><strong>INVENTORY</strong></Link>
                            <Typography variant="caption">Billboards</Typography>
                            <Typography variant="caption">Shops</Typography>
                        </div>
                        <div className={classes.linksDiv2}>
                            <Link to="/becomeapartner" className={classes.head}><strong>BECOME A PARTNER</strong></Link>
                        </div>
                        <div className={classes.linksDiv2}>
                            <Link className={classes.head}><strong>CONTACT US</strong></Link>
                            <Typography variant="caption">Gmail</Typography>
                            <Typography variant="caption">Phone</Typography>
                        </div>
                        <div className={classes.linksDiv2}>
                            <Link to="/about" className={classes.head}><strong>ABOUT US</strong></Link>
                            <Typography variant="caption">Careers</Typography>
                            <Typography variant="caption">Privacy Policy</Typography>
                        </div>
                    </div>
                    <div className={classes.socialDiv}>
                        <Typography align="center">Or find us as at,</Typography>
                    </div>
                    <div style={{display: "flex", alignItems: 'center',  justifyContent: "center" }}>
                        <div style={{padding: '5px'}}>
                            <LinkedInIcon />
                        </div>
                        <div style={{padding: '5px'}}>
                            <FacebookIcon />
                        </div>
                        <div style={{padding: '5px'}}>
                            <InstagramIcon />
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Footer