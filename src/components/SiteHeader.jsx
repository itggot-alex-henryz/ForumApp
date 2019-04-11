import React, { Component } from 'react'
import { withTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button'
import SideMenu from './SideMenu'

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
      <SideMenu open={this.state.menuOpen}/>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <IconButton style={styles.menuButton} onClick={this.handleClose}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" color="inherit" style={styles.root}>
            ForumApp
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
    )
  }
}

export default withTheme()(SiteHeader);