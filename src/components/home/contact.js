import React from "react"


import { StaticImage } from "gatsby-plugin-image"
import {Grid, Button, Typography, TextField, makeStyles} from "@material-ui/core"


// styles
const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
        height: '100%'
    },
    staticImg: {
        [theme.breakpoints.down('md')]: {
            display: 'none'
        }
    },
    container: {
        padding: '3rem', 
        width: '75%',
        [theme.breakpoints.up("lg")]: {
            width: '50%'
        },
        [theme.breakpoints.down("lg")]: {
            width: '75%'
        },
        [theme.breakpoints.down("sm")]: {
            display: 'flex',
            justifyContent: 'center'
        },
        [theme.breakpoints.down("xs")]: {
          width: '100%'
        },
    },
    formGrid: {
        width: '70%',
    },
    btn: {
      width: '50%',
      [theme.breakpoints.down("xs")]: {
        width: '100%'
      },
    }
}))
// markup
const Contacts = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div
        style={{
          // By using the same grid area for both, they are stacked on top of each other
          gridArea: "1/1",
          // This centers the other elements inside the hero component
          placeItems: "center",
          display: "grid",
        }}
      >
      {/* Contact form */}
      <Typography variant="h3">Contact Us</Typography>
      <Grid container spacing={3} className={classes.container}>
        <Grid item className={classes.staticImg} md={6} lg={6}>
            <StaticImage  
              alt="photo"
              src="../../images/photo.jpg"
              layout="fixed"
              width={390}
              height={280}
            />
        </Grid>
        <Grid className={classes.formGrid} item xs={12} sm={12} md={12} lg={6}>
          <form>
            <div style={{display: 'flex', flexDirection: 'column'}}>
              <TextField 
                label="Name" 
                type="text"
                variant="outlined"
                size="small"
              />
              <TextField label="email" size="small" type="email" variant="outlined" margin="dense"/>
              <TextField label="message" size="small" type="text" multiline rows={7} variant="outlined" margin="dense"/>
            </div>
            <div style={{marginTop: 15, width: '100%', display: 'flex', justifyContent: 'flex-end'}}>
              <Button type="submit" className={classes.btn} variant="outlined" color="primary"> Submit </Button>
            </div>
          </form>
        </Grid>
      </Grid>

      </div>
    </div>
  )
}

export default Contacts
