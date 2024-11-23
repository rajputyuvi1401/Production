import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const ReworkReport = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        toDate: '',
        monthWise: '',
        operatorWise: '',
        reasonWise: '',
        itemWise: '',
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
      <h2> Process Defect - Rework Report  </h2>
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
          <Form.Group controlId="monthWise">
          {/* <Form.Label>Shift :</Form.Label> */}
          <Form.Check
              type="checkbox"
              name="monthWise"
              label="Month Wise"
              checked={formData.monthWise} // Bind to state
              onChange={handleChange} // Handle change
            />
          <Form.Control
              as="select"
              name="monthWise"
              checked={formData.monthWise} // Bind to state
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
          <Form.Group controlId="operatorWise">
            {/* <Form.Label>Item Name :</Form.Label> */}
            <Form.Check
              type="checkbox"
              name="operatorWise"
              label="Operator Wise"
              checked={formData.operatorWise} // Bind to state
              onChange={handleChange} // Handle change
            />
            <Form.Control
              type="text"
              name="operatorWise"
              value={formData.operatorWise}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
       </Row>

       <Row className="mb-3">

        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="reasonWise">
          {/* <Form.Label>Total Production Qty :</Form.Label> */}
          <Form.Check
              type="checkbox"
              name="reasonWise"
              label="Reason Wise"
              checked={formData.reasonWise} // Bind to state
              onChange={handleChange} // Handle change
            />
          <Form.Control
              as="select"
              name="reasonWise"
              checked={formData.reasonWise} // Bind to state
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
          <Form.Group controlId="itemWise">
          {/* <Form.Label> Item Rate :</Form.Label> */}
          <Form.Check
              type="checkbox"
              name="itemWise"
              label="Item Wise"
              checked={formData.itemWise} // Bind to state
              onChange={handleChange} // Handle change
            />
            <Form.Control
              type='text'
              name="itemWise"
              value={formData.itemWise}
              onChange={handleChange}
            > 
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
       
 <div> No Data Found !</div>
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

export default ReworkReport