import React from "react";
import Search from "./pages/Search";
import Wrapper from "./components/Wrapper/wrapper";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
    return ( <
        Router >
        <
        div >
        <
        Wrapper >
        <
        Route exact path = "/"
        component = { Search }
        /> <
        /Wrapper> <
        /div> <
        /Router>
    );
}

export default App;