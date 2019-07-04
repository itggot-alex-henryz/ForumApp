import React, { Component } from 'react';
import './App.css';
import Home from './views/home'
import SiteHeader from './components/SiteHeader'

const styles = ({
  root: {
    margin: "0px",
    padding: "0px",
  },
  site:{
    overflowX: "hidden"
  }
})

class App extends Component {
  state = {
    todocards: []
  }

  callback = event => {
    this.setState(prevState =>({todocards: [...prevState.todocards, event]}))
  }

  render() {
    return (
        <div style={styles.root}>
          <SiteHeader callbackFromParent={this.callback}/>
          <div style={styles.site}>
              <Home todocards={this.state.todocards}/>
          </div>
        </div>
    );
  }
}

export default App;
