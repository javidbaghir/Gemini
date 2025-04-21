import React, { useContext } from "react";
import Cards from "./Cards";
import BottomSide from "./BottomSide";
import { Context } from "../../context/Context";
import { BookHeart, Star } from "lucide-react";

const MainContainer = () => {
  const {
    recentPrompt,
    showResult,
    loading,
    resultData,
  } = useContext(Context);
  return (
    <div className="main-container">
      {!showResult ? (
        <>
          <div className="greet">
            <p>
              <span>Hello, Dev.</span>
            </p>
            <p>How can i help you today</p>
          </div>
          <Cards />
        </>
      ) : (
        <div className="result">
          <div className="result-title">
            <img
              src="https://media.istockphoto.com/id/1682296067/photo/happy-studio-portrait-or-professional-man-real-estate-agent-or-asian-businessman-smile-for.jpg?s=612x612&w=0&k=20&c=9zbG2-9fl741fbTWw5fNgcEEe4ll-JegrGlQQ6m54rg="
              alt=""
            />
            <p>{recentPrompt}</p>
          </div>

          <div className="result-data">
            <Star />
            {loading ? (
              <div className="loader">
                <hr />
                <hr />
                <hr />
              </div>
            ) : (
              <p dangerouslySetInnerHTML={{ __html:resultData }}></p>
            )}
          </div>
        </div>
      )}

      <BottomSide />
    </div>
  );
};

export default MainContainer;
