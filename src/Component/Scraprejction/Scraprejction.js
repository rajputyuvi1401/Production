import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';


const Scraprejction = () => {
    const [formData, setFormData] = useState({
        plant: '',
        from: '',
        to: '',
        itemCode: '',
        customer: '',

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
    <div className="container mt-4">
    <h2> Scrap / Rejection Report    </h2>
    <hr />
    
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="plant">
          <Form.Label> Plant :</Form.Label>
            <Form.Control
              as='select'
              name="plant"
              value={formData.plant}
              onChange={handleChange}
            > 
                <option>SHARP </option>
                <option>SHARP </option>
                <option>SHARP </option>
                <option>SHARP </option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="from">
            <Form.Label>From:</Form.Label>
            <Form.Control
              type="date"
              name="from"
              value={formData.from}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="to">
            <Form.Label>To:</Form.Label>
            <Form.Control
              type="date"
              name="to"
              value={formData.to}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="itemCode">
            <Form.Label>Item Code:</Form.Label>
            <Form.Control
              type="text"
              name="itemCode"
              value={formData.itemCode}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="customer">
            <Form.Label>Customer:</Form.Label>
            <Form.Control
              type="date"
              name="customer"
              value={formData.customer}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>
        </Row>
        </Form>
    <hr/>

        <div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Sr</th>
          <th>Year</th>
          <th>Scrap No</th>
          <th>Scrap Date</th>
          <th>Customer Name</th>
          <th>Item No</th>
          <th>Item Code</th>
          <th>Item Desc</th>
          <th>Part Code</th>
          <th>Rework Qty</th>
          <th>Reject Qty</th>
          <th>Scrap Code</th>
          <th>Scrap Wt</th>
          <th>User</th>
          <th>Del</th>
          <th>View</th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>*</td>
          </tr>

        </tbody>
    </table>
  </div>
</div>
    </div>
  )
}

export default Scraprejction