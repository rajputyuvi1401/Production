import { Form, Button, Row, Col } from 'react-bootstrap';
import React, { useState } from 'react';

const AssProdEntry = () => {
    const [formData, setFormData] = useState({
        prodNo: '',
        date: '',
        shift: '',
        contractor: '',
        supervisor: '',
        operator: '',
        unitMachine: '',
        machineSpeed: '',
        heiper: '',
        item: '',
        operation: '',
        none: '',
        lotNo: '',
        prodQty: '',
        prodTime: '',
        reworkQty: '',
        rejectQty: '',
        changeQty:'',
        remark:'',
        targetqty:'',
        prod:'',

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
      <h2> Prodction Entry   </h2>
      <hr />
    
     <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="prodNo">
            <Form.Label>Prod No :</Form.Label>
            <Form.Control
              type="text"
              name="prodNo"
              value={formData.prodNo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="date">
          <Form.Label>Date :</Form.Label>
          <Form.Control
              type='date'
              name="date"
              checked={formData.date} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="shift">
          <Form.Label> Shift:</Form.Label>
            <Form.Control
              as="select"
              name="shift"
              value={formData.shift}
              onChange={handleChange}
            > 
            <option>Select</option>
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
          <Form.Group controlId="contractor">
          <Form.Label>Contractor :</Form.Label>
          <Form.Control
              as="select"
              name="contractor"
              checked={formData.contractor} // Bind to state
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
          <Form.Group controlId="supervisor">
            <Form.Label>Supervisor :</Form.Label>
            <Form.Control
              type="text"
              name="supervisor"
              value={formData.supervisor}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="operator">
          <Form.Label>Operator :</Form.Label>
          <Form.Control
              type='text'
              name="operator"
              checked={formData.operator} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

       </Row>

       <Row className="mb-3">
       <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="unitMachine">
          <Form.Label> Unit Machine :</Form.Label>
            <Form.Control
              as="select"
              name="unitMachine"
              value={formData.unitMachine}
              onChange={handleChange}
            > 
            <option>Select</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="machineSpeed">
          <Form.Label> Machine Speed :</Form.Label>
            <Form.Control
              as="select"
              name="machineSpeed"
              value={formData.machineSpeed}
              onChange={handleChange}
            >
                <option>Select</option>
            <option></option>
            <option></option>
            <option></option>
            <option></option>
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="heiper">
            <Form.Label>Heiper  :</Form.Label>
            <Form.Control
              type="text"
              name="heiper"
              value={formData.heiper}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>

      </Row>

       <Row className="mb-3">
        {/* Rework No */}
       

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="item">
          <Form.Label>FG Item :</Form.Label>
          <Form.Control
              as="select"
              name="item"
              checked={formData.item} // Bind to state
              onChange={handleChange} // Handle change
            > 
            <option>Select</option>
            <option></option>
            <option></option>
            <option></option>
           </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="operation">
          <Form.Label> Operation :</Form.Label>
            <Form.Control
              type='text'
              name="operation"
              value={formData.operation}
              onChange={handleChange}
            > 
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="none">
          <Form.Label> --- :</Form.Label>
          <Form.Control
              as="select"
              name="none"
              checked={formData.none} // Bind to state
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
          <Form.Group controlId="lotNo">
            <Form.Label>Heat Lot No :</Form.Label>
            <Form.Control
              as="select"
              name="lotNo"
              placeholder='DownTime Reason'
              value={formData.lotNo}
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

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="prodQty">
          <Form.Label>prodQty   :</Form.Label>
          <Form.Control
              type='message'
              name="prodQty"
              checked={formData.prodQty} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="prodTime">
          <Form.Label>prodQty   :</Form.Label>
          <Form.Control
              type='time'
              name="prodTime"
              checked={formData.prodTime} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>
       </Row>

       <Row className="mb-3">
    
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="reworkQty">
          <Form.Label>reworkQty   :</Form.Label>
          <Form.Control
              type='text'
              name="reworkQty"
              checked={formData.reworkQty} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="rejectQty">
          <Form.Label>rejectQty   :</Form.Label>
          <Form.Control
              type='text'
              name="rejectQty"
              checked={formData.rejectQty} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>

        
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="changeQty">
          <Form.Label>Change Product Qty   :</Form.Label>
          <Form.Control
              type='text'
              name="changeQty"
              checked={formData.changeQty} // Bind to state
              onChange={handleChange} // Handle change
            > 
           </Form.Control>
          </Form.Group>
        </Col>
       </Row>
  </Form>
   <br/>
   <hr/>
<Row className="mb-3" >
       <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            Shift/Cycle Time
          </Button>
        </Col>
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
           Machin Idle Time
          </Button>
        </Col>
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
           Rework/Reject Reason 
          </Button>
        </Col>
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
           Tool and Idle Details
          </Button>
        </Col>
</Row>
   <div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Shift From</th>
          <th>To </th>
          <th>Break From</th>
          <th>To</th>
          <th>Break Total </th>
          <th>Shift Time</th>
          <th>Prod Time</th>
          <th>Avl Time</th>
          
          <th>Cycle Time</th>
          <th>CP Time</th>
          <th>L/U Time</th>
          <th>MO Time</th>
          <th>Time</th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>(MM:SS)</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
    </table>
  </div>
</div>
<div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Electricity</th>
          <th>Start Unit </th>
          <th>End Unit</th>
          <th>Total Unit</th>
          <th>Scrap/End Piece Code</th>
          <th>Scrap/End Piece Qty</th>
          <th>Scrap/End Remark</th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
    </table>
  </div>
  </div>


  <Row className="mb-3">

{/* Rework No */}
<Col xs={12} sm={6} md={4} lg={3}>
  <Form.Group controlId="contractor">
  <Form.Label>Contractor :</Form.Label>
  <Form.Control
      as="select"
      name="contractor"
      checked={formData.contractor} // Bind to state
      onChange={handleChange} // Handle change
    > 
   </Form.Control>
  </Form.Group>
</Col>

<Col xs={12} sm={6} md={4} lg={3}>
  <Form.Group controlId="tagetqty">
    <Form.Label>Taget Qty :</Form.Label>
    <Form.Control
      type="text"
      name="tagetqty"
      value={formData.tagetqty}
      onChange={handleChange}
    />
  </Form.Group>
</Col>

<Col xs={12} sm={6} md={4} lg={3}>
  <Form.Group controlId="remark">
  <Form.Label>Remark :</Form.Label>
  <Form.Control
        type='text'
      name="remark"
      checked={formData.remark} // Bind to state
      onChange={handleChange} // Handle change
    >
   </Form.Control>
  </Form.Group>
</Col>
<Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
            SAVE PRODCTION
          </Button>
        </Col>
        <Col xs={12} sm={6} md={3} lg={1} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
           Clear
          </Button>
        </Col>
</Row>



<div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Prodction Hours</th>
          <th>Idle Hours </th>
          <th>Actual Hours</th>
        </tr>
      </thead>

      <tbody>
          {/* Example row, you can map rows here */}
          <tr>
            <td>1</td>
            <td></td>
            <td></td>
           
          </tr>
        </tbody>
    </table>
  </div>
  </div>

    </div>
  )
}

export default AssProdEntry