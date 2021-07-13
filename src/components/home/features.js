import React from 'react';
import {Grid, Typography} from "@material-ui/core"
import SearchIconOutlined from '@material-ui/icons/Search';
import InsertChartIconOutlined from '@material-ui/icons/InsertChart';
import QueuePlayNextIconOutlined from '@material-ui/icons/QueuePlayNext';
const Features = (props) => {
    return (
        <div>
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
                <Typography variant="h3" color="ineherit">Features</Typography>
                <Grid flex align="center" spacing={5} container style={{maxWidth: '60vw', padding: '3rem', color: 'white', background: 'rgb(0,0,0,0.1)'}}>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle2">RICH INVENTORY</Typography>
                            <Grid style={{padding: '1.75rem 1rem'}}>
                                <SearchIconOutlined style={{transform: 'scale(3.75)'}}/>
                            </Grid>
                            <Grid style={{padding: '1rem 0'}}>
                                <Typography gutterBottom>Explore Multiple Outdoor Media</Typography>
                                <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Grid style={{padding: '1rem', height: '100%', minHeight: '30vh', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                            <Typography variant="subtitle2">FRIENDLY UI</Typography>
                            <Grid style={{padding: '1.75rem 1rem'}}>
                                <QueuePlayNextIconOutlined style={{transform: 'scale(3.5)'}}/>
                            </Grid>
                            <Grid style={{padding: '1rem 0', height: '100%'}}>
                                <Typography gutterBottom>Plan your Campaign</Typography>
                                <Typography variant="caption">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae.</Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                        <Grid style={{padding: '1rem', borderRadius: '1rem', minWidth: "6rem", display: 'flex', flexDirection: 'column' }}>
                        <Typography variant="subtitle2">CHECK INSIGHTS</Typography>
                        <Grid style={{padding: '1.75rem 1rem'}}>
                            <InsertChartIconOutlined style={{transform: 'scale(3.5)'}}/>
                        </Grid>
                        <Grid style={{padding: '1rem 0'}}>
                            <Typography gutterBottom>Analytics on your campaign</Typography>
                            <Typography variant="caption" align="left">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae. 
                            </Typography>
                        </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default Features