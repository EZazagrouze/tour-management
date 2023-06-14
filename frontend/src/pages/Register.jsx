import React, { useState } from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/login.css';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import registerImg from '../assets/images/register.png';
import userIcon from '../assets/images/user.png';
import SweetAlert from 'react-bootstrap-sweetalert';




const Register = () => {


//   const [credentials, setCredentials] = useState({

//     username: undefined,
//     email: undefined,
//     password: undefined

// });

const navigate = useNavigate()


const [username, setusername] = useState('')
const [email,setemail] = useState('')
const [password, setpassword] = useState('')
const [error, seterror] = useState('')
const [success, setsuccess] = useState(false)
const [btndisabled, setbtndisabled] = useState(false)

// const handleChange = e => {
//     setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
// }; 


const handleusername = (e)=>{

  setusername(e.target.value)
}

const handleemail =(e)=>{

  setemail(e.target.value)

}

const handlepassword = (e)=>{

  setpassword(e.target.value)
}

const handleClick = e =>{

  e.preventDefault();

  if(!username || !email || !password){

    seterror('Please fill all the fields')

    return

  }


  try{

    const data = {
      username: username,
      email: email,
      password: password
    }

    axios.post('http://localhost:3004/api/auth/register', data)

    .then(res=>{

      console.log(data)
      setsuccess(true)
      setbtndisabled(true)


    })

    setTimeout(()=>{

      navigate('/login')

    },3000)




  }

  catch(err){

    console.log(err)




  }
  
};


  return<section>

    <Container>
      <Row>
        <Col lg='8'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={registerImg} alt=""/>
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt=""/>
              </div>
              <h2>Register</h2>


              <Form onSubmit={handleClick}>

              <FormGroup>
                  <input type="text" placeholder='Username' required id='username' value ={username} onChange={handleusername}/>
                </FormGroup>
                <FormGroup>
                  <input type="email" placeholder='E-mail' required id='email' value ={email} onChange={handleemail}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='PASSWORD' required id='password'value ={password} onChange={handlepassword}/>
                </FormGroup>


                <Button className='btn secondary__btn auth__btn' type='submit' disabled ={btndisabled}>
                  Create account
                </Button>


              </Form>

              {success && (
                <SweetAlert success title="Successfully Registered" onConfirm={() => setsuccess(false)}>
                  Your registration was successful!
                </SweetAlert>
              )}
              <p>Already have an account <Link to='/login'>Login</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Register