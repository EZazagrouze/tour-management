import React,{useRef} from 'react'
import './search-bar.css';
import {Col, Form, FormGroup } from 'reactstrap';
import {useNavigate} from 'react-router-dom'


const SearchBar = ({searchbarvalues}) => {


    const navigate = useNavigate()

    const locationRef = useRef('')
    const distanceRef = useRef(0)
    const maxGroupSizeRef = useRef(0)

    const searchHandler = ()=>{
        const location = locationRef.current.value
        const distance = distanceRef.current.value
        const maxGroupSize = maxGroupSizeRef.current.value


        if(location==='' || distance==='' || maxGroupSize==='')
            return alert('all fields are required!')

            navigate('/tours', {state:{location, distance, maxGroupSize}})

            console.log({state:{location, distance, maxGroupSize}})

        
    }





  return <Col lg='12'>
    <div className="search__bar">
        <Form className='d-flex align-items-center gap-4'>
            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-fill"></i></span>
                <div>
                    <h6>Location</h6>
                    <input type="text" placeholder='where are you going?' defaultValue={searchbarvalues.location} ref={locationRef}/>
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-fast'>
                <span><i class="ri-map-pin-time-fill"></i></span>
                <div>
                    <h6>Distance</h6>
                    <input type="number" placeholder='distance k/m' defaultValue={searchbarvalues.distance}ref={distanceRef} />
                </div>
            </FormGroup>

            <FormGroup className='d-flex gap-3 form__group form__group-last'>
                <span><i class="ri-group-fill"></i></span>
                <div>
                    <h6>Max people</h6>
                    <input type="number" placeholder='0' defaultValue={searchbarvalues.maxGroupSize} ref={maxGroupSizeRef} />
                </div>
            </FormGroup>

            <span className='search__icon' type='submit' onClick={searchHandler}><i class="ri-search-2-line"></i></span>
        </Form>
    </div>

  </Col>
}

export default SearchBar