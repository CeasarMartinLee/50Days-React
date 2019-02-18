import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route, Switch } from 'react-router-dom'
import FrontPage from './screens/FrontPage'
import JoinGame from './screens/JoinGame';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/' component={FrontPage}/>
        <Route path='/join' component={JoinGame}/>
      </Provider>
    );
  }
}

export default App;
