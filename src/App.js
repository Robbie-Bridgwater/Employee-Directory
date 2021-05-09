import React from "react";
import Wrapper from "./components/wrapper";
import searchBody from "./pages/searchBody";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
          <Wrapper>
          <Route exact path="/" component={searchBody} />
          </Wrapper>
      </div>
    </Router>
  );
}

export default App;