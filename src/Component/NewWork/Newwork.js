import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './Newwork.css';

const Newwork = () => {
  const [woSeries, setWoSeries] = useState('');
  const [woNo, setWoNo] = useState('');
  const [cost, setCost] = useState('');
  const [woType, setWoType] = useState('');
  const [woDate, setWoDate] = useState('');
  const [po, setPo] = useState('');
  const [scheduleMonth, setScheduleMonth] = useState('');
  const [scheduleTargetDate, setScheduleTargetDate] = useState('');
  const [item, setItem] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      woSeries,
      woNo,
      cost,
      woType,
      woDate,
      po,
      scheduleMonth,
      scheduleTargetDate,
      item,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container p-4">
      <h3 className="head">New Work Order</h3>
      <hr></hr>
      <div className="row g-3">
        <div className="col-md-2">
          <Form.Group controlId="formWoSeries">
            <Form.Label>WO Series</Form.Label>
            <Form.Control
              type="text"
              value={woSeries}
              onChange={(e) => setWoSeries(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className="col-md-2">
          <Form.Group controlId="formWoNo">
            <Form.Label>WO No</Form.Label>
            <Form.Control
              type="text"
              value={woNo}
              onChange={(e) => setWoNo(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className="col-md-2">
          <Form.Group controlId="formCost">
            <Form.Label>Select Cost</Form.Label>
            <Form.Control
              as="select"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              required
            >
              <option value="">Select Cost</option>
              <option value="Cost1">Cost 1</option>
              <option value="Cost2">Cost 2</option>
              <option value="Cost3">Cost 3</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="col-auto">
          <Button variant="secondary" type="button">
            Search
          </Button>
        </div>
        
        <div className="col-auto">
          <Button variant="secondary" type="button">
            Padding CustPO for WorkOrder
          </Button>
        </div>
      </div>

      {/* Second row for the rest of the fields */}
      <div className="row g-3">
        <div className="col-md-2">
          <Form.Group controlId="formWoType">
            <Form.Label>WO Type</Form.Label>
            <Form.Control
              as="select"
              value={woType}
              onChange={(e) => setWoType(e.target.value)}
              required
            >
              <option value="">Select WO Type</option>
              <option value="Type1">Type 1</option>
              <option value="Type2">Type 2</option>
              <option value="Type3">Type 3</option>
            </Form.Control>
          </Form.Group>
        </div>

        <div className="col-md-2">
          <Form.Group controlId="formWoDate">
            <Form.Label>WO Date</Form.Label>
            <Form.Control
              type="date"
              value={woDate}
              onChange={(e) => setWoDate(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className="col-md-2">
          <Form.Group controlId="formPo">
            <Form.Label>Select PO</Form.Label>
            <Form.Control
              as="select"
              value={po}
              onChange={(e) => setPo(e.target.value)}
              required
            >
              <option value="">Select PO</option>
              <option value="PO1">PO 1</option>
              <option value="PO2">PO 2</option>
              <option value="PO3">PO 3</option>
            </Form.Control>
          </Form.Group>
        </div>
        
        <div className="col-auto">
          <Button variant="secondary" type="button">
            Add All Item
          </Button>
        </div>
         
        <div className="col-auto">
          <Button variant="secondary" type="button">
            Production From Existing Stock
          </Button>
        </div>
      </div>

      

      <div className="row g-3">
        <div className="col-md-2">
          <Form.Group controlId="formScheduleMonth">
            <Form.Label>Schedule Month</Form.Label>
            <Form.Control
              as="select"
              value={scheduleMonth}
              onChange={(e) => setScheduleMonth(e.target.value)}
              required
            >
              <option value="">Select Month</option>
              <option value="January">January</option>
              <option value="February">February</option>
              <option value="March">March</option>
              {/* Add remaining months */}
            </Form.Control>
          </Form.Group>
        </div>

        <div className="col-md-2">
          <Form.Group controlId="formScheduleTargetDate">
            <Form.Label>Schedule Target Date</Form.Label>
            <Form.Control
              type="date"
              value={scheduleTargetDate}
              onChange={(e) => setScheduleTargetDate(e.target.value)}
              required
            />
          </Form.Group>
        </div>

        <div className="col-md-2">
          <Form.Group controlId="formItem">
            <Form.Label>Select Item</Form.Label>
            <Form.Control
              as="select"
              value={item}
              onChange={(e) => setItem(e.target.value)}
              required
            >
              <option value="">Select Item</option>
              <option value="Item1">Item 1</option>
              <option value="Item2">Item 2</option>
              <option value="Item3">Item 3</option>
            </Form.Control>
          </Form.Group>
        </div>
        
        <div className="col-auto">
          <Button variant="secondary" type="button">
            Add
          </Button>
        </div>
      </div>

        <hr></hr>
      

        <div className="table-responsive my-4">
    <div className="custom-table-container">
      <table className="table table-striped table-bordered table-hover">
        <thead>
          <tr className="clr"> 
            <th>Sr</th>
            <th>PO Detail</th>
            <th>Item No</th>
            <th>Description</th>
            <th>SO Qty</th>
            <th>Bal. Qty</th>
            <th>WorkOrder Qty</th>
            <th>Remark</th>
            <th>Machine</th>
            <th>Shift</th>
            <th>Process</th>
            <th>Raw Material</th>
            <th>BOM</th>
            <th>Del.</th>
          </tr>
        </thead>
        <tbody>
            {/* Example row, you can map rows here */}
            <tr>
              <td>1</td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>  </td>
              <td>25</td>
              <td><input  type='message'/></td>
              <td>
              <select class="form-control" id="fid" name="fid" form="form2" required>
                  <option value="Item1">~Select~</option>
                  <option value="Item1">Item 1</option>
                  <option value="Item2">Item 2</option>
                  <option value="Item3">Item 3</option>
         	 </select>
              </td>
              <td>
              <select class="form-control" id="fid" name="fid" form="form2" required>
                  <option value="Item1">~~~</option>
                  <option value="Item1">Item 1</option>
                  <option value="Item2">Item 2</option>
                  <option value="Item3">Item 3</option>
         	 </select>
              </td>
              <td> 
              <select class="form-control" id="fid" name="fid" form="form2" required>
                  <option value="Item1">~~~</option>
                  <option value="Item1">Item 1</option>
                  <option value="Item2">Item 2</option>
                  <option value="Item3">Item 3</option>
         	 </select>
              </td>
              <td>
              <select class="form-control" id="fid" name="fid" form="form2" required>
                  <option value="Item1">~~~</option>
                  <option value="Item1">Item 1</option>
                  <option value="Item2">Item 2</option>
                  <option value="Item3">Item 3</option>
         	 </select>
              </td>
              <td>View1 <br></br>View2</td>
              <td>Yes</td>
            </tr>
          </tbody>
      </table>
    </div>

        </div>
    </form>
  );
};

export default Newwork;
