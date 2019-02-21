import React from 'react'
import { Container, Row } from 'react-bootstrap'
import ContainerLeft from './ContainerLeft'
import ContainerRight from './ContainerRight'
require('./style.css')

export default (props) => {
  return (
    <Container fluid={true}>
      <Row id="page-section" className='section'>
        {props.children}
      </Row>
    </Container>
  )
}

export {
  ContainerLeft,
  ContainerRight
}