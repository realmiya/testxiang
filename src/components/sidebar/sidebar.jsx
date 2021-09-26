/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./sidebar.css";
import styled from "styled-components";
import { RiAccountCircleLine } from "react-icons/ri";
// import { GrScorecard } from "react-icons/fi"
import {
  FiFileText,
  FiTruck,
  FiArchive,
  FiCalendar,
  FiUser,
  FiChevronLeft,
  FiChevronRight,
} from "react-icons/fi";
const feather = require("feather-icons");

function Sidebar(props) {
  const { open, hideNav, showNav } = props;
  return (
    <>
      <div className={open ? "sidewrapper" : "sidewrapperClose"}>


        {open &&
          <div className="navbtn">
            <div className="arrowbtn" onClick={() => {
              open ? hideNav() : showNav();
            }}> <FiChevronLeft />Hide </div>
          </div>
        }





        {!open &&
          <div className="navbtn">
            <div className="arrowbtnShow" onClick={() => {
              open ? hideNav() : showNav();
            }}><FiChevronRight />Show</div>
          </div>
        }


        {open && (
          <div className="sidemenu">
            <div className="menuitem">
              <div className="menuicon">
                <FiFileText size={20} />
              </div>
              <div>Dashboard</div>
            </div>

            <div className="menuitem">
              <div className="menuicon">
                <FiTruck size={20} />
              </div>

              <div>Inventory</div>
            </div>

            <div className="menuitem">
              <div className="menuicon">
                <FiArchive size={20} />
              </div>

              <div>Order History</div>
            </div>

            <div className="menuitem">
              <div className="menuicon">
                <FiCalendar size={20} />
              </div>
              <div>Calendar</div>
            </div>

            <div className="menuitem">
              {/* <RiAccountCircleLine /> */}
              <div className="menuicon">
                <FiUser
                  size={20}
                  style={{ borderRadius: "50%", border: "1px solid grey" }}
                />
              </div>
              <div>User Profile</div>
            </div>
          </div>
        )}

        {!open && (
          <section className="sideMenuClose">
            <div className="menuitem">
              <FiFileText size={20} />
            </div>

            <div className="menuitem">
              <FiTruck size={20} />
            </div>

            <div className="menuitem">
              <FiArchive size={20} />
            </div>

            <div className="menuitem">
              <FiCalendar size={20} />
            </div>

            <div className="menuitem">
              <FiUser style={{ borderRadius: "50%", border: "1px solid" }} size={20} />
            </div>
          </section>
        )}

      </div>
    </>
  );
}

export default Sidebar;
// ReactDOM.render(< Sidebar />, document.getElementById('root'));
