import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import {makeStyles, Paper, TextField, Button, Typography} from '@material-ui/core';
import {Link} from 'gatsby';

const useStyles = makeStyles((theme) => ({
    
    heading: {
        textAlign: 'center',
        fontSize: '2.5rem'
    },
    formRoot: {
        height: '100%',
        display: 'grid',
        placeItems: 'center'
    },
    formPaper: {
        padding: '1rem',
        minHeight: '26rem',
        minWidth: '19rem'
    },
    textField: {
        width: '90%',
    },
    submitBtn: {
        background: theme.palette.primary.main,
        color: 'white',
        width: '90%',
        "&:hover" : {
            background: 'white',
            color: theme.palette.primary.main
        }
    }

    
}));


const Register = () => {
    const classes = useStyles();
    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem', width: '100%'}}>
                <h1 className={classes.heading}>Register an account</h1>
                <div className={classes.formRoot}>
                    <form>
                        
                        <Paper className={classes.formPaper}>
                            <Typography align="center">Sign up</Typography>
                            <div style={{width: '100%', height: '23rem', display: 'grid', placeItems: 'center'}}>
                                <TextField 
                                    label="Email"
                                    type="email"
                                    className={classes.textField}
                                />
                                <TextField 
                                    label="Company Name"
                                    type="text"
                                    className={classes.textField}
                                />
                                <TextField 
                                    label="Password"
                                    type="password"
                                    className={classes.textField}
                                />
                                <TextField 
                                    label="Confirm Password"
                                    type="password"
                                    className={classes.textField}
                                />
                                <Button variant="outlined" className={classes.submitBtn}>
                                    Register
                                </Button>
                                <Typography variant="caption" align="center">Already have an account? <Link to="/login">Sign in here</Link></Typography>    
                            </div>
                            
                        </Paper>
                    </form>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Register