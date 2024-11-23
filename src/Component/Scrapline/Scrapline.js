import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const Scrapline = () => {
    const [formData, setFormData] = useState({
        series: '',
        type: '',
        scraprejNo: '',
        scraprejDate: '',
        itemNoCode: '',
        heatNo: '',
        scraprejQty: '',
        scraprejRemark: '',
        rejectReason: '',
        custSupp: '',
        scraprejItem: '',
        scrapQty: '',


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
    <h2>Scrap/ Line / Rejection Note </h2>
    <hr />

    {/* Form for filtering work orders */}
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="series">
          <Form.Label>Series :</Form.Label>
            <Form.Control
              as='select'
              name="series"
              value={formData.series}
              onChange={handleChange}
            > 
                <option>Select </option>
                <option>Scrap/ Line / Rejection Note</option>
              
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="type">
            <Form.Label>Type :</Form.Label>
            <Form.Control
                as="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
                 <option>Select </option>
                <option>Scrap </option>
                <option>Rejection </option>
                <option>Debit Note </option>
                <option>Vendor Return </option>
                <option>Line Rejection </option>
                <option>Prod Loss </option>

                </Form.Control>
          </Form.Group>
        </Col>
        </Row>


      <Row className="mb-3">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scraprejNo">
            <Form.Label>Scrap Rej No :</Form.Label>
            <Form.Control
              type="text"
              name="scraprejNo"
              value={formData.scraprejNo}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scraprejDate">
            <Form.Label>Item</Form.Label>
            <Form.Control
              type="date"
              name="scraprejDate"
              value={formData.scraprejDate}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        </Row>

    <Row className="mb-3">
<Col xs={12} sm={6} md={4} lg={3}>
  <Form.Group controlId="itemNoCode">
    <Form.Label>Item No Code :</Form.Label>
    <Form.Control
      type="text"
      name="itemNoCode"
      value={formData.itemNoCode}
      onChange={handleChange}
    />
  </Form.Group>
</Col>
<Col xs={12} sm={6} md={4} lg={3}>
  <Form.Group controlId="heatNo">
    <Form.Label>Heat No (Stock) </Form.Label>
    <Form.Control
      as="select"
      name="heatNo"
      value={formData.heatNo}
      onChange={handleChange}
    >
        <option>--</option>
        <option>--</option>
        <option>--</option>
        <option>--</option>
        </Form.Control>
  </Form.Group>
</Col>
</Row>


<Row className="mb-3">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scraprejQty">
            <Form.Label>Scrap Rej Qty :</Form.Label>
            <Form.Control
              type="text"
              name="scraprejQty"
              value={formData.scraprejQty}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scraprejRemark">
            <Form.Label>Scrap Rej Remark</Form.Label>
            <Form.Control
              type="message"
              name="scraprejRemark"
              value={formData.scraprejRemark}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        </Row>

        
      <Row className="mb-3">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="rejectReason">
            <Form.Label>Reject Reason :</Form.Label>
            <Form.Control
              as="select"
              name="rejectReason"
              value={formData.rejectReason}
              onChange={handleChange}
            >
                  <option>Select</option>
        <option>ANGEL NOT OK</option>
        <option>AS IT IS RETURN</option>
        <option>Assembled Parts</option>
        <option>Blackodising NG</option>
        <option>Broken</option>
        <option>Burr</option>
        <option>Chamfer Excess</option>
        <option>Chamfer Missing</option>
        <option>Chamfer Out</option>
        <option>Chamfer Uneven</option>
        <option>Chatter Merk</option>
        <option>Coating Pill Off</option>
        <option>Collar Missing</option>
        <option>Collar U S</option>
        <option>Concentricity Not Ok</option>
                  <option>Crack</option>
                  <option>Damage</option>
                  <option>Damage Part</option>


        </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="custSupp">
            <Form.Label>Cust Supp</Form.Label>
            <Form.Control
              type="text"
              name="custSupp"
              placeholder='Enter Name'
              value={formData.custSupp}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        </Row>

        
      <Row className="mb-3">
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scraprejItem">
            <Form.Label>Scrap Rej Item :</Form.Label>
            <Form.Control
              type="text"
              name="scraprejItem"
              value={formData.scraprejItem}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scrapQty">
            <Form.Label>Scrap Qty</Form.Label>
            <Form.Control
              type="text"
              
              name="scraprQty"
              value={formData.scrapQty}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        </Row>
        <Col xs={12} sm={6} md={3} lg={2} className="d-flex align-items-end">
          <Button variant="primary" type="submit" className="w-100">
              +  ADD
          </Button>
        </Col>
        
        </Form>
        <hr/>

        <div className="table-responsive my-4">
  <div className="custom-table-container">
    <table className="table table-striped table-bordered table-hover">
      <thead>
        <tr className="clr"> 
          <th>Sr</th>
          <th>Item Desc</th>
          <th>Reject Qty</th>
          <th>Reason Note</th>
          <th>Reason</th>
          <th>Scrap Item</th>
          <th>Scrap Qty</th>
          <th>Delete</th>
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
            <td>*</td>
          </tr>

        </tbody>
    </table>
  </div>

  <br/>
</div>
</div>
  )
}

export default Scrapline