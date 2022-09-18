import React, {useState, useEffect} from "react";
import "./Style1.scss"
import {Link, useNavigate, useLocation} from "react-router-dom"
import logo from "../Assets/images/netflix.png"

const Navbar = () => {
  const location = useLocation(); 
  const [activeLink, setActiveLink] = useState()
  const navigate = useNavigate()
  const goToHome = () => {
    navigate("/")
  }
  useEffect(()=>{
    setActiveLink(location.pathname)
  },[location])
  return (
      <div className="navbar">
            <div className="navbar-logo" onClick={goToHome}>
             <img src={logo} alt="" /> 
            </div>
               <ul className="navbar-menu">
                  <li className={activeLink === "/" ? "active" : ""}>
                      <Link to="/">Home</Link>
                  </li> 
                  <li className={activeLink === "/about" ? "active" : ""}>
                      <Link to="/about">About</Link>
                  </li> 
                  <li className={activeLink === "/products" ? "active" : ""}>
                       <Link to="/products">Products </Link>
                  </li> 
                  <li className={activeLink === "/contact" ? "active" : ""}>
                       <Link to="/contact">Contact</Link>
                  </li> 
              </ul>
       </div>
  )
}

export default Navbar;