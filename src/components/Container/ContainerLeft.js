import React from 'react'
import { Col } from 'react-bootstrap'
require('./style.css')

export default (props) => {
  return (
    <Col md={7} sm={8} xs={12} id="section__left">
      {props.children}
    </Col>
  )
}