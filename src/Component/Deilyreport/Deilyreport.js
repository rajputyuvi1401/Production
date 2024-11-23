import React, { useState } from 'react';

import { Form, Button, Row, Col } from 'react-bootstrap';

const Deilyreport = () => {
  const [formData, setFormData] = useState({
    plant: '',
    fromDate: '',
    toDate: '',
    series: '',
    shift: '',
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
    console.log('Form Data:', formData);
    // You can replace this with your actual logic, like calling an API
  };

  return (
    <div className="container mt-4">
      <h2>Deily Production Report</h2>
      <div>
        {/* <button className="btn btn-secondary ms-2">Product - Repeat</button>f */}
        {/* <button className="btn btn-secondary ms-2">WorkOrder - Query</button> */}
      </div>
      <hr />

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          {/* Plant */}
          <Col xs={12} sm={6} md={2}>
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

          {/* From Date */}
          <Col xs={12} sm={6} md={2}>
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
          <Col xs={12} sm={6} md={2}>
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

          {/* Series */}
          <Col xs={12} sm={6} md={2}>
            <Form.Group controlId="series">
              <Form.Label>Series</Form.Label>
              <Form.Control
                as="select"
                name="series"
                value={formData.series}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="Deily Production">Deily Production</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Shift */}
          <Col xs={12} sm={6} md={3}>
            <Form.Group controlId="shift">
              <Form.Label>Shift</Form.Label>
              <Form.Control
                as="select"
                name="shift"
                value={formData.shift}
                onChange={handleChange}
              >
                <option value="">All</option>
                <option value="First 8 HRS">First 8 HRS (07:00:00 - 15:30:00)</option>
                <option value="Second 8 HRS">Second 8 HRS (15:30:00 - 23:30:00)</option>
                <option value="Third 8 HRS">Third 8 HRS (23:30:00 - 07:00:00)</option>
                <option value="First 12 HRS">First 12 HRS (07:00:00 - 19:00:00)</option>
                <option value="Second 12 HRS">Second 12 HRS (19:00:00 - 07:00:00)</option>
                <option value="First 10 HRS">First 10 HRS (08:00:00 - 18:30:00)</option>
                <option value="Second 10 HRS">Second 10 HRS (20:00:00 - 06:30:00)</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Submit Button */}
          <Col xs={12} sm={6} md={2} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              Search
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
          <th>Year</th>
          <th>Parcel</th>
          <th>Prod.Date</th>
          <th>Sup&Cont</th>
          <th>Machine</th>
          <th>Shift</th>
          <th>ItemDate</th>
          <th>Op</th>
          <th>PartCode</th>
          <th>Qc</th>
          <th>PrclQty</th>
          <th>Remark</th>
          <th>Reject</th>
          <th>Ok qty</th>
          <th>CrWt</th>
          <th>T/Mi</th>
          <th>IUC</th>
          <th>Rtime</th>
          <th>User</th>
          <th>View</th>
          <th>ACi</th>
        </tr>
      </thead>
      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td>24-25</td>
            <td>DP242525202</td>
            <td>20/09/2024</td>
            <td> New Qty Control </td>
            <td> Visual 1 Visual </td>
            <td>First 8 HRS Qty Control</td>
            <td>FG1051 520DU00102 FIX NUT </td>
            <td>45</td>
            <td>CHFG1051 TPFG1051 CHECKING </td>
            <td> </td>
            <td>2800</td>
            <td>0</td>
            <td>0</td>
            <td>2800 </td>
            <td>0.04 </td>
            <td>99.04</td>
            <td>A843333 </td>
            <td>08:00</td>
            <td> Togre </td>
            <td> </td>
            <td> </td>
          </tr>

          <tr>
            <td>2</td>
            <td>24-25</td>
            <td>DP242525201</td>
            <td>20/09/2024</td>
            <td> New Qty Control </td>
            <td> Visual 1 Visual </td>
            <td>First 8 HRS Qty Control</td>
            <td>FG1021 520QJDD312 WEELCYLSLOT TED PISTON-REAR </td>
            <td>75</td>
            <td>CHFG1021 GR1FG1021 CHECKING </td>
            <td> </td>
            <td>5500</td>
            <td>0</td>
            <td>0</td>
            <td>5500 </td>
            <td>0.13 </td>
            <td>712.08</td>
            <td>P240045 </td>
            <td>08:00</td>
            <td> Togre </td>
            <td> </td>
            <td> </td>
          </tr>
        </tbody>
    </table>
  </div>

      </div>



    </div>
  )
}

export default Deilyreport