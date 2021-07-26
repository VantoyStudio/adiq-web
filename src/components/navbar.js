import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import {Toolbar, Button, Drawer, List, ListItem, ListItemIcon, ListItemText, Divider} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';

import {Link, navigate} from 'gatsby';
import { StaticImage } from "gatsby-plugin-image"


export default function PrimarySearchAppBar(props) {
  
  const useStyles = makeStyles((theme) => ({
    grow: {
      flexGrow: 1,
      background: 'black',
    },
    growLeft: {
      flexGrow: 0,
      background: 'black',
      [theme.breakpoints.down('sm')]: {
        flexGrow: 1
      }
    },
    menuButton: {
      marginRight: theme.spacing(2),
      display: 'none',
      [theme.breakpoints.down('md')]: {
        display: 'flex',
        marginLeft: '2px',
        color: props.scroll ? theme.palette.inherit : 'white'
      }
    },
    title: {
      display: 'none',
      [theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    sectionDesktop: {
      display: 'flex',
      [theme.breakpoints.down('md')]: {
        display: 'none',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('lg')]: {
        display: 'none',
      },
    },
    link: {
        color: 'black',
        fontSize: '15px',
        margin: '10px 1.5rem',
        textDecoration: 'none',
        transitionDuration: '0.5s',
        "&:hover": {
            transform: 'scale(1.2)',
        }
    },
    logoTypo: {
      fontSize: '1rem',
      marginLeft: '.5rem'
    },
    linkHome: {
      display: 'flex', 
      alignItems: 'center',
      textDecoration: 'none',
      transitionDuration: '0.5s',
      '&:hover' : {
        transform: 'scale(1.1)',
      }
    },
    authBtn: {
      height: '2.5rem',
      background: 'white',
      color: 'black',
      border: '2px solid black',
      borderRadius: '10px',
      "&:hover" : {
        background: (props.scroll) ? 'black' : 'rgb(0,0,0,0.1)',
        color: 'white',
        border: (props.scroll) ? '3px solid black' : '3px solid white',
      }
    },
    moreIcon: {
      color: props.scroll ? theme.palette.inherit : 'white'
    },
    toolbar: {
      height: props.scroll ? '6rem' : "8rem", 
      transition: '0.7s',
      [theme.breakpoints.down('sm')]: {
        height: '6rem'
      }
    },
    list: {
      width: 250,
    },
    fullList: {
      width: 'auto',
    },
  }));
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);


  ///////////////////////////////////////////////////////

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem button onClick={() => {navigate('/')}}>
            <ListItemIcon>H</ListItemIcon>
            <ListItemText primary={"Home"} />
        </ListItem>
        <ListItem button onClick={() => {navigate('/inventory')}}>
            <ListItemIcon>I</ListItemIcon>
            <ListItemText primary={"Inventory"} />
        </ListItem>
        <ListItem button onClick={() => {navigate('/about')}}>
            <ListItemIcon>A</ListItemIcon>
            <ListItemText primary={"About Us"} />
        </ListItem>
        <ListItem button onClick={() => {navigate('/howitworks')}}>
            <ListItemIcon>H</ListItemIcon>
            <ListItemText primary={"How It Works?"} />
        </ListItem>
        <ListItem button onClick={() => {navigate('/becomeapartner')}}>
            <ListItemIcon>A</ListItemIcon>
            <ListItemText primary={"Become A Partner"} />
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))} */}
        <ListItem button onClick={() => {navigate('/login')}}>
            <ListItemIcon>L</ListItemIcon>
            <ListItemText primary={"Log In"} />
        </ListItem>
      </List>
    </div>
  );


  ///////////////////////////////////////////////////////


  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <MailIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" color={props.scroll ? "inherit" : "transparent"} style={{transition: '0.7s ease'}}>
        <Toolbar className={classes.toolbar}>
          
          {['left'].map((anchor) => (
            <React.Fragment key={anchor}>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={toggleDrawer(anchor, true)}
              >
              <MenuIcon />
              </IconButton>
              <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
              {list(anchor)}
              </Drawer>
            </React.Fragment>
          ))}

          
          <div className={classes.growLeft}/>
          <div style={{display: 'flex', alignItems: 'center', marginLeft: '1rem'}}>
            <Link className={classes.linkHome} to="/">
              <div>
                <StaticImage src="../images/logo.png" alt="logo" width={59} height={59}/> 
              </div>
              <Typography className={classes.logoTypo} style={props.scroll ? {color: 'black'} : {color: 'white'}}> AD-IQ</Typography>
            </Link>
          </div>
        
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            { [ {name: 'OOH Inventory', addr: '/inventory'}, 
                {name: 'About', addr: '/about'}, 
                {name: 'How It Works', addr: '/howitworks'}, 
                {name: 'Become a Partner', addr: '/becomeapartner'},
                {name: 'Log In', addr: '/login'}].map(item => {
                return (
                    <Link to={item.addr} className={classes.link} style={props.scroll ? {color: 'black'} : {color: 'white'}}> 
                        <span><Typography variant="button">{item.name}</Typography></span> 
                    </Link>  
                )
            })}
            {/* <ButtonGroup color={props.scroll ? "primary" : "inherit"} aria-label="outlined primary button group"> */}
                {/* <Button variant="outlined" className={classes.authBtn} style={props.scroll ? {color: 'black'} : {color: 'white'}}>Login</Button> */}
            <Button variant="contained" onClick={() => navigate('/register')} className={classes.authBtn}><strong>Sign Up</strong></Button>
            {/* </ButtonGroup> */}
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon className={classes.moreIcon}/>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}