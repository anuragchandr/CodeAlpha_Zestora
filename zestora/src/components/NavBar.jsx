import React from 'react';
import '../css/NavBar.css';

function NavBar() {
  const user = JSON.parse(localStorage.getItem('user')) || { username: 'Guest' };
  return (
    <nav className="navbar">
      <div className="navbar-brand">Zestora</div>
      <div className="navbar-actions">
        <i className="fas fa-search navbar-icon"></i>
        <img
          src="https://img.icons8.com/?size=100&id=eJvXJFMTOzvJ&format=png&color=000000"
          alt="Profile"
          className="navbar-profile"
        />
      </div>
    </nav>
  );
}

export default NavBar;