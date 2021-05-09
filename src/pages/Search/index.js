import "./style.css";
import React from "react";
import Container from "../../components/Container/";
import SearchResults from "../../components/SearchResults/";

function Search() {
 return (
    <div>
      <h1 className="title">EMPLOYEE DIRECTORY</h1>
      <Container style={{ minHeight: "100vh" }}>
        <p class="info">Below you can: (i) order the results alphabetically by name; (ii) or search the name (or email) of the user you wish to find and the results will display automatically as you type.</p>
        <SearchResults />
      </Container>
    </div>
  );
}

export default Search
