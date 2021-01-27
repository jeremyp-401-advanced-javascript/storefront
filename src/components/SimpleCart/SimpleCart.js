import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './SimpleCart.css';
// Import Redux Store
import { filterProductsByCategory, reset } from "../../store/products";
import { addProductToCart, removeProductFromCart, resetCart } from "../../store/simplecart";

function SimpleCart(props) {

  return (
    // This should be a container for some text that can be displayed as a pop-down from
    // the existing cart button. Maybe a card? Uses the SimpleCart 
    // store for display, removing from cart (or resetting).
    <Container className="appCart">
      <Typography variant="" align="center" component="h2" className="categoryTitle">
        {props.tabCategory}
        </Typography>
      <Typography variant="p" paragraph='true'>
        {props.products.products.map((product, idx) => (
            <p key={idx}>{product.name}</p>
        ))}
      </Typography>
    </Container>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
  cart: state.cart,
});

const mapDispatchToProps = { addProductToCart, removeProductFromCart, resetCart, filterProductsByCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
