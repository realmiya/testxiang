import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import "./navigation.css";
import Header from "../header";
import Sidebar from "../sidebar";
import Content from "../content";

import styled from "styled-components";
import { RiAccountCircleLine } from "react-icons/ri";

function Navigation() {
  const [open, setOpen] = useState(true);
  // const [open, setOpen] = useState(true)
  // const [hideshowStr, setHideshowStr]=useState("Hide");
  function hideNav() {
    // setHideshowStr("Show");
    setOpen(false);
  }
  function showNav() {
    // setHideshowStr("Show");
    setOpen(true);
  }

  return (
    <>
      <div className="navigation">
        {/* <div> */}
        <Header open={open} hideNav={hideNav} showNav={showNav} />
        <div>
        <Sidebar open={open} hideNav={hideNav} showNav={showNav} />
        <Content />
        </div>
        {/* </div> */}
      </div>
    </>
  );
}

export default Navigation;
// ReactDOM.render(< Navigation />, document.getElementById('root'));
