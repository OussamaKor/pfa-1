import {
    Switch,
    Route,
} from "react-router-dom";

import Signin from "./pages/o.Signin/Signin";


import Index from "./pages/a.client";
import Home from "./pages/k.home/home";
import Courses from "./pages/a.client/courses";
import Course from "./pages/a.client/course";
import Employee from "./pages/k.employee/employee"
import Reset from "./pages/o.Signin/Reset";
import NewPassword from "./pages/o.Signin/NewPassword";

import Correction from "./pages/a.client/correction";

import Footer from "./components/k.footer/footer"

import Avis from "./pages/a.client/o.avis/Avis";
import NavBarClient from "./components/a.navbarClient/index"

import Cours from "./pages/a.client/cours";
import Cour from "./pages/a.client/cour";
import Error404 from "./pages/Error";

export default function MainRouter() {
    let reponse = JSON.parse(localStorage.getItem("reponse"));
    let user = JSON.parse(localStorage.getItem("user"));
    return (
        <div>
            <Switch>
                <Route exact path={"/sign-in"}>
                    <Signin />
                    <Footer />
                </Route>
                <Route exact path={"/ahmed"} component={Index} />
                <Route exact path={"/khadija"} component={Home} />
                <Route exact path={"/khadija2"} component={Employee} />
                <Route exact path={"/tests"} component={Courses} />
                <Route exact path={"/test/:id"} component={Course} />



                <Route exact path={"/"} component={Home} />
                
                
                <Route exact path={"/forgot-password"}>

                    <Reset />
                    <Footer />
                </Route>
                <Route exact path={"/reset/:token"}>
                    <NewPassword />
                    <Footer />
                </Route>


                {user ?
                    <div>
                        <Route exact path={"/avis"}>
                            <NavBarClient />
                            <Avis />
                            <Footer />
                        </Route>
                        <Route exact path={"/test/:id"} component={Course} />
                        <Route exact path={"/tests"} component={Courses} />
                        <Route exact path={"/cours"} component={Cours} />
                        <Route exact path={"/cours/:id"} component={Cour} /></div> : ""}

                {reponse && user ? <Route exact path={"/test/reponse/:id"} component={Correction} /> : ""}
                <Route exact component={Error404} />

            </Switch>
        </div>
    )
}
