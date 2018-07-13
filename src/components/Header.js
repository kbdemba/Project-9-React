import React from "react";
import Navs from "./Navs";
import SearchForm from "./SearchForm";
const Header = (props) => (
  <div className="App-header">
    {props.displaySearchForm && <SearchForm handleFormSubmit={props.handleFormSubmit}/>}
    <Navs displaySearchForm={props.displaySearchForm} />
  </div>
);

export default Header;
