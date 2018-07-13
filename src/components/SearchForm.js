import React from "react";

const SearchForm1 = (props) => (
  <form className="search-form" onSubmit={props.handleFormSubmit}>
    <input type="search" name="search" placeholder="Search" required className="form-input"/>
    <button type="submit" className="search-button">
      Search
    </button>
  </form>
)

export default SearchForm1;
