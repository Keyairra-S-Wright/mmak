import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Paper from '@material-ui/core/Paper'

class Filters extends Component {
  render() {
    return (
      <div>
        <Paper>
          <Tabs indicatorColor="secondary" centered>
            <Tab className="flash" label="Sign Up/Login to Play"/>
            <Tab label="Education Game" component={Link} to="/categories/edu"/>
            <Tab label="Fun Game" component={Link} to="/categories/fun"/>
            <Tab className="flash" label="Sign Up/Login to Play"/>
          </Tabs>
        </Paper>
      </div>
    )
  }
}

export default Filters
