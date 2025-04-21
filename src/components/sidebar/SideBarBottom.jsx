import { CircleHelp, History, Settings } from "lucide-react";
import React from "react";

const SideBarBottom = ({openMenu}) => {
  return (
    <>
      <div className="bottom">
        <div className="bottom-item recent-entry">
          <CircleHelp size={20} />
         {openMenu ? <p>Help</p> : null} 
        </div>
        <div className="bottom-item recent-entry">
          <History size={20} />
          {openMenu ? <p>History</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <Settings size={20}/>
          {openMenu ? <p>Setting</p> : null}
        </div>
      </div>
    </>
  );
};

export default SideBarBottom;
