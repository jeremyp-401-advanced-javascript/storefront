import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import List from '@material-ui/core/List';
import Grid from '@material-ui/core/List';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import Popover from '@material-ui/core/Popover';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import { deepOrange } from '@material-ui/core/colors';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import DeleteIcon from '@material-ui/icons/Delete';
import './SimpleCart.css';
// Import Redux Store
import { filterProductsByCategory, reset } from "../../store/products";
import { addProductToCart, removeProductFromCart, resetCart } from "../../store/simplecart";
const mapDispatchToProps = { addProductToCart, removeProductFromCart, resetCart, filterProductsByCategory, reset };

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
  }
}));

function SimpleCart(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [drawerState, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...drawerState, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      id="appCart"
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem>
          <ListItemText>
            <Typography variant="h1" className="headerTitle">Cart:</Typography>
            <Typography variant="body1">Click an item to edit quantity:</Typography>
          </ListItemText>
        </ListItem>
      </List>
      <Divider />
      <List>
        {/* {name: 'TV', category: 'electronics', price: 699.00, inStock: 5, imgsrc: '-I8lDurtfAo'}, */}
        {props.cart.cartItems.map((item, idx) => (
          <ListItem button aria-describedby={item.id} onClick={handleClick} alignitems="flex-start" key={idx}>
            <ListItemAvatar>
              <Avatar alt={item.name} src={`https://source.unsplash.com/${item.imgsrc}/50x50`} />
            </ListItemAvatar>
            <ListItemText primary={item.name} secondary={`$${item.price} X ${item.quantityInCart}`} />
            <Popover
              id={item.id}
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorOrigin={{
                vertical: 'center',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'center',
                horizontal: 'right',
              }}
            >
              <Grid container direction="row" justify="flex-start" alignitems="stretch" spacing={2}>
                <Grid item>
                  <Button variant="contained" size="medium" color="success">+</Button>
                </Grid>
                <Grid item>
                  <Avatar className={classes.orange}>99+</Avatar>
                </Grid>
                <Grid item>
                  <Button variant="contained" size="medium" color="secondary">-</Button>
                </Grid>
              </Grid>
            </Popover>
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => props.removeProductFromCart(item)}>
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItem button>
          <ListItemText className="cartTotal">
            <span className="strong">Total: </span><span>{`$${props.cart.totalPrice}`}</span>
          </ListItemText>
        </ListItem>
      </List>
    </div>
  );

  return (
    // This should be a container for some text that can be displayed as a pop-down from
    // the existing cart button. Maybe a card? Uses the SimpleCart 
    // store for display, removing from cart (or resetting).
    <div className="appCart">
      <Button color="inherit" onClick={toggleDrawer('right', true)}>Cart ({props.cart.totalItems})</Button>
      <Drawer anchor={'right'} open={drawerState['right']} onClose={toggleDrawer('right', false)}>
        {list('anchor')}
      </Drawer>
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
