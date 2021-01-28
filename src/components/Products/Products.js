import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import './Products.css';
// Import Redux Store
import { filterProductsByCategory, reset } from "../../store/products";
import { addProductToCart } from "../../store/simplecart";
const mapDispatchToProps = { addProductToCart, filterProductsByCategory, reset };

const useStyles = makeStyles({
  cardRoot: {
    maxWidth: 400,
  },
  gridRoot: {
    flexGrow: 1,
  },
  media: {
    height: 200,
  },
});

function Products(props) {
  const classes = useStyles();

  return (
    <div className={classes.gridRoot}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography variant="h2" align="center" component="h2" className="categoryTitle">
            {props.tabCategory}
          </Typography>
        </Grid>
        {props.products.products.map((product, idx) => (
        <Grid key={idx} item xs={12} sm={6} md={4}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={`https://source.unsplash.com/${product.imgsrc}/400x200`}
                title={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {product.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span>${product.price}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button onClick={() => props.addProductToCart(product)} size="small" color="primary">
                Add To Cart
              </Button>
              <Button size="small" color="primary">
                View Details
              </Button>
            </CardActions>
          </Card>
        </Grid>
        ))}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  categories: state.categories,
  products: state.products,
  cart: state.cart,
});

export default connect(mapStateToProps, mapDispatchToProps)(Products);
