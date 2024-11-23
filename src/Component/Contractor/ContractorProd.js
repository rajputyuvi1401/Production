import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const ContractorProd = () => {
    const [formData, setFormData] = useState({
        date: '',
        machine: '',
        jobNo: '',
        shift: '',
        itemName: '',
        totalProdQty: '',
        totalProdHours: '',
        totalBreakHours: '',
        itemRate: '',
        shiftTargetQty: '',
        machineRate: '',
        contractorName: '',
        downTime: '',
        note: '',

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
      <h2> Contractor Prodction Entry   </h2>
      <hr />
    
     <Form onSubmit={handleSubmit} className='border'>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="date">
            <Form.Label>Date :</Form.Label>
            <Form.Control
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="machine">
          <Form.Label>Machine :</Form.Label>
          <Form.Control
              as="select"
              name="machine"
              checked={formData.machine} // Bind to state
              onChange={handleChange} // Handle change
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

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="jobNo">
          <Form.Label> Job No :</Form.Label>
            <Form.Control
              type='text'
              name="jobNo"
              value={formData.jobNo}
              onChange={handleChange}
            > 
            </Form.Control>
          </Form.Group>
        </Col>

        
       </Row>

       <Row className="mb-3">

        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="shift">
          <Form.Label>Shift :</Form.Label>
          <Form.Control
              as="select"
              name="shift"
              checked={formData.shift} // Bind to state
              onChange={handleChange} // Handle change
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

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="itemName">
            <Form.Label>Item Name :</Form.Label>
            <Form.Control
              type="text"
              name="itemName"
              value={formData.itemName}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="totalProdQty">
          <Form.Label>Total Production Qty :</Form.Label>
          <Form.Control
              type='text'
              name="totalProdQty"
              checked={formData.totalProdQty} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

       </Row>

       <Row className="mb-3">
       <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="itemRate">
          <Form.Label> Item Rate :</Form.Label>
            <Form.Control
              type='text'
              name="itemRate"
              value={formData.itemRate}
              onChange={handleChange}
            > 
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="totalProdHours">
          <Form.Label> Total Production Hours :</Form.Label>
            <Form.Control
              type='time'
              name="totalProdHours"
              value={formData.totalProdHours}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="shiftTargetQty">
            <Form.Label>Shift Target Qty  :</Form.Label>
            <Form.Control
              type="text"
              name="shiftTargetQty"
              value={formData.shiftTargetQty}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

      </Row>

       <Row className="mb-3">
        {/* Rework No */}
       

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="totalBreakHours">
          <Form.Label>Total Break Hours :</Form.Label>
          <Form.Control
              type='time'
              name="totalBreakHours"
              checked={formData.totalBreakHours} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="machineRate">
          <Form.Label> Machine Rate :</Form.Label>
            <Form.Control
              type='text'
              name="machineRate"
              value={formData.machineRate}
              onChange={handleChange}
            > 
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="contractorName">
          <Form.Label> Contractor Name :</Form.Label>
          <Form.Control
              as="select"
              name="contractorName"
              checked={formData.contractorName} // Bind to state
              onChange={handleChange} // Handle change
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
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="downTime">
            <Form.Label>DownTime Reason :</Form.Label>
            <Form.Control
              type="text"
              name="downTime"
              placeholder='DownTime Reason'
              value={formData.downTime}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="note">
          <Form.Label>Note   :</Form.Label>
          <Form.Control
              type='message'
              name="note"
              checked={formData.note} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>
       
          <Col xs={12} sm={6} md={3} lg={1} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              SAVE
            </Button>
          </Col>
          <Col xs={12} sm={6} md={3} lg={1} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
            Clear
            </Button>
          </Col>

       </Row>

      
       </Form>
   <br/>
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

export default ContractorProd