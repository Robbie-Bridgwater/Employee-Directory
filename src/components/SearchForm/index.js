import React from "react";
import "./style.css";

function SearchForm(props) {

return (
  <div className="searchBox">
    <form className="form">
      <input
        placeholder="Search for your co-worker here..."
        name="search"
        type="text"
        className="fw form-control-lg search-font mx-auto"
        onChange={(event) => props.startSort(event)}
      />
    </form>
  </div>
);

}

export default SearchForm;