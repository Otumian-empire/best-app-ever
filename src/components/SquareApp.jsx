import React from "react";

function SquareApp(props) {
  const { id, name, token, handleClick } = props;
  return (
    <div
      className="col-sm-5 col-md-5 col-lg-5 square-app p-5 m-1 mb-3"
      key={id}
    >
      <div>
        <h3>{name}</h3>
        <small>App ID: {token}</small>
      </div>

      <div className="mt-4">
        <button className="sq-btn p-2" onClick={handleClick}>
          Open
        </button>
      </div>
    </div>
  );
}

export default SquareApp;
