import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Route, Redirect, Switch} from "react-router-dom";
import {NotificationContainer} from "react-notifications";

import "bootstrap/scss/bootstrap.scss";
import "assets/scss/paper-kit.scss?v=1.3.0";
import "assets/demo/demo.css?v=1.3.0";

import Home from "views/Home.js";
import Index from "views/Index.js";
import Inventory from "views/Inventory.js";
import Waiting from "views/Waiting.js";
import AboutUs from "views/AboutUs.js"

const openDate = new Date('July 09, 2022 16:00:00')
const nowDate = new Date();

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            {!(openDate.setHours(0, 0, 0, 0) <= nowDate.setHours(0, 0, 0, 0)) ? (
                <Route path="/" exact render={(props) => <Waiting {...props} />}/>
            ) : (
                <>
                    <NotificationContainer/>
                    <Route path="/" exact render={(props) => <Home {...props} />}/>
                    <Route path="/index" render={(props) => <Index {...props} />}/>
                    <Route path="/inventory" render={(props) => <Inventory {...props} />}/>
                    <Route path="/about-us" render={(props) => <AboutUs {...props} />}/>
                </>
            )}
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>,
    document.getElementById("root")
);
