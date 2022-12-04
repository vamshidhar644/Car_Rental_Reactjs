import React from 'react';
import { useNavigate } from 'react-router';
import { GiWingedShield } from 'react-icons/gi';
import '../Styles/Navbar.css';

export default function Navbar() {  
  const navigate = useNavigate();
  function ToHome(){
      navigate("/")
  }
  function ToServices(){
    navigate("/services")
  }
  function ToAbout(){
    navigate("/about")
  }  
  function ToContact(){
    navigate("/contact")
  }
  function ToLogin(){
    navigate("/login")
  }
  function ToRegister(){
    navigate("/register")
  }
  return (
    <div className="navbar-container">
      <div className="nav-item logo"><GiWingedShield /></div>
      <ul className="navi-items">
        <li className="item" onClick={ToHome}><p>Home</p></li>
        <li className="item" onClick={ToServices}><p>Services</p></li>
        <li className="item" onClick={ToAbout}><p>About</p></li>
        <li className="item" onClick={ToContact}><p>Contact us</p></li>
        <li className="item" onClick={ToLogin}><p>Log in</p></li>
        <li className="item" onClick={ToRegister}><p>Register</p></li>
      </ul>
    </div>
  );
}
