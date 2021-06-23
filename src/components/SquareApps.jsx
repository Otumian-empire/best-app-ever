import React from "react";
import SquareApp from "./SquareApp";
import AddSquareApp from "./AddSquareApp";

function SquareApps({ configs, handleClick }) {
  return (
    <div className="container square-apps">
      <div className="row">
        {configs.map(({ id, name, token }) => (
          <SquareApp
            key={id}
            name={name}
            token={token}
            handleClick={handleClick}
          />
        ))}
        <AddSquareApp key={100} name={"+"} token={null} />
      </div>
    </div>
  );
}

export default SquareApps;
