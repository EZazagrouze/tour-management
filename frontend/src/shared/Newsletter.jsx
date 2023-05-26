import React from 'react'
import './newsletter.css'
import { Container, Row, Col } from 'reactstrap'
import maleTourist from '../assets/images/male-tourist.png'

const Newsletter = () => {
  return (
    <section className='newsletter'>
        <Container>
            <Row>
                <Col>
                    <div className='newsletter_content'>
                        <h2>Subscribe now to get useful traveling information</h2>
                        <div className='newsletter-input'>
                            <input type="email" placeholder='Enter your email'/>
                            <button className="btn newsletter__btn">Subscribe</button>
                        </div>
                        <p>Moreover, it is important to travel to humans. Some
                        travel to learn more while some travel to take a break from their life.</p>
                    </div>
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maleTourist} alt="" />
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Newsletter