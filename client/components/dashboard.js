import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'

const styles = theme => ({
    card: {
      maxWidth: 400,
    },
    media: {
      height: 0,
      paddingTop: '56.25%', // 16:9
    },
    actions: {
      display: 'flex',
    },
    expand: {
      transform: 'rotate(0deg)',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
      marginLeft: 'auto',
      [theme.breakpoints.up('sm')]: {
        marginRight: -8,
      },
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },

    rightToolbar: {
      marginLeft: 'auto',
      marginRight: -12
    }
  });

let testGames = {
    name: "City Runner" ,
    description: "Zip through the city and avoid running into the obstacles. If you do, then you'll restart the level. Try to get the best score possible. And have fun!",
    gif: "/gamPics/testgame.gif",
    score: 250
  
  }

const Dashboard = ({ classes }) => {
  let name = testGame.name;
  let description = testGame.description;
  let gif = testGame.gif
  let score = testGame.score;

  return (
            <div>
              <AppBar position="static">
                <Toolbar>
                  <Typography variant="title" color="inherit">Mmak's Game Room</Typography>
                  <Button component={Link} to="/">Homepage</Button>
                  <Button>Logout</Button>
                  <section className={classes.rightToolbar}>
                    <Typography variant="title" color="inherit">Hello, Asya!</Typography>
                  </section>
                </Toolbar>
              </AppBar>
            <h1>This is the Dashboard</h1>


            </div>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Dashboard);