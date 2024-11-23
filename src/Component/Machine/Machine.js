
import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const Machine = () => {
    const [formData, setFormData] = useState({
        date: '',
        shift: '',
        machineType: '',
        utilice: '',
        reason:'',

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
    <h2> Machine Idle Time | Setting    </h2>
    <hr />
    
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="date">
            <Form.Label>Date:</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="shift">
          <Form.Label> Shift :</Form.Label>
            <Form.Control
              as='select'
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

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="machineType">
          <Form.Label> Machine Type :</Form.Label>
            <Form.Control
              as='select'
              name="machineType"
              value={formData.machineType}
              onChange={handleChange}
            > 
                <option>All </option>
                <option>CENTERLESS GRIDING </option>
                <option>CNG </option>
                <option>DRILLING </option>
                <option>GRINDER </option>
                <option>INDUCTION </option>
                <option>LATHE </option>
                <option>MANUAL </option>
                <option>MILLING </option>
                <option>PRESS </option>
                <option>SECOND OPERATION </option>
                <option>SPM </option>
                <option>TAPPING </option>
                <option>THREAD ROLLING </option>
                <option>TRUOB </option>
                <option>VMC </option>

            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="utilice">
            <Form.Label>   </Form.Label>
            <Form.Check
              type="checkbox"
              name="utilice"
              label="100% utilized"
              checked={formData.utilice} // Bind to state
              onChange={handleChange} // Handle change
            />
          </Form.Group>
        </Col>
        
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Search
          </Button>
        </Col>

       </Row>

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
       <br/>

       <Row className="mb-3">
       <Col xs={12} sm={6} md={4} lg={2}>
          <Form.Group controlId="reason">
          <Form.Label> Reason:</Form.Label>
              <Form.Control
                 as='select'
                 name="reason"
                 value={formData.reason}
                 onChange={handleChange}
               > 
                <option>SETTING CHANGE </option>
                <option>NO TOOL</option>
                <option>NO POWER </option>
                <option>JIGS AND FIX </option>
                <option>MEASURE AND AJ </option>
                <option>NO OPERATOR </option>
                <option>SPEED LOSS </option>
                <option>MINOR STOPPAGE </option>
                <option>LINE ORG LOSS </option>
                <option>TOOL CHANGE </option>
                <option>BREAKE DOWN LOSS </option>
                <option>OTHER LOSS </option>
                <option>LOGISTIC LOSS </option>
                <option>OPERATOR IDLING </option>
              </Form.Control>
          </Form.Group>
        </Col>
           
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Set To All
          </Button>
          </Col>
       </Row>
       </Form>
    </div>
  )
}

export default Machine