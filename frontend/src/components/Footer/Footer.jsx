import React from 'react';
import './footer.css';
import {Container, Row, Col, ListGroup, ListGroupItem} from 'reactstrap';
import {Link} from 'react-router-dom';
import logo from '../../assets/images/logo.png'

const quick__links=[
  {
    path:'/home',
    display:'Home'
  },
  {
    path:'/about',
    display:'About'
  },
  {
    path:'/tours',
    display:'Tours'
  }
];

const quick__links2=[
  {
    path:'/gallery',
    display:'Gallery'
  },
  {
    path:'/login',
    display:'Login'
  },
  {
    path:'/register',
    display:'Register'
  }
];

const Footer = () => {

  const year = new Date().getFullYear()
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3'>
          <div className="logo">
            <img src={logo} alt="" />
            <p>Moreover, it is important to travel to humans. Some 
              travel to learn more while some travel to take a break 
              from their life.
            </p>
            <div className="social__links d-flex align-items-center gap-4">
              
              <span>
                <Link to='#'><i class="ri-github-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-twitter-fill"></i></Link>
              </span>
              <span>
                <Link to='#'><i class="ri-discord-fill"></i></Link>
              </span>
            </div>
          </div>
        </Col>
        <Col lg='3'>
          <h5 className='footer__link-title'>Discovery</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='3'>
          <h5 className='footer__link-title'>Quick Links</h5>
          <ListGroup className='footer__quick-links'>
            {
              quick__links2.map((item,index)=>(
                <ListGroupItem key={index} className='ps-0 border-0'>
                  <Link to={item.path}>{item.display}</Link>
                </ListGroupItem>
              ))
            }
          </ListGroup>
        </Col>

        <Col lg='3'>
        <h5 className='footer__link-title'>Quick Links</h5>
          <ListGroup className='footer__quick-links'>
          
              
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 mb-0 d-flex align-items-center gap-2>
                    <span><i class="ri-map-pin-line"></i></span>
                    Address
                  </h6>
                  <p className='mb-0'>NYC, USA</p>
                </ListGroupItem>
          </ListGroup>

          <ListGroup className='footer__quick-links'>
          
              
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 mb-0 d-flex align-items-center gap-2>
                    <span><i class="ri-mail-fill"></i></span>
                    E-mail
                  </h6>
                  <p className='mb-0'>reina@gmail.com</p>
                </ListGroupItem>
          </ListGroup>

          <ListGroup className='footer__quick-links'>
          
              
                <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-3'>
                  <h6 mb-0 d-flex align-items-center gap-2>
                    <span><i class="ri-phone-line"></i></span>
                    Phone
                  </h6>
                  <p className='mb-0'>+126363639</p>
                </ListGroupItem>
          </ListGroup>
        </Col>
      
        <Col lg='12' className='text-center pt-5' >
          <p className='copyroght'>copyright {year}, design and develop by Reina Tamar.
                                  All rights reserved.</p>
        </Col>

      </Row>
    </Container>
  </footer>
}

export default Footer