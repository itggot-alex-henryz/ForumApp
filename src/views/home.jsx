import React, { Component } from 'react'
import TodoCard from '../components/TodoCard'
import { Grid } from '@material-ui/core'

export default class Home extends Component {
  state = {
    TodoCards: this.props.todocards
  }

  componentWillReceiveProps(nextProps){
    if(nextProps.todocards !== this.props.todocards){
      let arr = nextProps.todocards
      this.setState({TodoCards: arr });
    }
    setTimeout(()=>{
      console.log(this.state.TodoCards)
    },500)
  }

  render() {
    return (
      <div>
        <Grid container justify="center" spacing={8}>
          <Grid item zeroMinWidth>
          {(this.state.TodoCards).map(todocard => (
            <TodoCard title={todocard.title} text={todocard.text}/>
          ))}
          </Grid>
        </Grid>
      </div>
    )
  }
}
