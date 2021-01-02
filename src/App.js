import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        // creates routes
        <Router>
            <div>
                {/* navbar */}
                <Navbar />

                {/* by using switch only one components of one route will be displayed at a time  */}
                <Switch>
                    {/* home:  set component for the route,
                     exact property stictly matches the route-text
                     otherwise it matches the '/' and renders multiple unwanted components
                     (without using switch if switch uses then only first matching route will render up )*/}
                    <Route path="/" exact component={Home} />
                    {/* about */}
                    <Route path="/about" component={About} />
                    {/* contact */}
                    <Route path="/contact" component={Contact} />
                </Switch>

                
            </div>
        </Router>
    );
};

export default App;
