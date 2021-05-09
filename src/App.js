import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from "./components/Wrapper/wrapper";
import Search from "./pages/Search";
import React from "react";

function App() {
    return ( 
        <Router>
            <div>
                <Wrapper>
                    <Route exact path = "/"component = { Search }/> 
                </Wrapper> 
            </div> 
        </Router>
    );
}

export default App;