import "./App.css";
import Cards from "./components/cards/Cards";
import "./components/header/header.css";
import { RiArrowUpDownFill } from "react-icons/ri";
import { CgMenuGridR } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";

function App() {
  const [view, setView] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [sort, setSort] = useState("neutral");

    return (
      <div className="App">
        <div className="searchBar">
          <h1>Meet the Team</h1>
          <div className="header">
            <div className="searchInput">
              <RiArrowUpDownFill onClick={() => setSort(!sort)} />
              <BiSearchAlt2 />
              <input type="search" onChange={(e) => {setSearchTerm(e.target.value)}} />
              <div id="icon" className="menu-grid-icon">
                {view
                ? <CgMenuGridR onClick={() => setView(false)} />
                : <GiHamburgerMenu onClick={() => setView(true)} />}
              </div>
            </div>
          </div>
        </div>
        <div className="view">{<Cards view={view ? true : false} searchTerm={searchTerm} sort={sort} />}</div>
      </div>
    );
}

export default App;
