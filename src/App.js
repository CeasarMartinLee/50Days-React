import React, { Component } from 'react';
import './App.css';
import store from './store'
import FrontPage from './screens/FrontPage'
import JoinGame from './screens/JoinGame'
import StartGame from './screens/StartGame'
import Game from './screens/Game'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Route exact path='/' component={FrontPage}/>
          <Route path='/join' component={JoinGame}/>
          <Route path='/startgame' component={StartGame}/>
          <Route path='/game' component={Game}/>
        </Provider>
      </div>
    );
  }
}

export default App;
