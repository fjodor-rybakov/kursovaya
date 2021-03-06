import * as React from 'react';
import ReactDOM from "react-dom";
import { HomePage } from "./components/home-page/HomePage";
import { HashRouter, Switch, Route } from "react-router-dom";
import { NotFound } from "./components/not-found/NotFound";
import {SingIn} from "./components/SignIn/SingIn";
import {SignUp} from "./components/SignUp/SignUp";
import {Profile} from "./components/Profile/Profile";
import {ProjectList} from "./components/ProjectList/ProjectList";
import {Project} from "./components/Project/Project";

ReactDOM.render(
    <HashRouter>
        <Switch>
            <Route
                exact={true}
                path={"/"}
                component={HomePage}
            />
            <Route
                exact={true}
                path={"/signin"}
                component={SingIn}
            />
            <Route
                exact={true}
                path={"/signup"}
                component={SignUp}
            />
            <Route
                exact={true}
                path={"/profile"}
                component={Profile}
            />
            <Route
                exact={true}
                path={"/projectList"}
                component={ProjectList}
            />
            <Route
                exact={true}
                path={"/project/:id"}
                component={Project}
            />
            <Route component={NotFound}/>
        </Switch>
    </HashRouter>,
    document.getElementById("root")
);