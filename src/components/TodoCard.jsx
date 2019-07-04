import React, { Component } from 'react'
import Card from '@material-ui/core/Card'
import Typography from '@material-ui/core/Typography'
import { Divider } from '@material-ui/core';

const styles = {
    card: {
        minWidth: "25vw",
        minHeight: "25vh",
        marginTop: 5
    },
    divider:{
      marginTop: 2,
      marginBottom: 2
    },
    text:{
      marginLeft: 2
    }
}

export default class TodoCard extends Component {
  render() {
    return (
      <div>
          <Card style={styles.card}>
              <Typography variant="headline" style={styles.text}>{this.props.title}</Typography>
              <Divider style={styles.divider}/>
              <Typography paragraph={true} style={styles.text}>{this.props.text}</Typography>
          </Card>
      </div>
    )
  }
}
