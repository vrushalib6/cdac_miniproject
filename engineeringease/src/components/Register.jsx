import { Alert, Button, Col, Container, Form, Row } from "react-bootstrap"

import { useState } from "react";

import { saveStudent } from "../service/AdminService";



export function Register(){
  const [formData,setFormData]=useState({name:"",email:"",phone:"",password:"",gender:""}); //initially formdata is empty string
  const [isSubmitted,setIsSubmitted]=useState(false); //by default issubmitted is false

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value})
  }

  const handleSumbit=async (e)=>{
    e.preventDefault(); //stop form to get reloaded everytime
    try{
        const result= await saveStudent(formData); //data passiing to server savestudents()
        setFormData(({name:"",email:"",phone:"",password:"",gender:""}))      //after submitting value field should blank
        setIsSubmitted(true); //this value true when data is submited
        setTimeout(()=>{
            setIsSubmitted(false);          //after 1.3 sec alert will be  removed
        },1300)
        console.log(result.message); //this "message" defined is from student-api backend
    }catch(error){
        console.log(e);
    }
    
  }
    
   //value={isSubmitted?formData.roll:null}  //if issubmitted is true field cleared apply to all fields like name, 

    return(
        <Container className="mt-5 mb-5">
        <h3 >Register here</h3>

        <Form onSubmit={handleSumbit}>
            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" value={isSubmitted?formData.name:null} placeholder="Enter Name" name="name" onKeyUp={handleChange} />
                        
                    </Form.Group>
                </Col>

                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="email" value={isSubmitted?formData.email:null} placeholder="Enter email" name="email" onKeyUp={handleChange}/>
                    </Form.Group>
                </Col>
            </Row>

            <Row>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Phone no.</Form.Label>
                        <Form.Control type="number" value={isSubmitted?formData.phone:null} placeholder="Enter phone no" name="phone"onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                <Col lg={4}>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" value={isSubmitted?formData.password:null} placeholder="Enter Password" name="password" onKeyUp={handleChange} />
                    </Form.Group>
                </Col>
                
                <Col lg={4}>
                    <Form.Check
                        type="radio"
                        label="Male"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                  
                       
                    />
                    <Form.Check
                        type="radio"
                        label="Female"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        
                    />
                </Col>
            </Row>

            <Row>
                <Col lg={3}>
                    <Button variant="success" type="submit">Register</Button>
                </Col>
                
            </Row>
        </Form>
        <Row className= 'mt-5'>
            <Col lg={4}>
                {isSubmitted?<Alert variant="success">Registration Success!!</Alert>:null}
            </Col>

        </Row>
    </Container>
    )
}