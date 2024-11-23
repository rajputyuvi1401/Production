import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const Contractorpay = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
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
    <h2> Contractor Payment List   </h2>
    <hr />
    
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="dateFrom">
            <Form.Label>From:</Form.Label>
            <Form.Control
              type="date"
              name="dateFrom"
              value={formData.dateFrom}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="dateTo">
          <Form.Label>To:</Form.Label>
          <Form.Control
              type="date"
              name="dateTo"
              checked={formData.dateTo} // Bind to state
              onChange={handleChange} // Handle change
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="type">
          <Form.Label> Type :</Form.Label>
            <Form.Control
              as='select'
              name="type"
              value={formData.type}
              onChange={handleChange}
            > 
               <option value="">Select</option>
                <option value=" "> COMPANY</option>
                <option value=" ">SAINATH JADHAV </option>
                <option value=" ">MOMIN PATEL</option>
                <option value=" ">Quality Control</option>
            </Form.Control>
          </Form.Group>
        </Col>
        
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col><Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Search Option
          </Button>
        </Col>

       </Row>

       </Form>
       <hr/>
       <div className='box border mt-4 color-blue'>
          No Data Found !!
       </div>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>
       <br/>  <br/>
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

export default Contractorpay