import React from 'react'
import { StaticImage } from "gatsby-plugin-image";
import {Typography} from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from '@material-ui/icons/Instagram';

const Footer = () => {
    return (
        <div style={{height: '45vh', placeItems: "center", display: "grid", gridArea: "1/1", border: '1px 0 0 0 grey'}}>
            <hr style={{width: '90%'}}/>
            <div style={{display: "flex", minWidth: '50vw', width: '80%', alignItems: 'center', justifyContent: "space-between"}}>
                <div>
                    <StaticImage src="../images/logo2.png" alt="logo2" height={71} width={75} placeholder="blurred"
      layout="fixed"/>
                </div>
                <div style={{width: "70%", minWidth: '20vw'}}>
                    <div style={{display: "flex", alignItems: 'flex-start',  justifyContent: "space-evenly" }}>
                        <div style={{display: 'grid'}}>
                            <Typography variant="subtitle2"><strong>FAQs</strong></Typography>
                            <Typography variant="caption">How it works?</Typography>
                        </div>
                        <div style={{display: 'grid'}}>
                            <Typography variant="subtitle2"><strong>BROWSE MEDIA</strong></Typography>
                        </div>
                        <div style={{display: 'grid'}}>
                            <Typography variant="subtitle2"><strong>BECOME A PARTNER</strong></Typography>
                        </div>
                        <div style={{display: 'grid'}}>
                            <Typography variant="subtitle2"><strong>CONTACT US</strong></Typography>
                            <Typography variant="caption">Gmail</Typography>
                            <Typography variant="caption">Phone</Typography>
                        </div>
                        <div style={{display: 'grid'}}>
                            <Typography variant="subtitle2"><strong>ABOUT US</strong></Typography>
                            <Typography variant="caption">Careers</Typography>
                            <Typography variant="caption">Privacy Policy</Typography>
                        </div>
                    </div>
                    <div style={{marginTop: '3rem'}}>
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