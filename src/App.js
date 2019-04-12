import React, { Component } from 'react';
import './App.css';
import { Route, HashRouter } from 'react-router-dom';
import Home from './views/home'
import About from './views/about'
import SiteHeader from './components/SiteHeader'

const styles = ({
  root: {
    margin: "0px",
    padding: "0px"
  },
})

class App extends Component {
  render() {
    return (
        <div style={styles.root}>
          <SiteHeader/>
          <div>
            <HashRouter>
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </HashRouter>
          </div>
        </div>
    );
  }
}

export default App;
