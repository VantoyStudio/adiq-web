import React from "react";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import ProductPage from "../../components/product";
import {makeStyles, Avatar, Grid, Card, CardHeader, Chip, CardActionArea, CardActions, CardContent, CardMedia, Typography, Button} from '@material-ui/core';
import photo2 from '../../images/photo2.jpg'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = makeStyles((theme) => ({
    heading: {
        textAlign: 'center',
        fontSize: '2.5rem'
    },
    
    container: {
        flexGrow: 1,   
    },
    cardRoot: {
      maxWidth: 300,
      [theme.breakpoints.down('md')]: {
        maxWidth: 250
      },
      [theme.breakpoints.down('sm')]: {
        marginBottom: 20
      },
    },
    media: {
      height: 220,
      [theme.breakpoints.down('md')]: {
        height: 180
      }
    },
    
}));

const data = {
    shops: {
        ddad: [
            {
                id: 1,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 2,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 3,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 4,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 5,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 6,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            
        ],
        adrent: [
            {
                id: 1,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 2,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 3,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 4,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 5,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            {
                id: 6,
                companyName: "Samir Brothers",
                companyLogo: "",
                location: 'Mohammadpur, Dhaka-1200',
                lat: "",
                lng: "",
                img: "",
                screenSize: "20ft x 40ft",
                height: "30ft",
                dailyImpressions: "50,000 - 100,000",
                price: 'BDT 200,000'
            },
            
        ]
    }
}

const Billboards = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const handleDetails = (id) => {
        console.log(id);
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };

    const handleBook = (id) => {
        console.log(id);
    }

    return (
        <div>
            <Navbar scroll={true}/>
            <main style={{paddingTop: '6rem', width: '100%'}}>
                <h1 className={classes.heading}>Departmental Shops</h1>
                <h3 style={{textAlign: 'center'}}>Digital Screens</h3>
                <h5 style={{textAlign: 'center', marginBottom: '3rem'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis condimentum risus diam, ut lacinia tortor vulputate vitae
                </h5>
                <div id="digital" style={{paddingTop: '5rem'}}></div>
                <hr style={{width: '75%',}}/>
                <div style={{padding: '3rem 0', display: 'grid', placeItems: 'center'}}>
                    <h2 style={{textAlign: 'center'}}>Dokane Dokane Ad</h2>
                    <div style={{width: '75%', height: '100%', maxHeight: '40rem', overflowY: 'scroll', overflowX: 'hidden', display: 'grid', placeItems: 'center'}}>
                        <Grid className={classes.container} container alignContent="center" spacing={3}>
                            
                            {data.shops.ddad.map(item => {
                                return (
                                    <Grid style={{display: 'flex', justifyContent: 'center'}} key={item.id} item xs={12} sm={12} md={6} lg={4}>
                                        <Card className={classes.cardRoot}>
                                            <CardActionArea>
                                                <CardHeader
                                                    avatar={
                                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                                        B
                                                    </Avatar>
                                                    }
                                                    action={
                                                       
                                                        <Chip label="Digital" style={{color:"black", marginTop: '1rem', border: '2px solid black'}}/>
                                                       
                                                    }
                                                    title={item.companyName}
                                                    subheader={item.location}
                                                />
                                                <CardMedia
                                                    className={classes.media}
                                                    image={photo2}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography variant="caption" component="p">
                                                    Daily Impressions
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.dailyImpressions}
                                                </Typography>
                                                <Typography variant="caption" component="p">
                                                    Price
                                                </Typography>
                                                <Typography variant="h4" color="textSecondary">
                                                    {item.price}
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button  onClick={() => handleDetails(item.id)} size="small" color="primary" >
                                                    See Details
                                                </Button>
                                            </CardActions>
                                        </Card>
                                        <Dialog
                                            open={open}
                                            onClose={handleClose}
                                            aria-labelledby="alert-dialog-title"
                                            aria-describedby="alert-dialog-description"
                                            maxWidth="md"
                                            fullWidth
                                        >
                                            <DialogTitle id="alert-dialog-title">{"Product Details"}</DialogTitle>
                                            <DialogContent>
                                            <ProductPage />
                                            <DialogContentText id="alert-dialog-description">
                                                View Map to see where the Billboard is location
                                            </DialogContentText>
                                            </DialogContent>
                                            <DialogActions>
                                            <Button onClick={() => handleBook(item.id)} color="primary">
                                                Book Now
                                            </Button>
                                            <Button onClick={handleClose} color="primary">
                                                Agree
                                            </Button>
                                            </DialogActions>
                                        </Dialog>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </div>
                <div id="static" style={{paddingTop: '5rem'}}></div>
                <hr style={{width: '75%'}}/>
                <div style={{padding: '3rem 0', display: 'grid', placeItems: 'center'}}>
                    <h2 style={{textAlign: 'center'}}>Adrent</h2>
                    <div style={{width: '75%', height: '100%', maxHeight: '40rem', overflowY: 'scroll', overflowX: 'hidden', display: 'grid', placeItems: 'center'}}>
                    <Grid className={classes.container} container alignContent="center" spacing={3}>
                            
                            {data.shops.adrent.map(item => {
                                return (
                                    <Grid style={{display: 'flex', justifyContent: 'center'}} key={item.id} item xs={12} sm={12} md={6} lg={4}>
                                        <Card className={classes.cardRoot}>
                                            <CardActionArea>
                                                <CardHeader
                                                    avatar={
                                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                                        B
                                                    </Avatar>
                                                    }
                                                    action={
                                                       
                                                        <Chip label="Static" style={{color:"black", marginTop: '1rem', border: '2px solid black'}}/>
                                                       
                                                    }
                                                    title={item.companyName}
                                                    subheader={item.location}
                                                />
                                                <CardMedia
                                                    className={classes.media}
                                                    image={photo2}
                                                    title="Contemplative Reptile"
                                                />
                                                <CardContent>
                                                <Typography variant="caption" component="p">
                                                    Daily Impressions
                                                </Typography>
                                                <Typography gutterBottom variant="h5" component="h2">
                                                    {item.dailyImpressions}
                                                </Typography>
                                                <Typography variant="caption" component="p">
                                                    Price
                                                </Typography>
                                                <Typography variant="h4" color="textSecondary">
                                                    {item.price}
                                                </Typography>
                                                </CardContent>
                                            </CardActionArea>
                                            <CardActions>
                                                <Button onClick={() => handleDetails(item.id)} size="small" color="primary" >
                                                    See Details
                                                </Button>
                                            </CardActions>
                                            <Dialog
                                                open={open}
                                                onClose={handleClose}
                                                aria-labelledby="alert-dialog-title"
                                                aria-describedby="alert-dialog-description"
                                                maxWidth="md"
                                                fullWidth
                                            >
                                                <DialogTitle id="alert-dialog-title">{"Product Description"}</DialogTitle>
                                                <DialogContent>
                                                <ProductPage />
                                                <DialogContentText id="alert-dialog-description">
                                                    View Map to see where the Billboard is location
                                                </DialogContentText>
                                                </DialogContent>
                                                <DialogActions>
                                                <Button onClick={() => handleBook(item.id)} color="primary">
                                                    Book Now
                                                </Button>
                                                <Button onClick={handleClose} color="primary">
                                                    Close
                                                </Button>
                                                </DialogActions>
                                            </Dialog>
                                        </Card>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Billboards