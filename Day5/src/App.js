import React, { useState } from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from "./Components/LoginSignup/Login";
import Signup from "./Components/LoginSignup/Signup";
import { Dashboard } from "./Components/Dashboard";

function App() {
  const [currentPage, setCurrentPage] = useState("Login");

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>}></Route>
          <Route path='/signup' element={<Signup/>}></Route>
          <Route path='/dashboard' element={<Dashboard/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
