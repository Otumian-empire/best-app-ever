import React from "react";

function Content(props) {
  return (
    <div className="col-7">
      <div>
        <select className="form-select-sm mb-3 " aria-label="Default">
          <option defaultValue={"Default"}>Default</option>
        </select>
      </div>

      <h2>Welcome back. Here's your business at a glance.</h2>

      <h4>Today</h4>
      {/* card row */}
      <div className="row">
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Gross Sales</h5>
              <p className="card-text">
                No sales yet today
                <i className="bi bi-chevron-double-right"></i>
              </p>
            </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Transactions</h5>
              <p className="card-text">
                No sales yet today
                <i className="bi bi-chevron-double-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* card col */}
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">
            Payment types <i className="bi bi-chevron-double-right"></i>
          </h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
        </div>
      </div>
      <div className="card mt-2">
        <div className="card-body">
          <h5 className="card-title">
            Top items by sale <i className="bi bi-chevron-double-right"></i>
          </h5>
          <p className="card-text">No sales yet today</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
