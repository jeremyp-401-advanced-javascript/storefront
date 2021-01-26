import React from 'react';
import { connect } from 'react-redux';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import './Home.css';
// Import Redux Store
import { changeCategory, reset } from "../../store/categories";
import { filterProductsByCategory } from "../../store/products";

function Home(props) {

  return (
    <Container className="appHome">
      <Typography paragraph='true' align='center' component="h2" className="homeTitle">
        Needful Things
      </Typography>
      <Typography align='center' variant="h4" component="h3">
      Castle Rock, Maine's Premier Dealer of Curiosities
      </Typography>
    </Container>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
});

const mapDispatchToProps = { filterProductsByCategory, changeCategory, reset };

export default connect(mapStateToProps, mapDispatchToProps)(Home);
