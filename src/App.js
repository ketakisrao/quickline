import React from 'react';
import Hero from './Components/Hero';
import CustomNavbar from './Components/CustomNavbar';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import Discovery from './Discovery';
import Home from './Home';
import './App.scss';

const product_name = "Quickline";

function App() {
    return (
        <div className="App">
            <Router basename="/quickline">
                <CustomNavbar></CustomNavbar>
                <div className="content">
                    <Switch>
                        <Route exact path="/" component={Home}>
                        </Route>
                        <Route path="/discovery" component={Discovery}>
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
