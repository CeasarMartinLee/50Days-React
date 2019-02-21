import React, { Component } from 'react'
import CreateButton from '../components/frontpage/CreateButton'
import JoinButton from '../components/frontpage/JoinButton'
import './frontpage.css'
import IntroSound from '../components/frontpage/IntroSound'
import {Container, Row, Col} from 'react-bootstrap'


export default () => {
  return (
    <Container fluid={true}>
      <Row id="login" className='login-section'>
        <Col md={7} sm={8} xs={12} id="login-section__left">
          <section className="logo">
            <p>50Days</p>
          </section>
          <section>
            <CreateButton />
            <br />
            <JoinButton />
          </section>
          <section className="login-footer">
            <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
          </section>
        </Col>
        <Col id="login-section__right" md={5} sm={4} xs={12}>
          <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
        </Col>
      </Row>
    </Container>
  )
}

// class FrontPage extends Component {
 
//   render() {
//     return (
//       <div className="container-fluid">
//         <div id="login" className="row login-section">
//           <div id="login-section__left" className="col-lg-7 col-md-7 col-sm-8 col-xs-10">
//             <div className="logo">
//               <p>50Days</p>
//             </div>
//             <form className="join-form">
//               <CreateButton />
//               <br />
//               <JoinButton />
//             </form>
//             <div className="login-footer">
//               <img src="https://codaisseur.com/assets/webpack-assets/codaisseur-logo-colore1b2f1695e1af08537a8ccb15598cf7f.svg" alt="codaisseur logo" />
//             </div>
//           </div>
//           <div id="login-section__right" className="col-lg-5 col-md-5 col-sm-4 col-xs-2">
//             <img src="./img/web-development-png-website-development-company-in-noida-1100.png" alt="front page pic" />
//           </div>
//         </div>
//         <IntroSound/>
//       </div>
//     )

//   }
// }

// export default FrontPage