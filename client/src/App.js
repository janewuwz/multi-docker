import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import OtherPage from './OtherPage';
import Add from './Add';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Link to="/">Home</Link>
            <Link to="/otherpage">Other page</Link>
            <div>
            <Route exact path="/" component={Add} />
            <Route exact path="/otherPage" component={OtherPage} />
          </div>
          </header>
          
        </div>
      </Router>
    );
  }
}

export default App;
