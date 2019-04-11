import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
	fullDrawer: {
		minWidth: "10vw"
	},
	link:{
		textDecoration: "none"
	}
}

export default class SideMenu extends Component {
	state = {
			listItems: ["Starred", "Shitstuff"],
			listLinks: ['/about', '/'],
			open: this.props.open
	}

	handleClose = () => {
		this.setState({open: false})
	}

	handleToggle = () => {
		this.setState({open: !this.state.open})
	}

	componentDidUpdate(oldProps){
		const newProps = this.props
		if (newProps.open !== oldProps.open){
			this.handleToggle()
		}
	}

  render() {
    return (
      <div>
				<Drawer open={this.state.open} onClose={this.handleClose} >
				<div
            tabIndex={0}
						onClick={this.handleClose}
						onKeyDown={this.handleClose}
          >
					<List style={styles.fullDrawer}>
						<a href="#/" style={styles.link}>
							<ListItem button key="Home">
										<ListItemText primary="Home" />
							</ListItem>
						</a>
						{this.state.listItems.map((text, index) => (
							<a href={'#'+this.state.listLinks[index]} style={styles.link}>
								<ListItem button key={text}>
									<ListItemText primary={text} />
								</ListItem>
							</a>
						))}
					</List>
					</div>
				</Drawer>
      </div>
    )
  }
}
