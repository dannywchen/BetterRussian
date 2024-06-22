import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import UserAvatar from './UserAvatar';
import './NavBar.css';

const Navbar = () => {
  const user = useContext(UserContext);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="logo">Better Russian</Link>
        <nav className="nav-menu">
          <ul className="nav-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
          {user && <UserAvatar user={user} />}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
