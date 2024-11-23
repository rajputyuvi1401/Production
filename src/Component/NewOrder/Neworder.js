import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Neworder = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    plant: '',
    status: '',
    type: '',
    series: '',
    auth: '',
    customerName: '',
    itemName: '',
    woNo: '',
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
    console.log('Search Criteria:', formData);
    // Add your search logic here
  };

  return (
    <div className="container mt-4">
       <h2>
        Work Order List
        {/* <div> 
        <button className="btn btn-secondary ms-2">WorkOrder - Repeat</button>
        <button className="btn btn-secondary ms-2">WorkOrder - Query</button> </div> */}
      </h2>
      <hr></hr>
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col xs={12} md={2}>
            <Form.Group controlId="fromDate">
              <Form.Label>From Date</Form.Label>
              <Form.Control
                type="date"
                name="fromDate"
                value={formData.fromDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="toDate">
              <Form.Label>To Date</Form.Label>
              <Form.Control
                type="date"
                name="toDate"
                value={formData.toDate}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="plant">
              <Form.Label>Plant</Form.Label>
              <Form.Control
                type="text"
                name="plant"
                value={formData.plant}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">Select Status</option>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
                <option value="Pending">Pending</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                name="type"
                value={formData.type}
                onChange={handleChange}
              >
                <option value="">Select Type</option>
                <option value="Type1">Type 1</option>
                <option value="Type2">Type 2</option>
                <option value="Type3">Type 3</option>
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="series">
              <Form.Label>Series</Form.Label>
              <Form.Control
                type="text"
                name="series"
                value={formData.series}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* All fields in one line on large screens */}
          <Col xs={12} md={2}>
            <Form.Group controlId="auth">
              <Form.Label>Authorization</Form.Label>
              <Form.Control
                type="text"
                name="auth"
                value={formData.auth}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="customerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="itemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Form.Group controlId="woNo">
              <Form.Label>WO No</Form.Label>
              <Form.Control 
                type="text"
                name="woNo"
                value={formData.woNo}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col xs={12} md={2}>
            <Button variant="primary" type="submit" className="mt-4">
              Search
            </Button>
          </Col>
          <Col xs={12} md={2}>
            <Button variant="primary" type="submit" className="mt-4">
              Search Option
            </Button>
          </Col>
        </Row>
      </Form>
      


   <hr></hr>
      

        <div className="table-responsive my-4">
            <div className="custom-table-container">
                 <table className="table table-striped table-bordered table-hover">
                    <thead>
                      <tr className="clr"> 
                        <th>Sr</th>
                        <th>Years</th>
                        <th>Plant</th>
                        <th>Wo.No</th>
                        <th>Wo.Date</th>
                        <th>Code</th>
                        <th>CustomerName</th>
                        <th>ItemCode | Description</th>
                        <th>SO/MO.No</th>
                        <th>Cust.PO.No</th>
                        <th>Wo.Status</th>
                        <th>User</th>
                        <th>Auth.</th>
                        <th>MI</th>
                        <th>Del|Dec|Edit</th>
                        <th>View</th>
                        <th><input type="checkbox" id=" "></input></th>
                      </tr>
                    </thead>
               </table>
            </div>
       </div>



    </div>
  );
};

export default Neworder;
