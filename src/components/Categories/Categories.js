import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Home from '../Home/Home';
import Products from '../Products/Products';
// Import Redux Store
import { changeCategory, reset } from "../../store/categories";
import { filterProductsByCategory } from "../../store/products";

// Constructs the shell around the content in the Category tab
function TabPanel(props) {
  const { children, value: currentTabIndex, tabIndex, ...other } = props;

  useEffect(() => {
    console.log(`TabPanel props were changed to:`, props.value);
  }, [props.value]);
  
  return (
    <React.Fragment>
      <div
        role="tabpanel"
        hidden={currentTabIndex !== tabIndex}
        id={`scrollable-auto-tabpanel-${tabIndex}`}
        aria-labelledby={`scrollable-auto-tab-${tabIndex}`}
        {...other}
      >
        {currentTabIndex === tabIndex && (
          <Box p={3}>
            {children}
          </Box>
        )}
      </div>
    </React.Fragment>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  tabIndex: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

// Adds properties to tabs to make them more accessible
function a11yProps(tabIndex) {
  return {
    id: `scrollable-auto-tab-${tabIndex}`,
    'aria-controls': `scrollable-auto-tabpanel-${tabIndex}`,
  };
}

const useStyles = makeStyles((theme) => ({
  tabBar: {
    flexGrow: 1,
    width: '100%',
    position: 'sticky',
    top: '64px',
  },
  tabBody: {
    flexGrow: 1,
    // width: '100%',
    // height: '100%',
    // minHeight: '75vh',
    backgroundColor: theme.palette.background.paper,
  },
}));

function Categories(props) {
  const classes = useStyles();
  const [tabIndex, setTabIndex] = React.useState(0);
  const [headerHeight, setHeaderHeight] = useState({top: '64px'});

  // Adapted from: https://www.pluralsight.com/guides/re-render-react-component-on-window-resize
  useEffect(() => {
    function handleResize() {
      setHeaderHeight({top: `${document.getElementById("appHeader").clientHeight}px`});
    }
    window.addEventListener('resize', handleResize)
    return _ => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const handleChange = (event, newTabIndex) => {
    setTabIndex(newTabIndex);
    const newCategory = event.target.parentNode.dataset.category;
    if (newCategory === 'home') {

    } else {
      props.changeCategory(newCategory);
      props.filterProductsByCategory(newCategory);
    }
  };

  useEffect(() => {
    console.log(`The tabIndex was changed to: ${tabIndex} in Category tabs.`);
  }, [tabIndex]);

  useEffect(() => {
    console.log(`The header height was changed to: `, headerHeight);
  }, [headerHeight]);
  useEffect(() => {
    console.log(`props.categories: `, props.categories);
  }, [props.categories]);
  useEffect(() => {
    console.log(`props.products: `, props.products);
  }, [props.products]);

  return (
    <>
      <AppBar color="default" className={classes.tabBar} style={headerHeight}>
        <Tabs
          value={tabIndex}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="Category Tabs"
        >
          <Tab label='Home' data-category='home' {...a11yProps(0)} />
          {/* Integer argument in 'allyProps' refers to the tabIndex */}
          {props.categories.categories.map((category, idx) => (
            <Tab key={idx + 1} data-category={category.name} label={category.displayName} {...a11yProps({idx} + 1)} />
          ))}
        </Tabs>
      </AppBar>
      <TabPanel value={tabIndex} tabIndex={0} alignItems="stretch" className={classes.tabBody}>
          <Home />
        </TabPanel>
      {props.categories.categories.map((category, idx) => (
        <TabPanel key={idx + 1} value={tabIndex} tabIndex={idx + 1} alignItems="stretch" className={classes.tabBody}>
          <Products 
            tabCategory={category.name}
          />
        </TabPanel>
      ))}
    </>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = { changeCategory, filterProductsByCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
