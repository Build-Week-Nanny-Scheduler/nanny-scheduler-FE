import React from "react";
import "./App.scss";
import { Route, Link } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { RegisterFromFormik } from "./components/auth/Register";
import { LoginFromFormik } from "./components/auth/Login";
import Home from "./components/layout/Home";
import { CreateRequest } from "./components/requests/CreateRequest";
import { Navigation } from "./components/navigation/NavBar";
import Dashboard from "./components/layout/Dashboard";
import { NannyProvider } from "./contexts/nannyContext";
import { RequestProvider } from "./contexts/requestContext";
import { UserTokenProvider } from "./contexts/userTokenContext";
import PrivateRoute from "./components/PrivateRoute";
import { UserIDProvider } from "./contexts/userIDContext";
import { UserInfoProvider } from "./contexts/userInfoContext";
import Profile from "./components/profile/Profile";
import Logout from "./components/auth/Logout";
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
        <UserIDProvider>
          <Route path="/createrequest" component={CreateRequest} />
          <UserTokenProvider>
            <Route path="/register" component={RegisterFromFormik} />
            <Route path="/login" component={LoginFromFormik} />
            <UserInfoProvider>
              <PrivateRoute path="/dashboard" component={Dashboard} />
              <PrivateRoute path="/profile" component={Profile} />
            </UserInfoProvider>
          </UserTokenProvider>
        </UserIDProvider>
        <Route path="/logout" component={Logout} />

        <Route path='/https://eager-meninsky-104020.netlify.com/' component={() => {
           window.location.href = 'https://eager-meninsky-104020.netlify.com/'; 
           return null;
         }}/>
      </Router>
    </div>
  );
};

//NOTE: Dashboard will become privateroute once login is functional
export default App;
