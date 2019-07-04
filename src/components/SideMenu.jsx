import React, { Component } from 'react'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const styles = {
	fullDrawer: {
		minWidth: "15vw"
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
				<Drawer open={this.state.open} onClose={this.handleToggle} >
				<div
            tabIndex={0}
						onClick={this.handleToggle}
						onKeyDown={this.handleToggle}
          >
					<List style={styles.fullDrawer}>
							<ListItem button key="test">
										<ListItemText primary="Home" />
							</ListItem>
						{this.state.listItems.map((text, index) => (
								<ListItem button key={index}>
									<ListItemText primary={text} />
								</ListItem>
						))}
					</List>
					</div>
				</Drawer>
      </div>
    )
  }
}
