import { useState } from "react";
import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";
import { login } from "../service/AdminService";

export function Login() {
    const navigate=useNavigate();
    const [formData,setFormData]=useState({email:"",password:""});
    const [loginError,setLoginError]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await login(formData); //data will go to service backend to validate
          localStorage.setItem("token",result.token);
          navigate("/dashboard");//redirected to next page
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }
    return (
        <Container className="mt-5 mb-5" >
            <Row>
                <Col lg={6}>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3">
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="text" placeholder="Enter Email" name="email" onChange={handleChange} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" name="password" onChange={handleChange} />
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                    {loginError?<Alert variant="danger" className="mt-3">Invalid phone or password</Alert>:null}
                </Col>
            </Row>
        </Container>//if want to remove invalid apply settimeout
    );
}