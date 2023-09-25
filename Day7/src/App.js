import React, { useState } from "react";
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import { Dashboard } from "./Components/Dashboard";
import Privacy from "./Components/Privacy";
import FAQ from "./Components/faq";
import Projects from "./Components/Projects";
import TeamMembers from "./Components/TeamMembers";
import Terms from "./Components/Terms";

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
          <Route path='/Privacy' element={<Privacy/>}></Route>
          <Route path='/faq' element={<FAQ/>}></Route>
          <Route path='/members' element={<TeamMembers/>}></Route>
          <Route path='/Project' element={<Projects/>}></Route>
          <Route path='/tandc' element={<Terms/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
