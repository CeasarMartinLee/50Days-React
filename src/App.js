import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import FrontPage from './screens/FrontPage'
import JoinGame from './screens/JoinGame'
import PlayerLobby from './screens/PlayerLobby'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Route exact path='/' component={FrontPage}/>
        <Route path='/join' component={JoinGame}/>
        <Route path='/game/:id/lobby' component={PlayerLobby}/>
      </Provider>
    );
  }
}

export default App;
