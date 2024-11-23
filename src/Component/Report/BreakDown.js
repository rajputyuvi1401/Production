import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const BreakDown = () => {
    const [formData, setFormData] = useState({
        plant:'',
        dateFrom: '',
        dateTo: '',
        breakDown: '',
        machine: '',
      });

      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // Handle form submission logic
      };
  return (
    <div className="container mt-4 border">
      <h2> BreakDown Analysis  </h2>
      <hr />
    
     <Form onSubmit={handleSubmit} className='border'>
      <Row className="mb-3">
        {/* Rework No */}

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="plant">
            <Form.Label>Plant :</Form.Label>
            <Form.Control
              as="select"
              name="plant"
              value={formData.plant}
              onChange={handleChange}
            > <option>Select</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
        </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="dateFrom">
          <Form.Label>Date From :</Form.Label>
          <Form.Control
              type='date'
              name="dateFrom"
              checked={formData.dateFrom} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>
      
       
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="toDate">
          <Form.Label> To Date :</Form.Label>
            <Form.Control
              type='date'
              name="toDate"
              value={formData.toDate}
              onChange={handleChange}
            > 
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="breakDown">
          <Form.Label>Shift :</Form.Label>
          <Form.Control
              type='text'
              name="breakDown"
              placeholder='BreakDown Reason'
              checked={formData.breakDown} // Bind to state
              onChange={handleChange} // Handle change
            >
           </Form.Control>
          </Form.Group>
        </Col>
        
    
       </Row>

       <Row className="mb-3">
       <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="machine">
            <Form.Label>Machine :</Form.Label>
            <Form.Control
              as="select"
              name="machine"
              value={formData.machine}
              onChange={handleChange}
            >
            <option>Select</option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
               <option></option>
        </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={3} lg={1} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>

      </Row>
       </Form>
       
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 <br/>
 
    </div>
  )
}

export default BreakDown