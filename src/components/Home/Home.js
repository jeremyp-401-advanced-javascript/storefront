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
import './Home.css';
// Import Redux Store
import { changeCategory, reset } from "../../store/categories";
import { filterProductsByCategory } from "../../store/products";
const mapDispatchToProps = { filterProductsByCategory, changeCategory, reset };

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

function Home(props) {
  const classes = useStyles();

  return (
    <div id="appHome" className={classes.gridRoot}>
      <Grid
        container
        direction="row"
        justify="flex-start"
        alignitems="stretch"
        spacing={2}
      >
        <Grid item xs={12}>
          <Typography paragraph={true} align='center' component="h2" className="homeTitle">
            Needful Things
          </Typography>
          <Typography align='center' variant="h4" component="h3">
            Castle Rock, Maine's Premier Dealer of Curiosities
          </Typography>
        </Grid>
        {props.categories.categories.map((category, idx) => (
        <Grid key={idx} item xs={12} sm={6} md={4}>
          <Card className={classes.cardRoot}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={category.imgsrc}
                // image={`https://source.unsplash.com/${category.imgsrc}/400x200`}
                title={category.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                {category.displayName}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  <span>{category.description}</span>
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button size="small" color="primary">
                View {category.name}
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
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// return (
//   <Container className="appHome">
//     <Typography paragraph={true} align='center' component="h2" className="homeTitle">
//       Needful Things
//     </Typography>
//     <Typography align='center' variant="h4" component="h3">
//     Castle Rock, Maine's Premier Dealer of Curiosities
//     </Typography>
//   </Container>
// );