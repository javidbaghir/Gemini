import React, { useContext } from "react";
import { Menu, MessageSquare, Plus } from "lucide-react";
import { Context } from "../../context/Context";

const SideBarTop = ({ openMenuToggle, openMenu }) => {
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt);
    await onSent(prompt);
  };
  return (
    <>
      <div>
        <Menu onClick={openMenuToggle} className="menu" size={20} />
        <div className="new-chat">
          <Plus onClick={newChat} size={20} />
          {openMenu ? <p>New Chat</p> : null}
        </div>

        {openMenu ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div key={index} 
                onClick={() => loadPrompt(item)} className="recent-entry">
                  <MessageSquare size={20} />
                  <p>{item.slice(0, 8)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </>
  );
};

export default SideBarTop;
