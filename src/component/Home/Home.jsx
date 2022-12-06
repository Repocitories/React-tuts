import React from "react";
import { NavLink } from "react-router-dom";
import "./home.css";

const Home = () => {
  document.title = "Home"
  return (
    <>
      <section>
        <ul className="navbar-lists">
          <li>
            <NavLink to="/React-tuts/Inc-dec" className="navbar-link ">
              Inc-dec
            </NavLink>
          </li>
          <li>
            <NavLink to="/React-tuts/Inc" className="navbar-link ">
              Inc
            </NavLink>
          </li>
          <li>
            <NavLink to="/React-tuts/Resturant" className="navbar-link">
            Resturant
            </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Home;
