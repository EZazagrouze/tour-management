import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials = () => {

    const settings = {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,

        responsive: [{
            breakpoint:992,
            settings: {
                slidesToShow:2,
                slidesToScroll:1,
                infinite:true,
                dots:true,
            },
        },
        {
            breakpoint:576,
            settings:{
                slidesToScroll:1,
                slidesToShow:1,
            },
            
        },
       ]
    }

  return <Slider {...settings}>
    
    <div className="testimonial py-4 px-3">
        <p>Moreover, it is important to travel to humans. Some <br/>
                  travel to learn more while some travel to take a break 
                  from their life.</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className='mb-0 mt-3'>Ahmed</h5>
            <p>Customer </p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Moreover, it is important to travel to humans. Some <br/>
                  travel to learn more while some travel to take a break 
                  from their life.</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className='mb-0 mt-3'>Lamia</h5>
            <p>Customer </p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Moreover, it is important to travel to humans. Some <br/>
                  travel to learn more while some travel to take a break 
                  from their life.</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava03} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className='mb-0 mt-3'>Micheal</h5>
            <p>Customer </p>
        </div>
    </div>
    </div>


    <div className="testimonial py-4 px-3">
        <p>Moreover, it is important to travel to humans. Some <br/>
                  travel to learn more while some travel to take a break 
                  from their life.</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava01} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className='mb-0 mt-3'>Thomas</h5>
            <p>Customer </p>
        </div>
    </div>
    </div>

    <div className="testimonial py-4 px-3">
        <p>Moreover, it is important to travel to humans. Some <br/>
                  travel to learn more while some travel to take a break 
                  from their life.</p>

    <div className='d-flex align-items-center gap-4 mt-3'>
        <img src={ava02} className='w-25 h-25 rounded-2' alt="" />
        <div>
            <h5 className='mb-0 mt-3'>Angel</h5>
            <p>Customer </p>
        </div>
    </div>
    </div>

  </Slider>
}

export default Testimonials