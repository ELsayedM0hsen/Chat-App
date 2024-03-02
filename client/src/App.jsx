import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import { Toaster } from "react-hot-toast";
import {  AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const {userAuth} = useContext(AuthContext)
  return (
    <div className="p-4 h-screen flex items-center justify-center">
      <BrowserRouter>
        <Routes>
				<Route path='/' element={userAuth ? <Home /> : <Navigate to={"/login"} />} />
				<Route path='/login' element={userAuth ? <Navigate to='/' /> : <Login />} />
				<Route path='/register' element={userAuth ? <Navigate to='/' /> : <Register />} />
        </Routes>
        <Toaster position="top-center" reverseOrder={false} />
      </BrowserRouter>
    </div>
  );
}

export default App;
