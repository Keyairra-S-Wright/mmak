import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCategory} from '../store/categories'
import {withRouter, Link} from 'react-router-dom'
import FooterWithUs from './footerWithUs';
import Filters from './filters';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
};

class Categories extends Component {
  constructor(props) {
    super(props)
    this.state = {
      type: this.props.match.params.categoryName
    }
  }

  componentDidMount() {
    this.props.fetchCategory(this.state.type)
  }

  componentDidUpdate() {
    const nextType = this.props.match.params.categoryName
    if (nextType !== this.state.type) {
      this.setState(
        {
          type: nextType
        },
        this.props.fetchCategory(nextType)
      )
    }
  }

  render() {
    const {classes} = this.props;
    const typeCategory = this.props.typeCategory
    console.log('here are the props', this.props)
    if (!typeCategory.length) {
        return <div>
          <h2>No Games Yet</h2>
          <FooterWithUs/>
        </div>
      } else if (typeCategory.length === 1){
          return (
            <div>
              <Filters/>
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={typeCategory[0].gif}
                    title="matching gif"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {typeCategory[0].name}
                    </Typography>
                    <Typography component="p">
                    {typeCategory[0].description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" component={Link} to="/login">
                    Login
                  </Button>
                  <Button size="small" color="primary" component={Link} to="/signup">
                    SignUp
                  </Button>
                </CardActions>
            </Card>
            <FooterWithUs/>
            </div>
            ) 
          } else {
            return (
              <div>
              <Filters/>  
              <Card className={classes.card}>
                <CardActionArea>
                  <CardMedia
                    className={classes.media}
                    image={typeCategory[1].gif}
                    title="matching gif"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {typeCategory[1].name}
                    </Typography>
                    <Typography component="p">
                    {typeCategory[1].description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" component={Link} to="/login">
                    Login
                  </Button>
                  <Button size="small" color="primary" component={Link} to="/signup">
                    SignUp
                  </Button>
                </CardActions>
              </Card>
              <FooterWithUs/>
              </div>
            );
      }  
  }
}

const mapStateToProps = state => {
  return {
    typeCategory: state.categories
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchCategory: category => {
      dispatch(fetchCategory(category))
    }
  }
}

Categories.propTypes = {
  classes: PropTypes.object.isRequired,
};

//export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Categories))
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Categories)));
