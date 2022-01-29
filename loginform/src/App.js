import React from "react";
import SignUp from "./components/SignUp/SignUp";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import { BrowserRouter as Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route exact path="/">
        <Login />
      </Route>
      <Route path="/SignUp">
        <SignUp />
      </Route>
      <Route path="/Home">
        <Home />
      </Route>
    </Routes>
  );
}

export default App;
