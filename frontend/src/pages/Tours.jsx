import React, {useState, useEffect, useRef} from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import Newsletter from '../shared/Newsletter';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';
import tourdata from '../assets/data/tours';
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';
import {useLocation} from 'react-router-dom'
import {Form, FormGroup } from 'reactstrap';



const Tours = () => {

  const location = useLocation()

  const stateData = location.state

  // console.log(stateData.location)

  // console.log(location)

  const [sbv, setsbv] = useState({
  
    location: '',
    distance:0,
    maxGroupSize:0

  })

  const [pageCount, setPageCount] = useState(0)  // number of pages needed to display the tours, initially set to 0.

  const [page, setPage] = useState(0)  // represents currently active page, initially set to 0.

  useEffect(()=>{

    const pages = Math.ceil(5/ 4)
    setPageCount(pages)

  //   The useEffect hook is used to calculate the number of pages based on the total number of tours (in this case, 5) and set the pageCount state variable accordingly.

  //  The effect is triggered whenever the page state variable changes.

  },[page])


  useEffect(()=>{

    if(stateData){

      setsbv({

        location:stateData.location || 'yujhjhhj',
        distance:stateData.distance || 0,
        maxGroupSize:stateData.maxGroupSize || 0
      })
    }


  }, [stateData])

  return (
    <>
      <CommonSection title={'All Tours'}/>
      <section>
        <Container>
          <Row>


            {/* <SearchBar searchbarvalues ={sbv}/> */}


                  {/* OTHER CODE */}


                  <div className="search__bar">
              <Form className='d-flex align-items-center gap-4'>
                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-fill"></i></span>
                    <div>
                        <h6>Location</h6>
                        <input type="text" placeholder={sbv.location}/>
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                    <span><i class="ri-map-pin-time-fill"></i></span>
                    <div>
                        <h6>Distance</h6>
                        <input type="number" placeholder={sbv.distance} />
                    </div>
                </FormGroup>

                <FormGroup className='d-flex gap-3 form__group form__group-last'>
                    <span><i class="ri-group-fill"></i></span>
                    <div>
                        <h6>Max people</h6>
                        <input type="number" placeholder={sbv.maxGroupSize} />
                    </div>
                </FormGroup>

                <span className='search__icon' type='submit' ><i class="ri-search-2-line"></i></span>
              </Form>
    </div>











          </Row>
        </Container>
      </section>
      <section>
        <Container>
          <Row>
            {
              tourdata?.map(tour=> (
              <Col lg='3' className='mb-4' key={tour.id}> 
                {""}
                <TourCard tour={tour}/>
              </Col>
              ))
            }
              <Col lg='12'>

                <div className='pagination d-flex align-items-center justify-content-center mt-4 gap-3'>

                  {[...Array(pageCount).keys()].map(number => (
                    <span key={number} onClick={()=> setPage(number)}
                    className={page===number ? 'active__page' : ''}
                    >
                      {number + 1}
                    </span>
                  ))}
                </div>
       
              </Col>
          </Row>
        </Container>
      </section>
      <Newsletter/>
    </>
    )
}

export default Tours