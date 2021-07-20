import React from 'react'
import Navbar from "../components/navbar"
import Footer from "../components/footer"
import MediaTypes from "../components/inventory/mediatypes"
import FilteredMedia from "../components/inventory/filtered"

import {Paper, Grid, Tabs, Tab, makeStyles} from "@material-ui/core"

const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        display: 'grid', 
        placeItems: 'center',
        [theme.breakpoints.down('sm')]: {
            width: '92%'
        },

    }
}))

const Inventory = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem', justifyContent: 'center'}}>
                <h1 style={{textAlign: 'center'}}>Out Of Home Inventory</h1>
                <h3 style={{textAlign: 'center'}}>Check our our outdoor advertizement inventory</h3>
                <h5 style={{textAlign: 'center'}}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <hr style={{width: '70%'}}/>
                <div>
                    <div
                        style={{
                        // By using the same grid area for both, they are stacked on top of each other
                            gridArea: "1/1",
                            // This centers the other elements inside the hero component
                            placeItems: "center",
                            display: "grid",
                            padding: '1rem 0'
                        }}
                    >
                        <div className={classes.root}>
                            <Paper style={{height: '100%', width: '100%'}}> 
                                <Grid style={{display: 'flex', justifyContent: 'center'}}>
                                    <Tabs
                                        value={value}
                                        indicatorColor="primary"
                                        textColor="primary"
                                        onChange={handleChange}
                                        aria-label="inventory tabs"
                                    >
                                        <Tab label="MEDIA TYPES" />
                                        <Tab label="MEDIA PLAN" />
                                    </Tabs>
                                </Grid>
                                <Grid>
                                    {value === 0 ? (
                                        <MediaTypes />
                                    ) : (
                                        <FilteredMedia />
                                    )}
                                </Grid>
                            </Paper>
                        </div>
                        
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default Inventory;