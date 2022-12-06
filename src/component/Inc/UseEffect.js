import React, { useState, useEffect } from "react";
import "./UseEffect.css";
import { NavLink } from "react-router-dom";

const UseEffect = () => {
  // const initialData = 15;
  const [myNum, setMyNum] = useState(0);

  useEffect(() => {
    document.title = `Chats(${myNum})`;
  });

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
      </div>
      <NavLink to="/" className="back">
        Home
      </NavLink>
    </>
  );
};

export default UseEffect;
