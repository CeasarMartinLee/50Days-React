import React from 'react'
import Players from '../Players'
require('./style.css')
export default (props) => {
    return (
      <div id="login" className="row login-section">
        <div id="login-section__left" className="col-lg-8 col-md-7 col-sm-8 col-xs-10">
          <div className="lobby-info">
            <h1>Thanks for joining the game <b><i>{props.username}</i></b> 🤙</h1>
            <h2>Please wait for other players</h2>
            <img src="./img/01-progress.gif" />
            <h2>Good luck!</h2>
          </div>
          <div className="login-footer">
            <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="true" />
          </div>
        </div>
        <div id="login-section__right" className="col-lg-4 col-md-5 col-sm-4 col-xs-2">
          <Players />
        </div>
      </div>
    );
  };