import React from 'react';
import {Button, Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography, makeStyles} from '@material-ui/core'
import photo from '../../images/photo.jpg'
import {navigate} from 'gatsby';

const useStyles = makeStyles({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        minWidth: '60rem',
        padding: '0.5rem 0'
    },
    cardRoot: {
      maxWidth: 300,
    },
    media: {
      height: 220,
    },
  });

const MediaTypes = (props) => {
    const classes = useStyles();
    return (
        <div
            style={{
            // By using the same grid area for both, they are stacked on top of each other
                gridArea: "1/1",
                // This centers the other elements inside the hero component
                placeItems: "center",
                display: "grid",
                padding: '2rem'
            }}
        >
            <h3>Browser througth different Media Types</h3>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '70%', padding: '5rem 0'}}>
                {  [{name: 'Billboards', addr: '#billboards'}, 
                    {name: 'Shops', addr: '#shops'}, 
                    {name: 'Buses', addr: '#buses'}, 
                   ].map(item => {
                return (
                    <Button variant="contained" color="primary" size="small" href={item.addr}> 
                        {item.name} 
                    </Button>  
                )
            })}
            </div>
            <hr style={{width: '80%'}}/>
            <div id="billboards" style={{height: '100%', display: 'grid', placeItems: 'center', padding: '5rem 0'}}>
                <h3 style={{textAlign: 'center', marginBottom: '-5rem'}}>Billboards</h3>
                <div>
                    <Grid className={classes.root}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={photo}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Digital Billboards
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={()=>navigate('digital-billboards')}>
                                    Browse
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={photo}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Static Billboards
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary" onClick={()=>navigate('static-billboards')}>
                                    Browse
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>
            <hr id="shops" style={{width: '80%'}}/>
            <div style={{height: '100%', display: 'grid', placeItems: 'center', padding: '7rem 0'}}>
                <h3 style={{textAlign: 'center', marginBottom: '-8rem'}}>Shops</h3>
                <div>
                    <Grid className={classes.root}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={photo}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Digital Screens
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                
                                <Button size="small" color="primary" onClick={()=>navigate('shops')}>
                                Browse
                                </Button>
                            </CardActions>
                        </Card>
                        
                    </Grid>
                </div>
            </div>
            <hr  id="buses" style={{width: '80%'}}/>
            <div style={{height: '100%', display: 'grid', placeItems: 'center', padding: '7rem 0'}}>
                <h3 style={{textAlign: 'center', marginBottom: '-6rem'}}>Buses</h3>
                <div>
                    <Grid className={classes.root}>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={photo}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Digital Screens
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Get Started
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                        <Card className={classes.cardRoot}>
                            <CardActionArea>
                                <CardMedia
                                className={classes.media}
                                image={photo}
                                title="Contemplative Reptile"
                                />
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Static Adverts
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            <CardActions>
                                <Button size="small" color="primary">
                                Get Started
                                </Button>
                                <Button size="small" color="primary">
                                Learn More
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </div>
            </div>
            <Button>
                Browse More ...
            </Button>
        </div>
    )
}

export default MediaTypes