import React from "react";
import "./UseState.css";
import { NavLink } from "react-router-dom";

const UseState = () => {
  document.title = "Inc-Dec"
  const [myNum, setMyNum] = React.useState(0);

  return (
    <>
      <div className="center_div">
        <p>{myNum}</p>
        <div class="button2" onClick={() => setMyNum(myNum + 1)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          INCR
        </div>
        <div
          class="button2"
          onClick={() => (myNum > 0 ? setMyNum(myNum - 1) : setMyNum(0))}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          DECR
        </div>
      </div>

      <NavLink to="/React-tuts/" className="back">
        Home
      </NavLink>
    </>
  );
};

export default UseState;
