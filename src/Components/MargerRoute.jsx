import React from "react";
import {  Outlet, useLocation } from "react-router-dom";
import Nav from "./Nav";
import style from './MargerRoute.module.css'

export default function MargerRoute() {
  let location = useLocation().pathname.split('/')[1]


  return (
    <div className={location ==''? style.home : style[location]}>
      <header style={{blockSize:"10%", inlineSize:"100%"}}>
        <Nav></Nav>
      </header>
      <Outlet></Outlet>
    </div>
  );
}
