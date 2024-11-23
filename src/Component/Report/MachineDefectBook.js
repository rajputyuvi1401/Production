import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const MachineDefectBook = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        shift: '',
        group: '',
        unitMachine: '',
        type: '',
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
      <h2> Machine Idle Time Booking  </h2>
      <hr />
    
     <Form onSubmit={handleSubmit} className='border'>
      <Row className="mb-3">
        {/* Rework No */}

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
          <Form.Group controlId="shift">
          <Form.Label>Shift :</Form.Label>
          <Form.Control
              as="select"
              name="shift"
              checked={formData.shift} // Bind to state
              onChange={handleChange} // Handle change
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
        
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="group">
            <Form.Label>Group :</Form.Label>
            <Form.Control
              as="select"
              name="group"
              value={formData.group}
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
       </Row>

       <Row className="mb-3">

        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="unitMachine">
          <Form.Label>Unit Machine :</Form.Label>
          <Form.Control
              as="select"
              name="unitMachine"
              checked={formData.unitMachine} // Bind to state
              onChange={handleChange} // Handle change
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

       <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="type">
          <Form.Label> Type :</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type}
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

export default MachineDefectBook