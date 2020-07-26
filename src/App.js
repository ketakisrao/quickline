import React from 'react';
import CustomNavbar from './Components/CustomNavbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Discovery from './Discovery';
import Ideation from './Ideation';
import Prototype from './Prototype';
import Solution from './Solution';
import About from './About';
import Home from './Home';
import './App.scss';

function App() {
    return (
        <Router basename="/quickline">
            <CustomNavbar></CustomNavbar>
            <Switch>
                <Route exact path="/" component={Home}>
                </Route>
                <Route path="/discovery" component={Discovery}>
                </Route>
                <Route path="/ideation" component={Ideation}>
                </Route>
                <Route path="/prototype" component={Prototype}>
                </Route>
                <Route path="/about" component={About}>
                </Route>
                <Route path="/solution" component={Solution}>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
