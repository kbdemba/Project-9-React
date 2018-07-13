import React from "react";
import {NavLink} from "react-router-dom"
const Navs = (props) => (
    <ul className="main-nav">
      {!props.displaySearchForm && <li className="Nav-Link" ><NavLink to="/search">Search</NavLink></li>}
      <li className="Nav-Link" ><NavLink to="/soccer">Soccer</NavLink></li>
      <li className="Nav-Link" ><NavLink to="/cats">Cats</NavLink></li>
      <li className="Nav-Link" ><NavLink to="/dogs">Dogs</NavLink></li>
    </ul>
);

export default Navs;
