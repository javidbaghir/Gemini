import { Images, Mic, SendHorizontal } from "lucide-react";
import React, { useContext } from "react";
import { Context } from "../../context/Context";

const BottomSide = () => {

    const {
      onSent,
      setInput,
      input,
    } = useContext(Context);
  return (
    <div className="main-bottom">
      <div className="search-box">
        <input onChange={(e) => setInput(e.target.value)} value={input} type="text" placeholder="Enter prompt here" />
        <div>
          <span>
            <Images />
          </span>
          <span>
            <Mic />
          </span>
         
           {input ?  <span> <SendHorizontal onClick={() => onSent()} />
           </span> : ""} 
        </div>
      </div>
      <p className="bottom-info">Gemini may display inaccurate info, including about people</p>
    </div>
  );
};

export default BottomSide;
