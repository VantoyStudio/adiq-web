import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
// import photo from '../images/photo.jpg'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import {Select, TextField} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '90vw'
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 250,
  },
  formControl2: {
    margin: theme.spacing(1),
    minWidth: '50vw',
    padding: '2rem'
  },
  secondStep: {
    border: '1px solid black', 
    display: 'flex', 
    width: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column'
    }
  }
}));

function getSteps() {
  return ['Select your Media Type', 'Fill in your Media details', 'Become a Partner'];
}

function getStepContent(stepIndex) {
  switch (stepIndex) {
    case 0:
      return 'Select campaign settings...';
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown stepIndex';
  }
}

export default function HorizontalLabelPositionBelowStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();
  const [value, setValue] = useState('shop');
  const [type, setType] = useState('');

  const handleTypeChange = (event) => {
    setType(event.target.value);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
    if(event.target.value === 'billboard') {
      setBillboard(true);
    } else {
      setBillboard(false);
    }
  };
  const [billboard, setBillboard] = useState(false)

  // const handleMedia = (item) => {
  //   if(item === 'billboards') {
  //     setBillboard(true)
  //     setShop(false)
  //   } else {
  //     setBillboard(false)
  //     setShop(true)
  //   }
  //   handleNext();
  // }
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <div style={{display: 'grid', placeItems: 'center'}}>
        <Stepper style={{width: '88%'}} activeStep={activeStep} alternativeLabel>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>
      </div>  
      <div style={{height: '100%', minHeight: '30vh', width: '100%'}}>
        <form>
          {
            activeStep === 0 ? (
              <div style={{height: '100%', width: '100%', display: 'grid', placeItems: 'center', padding: '1rem'}}>
                <FormControl component="fieldset">
                  <FormLabel component="legend">Select Media Type</FormLabel>
                  <RadioGroup aria-label="media" name="media" value={value} onChange={handleChange} >
                    <div style={{display: 'flex'}}>
                      <FormControlLabel value="billboard" control={<Radio color="primary"/>} label="Billboard" />
                      <FormControlLabel value="shop" control={<Radio color="primary"/>} label="Shop" />
                    </div>
                    
                  </RadioGroup>
                </FormControl>
              </div>
            ) : ( activeStep === 1 ? (
                    <div>
                      <h3 style={{textAlign: "center"}}> Configure your {billboard ? "Billboard" : "Shop"}</h3> 
                      <div className={classes.secondStep}>
                        <div style={{display: 'grid', placeItems: 'center', width: '28%'}}>
                          {
                            billboard ? (
                              <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Digital or Static?</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={type}
                                  onChange={handleTypeChange}
                                >
                                  <MenuItem value={'digital'}>Digital</MenuItem>
                                  <MenuItem value={'static'}>Static</MenuItem>
                                </Select>
                                <br />
                                <TextField
                                  id="standard-number"
                                  label="Billboard Height (in feet)"
                                  type="number"
                                />
                                <br />
                                <TextField
                                  id="standard-number-2"
                                  label="Screen Size (in sq. feet)"
                                  type="number"
                                />
                                <br />
                                <TextField
                                  id="standard-number-2"
                                  label="Impressions per day"
                                  type="number"
                                />
                              </FormControl>
                            ) : (
                              <FormControl className={classes.formControl}>
                                <InputLabel id="demo-simple-select-label">Digital or Static?</InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={type}
                                  onChange={handleTypeChange}
                                >
                                  <MenuItem value={'digital'}>Digital</MenuItem>
                                  <MenuItem value={'static'}>Static</MenuItem>
                                </Select>
                                <br />
                              <TextField
                                id="standard-number"
                                label="Total Number of Shops"
                                type="number"
                              />
                              <br />
                              <TextField
                                id="standard-number-2"
                                label="Screen Size (in sq. inch)"
                                type="number"
                              />
                              <br />
                              <TextField
                                id="standard-number-2"
                                label="Impressions per day"
                                type="number"
                              />
                          </FormControl>
                            )
                          }
                          
                        </div>
                        <div style={{height: '100%', display: 'grid', placeItems: 'center', minHeight: '60vh', width: '78%'}}>
                          <div style={{height: '90%', display: 'grid', placeItems: 'center', minHeight: '40vh',width: '95%', border: '3px solid black', borderRadius: '4px'}}>
                              <h1>Map View</h1>
                          </div>
                        </div>
                      </div>
                    </div>
                ) : ( activeStep === 2 ? (
                        <div style={{display: 'grid', placeItems: 'center'}}>
                          <FormControl className={classes.formControl2}>
                              <TextField
                                id="standard-number"
                                label="Email"
                                type="email"
                              />
                              <br />
                              <TextField
                                id="standard-number-2"
                                label="Mobile Number"
                                type="number"
                              />
                              <br />
                              <TextField
                                id="username"
                                label="Username"
                                type="text"
                              />
                              <br />
                              <TextField
                                id="address"
                                label="Address"
                                type="text"
                                multiline
                                rows={3}
                              />
                          </FormControl>

                        </div>
                    ) : (
                        <div>Final Step</div>
                    )))
          }
          </form>
      </div>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>All steps completed</Typography>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
            <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button variant="contained" color="primary" onClick={handleNext}>
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}