import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        fontSize: '2.5rem'
    }
    
}));


const StaticBillboards = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem', width: '100%'}}>
                <h1 className={classes.heading}>Static Billboards</h1>
                <h3 style={{textAlign: 'center'}}>Billboards that don't change</h3>
                <h5 style={{textAlign: 'center', marginBottom: '3rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <hr style={{width: '70%'}}/>
                
            </main>
            <Footer />
        </div>
    )
}

export default StaticBillboards