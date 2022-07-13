import React from "react";
import {  Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function MargerRoute() {
  return (
    <React.Fragment>
      <header>
        <Nav></Nav>
      </header>
      <Outlet></Outlet>
    </React.Fragment>
  );
}
