import React, {Component} from 'react'
import {withStyles} from '@material-ui/core'
import GridList from '@material-ui/core/GridList/GridList'
import GridListTile from '@material-ui/core/GridListTile/GridListTile'
import Avatar from '@material-ui/core/Avatar/Avatar'
import GridListTileBar from '@material-ui/core/GridListTileBar/GridListTileBar'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core/Button'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    'width': 1000,
    'overflowY': 'auto'
  },
  title: {
    color: theme.palette.primary.light
  },
  titleBar: {
    background:
      'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  indvCell: {
    'borderRadius': 45
  },
})

const we = [
  {
    img: '/pictures/Michelle.JPG',
    title: 'Michelle',
    description: 'Michelle is a Fullstack Engineer who would enjoy working someplace that loves paying it forward to their communities',
    linkedin: 'https://www.linkedin.com/in/michellemessenger/'
  },
  {
    img: '/pictures/Megha.jpg',
    title: 'Megha',
    description: 'Megha is an Energetic and Passionate Fullstack developer able to build a Web presence from the ground up from concept, navigation, layout and programming. Would like to work with Software Development Co. for front-end and back-end',
    linkedin: 'https://www.linkedin.com/in/megha-25/'
  },
  {
    img: '/pictures/Asya.jpg',
    title: 'Asya',
    description: 'Asya would love to work in FinTech and just to work :)',
    linkedin: 'https://www.linkedin.com/in/asya-slutskaya-978242141/'
  },
  {
    img: '/pictures/Keyairra.png',
    title: 'Keyairra',
    description: 'Keyairra is a Fullstack Javascript Software Developer',
    linkedin: 'https://www.linkedin.com/in/keyairra-s-wright/'
  }
]

class FooterWithUs extends Component {

  render() {
        return (
          <div className="footer">
            <div style={styles.root}>
              <GridList cellHeight={110} style={styles.gridList} cols={4}>
                {we.map((tile) => (
                  <GridListTile key={tile.img} style={{flexGrow: 2}}>
                    <Avatar src={tile.img}/>
                    <GridListTileBar title={tile.title} subtitle={tile.description} actionIcon={
                      <a href={tile.linkedin} target="_blank"><Tooltip title={tile.description}>
                        <span><Button color="primary" disableRipple>in</Button></span></Tooltip></a>
                    }/>
                  </GridListTile>))}
              </GridList>
            </div>
          </div>
        )
    }
  }


export default withStyles(styles)(FooterWithUs)

