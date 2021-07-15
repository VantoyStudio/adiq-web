import React, {useState} from 'react';
import {Slider, FormControlLabel, Checkbox, makeStyles, withStyles, Accordion, AccordionSummary, AccordionDetails, Typography, Button} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    checkboxRoot: {
      display: 'flex',
    },
    formGroup: {
        display: 'flex'
    },
    accordionRoot: {
        width: '100%',
    },
    submitBtn: {
        width: '40%',
        borderRadius: '0.5rem',
        background: theme.palette.primary.dark,
        color: 'white',
        "&:hover" : {
            background: theme.palette.secondary.main,
            color: 'white',
        }
    }
  }));

const PrettoSlider = withStyles((theme) => ({
    root: {
      color: theme.palette.primary.main,
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus, &:hover, &$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
      width: 100
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  }))(Slider);

const FilteredMedia = (props) => {
    const [mediatypes, setMediatypes] = useState({
        billboards: true,
        shops: false,
        buses: false,
    });
    const [ageRange, setAgeRange] = useState({
        q1: true, //18-25
        q2: false, //26-50
        q3: false, // 50+
    });
    const [gender, setGender] = useState({
        male: true, 
        female: false,
        other: false, 
    });
    
    const [value, setValue] = useState(3);
    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    const handleGenderChange = (event) => {
        setGender({ ...gender, [event.target.name]: event.target.checked });
    };
    const handleAgeChange = (event) => {
        setAgeRange({ ...ageRange, [event.target.name]: event.target.checked });
    };
    const handleChange = (event) => {
        setMediatypes({ ...mediatypes, [event.target.name]: event.target.checked });
      };
    
    const { billboards, shops, buses } = mediatypes;
    const { q1, q2, q3 } = ageRange;
    const { male, female, other } = gender;
    const marks = [
        {
          value: 1,
          label: 'BDT 100,000',
        },
        {
          value: 5,
          label: 'BDT 500,000',
        },
        {
          value: 10,
          label: 'BDT 1,000,000',
        },
      ];
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
            <h3>Filter your Media Type</h3>
            <div style={{display: 'flex', justifyContent: 'space-evenly', alignItems: 'center', width: '75%', padding: '2rem 0'}}>
                <form style={{width: '100%'}}>
                    <div style={{display: 'flex', width: '100%'}}>
                        <div style={{display: 'grid', placeItems: 'left', width: '100%'}}>
                            <h3 style={{textAlign: 'left', marginBottom: '-5px'}}>Media Types</h3>
                            <div className={classes.checkboxRoot}>
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={billboards} onChange={handleChange} name="billboards" />}
                                    label="Billboards"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={shops} onChange={handleChange} name="shops" />}
                                    label="Shops"
                                />
                                <FormControlLabel
                                    control={<Checkbox color="primary" checked={buses} onChange={handleChange} name="buses" />}
                                    label="Buses"
                                />
                            </div>
                        </div>
                        <div style={{display: 'grid', placeItems: 'right', width: '100%'}}>
                            <h3 style={{textAlign: 'left'}}>Budget</h3>
                            <div>
                                <PrettoSlider 
                                    valueLabelDisplay="off" 
                                    aria-label="pretto slider"
                                    value={value}
                                    min={1}
                                    max={10}
                                    step={0.5}
                                    marks={marks}
                                    onChange={handleSliderChange} 
                                
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div>
                        <h3>Target Demographics</h3>
                        <div style={{display: 'flex', width: '100%'}}>
                        <div className={classes.accordionRoot}>
                            <Accordion>
                                <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                >
                                <Typography className={classes.heading}>Choose Demographics</Typography>
                                </AccordionSummary>
                                <AccordionDetails style={{width: "100%"}}>
                                    <div style={{width: "100%"}}>
                                        <div style={{display: 'flex',maxWidth: '45rem', justifyContent: 'space-between'}}>
                                            <div>
                                                {/* Age */}
                                                <h4>Age</h4>
                                                <div className={classes.checkboxRoot}>
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" checked={q1} onChange={handleAgeChange} name="q1" />}
                                                        label="18-25"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" checked={q2} onChange={handleAgeChange} name="q2" />}
                                                        label="26-50"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" checked={q3} onChange={handleAgeChange} name="q3" />}
                                                        label="50+"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                {/* Gender */}
                                                <h4>Gender</h4>
                                                <div className={classes.checkboxRoot}>
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" checked={male} onChange={handleGenderChange} name="male" />}
                                                        label="Male"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" checked={female} onChange={handleGenderChange} name="female" />}
                                                        label="Female"
                                                    />
                                                    <FormControlLabel
                                                        control={<Checkbox color="primary" checked={other} onChange={handleGenderChange} name="other" />}
                                                        label="Other"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>
                        </div>
                    </div>
                    <div style={{display: 'grid', padding: '2rem', placeItems: 'center'}}>
                        <Button className={classes.submitBtn}>
                            Submit
                        </Button>
                    </div>
                </form>
            </div>
            <hr style={{width: '80%'}}/>
            <div style={{display: 'grid', placeItems: 'center'}}>
                <code>Results appear hear</code>
            </div>
            <hr style={{width: '80%'}}/>
        </div>
    )
}

export default FilteredMedia