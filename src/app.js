import React, { useState } from "react";
import "./App.css";

import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import User from "./pages/User";
import Error from "./pages/404";

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Protected from "./Protected/Protected";


const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <nav>
        <NavLink className="nav-link" to="/">
          Home
        </NavLink>
        <NavLink className="nav-link" to="/blogs">
          Blogs
        </NavLink>
        <NavLink className="nav-link" to="/contact">
          Contact
        </NavLink>
        <NavLink className="nav-link" to="/user">
          User
        </NavLink>
      </nav>

      {isLoggedIn ? (
        <button
          onClick={() => {
            setIsLoggedIn(!isLoggedIn);
          }}
        >
          Logout
        </button>
      ) : (
        <button onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}>login</button>
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:title" element={<Blog />} />
        <Route path="/user" element={
          <Protected isLoggedIn={isLoggedIn}>
            <User />
          </Protected>
        } />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
