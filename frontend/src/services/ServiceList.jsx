import React from 'react';
import ServiceCard from './ServiceCard';
import {Col} from 'reactstrap';

import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'


const servicesData =[
  {
    imgUrl: weatherImg,
    title: "calculate weather",
    desc: "Some travel to learn more while some travel to take a break from their life"
  },
  {
    imgUrl: guideImg,
    title: "calculate weather",
    desc: "Some travel to learn more while some travel to take a break from their life"
  },
  {
    imgUrl: customizationImg,
    title: "calculate weather",
    desc: "Some travel to learn more while some travel to take a break from their life"
  }
]

const ServicesList = () => {
  return <>
    {servicesData.map((item,index)=> (
      <Col lg='3' key={index}>
        <ServiceCard item={item}/>
      </Col>
    ))}
  </>
}

export default ServicesList