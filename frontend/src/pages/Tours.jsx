import React, {useState, useEffect} from 'react';
import CommonSection from '../shared/CommonSection';
import '../styles/tour.css';
import Newsletter from '../shared/Newsletter';
import SearchBar from '../shared/SearchBar';
import TourCard from '../shared/TourCard';
import tourdata from '../assets/data/tours';
import {Container} from 'reactstrap';
import {Row} from 'reactstrap';
import {Col} from 'reactstrap';


const Tours = () => {

  const [pageCount, setPageCount] = useState(0)
  const [page, setPage] = useState(0)

  useEffect(()=>{
    const pages = Math.ceil(5/ 4)
    setPageCount(pages)
  },[page])

  return (
    <>
      <CommonSection title={'ALL ttours'}/>
      <section>
        <Container>
          <Row>
            <SearchBar/>
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