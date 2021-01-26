import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Container from '@material-ui/core/Container';
import '@fontsource/league-spartan';
import './App.css';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Container disableGutters='true' className='appContainer'>
      <AppBar position="static">
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
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    </Container>
  );
}

export default App;
