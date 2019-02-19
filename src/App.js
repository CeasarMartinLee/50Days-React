import React, { Component } from 'react';
import './App.css';
import store from './store'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

import StartGame from './screens/StartGame'
import Game from './screens/Game'
import FrontPage from './screens/FrontPage'
import JoinGame from './screens/JoinGame'
import PlayerLobby from './screens/PlayerLobby'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Route exact path='/' component={FrontPage}/>
          <Route path='/join' component={JoinGame}/>
          <Route path='/startgame' component={StartGame}/>
          <Route exact path='/game/:id' component={Game}/>
          <Route exact path='/game/:id/lobby' component={PlayerLobby}/>
        </Provider>
      </div>
    );
  }
}

export default App;
