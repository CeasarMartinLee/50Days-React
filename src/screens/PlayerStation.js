import React, { Component } from 'react'
import { connect } from 'react-redux'
import './frontpage.css'

class PlayerStation extends Component {



    render() {
        return (
            <div className="container-fluid">
                <div id="login" className="row login-section">
                    <div id="login-section__left" className="col-lg-8 col-md-7 col-sm-8 col-xs-10">
                        <div className="question-section">
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{ width: '10%' }} aria-valuenow={10} aria-valuemin={0} aria-valuemax={100}>10%</div>
                            </div>
                            <div className="question">
                                {/* <h3>This is a test question ?</h3> */}
                            </div>
                            <div className="option-list">
                                <button className="btn btn-lg option-btn option-A">A</button>
                                <button className="btn btn-lg option-btn option-B">B</button>
                                <button className="btn btn-lg option-btn option-C">C</button>
                                <button className="btn btn-lg option-btn option-D">D</button>
                            </div>
                            <div className="login-footer">
                                <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt='codaisseur logo'/>
                            </div>
                        </div>
                    </div>
                    <div id="login-section__right" className="col-lg-4 col-md-5 col-sm-4 col-xs-2">
                        <div className="rankings">
                            <h1>Final Round</h1>
                            {/* Current player ranking */}
                            <div className="ranking-list__mobile">
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#1</span>
                                    <span>Alita</span>
                                    <span>3450 points</span>
                                </div>
                            </div>
                            {/* All players including current player */}
                            <div className="rankings-list">
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#1</span>
                                    <span>Alita</span>
                                    <span>3450 points</span>
                                </div>
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#2</span>
                                    <span>John</span>
                                    <span>3450 points</span>
                                </div>
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#3</span>
                                    <span>Peter</span>
                                    <span>3450 points</span>
                                </div>
                                <div className="player-ranking">
                                    <span className="rank-icon"></span>
                                    <span>#4</span>
                                    <span>Peter</span>
                                    <span>3450 points</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



export default PlayerStation
