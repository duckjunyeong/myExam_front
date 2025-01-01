import React from "react";
import { Route, Routes } from "react-router";
import Login from "@pages/Login";
import SignUp from "@pages/SignUp";
import Main from "@pages/Main";

function App() {
  return (
    <Routes>
      <Route exact path="/" to="/login" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/main" element={<Main />}></Route>
    </Routes>
  );
}

export default App;
