// import react hooks
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';


// import scss
import '../src/assets/styles/App.scss';

// import pages
import Login from "../src/pages/Login.js";
import Layout from "./components/Layout.js";
import Home from "./pages/Dashboard/Home.js";
import Management from "./pages/Dashboard/Management.js";
import User from "./pages/Dashboard/User.js";
import NotFound from "./pages/Dashboard/NotFound.js";
import Sale from "./pages/Dashboard/Sale.js";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route path="/" element={<Layout />}>
            {/* <Route path="/" element={<Home />} /> */}
            <Route path="/manager" element={<Management />} />
            <Route path="/user" element={<User />} />
            <Route path="/sale" element={<Sale />} />
        </Route>

        <Route path="/404" element={<NotFound />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
