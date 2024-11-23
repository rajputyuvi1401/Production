import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const Cycle = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        item: '',
        machineUnit: '',
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
      <h2> Cycle Time Report  </h2>
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
          <Form.Group controlId="item">
          <Form.Label>Item :</Form.Label>
          <Form.Control
              type='text'
              name="item"
            //   placeholder='BreakDown Reason'
              checked={formData.item} // Bind to state
              onChange={handleChange} // Handle change
            >
           </Form.Control>
          </Form.Group>
        </Col>
        
    
       </Row>

       <Row className="mb-3">
       <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="machineUnit">
            <Form.Label>Machine Unit :</Form.Label>
            <Form.Control
              as="select"
              name="machineUnit"
              value={formData.machineUnit}
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
       <div>
         No Data Found !!
       </div>
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

export default Cycle