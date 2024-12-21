import React, { useState } from 'react'
import { Button, Form, ListGroup} from 'react-bootstrap'
import { BiUser } from "react-icons/bi";
import { BsTelephone} from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import { BiLockAlt} from "react-icons/bi";
import img from '../images/image-1.png'
import lg from '../images/image-2.png'


function Login() {

const [userName, setuserName] = useState("")
const [PhoneNumber, setPhoneNumber] = useState("")
const [Mail, setMail] = useState("")
const [Password, setPassword] = useState("")
const [ConfirmPassword, setConfirmPassword] = useState("")


  return (

    <div className="wrapper">
        <div className="inner">
           <img src={img} alt="" className="image-1"></img>
       
        <h3>NEW ACCOUNT</h3>
            <Form>
                <Form.Group className="form-holder">
                <span className="lnr lnr-user"></span>
                    <Form.Label><BiUser/>username</Form.Label>
                    <Form.Control type='Text'  placeholder='Username' onChange={(e) => setuserName(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-holder">
                <span className="lnr lnr-phone-handset"></span>
                    <Form.Label><BsTelephone/>PhoneNumber</Form.Label>
                    <Form.Control type='Text' placeholder='PhoneNumber' onChange={(e) => setPhoneNumber(e.target.value)} />
                </Form.Group>

                <Form.Group className="form-holder">
                <span className="lnr lnr-envelope"></span>
                    <Form.Label><AiOutlineMail/>mail</Form.Label>
                    <Form.Control type='Text' placeholder='mail' onChange={(e) => setMail(e.target.value)}  />
                </Form.Group>

                <Form.Group className="form-holder">
                <span className="lnr lnr-lock"></span>
                    <Form.Label><RiLockPasswordLine/>Password</Form.Label>
                    <Form.Control type='Text' placeholder='Password' onChange={(e) => setPassword(e.target.value)}  />
                </Form.Group>

                <Form.Group className="form-holder">
                <span className="lnr lnr-lock"></span>
                    <Form.Label><BiLockAlt/>ConfirmPassword</Form.Label>
                    <Form.Control type='Text' placeholder='ConfirmPassword' onChange={(e) => setConfirmPassword(e.target.value)}  />
                </Form.Group>
                <Button  ><span>Rgister</span></Button>

            </Form>
            <img src={lg} alt="" className="image-2"></img>
    
        </div>
        </div>
  )
}

export default Login
