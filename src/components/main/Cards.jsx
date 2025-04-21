import { Code, Compass, Lightbulb, Mail } from "lucide-react";
import React from "react";

const Cards = () => {
  return (
    <div className="cards">
      <div className="card">
        <p>Sugeest beautiful places to see on an upcoming road trip</p>
       <span> <Compass /></span>
      </div>
      <div className="card">
        <p>Sugeest beautiful places to see on an upcoming road trip</p>
        <span>
          <Lightbulb />
        </span>
      </div>
      <div className="card">
        <p>Sugeest beautiful places to see on an upcoming road trip</p>
       <span> <Mail /></span>
      </div>
      <div className="card">
        <p>Sugeest beautiful places to see on an upcoming road trip</p>
       <span> <Code /> </span>
      </div>
    </div>
  );
};

export default Cards;
