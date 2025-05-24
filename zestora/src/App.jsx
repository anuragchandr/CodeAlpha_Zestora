import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Feed from './components/Feed';
import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Home from './components/Home';
import InfoPage from './components/InfoPage';
import NavBar from './components/NavBar';
import './components/auth/app.css';
import { NavLink, Link } from 'react-router-dom';
import ProtectedRoute from './util/ProtectedRoute';
function App() {

  return (
    <>


      <Router>
        <Routes>
          <Route path="/" element={
            <>
              <NavBar />
              <div style={{ marginTop: '48px' }}>
                <h1>ZESTORA</h1>
                <h2>Welcome to Zestora</h2>
                <Home />
                <footer className="footer">
                  <NavLink to="./info#about">About</NavLink> | <NavLink to="./info#privacy">privacy Policy</NavLink> | <NavLink to="./info#contact">contact</NavLink>
                </footer>
              </div>
            </>

          } />
          <Route path="/feed" element={
            <ProtectedRoute>
              <Feed />
            </ProtectedRoute>
          } />

          <Route path="/login" element={
            <>
              <NavBar />
              <div style={{ marginTop: '48px' }}>
                <h1>ZESTORA</h1>
                <h2>Welcome to Zestora</h2>
                <Login />
                <footer className="footer">
                  <NavLink to="../info#about">About</NavLink> | <NavLink to="../info#privacy">privacy Policy</NavLink> | <NavLink to="../info#contact">contact</NavLink>
                </footer>
              </div>
            </>

          } />


          <Route path="/Signup" element={
            <>
              <NavBar />
              <div style={{ marginTop: '48px' }}>
                <h1>ZESTORA</h1>
                <h2>Welcome to Zestora</h2>
                <Signup />
                <footer className="footer">
                  <NavLink to="../info#about">About</NavLink> | <NavLink to="../info#privacy">privacy Policy</NavLink> | <NavLink to="../info#contact">contact</NavLink>
                </footer>
              </div>
            </>

          } />
          <Route path="/info" element={
            <>
              <NavBar />
              <div style={{ marginTop: '48px' }}>
                <h1>ZESTORA</h1>
                <h2>Welcome to Zestora</h2>
                <InfoPage />
                <footer className="footer">
                  <NavLink to="../info#about">About</NavLink> | <NavLink to="../info#privacy">privacy Policy</NavLink> | <NavLink to="../info#contact">contact</NavLink>
                </footer>
              </div>
            </>
          } />

        </Routes>
      </Router>

    </>
  );
}

export default App;
