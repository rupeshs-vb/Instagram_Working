import React, { useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Home from "./components/Home";
import { useDispatch } from "react-redux";
import { LoginUsers } from "./store/user-action";
// import { Redirect } from "react-router";

const App = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    const username = localStorage.getItem("username");
    const password = localStorage.getItem("password");
    const tempObject = { username: username, password: password };
    dispatch(LoginUsers(tempObject)).then((res) => {
      res ? navigate("/home") : navigate("/login");
    });
  }, []);

  return (
    <Routes>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<SignUp />}></Route>
      <Route path="/home" element={<Home />}></Route>
    </Routes>
  );
};

export default App;
