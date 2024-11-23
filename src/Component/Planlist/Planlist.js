import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Planlist = () => {
  const [formData, setFormData] = useState({
    fromDate: '',
    toDate: '',
    status: '',
    series: '',
    customerName: '',
    itemName: '',
    woNo: ''
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
      <h2>Work Order List
        <div>
          {/* <button className="btn btn-secondary ms-2">WorkOrder - Repeat</button> */}
          {/* <button className="btn btn-secondary ms-2">WorkOrder - Query</button> */}
        </div>
      </h2>
      <hr />

      {/* Form for filtering work orders */}
      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* From Date */}
          <Col xs={12} sm={6} md={3} lg={2}>
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

          {/* To Date */}
          <Col xs={12} sm={6} md={3} lg={2}>
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

          {/* Status */}
          <Col xs={12} sm={6} md={3} lg={2}>
            <Form.Group controlId="status">
              <Form.Label>Status</Form.Label>
              <Form.Control
                as="select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="Active">New</option>
                <option value="Inactive">InProcess</option>
                <option value="Pending">Compalate</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Series */}
          <Col xs={12} sm={6} md={3} lg={2}>
            <Form.Group controlId="series">
              <Form.Label>Series No</Form.Label>
              <Form.Control
                as="select"
                name="series"
                value={formData.series}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="Type1">Sale Order</option>
                <option value="Type2">Make To Stock</option>
                <option value="Type2">Sample</option>
                <option value="Type3">Maintance</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* Customer Name */}
          <Col xs={12} sm={6} md={3} lg={2}>
            <Form.Group controlId="customerName">
              <Form.Label>Customer Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Name"
                name="customerName"
                value={formData.customerName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Item Name */}
          <Col xs={12} sm={6} md={3} lg={2}>
            <Form.Group controlId="itemName">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Item Code."
                name="itemName"
                value={formData.itemName}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Work Order No */}
          <Col xs={12} sm={6} md={3} lg={2}>
            <Form.Group controlId="woNo">
             <select>  <option value="">All</option>
                <option value="Type1">Inward 57F4 No</option>
                <option value="Type2">Vendor Callan No</option>
                <option value="Type2">Work Order No</option>
            </select>
              <Form.Control
                type="text"
                name="woNo"
                placeholder="No."
                value={formData.woNo}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Search Button */}
          <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>

      <hr />
      
      {/* Table of work orders */}
      <div className="table-responsive my-4">
        <div className="custom-table-container">
          <table className="table table-striped table-bordered table-hover">
            <thead>
              <tr className="clr">
                <th>Sr</th>
                <th>Years</th>
                <th>Wo.No</th>
                <th>Wo.Date</th>
                <th>Time</th>
                <th>CustomerName</th>
                <th>Item Qty</th>
                <th>Inward No</th>
                <th>Callan No</th>
                <th>Wo.Status</th>
                <th>User</th>
                <th>Del|Dec|Edit</th>
                <th>View</th>
                <th><input type="checkbox" /></th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Planlist;
