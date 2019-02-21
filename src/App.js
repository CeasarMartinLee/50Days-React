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
import PlayerStation from './screens/PlayerStation';
import GameOver from './screens/GameOver';

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
          <Route exact path='/game/:id/station' component={PlayerStation}/>
          <Route exact path='/game-over' component={GameOver} />
        </Provider>
      </div>
    );
  }
}

export default App;
