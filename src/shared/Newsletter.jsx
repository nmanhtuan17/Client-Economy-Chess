
import React from 'react'
import './newsletter.css'

import { Container, Row, Col} from 'reactstrap';
import maleTourist from '../assets/images/male-tourist.png';


const Newsletter = () => {
  return (
  <section className='newsletter'>
    <Container>
      <Row>
          <Col lg={6}>
            <div className="newsletter__content">
              <h2>Sign Up for Newsletter</h2>

              <div className="newsletter__input">
                <input type="email" placeholder='Enter your email' />
                <button className='btn newsletter__btn'>Subscribe</button>
              </div>

              <p>Get E-mail updates about our latest shop and <span>special offers.</span></p>
            </div>

        </Col>

        <Col lg={6}>
          <div className="newsletter__img">
            <img src="https://static.vecteezy.com/system/resources/previews/010/872/965/original/3d-man-holds-a-subscribe-button-png.png" alt="" />
          </div>
        </Col>  
  
      </Row>
    </Container>
  </section>
    
  )
  
}

export default Newsletter;