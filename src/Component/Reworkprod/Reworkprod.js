import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
const Reworkprod = () => {
    const [formData, setFormData] = useState({
        reworkno: '',
        reworkDate: '',
        reworkTime: '',
        machine: '',
        workOrder: '',
        itemCode: '',
        partCode: '',
        heatCode: '',
        reworktoOk: '',
        rejecttoOk: '',
        changeFG: '',
        // partCode:'',

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
    <h2>Rework Production</h2>
    <hr />

    {/* Form for filtering work orders */}
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reworkno">
            <Form.Label>Rework No</Form.Label>
            <Form.Control
              type="number"
              name="reworkno"
              value={formData.reworkno}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        {/* Rework Date */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reworkDate">
            <Form.Label>Rework Date</Form.Label>
            <Form.Control
              type="date"
              name="reworkDate"
              value={formData.reworkDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        {/* Shift */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reworkTime">
            <Form.Label>Rework Time</Form.Label>
            <Form.Control
             type='time'
              name="reworkTime"
              value={formData.reworkTime}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Col>

        {/* Contractor */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="machine">
            <Form.Label>Machine</Form.Label>
            <Form.Control
              as="select"
              name="Machine"
              value={formData.machine}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="Type1">COMPANY</option>
              <option value="Type2">SAINATH JADHAV</option>
              <option value="Type3">MOMIN PATEL</option>
              <option value="Type4">Quality Control</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        {/* Supervisor */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="workOrder">
            <Form.Label>Work Order</Form.Label>
            <Form.Control
            as='select'
              name="workOrder"
              value={formData.workOrder}
              onChange={handleChange}
            >
            <option value="">Select</option>
            <option value="Type1">COMPANY</option>
            <option value="Type2">SAINATH JADHAV</option>
            <option value="Type3">MOMIN PATEL</option>
            <option value="Type4">Quality Control</option>
          </Form.Control>
          </Form.Group>
        </Col>

        {/* Item Code */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="itemCode">
            <Form.Label>Item Code</Form.Label>
            <Form.Control
              type="text"
              name="itemCode"
              value={formData.itemCode}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>


        {/* Part Code */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="partCode">
            <Form.Label>Part Code</Form.Label>
            <Form.Control
              as="select"
              name="partCode"
              value={formData.partCode}
              onChange={handleChange}
            >
              <option value="">-----</option>
              <option value="Type1">Sale Order</option>
              <option value="Type2">Make To Stock</option>
              <option value="Type3">Sample</option>
              <option value="Type4">Maintenance</option>
            </Form.Control>
          </Form.Group>
        </Col>

        {/* Heat No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="heatNo">
            <Form.Label>Heat No</Form.Label>
            <Form.Control
              as="select"
              name="heatNo"
              value={formData.heatNo}
              onChange={handleChange}
            >
              <option value="">  ----</option>
              <option value="Type1">Sale Order</option>
              <option value="Type2">Make To Stock</option>
              <option value="Type3">Sample</option>
              <option value="Type4">Maintenance</option>
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>

      <Row className="mb-3">
        {/* Prod Time */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="rejecttoOk">
            <Form.Label>Reject To Ok</Form.Label>
            <Form.Control
              type="text"
              name="rejecttoOk"
              value={formData.rejecttoOk}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        {/* Rework To OK */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reworktoOk">
            <Form.Label>Rework To OK</Form.Label>
            <Form.Control
              type="text"
              name="reworktoOk"
              value={formData.reworktoOk}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>


          {/* Part Code */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="changeFG">
            <Form.Label>Change FG</Form.Label>
            <Form.Control
              type='text'
              name="changeFG"
              value={formData.changeFG}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Col>

          {/* Part Code */}
          <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="partCode">
            <Form.Label>Part Code</Form.Label>
            <Form.Control
              as="select"
              name="partCode"
              value={formData.partCode}
              onChange={handleChange}
            >
              <option value="">-----</option>
              <option value="Type1">Sale Order</option>
              <option value="Type2">Make To Stock</option>
              <option value="Type3">Sample</option>
              <option value="Type4">Maintenance</option>
            </Form.Control>
          </Form.Group>
        </Col>

        {/* Heat No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="heatNo">
            <Form.Label>Heat No</Form.Label>
            <Form.Control
              as="select"
              name="heatNo"
              value={formData.heatNo}
              onChange={handleChange}
            >
              <option value="">  ----</option>
              <option value="Type1">Sale Order</option>
              <option value="Type2">Make To Stock</option>
              <option value="Type3">Sample</option>
              <option value="Type4">Maintenance</option>
            </Form.Control>
          </Form.Group>
        </Col>

        {/* Submit Button */}
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            ADD
          </Button>
        </Col>
      </Row>
    </Form>
    <hr />

    <div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Sr</th>
          <th>Item Desc</th>
          <th>Item Code</th>
          <th>Rework To - Ok Qty</th>
          <th>Reject To - Ok Qty</th>
          <th>Rework To - Reject Qty</th>
          <th> Delect </th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> * </td>
          </tr>

        </tbody>
    </table>

    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

        <div className='border ml-4'>
        <Row className="mb-3">
        {/* Prod Time */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="rejecttoOk">
            <Form.Label>Reason for Rework :</Form.Label>
            <Form.Control
              type="message"
              name="rejecttoOk"
              value={formData.rejecttoOk}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        {/* Rework To OK */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reworktoOk">
            <Form.Label>Quality Remark :</Form.Label>
            <Form.Control
              type="text"
              name="reworktoOk"
              value={formData.reworktoOk}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reworktoOk">
            <Form.Label>Operator : </Form.Label>
            <Form.Control
              type="text"
              name="reworktoOk"
              value={formData.reworktoOk}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            ADD
          </Button>
        </Col>

        </Row>
        </div>

  </div>
</div>

</div>
  )
}

export default Reworkprod