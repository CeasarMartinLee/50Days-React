import React from 'react'
import JoinForm from '../JoinForm'
import Logo from '../Logo'

require('./JoinGame.css')

export default () => {
  return (
    <div className='join-section'>
      <div id='section__left' className="col-lg-7 col-md-7 col-sm-8 col-xs-12">
        <Logo/>
        <JoinForm/>
      </div>
      <div id='section__right' className='col-lg-5 col-md-5 col-sm-4 col-xs-12'>
      </div>
    </div>
  )
  
}
