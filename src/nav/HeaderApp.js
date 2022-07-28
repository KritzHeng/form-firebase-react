import React from 'react'
import { NavLink } from "react-router-dom";
import './HeaderApp.css';



const HeaderApp = () => {
  function getNavClass(navLinkProps) {
    let navClass = 'app-header-item';
    if (navLinkProps.isActive) navClass += ' app-header-item-active';
    return navClass;
  }



  return (
    <div className="app-header">
        <NavLink className={getNavClass} to="/" >Home</NavLink>
        <NavLink className={getNavClass} to="/showdata">data-information</NavLink>
        <NavLink className={getNavClass} to="/information">form-information</NavLink>
    </div>
    // <div className="app-header">
    //     <NavLink className="app-header-item" to="/" >Home</NavLink>
    //     <NavLink className="app-header-item" to="/showdata">data-information</NavLink>
    //     <NavLink className="app-header-item" to="/information">form-information</NavLink>
    // </div>
  )
}

export default HeaderApp