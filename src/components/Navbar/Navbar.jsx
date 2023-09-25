import React from "react";
import style from "./Navbar.module.css"
import {NavLink} from "react-router-dom";
const Navbar = () => {
  return(
  
      <nav className={style.nav}>
          <div className={style.item}>
            <NavLink to={"/profile"} className = { navData => navData.isActive ? style.item : style.active }>Profile</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to={"/dialogs" } className = { navData => navData.isActive ? style.item : style.active  }>Messages</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to={"/news"} className = { navData => navData.isActive ? style.item : style.active  }>News</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to={"/music"} className = { navData => navData.isActive ? style.item : style.active  }>Music</NavLink>
          </div>
          <div className={style.item}>
            <NavLink to={"/settings"} className = { navData => navData.isActive ? style.item : style.active  }>Settings</NavLink>
          </div>
        </nav>
  )
  
  }
  
  export default Navbar;