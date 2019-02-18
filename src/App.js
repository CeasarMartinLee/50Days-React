import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import FrontPage from './screens/FrontPage'
import JoinGame from './screens/JoinGame';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Route exact path='/' component={FrontPage}/>
          <Route path='/join' component={JoinGame}/>
        </Provider>
      </div>
    );
  }
}

export default App;
