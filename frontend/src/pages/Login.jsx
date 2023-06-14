import React, { useState } from 'react'
import {Container, Row, Col, Form, FormGroup, Button} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../styles/login.css';

import loginImg from '../assets/images/login.png';
import userIcon from '../assets/images/user.png';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import SweetAlert from 'react-bootstrap-sweetalert';




const Login = () => {


  const navigate = useNavigate()

//   const [credentials, setCredentials] = useState({
//     email: undefined,
//     password: undefined
// });

// const handleChange = e => {
//     setCredentials(prev=>({...prev, [e.target.id]:e.target.value}))
// }; 


const [email, setemail] = useState('')
const [password, setpassword] = useState('')
const [error, seterror] = useState('')
const [succ, setsucc] = useState(false)


const handleemail = (e)=>{

  setemail(e.target.value)
}

const handlepassword = (e)=>{

  setpassword(e.target.value)
}



const handleClick = e =>{
  e.preventDefault();

  if(!email || !password){

    seterror('Please provide the full details')

    return
  }


  try{

    const logindata = {

      email: email,
      password: password
    }

    axios.post('http://localhost:3004/api/auth/login', logindata)

    .then(res=>{

      console.log(logindata)
      setsucc(true)

    })

    setTimeout(()=>{

      navigate('/home')

    },2000)



  }

  catch(err){

    err.response.data.msg && seterror(err.response.data.msg)

  }


  
};


  return <section>
    <Container>
      <Row>
        <Col lg='8'>
          <div className="login__container d-flex justify-content-between">
            <div className="login__img">
              <img src={loginImg} alt=""/>
            </div>

            <div className="login__form">
              <div className="user">
                <img src={userIcon} alt=""/>
              </div>
              <h2>Login</h2>

              <Form onSubmit={handleClick}>


                <FormGroup>
                  <input type="email" placeholder='E-mail' required id='email' value ={email} onChange={handleemail}/>
                </FormGroup>
                <FormGroup>
                  <input type="password" placeholder='PASSWORD' required id='password' value={password} onChange={handlepassword}/>
                </FormGroup>
                <Button className='btn secondary__btn auth__btn' type='submit'>
                  Login
                </Button>

                {succ && (
                <SweetAlert success title="Login Successful" onConfirm={() => setsucc(false)}>
                  Your registration was successful!
                </SweetAlert>
              )}


              </Form>
              <p>Don't have an account <Link to='/registre'>Create</Link></p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
}

export default Login