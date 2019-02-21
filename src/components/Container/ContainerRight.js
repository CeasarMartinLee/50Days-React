import React from 'react'
import { Col } from 'react-bootstrap'
require('./style.css')

export default (props) => {
  return (
    <Col md={5} sm={4} xs={12} id="section__right">
      {props.children}
    </Col>
  )
}