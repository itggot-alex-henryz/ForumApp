import React, { Component } from 'react'
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SideMenu from './SideMenu'
import AddIcon from '@material-ui/icons/Add'
import MoreIcon from '@material-ui/icons/MoreVert'


const styles = {
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class SiteHeader extends Component {
  state = {
    menuOpen: false,
  }

  handleClose = () => {
    this.setState({menuOpen: !this.state.menuOpen})
  }

  render() {
    return (
      <div style={styles.root}>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton style={styles.menuButton} onClick={this.handleClose}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.root}>
            Todo-App
          </Typography>
          <IconButton>
            <AddIcon/>
          </IconButton>
          <IconButton>
              <MoreIcon/>
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideMenu open={this.state.menuOpen}/>
    </div>
    )
  }
}

export default withTheme()(SiteHeader);