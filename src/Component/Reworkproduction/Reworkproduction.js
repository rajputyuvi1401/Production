import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Reworkproduction = () => {
  const [formData, setFormData] = useState({
    reworkno: '',
    reworkDate: '',
    shift: '',
    contractar: '',
    supervisour: '',
    operator: '',
    itemCode: '',
    partCode: '',
    heatNo: '',
    unitMachine: '',
    prodTime: '',
    reworktoOk: '',

    idleReason: '',
    from: '',
    to: '',
    totalTime: '',
    settingPart: '',
    remark: '',
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

          {/* Contractor */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="contractar">
              <Form.Label>Contractor</Form.Label>
              <Form.Control
                as="select"
                name="contractar"
                value={formData.contractar}
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
            <Form.Group controlId="supervisour">
              <Form.Label>Supervisor</Form.Label>
              <Form.Control
                type="text"
                name="supervisour"
                value={formData.supervisour}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Operator */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="operator">
              <Form.Label>Operator</Form.Label>
              <Form.Control
                type="text"
                name="operator"
                value={formData.operator}
                onChange={handleChange}
              />
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
                <option value="">-</option>
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
                <option value="">-</option>
                <option value="Type1">Sale Order</option>
                <option value="Type2">Make To Stock</option>
                <option value="Type3">Sample</option>
                <option value="Type4">Maintenance</option>
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Unit Machine */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="unitMachine">
              <Form.Label>Unit Machine</Form.Label>
              <Form.Control
                as="select"
                name="unitMachine"
                value={formData.unitMachine}
                onChange={handleChange}
              >
                <option value="">Select</option>
                <option value="Type1">AY-CGR1 | CENTERLESS GRINDING 1</option>
                <option value="Type2">AY-CGR2 | CENTERLESS GRINDING 2</option>
                <option value="Type3">AY-D7 | DRILLING 7</option>
                <option value="Type4">AY-D8 | DRILLING 8</option>
                <option value="Type4">AY-M3 | MILLING 3</option>
                <option value="Type4">AY-S01 | SECOND OPERATION AY-1</option>
                <option value="Type4">AY-S02 | SECOND OPERATION AY-2</option>
                <option value="Type4">AY-S03 | SECOND OPERATION AY-3</option>
                <option value="Type4">AY-T-1 | TROUB 25 1</option>
                <option value="Type4">AY-T-10 | TROUB 25 10</option>
                <option value="Type4">AY-T-11 | TROUB 25 11</option>
                <option value="Type4">AY-T-12 | TROUB 25 12</option>
                <option value="Type4">AY-T-13 | TROUB 25 13</option>
                <option value="Type4">AY-T-2 | TROUB 25 2</option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          {/* Prod Time */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="prodTime">
              <Form.Label>Prod Time</Form.Label>
              <Form.Control
                type="text"
                name="prodTime"
                value={formData.prodTime}
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

          {/* Submit Button */}
          <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              Search
            </Button>
          </Col>
        </Row>
      </Form>
      <hr />




      <Row className="mb-3">
          {/* Supervisor */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="idleReason">
              <Form.Label>Idle Reason : </Form.Label>
              <Form.Control
                type="text"
                placeholder='Downtime Reason'
                name="idleReason"
                value={formData.idleReason}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Operator */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="from">
              <Form.Label>From :</Form.Label>
              <Form.Control
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Item Code */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="to">
              <Form.Label>To : </Form.Label>
              <Form.Control
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          {/* Part Code */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="totalTime">
              <Form.Label>Total Time :</Form.Label>
              <Form.Control
                type='text'
                name="totalTime"
                value={formData.totalTime}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Heat No */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="heatNo">
              <Form.Label>Supervisor :</Form.Label>
              <Form.Control
                type='text'
                name="heatNo"
                placeholder='Operator/Supervisor'
                value={formData.heatNo}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
          </Col>

          {/* Unit Machine */}
          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="settingPart">
              <Form.Label>Setting Part :</Form.Label>
              <Form.Control
                type='text'
                name="settingPart"
                value={formData.settingPart}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
          </Col>

          <Col xs={12} sm={6} md={4} lg={2}>
            <Form.Group controlId="remark">
              <Form.Label>Remark :</Form.Label>
              <Form.Control
                type='text'
                name="remark"
                value={formData.remark}
                onChange={handleChange}
              >
              </Form.Control>
            </Form.Group>
          </Col>

             {/* Submit Button */}
             <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
            <Button variant="primary" type="submit" className="w-100">
              Add
            </Button>
          </Col>
        </Row>

        <hr/>

        
      <div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>#</th>
          <th>Reason</th>
          <th>From Time</th>
          <th>To Time</th>
          <th>Idle Time</th>
          <th>Operator Name</th>
          <th>Setting Part</th>
          <th>Remark</th>
          <th>  </th>
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
            <td> </td>
            <td> </td>
            <td>Delete </td>
          </tr>

        </tbody>
    </table>
  </div>

  <br/>
  <br/>
  <br/>

    

</div>

    </div>
  );
};

export default Reworkproduction;
