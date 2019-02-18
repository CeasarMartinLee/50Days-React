import React, { Component } from 'react'
import CreateButton from '../components/frontpage/CreateButton'
import JoinButton from '../components/frontpage/JoinButton'
import './frontpage.css'

class FrontPage extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div id="login" className="row login-section">
          <div id="login-section__left" className="col-lg-7 col-md-7 col-sm-8 col-xs-10">
            <div className="logo">
              <p>50Days</p>
            </div>
            <form className="join-form">
              <CreateButton />
              <br/>
              <JoinButton />
            </form>
            <div className="login-footer">
              <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
            </div>
          </div>
          <div id="login-section__right" className="col-lg-5 col-md-5 col-sm-4 col-xs-2">
            <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
          </div>
        </div>
      </div>
    )

  }
}

export default FrontPage