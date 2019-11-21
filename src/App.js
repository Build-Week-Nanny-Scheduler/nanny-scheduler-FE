import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RegisterFromFormik } from "./components/auth/Register";
import { LoginFromFormik } from "./components/auth/Login";
import Home from "./components/layout/Home";
import CreateRequestFrom from "./components/requests/CreateRequest";
import { Navigation } from "./components/navigation/NavBar";
import Dashboard from "./components/layout/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import { UserInfoProvider } from "./contexts/userInfoContext";
import Profile from "./components/profile/Profile";
import Logout from "./components/auth/Logout";
import ProfileEdit from "./components/profile/ProfileEdit";
const App = ({ history }) => {
  return (
    <div className="App">
      <Router history={history}>
        <Link to="/menu">
          <div className="topBanor">
            <img src="https://eager-meninsky-104020.netlify.com/images/nannyLogo.png" />
            <p>Nanny in a Flash</p>
            <img src="https://raw.githubusercontent.com/Build-Week-Nanny-Scheduler/nanny-scheduler-FE/Russ_Hacker2-so-master-updates-show/src/img/menu.png" />
          </div>
        </Link>
        <Route exact path="/menu" component={Navigation} />
        <Route exact path="/" component={Home} />

        <Route path="/register" component={RegisterFromFormik} />
        <Route path="/login" component={LoginFromFormik} />
        <UserInfoProvider>
          <Route path="/:id/requestnanny" component={CreateRequestFrom} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/profile" component={Profile} />
          <PrivateRoute path="/profile/edit" component={ProfileEdit} />
        </UserInfoProvider>
        <Route path="/logout" component={Logout} />

        <Route
          path="/https://eager-meninsky-104020.netlify.com/"
          component={() => {
            window.location.href = "https://eager-meninsky-104020.netlify.com/";
            return null;
          }}
        />
      </Router>
    </div>
  );
};

//NOTE: Dashboard will become privateroute once login is functional
export default App;
