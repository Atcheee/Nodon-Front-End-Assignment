import React from "react";
import "./header.css";
import { RiArrowUpDownFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

function SearchBar() {

  const [view, setView] = useState(true);
  
  return (
    <div className="searchBar">
    <h1>Meet the Team</h1>
    <div className="header">
      <div className="searchInput">
        <RiArrowUpDownFill />
        <BiSearchAlt2 />
        <input type="search" />
        <div id="icon" className="menu-grid-icon">
          <CgMenuGridR />
          <GiHamburgerMenu onClick={() => setView(false)} />
        </div>
      </div>
    </div>
  </div>
  );
}

export default SearchBar;
