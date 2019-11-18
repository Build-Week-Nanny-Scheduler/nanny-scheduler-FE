import React from "react";
import "./App.css";
import { Route } from "react-router-dom";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [loginComponent, setLoginComponent] = useState();
  return (
    <>
      {!loggedin ? (
        <Route exact path="/" component={login} />
      ) : (
        <Route exact path="/" component={Register} />
      )}
      <PrivateRoute path="/dashboard" component={Dashboard} />
    </>
  );
}

export default App;
