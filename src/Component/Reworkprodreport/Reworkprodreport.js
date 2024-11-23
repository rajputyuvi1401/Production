import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import "./Reworkprodreport.css";

const Reworkprodreport = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        item: '',

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
    <h2>Rework Production Report    </h2>
    <hr />

    {/* Form for filtering work orders */}
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="from">
          <Form.Label>:</Form.Label>
            <Form.Control
              as='select'
              name="from"
              value={formData.from}
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
          <Form.Group controlId="item">
            <Form.Label>Item</Form.Label>
            <Form.Control
              type="text"
              name="item"
              value={formData.item}
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
          <th>Years</th>
          <th>Plant</th>
          <th>Prod No</th>
          <th>Prod Date</th>
          <th>Item No</th>
          <th>Item Code</th>
          <th>Item Desc</th>
          <th>Part Code</th>
          <th>Charge FG</th>
          <th>Rew To Ok</th>
          <th>Rej To Ok</th>
          <th>Rew To Rej</th>
          <th>Remark</th>
          <th>User</th>
          <th>Edit</th>
          <th>Del</th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td> 24-25</td>
            <td>SHARP</td>
            <td> REPWROO242500191</td>
            <td> 20/09/2024</td>
            <td> FG1051</td>
            <td> 520DUOO102</td>
            <td> FIXNUT</td>
            <td> FPFG1051</td>
            <td> FG1051 FPFG1051 </td>
            <td>545</td>
            <td>11</td>
            <td>0</td>
            <td>--</td>
            <td>Auth</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>2</td>
            <td> 24-25</td>
            <td>SHARP</td>
            <td> REPWROO242500192</td>
            <td> 20/09/2024</td>
            <td> FG1051</td>
            <td> 520DUOO102</td>
            <td> FIXNUT</td>
            <td> FPFG1051</td>
            <td> FG1051 FPFG1051 </td>
            <td>114</td>
            <td>6</td>
            <td>0</td>
            <td>--</td>
            <td>Auth</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>3</td>
            <td> 24-25</td>
            <td>SHARP</td>
            <td> REPWROO242500193</td>
            <td> 20/09/2024</td>
            <td> FG1051</td>
            <td> 520DUOO102</td>
            <td> FIXNUT CARGO</td>
            <td> FPFG1051</td>
            <td> FG1051 FPFG1051 </td>
            <td>57</td>
            <td>26</td>
            <td>0</td>
            <td>--</td>
            <td>Auth</td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td>4</td>
            <td> 24-25</td>
            <td>SHARP</td>
            <td> REPWROO242500194</td>
            <td> 20/09/2024</td>
            <td> FG1051</td>
            <td> 520DUOO102</td>
            <td> FIXNUT</td>
            <td> FPFG1051</td>
            <td> FG1051 FPFG1051 </td>
            <td>62</td>
            <td>0</td>
            <td>0</td>
            <td>--</td>
            <td>Auth</td>
            <td></td>
            <td></td>
          </tr>

        </tbody>
    </table>
  </div>

  <br/>
  <br/>
  <br/>
</div>
    </div>
  )
}

export default Reworkprodreport