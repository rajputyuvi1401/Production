import React from 'react'

const Scrapreject = () => {
    const [formData, setFormData] = useState({
        from: '',
        to: '',
        type: '',
        series: '',
        item: '',
        customer: '',
        docNo: '',
        user: '',

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
          <Form.Group controlId="type">
            <Form.Label>Type</Form.Label>
            <Form.Control
              as="select"
              name="type"
              value={formData.type}
              onChange={handleChange}
            ></Form.Control>
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

export default Scrapreject