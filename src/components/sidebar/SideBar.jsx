import React, { useState } from "react";
import "./sidebar.css";
import SideBarTop from "./SideBarTop";
import SideBarBottom from "./SideBarBottom";

const SideBar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openMenuToggle = () => {
    setOpenMenu(!openMenu)
  }
  return (
    <div className="sidebar">
      <SideBarTop openMenuToggle={openMenuToggle} openMenu={openMenu} />
      <SideBarBottom openMenu={openMenu} />
    </div>
  );
};

export default SideBar;
