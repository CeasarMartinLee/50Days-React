import React, { Component } from 'react';
import './App.css';
import store from './store'
import FrontPage from './screens/FrontPage'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Route exact path='/' component={FrontPage}/>
        </Provider>
      </div>
    );
  }
}

export default App;
