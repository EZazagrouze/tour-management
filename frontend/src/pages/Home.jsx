import React from 'react';
import '../styles/home.css';
import {Container, Row, Col} from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import heroVideo from '../assets/images/hero-video.mp4';
import worldImg from '../assets/images/worlddd.png';
import Subtitle from './../shared/Subtitle';
import SearchBar from '../shared/SearchBar';
import ServicesList from '../services/ServiceList';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';
import Testimonials from '../components/Testimonial/Testimonials';
import Newsletter from '../shared/Newsletter';

const Home = () => {
  return <>
      <section> 
        <Container>
          <Row>
            <Col lg='6'>
              <div className="hero__content">
                <div className="hero__subtitle d-flex align-items-center">
                  <Subtitle subtitle={'know befor you go'}/>
                  <img src={worldImg} alt="" />
                </div>
                <h1>Traveling opens the door to creating
                  <span className="hightlight">memories</span>
                </h1>  
                  <p>Travelling is an amazing way to learn a lot of things in life. 
                    A lot of people around the world travel every year to many 
                    places. Moreover, it is important to travel to humans. Some 
                    travel to learn more while some travel to take a break 
                    from their life.
                  </p>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box">
                <img src={heroImg} alt="" />
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-4">
                <img src={heroVideo} alt="" controls/>
              </div>
            </Col>

            <Col lg='2'>
              <div className="hero__img-box mt-5" >
                <img src={heroImg02} alt="" />
              </div>
            </Col>
            <SearchBar/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="3">
              <h5 className='services__subtitle'>What we serve</h5>
              <h2 className='services__title'>We offer our best services</h2>
            </Col>
            <ServicesList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12' className='mb-5'>
              <Subtitle subtitle={'Explore'}/>
              <h2 className='featured__tour-title'>Our feature tours</h2>
            </Col>
            <FeaturedTourList/>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='6'>
              <div className="experience__content">
                <Subtitle subtitle={'Experience'}/>
                <h2>with our all experience <br/> we will serve you
                </h2>
                <p>
                  Moreover, it is important to travel to humans. Some <br/>
                  travel to learn more while some travel to take a break 
                  from their life.
                </p>
              </div>
              <div className="counter__wrapper d-flex align-items-center gap-5">
                <div className="counter__box">
                  <span>12+</span>
                  <h6>Successful Trip</h6>
                </div>
                <div className="counter__box">
                  <span>12+</span>
                  <h6>Regular clients</h6>
                </div>
                <div className="counter__box">
                  <span>15</span>
                  <h6>Years experiences</h6>
                </div>
              </div>
            </Col>
            <Col lg='6'></Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Gallery'} />
              <h2 className='gallery__title'>
                Visite our customers tour gallery
              </h2>
            </Col>
          <Col lg='12'>
            <MasonryImagesGallery/>
          </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg='12'>
              <Subtitle subtitle={'Fans love'}/>
              <h2 className='testimondial__title'>What ours fans say about us</h2>
            </Col>
            <Col lg='12'>
              <Testimonials/>
            </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
  
}

export default Home