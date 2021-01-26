import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Products.css';
// Import Redux Store
import { filterProductsByCategory, reset } from "../../store/products";

function Products(props) {

  return (
    <Container className="appCategories">
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
});

const mapDispatchToProps = { filterProductsByCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Products);
