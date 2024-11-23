import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const OperatorReport = () => {
    const [formData, setFormData] = useState({
        dateFrom: '',
        dateTo: '',
        operatorSuper: '',
        machine: '',
        item:'',
        none:'',

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
      <h2> Operator Performance Report  </h2>
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
          <Form.Group controlId="operatorSuper">
          <Form.Label>Operator Supervisor :</Form.Label>
          <Form.Control
              type='text'
              name="operatorSuper"
            //   placeholder='BreakDown Reason'
              checked={formData.operatorSuper} // Bind to state
              onChange={handleChange} // Handle change
            >
           </Form.Control>
          </Form.Group>
        </Col>
        
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="machine">
            <Form.Label>Machine :</Form.Label>
            <Form.Control
              as="select"
              name="machine"
              value={formData.machine}
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
    
       </Row>

       <Row className="mb-3">
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
        
        <Col xs={12} sm={6} md={3} lg={3} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>

          <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="none">
          <Form.Label>:</Form.Label>
          <Form.Control
              type='text'
              name="none"
            //   placeholder='BreakDown Reason'
              checked={formData.none} // Bind to state
              onChange={handleChange} // Handle change
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
     

       <div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Sr</th>
          <th>Prod No </th>
          <th>Prod Date</th>
          <th>Op Code</th>
          <th>Operator</th>
          <th>Machine</th>
          <th>Item Desc</th>
          <th>Heat No</th>
          <th>Op No</th>
          <th>Part Code</th>
          <th>Operation</th>
          <th>Start Time</th>
          <th>End Time</th>
          <th>Actual Qty</th>
          <th>Target Qty</th>
          <th>Productivity Qty</th>
          <th>Prod Time</th>
          <th>Actual Time</th>
          <th>Productivity Time</th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td>242525201</td>
            <td>20/09/2024</td>
            <td>221</td>
            <td>New</td>
            <td>Visual</td>
            <td>520QJ00312WEEL CYL5LOTTED PVSTONREAR</td>
            <td>F240046</td>
            <td>75</td>
            <td>CHFG1021</td>
            <td>CHECKING</td>
            <td>07:00</td>
            <td>15:30</td>
            <td>5500</td>
            <td>9600</td>
            <td>57.29</td>
            <td>08:00</td>
            <td>04:35</td>
            <td>57.25</td>
          </tr>
        </tbody>
        <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>2</td>
            <td>242525202</td>
            <td>20/09/2024</td>
            <td>221</td>
            <td>New</td>
            <td>Visual</td>
            <td>520DU00102 FIX-NUT</td>
            <td>A533333</td>
            <td>45</td>
            <td>CHFG1051</td>
            <td>CHECKING</td>
            <td>07:00</td>
            <td>15:30</td>
            <td>2800</td>
            <td>9600</td>
            <td>29.17</td>
            <td>08:00</td>
            <td>02:20</td>
            <td>29.13</td>
          </tr>
        </tbody>
        <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>3</td>
            <td>242525147</td>
            <td>20/09/2024</td>
            <td>221</td>
            <td>New</td>
            <td>Visual</td>
            <td>520QJ00312WEEL CYL5LOTTED PVSTONREAR</td>
            <td>F240046</td>
            <td>75</td>
            <td>CHFG1021</td>
            <td>CHECKING</td>
            <td>07:00</td>
            <td>15:30</td>
            <td>6149</td>
            <td>9600</td>
            <td>64.05</td>
            <td>08:00</td>
            <td>05:07</td>
            <td>64.00</td>
          </tr>
        </tbody>
    </table>
  </div>
  </div>
 <br/>
 <br/>
 <br/>
 <br/>
 
    </div>
  )
}

export default OperatorReport