import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const Machinereport = () => {
    const [formData, setFormData] = useState({
        dateRange: '',
        shift: '',
        machineName: '',
        breakDown: '',

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
    <h2> Machine Idle Reason  List    </h2>
    <hr />
    
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="dateRange">
            <Form.Label>Date Range:</Form.Label>
            <Form.Control
              type="date"
              name="dateRange"
              value={formData.dateRange}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="machineName">
          <Form.Check
              type="checkbox"
              name="utilice"
              label="Machine Type"
              checked={formData.utilice} // Bind to state
              onChange={handleChange} // Handle change
            />
            <Form.Control
              as='select'
              name="machineName"
              value={formData.machineName}
              onChange={handleChange}
            > 
                <option>Select </option>
                <option>AY-CGR1 | CENTERLESS GRIDING 1 </option>
                <option>AY-CGR1 | CENTERLESS GRIDING 2</option>
                <option>AY-D7 | DRILLING 7</option>
                <option>AY-D7 | DRILLING 8 </option>
                <option>AY-M3 | MILLING 3 </option>
                <option>AY-SO1 | SECOND OPERATION AY 1 </option>
                <option>AY-SO2 | SECOND OPERATION AY 2 </option>
                <option>AY-SO3 | SECOND OPERATION AY 3 </option>
                <option>AY-T-1 | TROUB 25 1 </option>
                <option>AY-T-10 | TROUB 25 10 </option>
                <option>AY-T-11 | TROUB 25 11 </option>
                <option>AY-T-12 | TROUB 25 12 </option>
                <option>AY-T-13 | TROUB 25 13 </option>
                <option>AY-T-2 | TROUB 25 2 </option>
                <option>AY-T-3 | TROUB 25 3 </option>
                <option>AY-T-4 | TROUB 25 4 </option>
                <option>AY-T-5 | TROUB 25 5 </option>
                <option>AY-T-6 | TROUB 25 6 </option>

            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="shift">
          {/* <Form.Label> Shift :</Form.Label> */}
          <Form.Check
              type="checkbox"
              name="utilice"
              label="Shift"
              checked={formData.utilice} // Bind to state
              onChange={handleChange} // Handle change
            />
            <Form.Control
              as='select'
              name="shift"
              value={formData.shift}
              onChange={handleChange}
            > 
               <option value="">Select</option>
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

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="utilice">
            {/* <Form.Label> Break Down  </Form.Label> */}
            <Form.Check
              type="checkbox"
              name="utilice"
              label="Break Down"
              checked={formData.utilice} // Bind to state
              onChange={handleChange} // Handle change
            />
            
          <Form.Control
            as="select"
            name="utilice"
            checked={formData.utilice} // Bind to state
            onChange={handleChange} // Handle change
          >
                <option>Select </option>
                <option>SETTING CHANGE</option>
                <option>NO TOOL </option>
                <option>NO POWER </option>
                <option>JIGS AND FIX</option>
                <option>MEASURE AND AJ </option>
                <option>NO OPERATOR </option>
                <option>SPEED LESS </option>
                <option>MINOR STOPPAGE </option>
                <option>LINE ORG LOSS </option>
                <option>TOOL CHANGE </option>
                <option>STARTUP LOSS </option>
                <option>BREAK DOWN LOSS  </option>
                <option>OTHER LOSS </option>
                <option>LOGISTIC TOOL </option>
                <option>OPERATOR IDLING </option>

          </Form.Control>
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

export default Machinereport