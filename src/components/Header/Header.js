import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Header.css';
// Import Redux Store
import { removeProductFromCart, resetCart } from "../../store/simplecart";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function Header() {
  const classes = useStyles();

  return (
    <AppBar color="primary" position="sticky" id="appHeader">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon fontSize="large" />
        </IconButton>
        <Typography variant="h1" className="headerTitle">
          Needful Things
        </Typography>
        <Button color="inherit">Cart (0)</Button>
      </Toolbar>
    </AppBar>
  );
}

const mapStateToProps = state => ({
  cart: state.cart,
});

const mapDispatchToProps = { removeProductFromCart, resetCart };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
