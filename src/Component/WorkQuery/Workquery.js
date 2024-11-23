import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Workquery = () => {
  const [formData, setFormData] = useState({
    plant: '',
    woType: '',
    fromDate: '',
    toDate: '',
    woNo: false,
    poNo: false,
    customerName: false,
    itemName: false,
    woBalCity: false,
    woStatus: '',
    userQuery: '',
    erpQuery: '',
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        [name]: checked,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // You can replace this with your actual logic, like calling an API
  };

  return (
    <div className="container mt-4">
      <h3>Execute Report</h3>
      <hr/>
      <Form onSubmit={handleSubmit}>
        {/* Plant */}
        <Form.Group controlId="plant" className="mb-3">
          <Form.Label>Plant</Form.Label>
          <Form.Control
            type="text"
            name="plant"
            value={formData.plant}
            onChange={handleChange}
          />
        </Form.Group>

        {/* WO Type */}
        <Form.Group controlId="woType" className="mb-3">
          <Form.Label>WO Type</Form.Label>
          <Form.Control
            type="text"
            name="woType"
            value={formData.woType}
            onChange={handleChange}
          />
        </Form.Group>

        {/* From Date */}
        <Form.Group controlId="fromDate" className="mb-3">
          <Form.Label>From Date</Form.Label>
          <Form.Control
            type="date"
            name="fromDate"
            value={formData.fromDate}
            onChange={handleChange}
          /> 
        </Form.Group>

        {/* To Date */}
        <Form.Group controlId="toDate" className="mb-3">
          <Form.Label>To Date</Form.Label>
          <Form.Control
            type="date"
            name="toDate"
            value={formData.toDate}
            onChange={handleChange}
          />
        </Form.Group>

        {/* WO No Checkbox */}
        <Form.Group controlId="woNo" className="mb-3">
          <Form.Check
            type="checkbox"
            label="WO No"
            name="woNo"
            checked={formData.woNo}
            onChange={handleChange}
          />
        </Form.Group>

        {/* PO No Checkbox */}
        <Form.Group controlId="poNo" className="mb-3">
          <Form.Check
            type="checkbox"
            label="PO No"
            name="poNo"
            checked={formData.poNo}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Customer Name Checkbox */}
        <Form.Group controlId="customerName" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Customer Name"
            name="customerName"
            checked={formData.customerName}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Item Name Checkbox */}
        <Form.Group controlId="itemName" className="mb-3">
          <Form.Check
            type="checkbox"
            label="Item Name"
            name="itemName"
            checked={formData.itemName}
            onChange={handleChange}
          />
        </Form.Group>

        {/* WO Bal City Checkbox */}
        <Form.Group controlId="woBalCity" className="mb-3">
          <Form.Check
            type="checkbox"
            label="WO Bal City"
            name="woBalCity"
            checked={formData.woBalCity}
            onChange={handleChange}
          />
        </Form.Group>

        {/* WO Status */}
        <Form.Group controlId="woStatus" className="mb-3">
          <Form.Label>WO Status</Form.Label>
          <Form.Control
            as="select"
            name="woStatus"
            value={formData.woStatus}
            onChange={handleChange}
          >
            <option value="">Select WO Status</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
          </Form.Control>
        </Form.Group>

        {/* User Query */}
        <Form.Group controlId="userQuery" className="mb-3">
          <Form.Label>User Query</Form.Label>
          <Form.Control
            type="text"
            name="userQuery"
            value={formData.userQuery}
            onChange={handleChange}
          />
        </Form.Group>

        {/* ERP Query */}
        <Form.Group controlId="erpQuery" className="mb-3">
          <Form.Label>ERP Query</Form.Label>
          <Form.Control
            type="text"
            name="erpQuery"
            value={formData.erpQuery}
            onChange={handleChange}
          />
        </Form.Group>

        {/* Execute Report Button */}
        <Button variant="primary" type="submit" block>
          Execute Report
        </Button>
      </Form>
    </div>
  );
};

export default Workquery;
