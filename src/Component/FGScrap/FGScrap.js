import React, { useState } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';

const FGScrap = () => {
    const [formData, setFormData] = useState({
        series: '',
        type: '',
        noteNO: '',
        noteDate: '',  
        itemCode: '',
        partCode: '',
        stock: '',
        rework: '',
        reject: '',
        scrapReason: '',
        scrapRemark: '',
        scrapitemCode: '',
        scrapWt: '',

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
    <h2>FG Scrap Rejection Report </h2>
    <hr />

    {/* Form for filtering work orders */}
    <Form onSubmit={handleSubmit}>
    <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="series">
          <Form.Label>Series:</Form.Label>
            <Form.Control
              as='select'
              name="series"
              value={formData.series}
              onChange={handleChange}
            > 
                <option>Select </option>
                <option>FG Scrap Rejection Report </option>
    
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="type">
            <Form.Label>Note Type:</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
            >
                 <option>Select</option>
            <option>Sracp </option>
            <option>Rejection</option>
        </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="noteNO">
            <Form.Label> Note No:</Form.Label>
            <Form.Control
              type="text"
              name="noteNO"
              value={formData.noteNO}
              onChange={handleChange}
            />
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="noteDate">
            <Form.Label>Note Date :</Form.Label>
            <Form.Control
              type="date"
              name="noteDate"
              value={formData.noteDate}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
        </Col>
        </Row>


        <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="itemCode">
          <Form.Label>Item Code:</Form.Label>
            <Form.Control
              type="text"
              name="itemCode"
              value={formData.itemCode}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="partCode">
            <Form.Label>Part Code:</Form.Label>
            <Form.Control
              as="select"
              name="partCode"
              value={formData.partCode}
              onChange={handleChange}
            >
                 <option> -- </option>
            <option> </option>
            <option> </option>
            <option> </option>
        </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="stock">
            <Form.Label> Stock:</Form.Label>
            <Form.Control
              as="select"
              name="stock"
              value={formData.stock}
              onChange={handleChange}
            >
            <option> -- </option>
       <option> </option>
       <option> </option>
       <option> </option>
       </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="rework">
            <Form.Label>Rework :</Form.Label>
            <Form.Control
              type="text"
              name="rework"
              value={formData.rework}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
        </Col>
        </Row>

        <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="reject">
          <Form.Label>Reject:</Form.Label>
            <Form.Control
              type="text"
              name="reject"
              value={formData.reject}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scrapReason">
            <Form.Label>Scrap Reason:</Form.Label>
            <Form.Control
              as="select"
              name="scrapReason"
              value={formData.scrapReason}
              onChange={handleChange}
            >
                 <option> Select </option>
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
          <Form.Group controlId="scrapRemark">
            <Form.Label> Scrap Remark:</Form.Label>
            <Form.Control
              type='text'
              name="scrapRemark"
              placeholder='Rework Scrap Remark'
              value={formData.scrapRemark}
              onChange={handleChange}
            >
       </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scraprework">
            <Form.Label>Scrap Reject :</Form.Label>
            <Form.Control
              type="text"
              name="scraprework"
              placeholder='Reject Scrap Remark'
              value={formData.scraprework}
              onChange={handleChange}
            ></Form.Control>
          </Form.Group>
        </Col>
        </Row>


        <Row className="mb-3">
        {/* Rework No */}
        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scrapitemCode">
          <Form.Label>Scrap Item Code:</Form.Label>
            <Form.Control
              type="text"
              name="scrapitemCode"
              value={formData.scrapitemCode}
              onChange={handleChange}
            >
            </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={4} lg={3}>
          <Form.Group controlId="scrapWt">
            <Form.Label>Scrap Wt:</Form.Label>
            <Form.Control
              type='text'
              name="scrapWt"
              value={formData.scrapWt}
              onChange={handleChange}
            >
        </Form.Control>
          </Form.Group>
        </Col>

        <Col xs={12} sm={6} md={3} lg={3} className="d-flex align-items-end">
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
          <th>Item Desc</th>
          <th>Heat Code</th>
          <th>Rework Qty</th>
          <th>Reason</th>
          <th>Reason Qty</th>
          <th>Reason</th>
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

export default FGScrap;