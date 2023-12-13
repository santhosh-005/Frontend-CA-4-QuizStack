import React, { useState } from "react";
import questions from "../questions";
import "../app.css";
import logo from "../assets/logo.png";
import lightoff from '../assets/off.png'
import lighton from '../assets/on.png'

function Result(props) {
  const [dark, setTheme] = useState(true);

  const handleColor = {
    color: dark ? "white" : "black",
  };

  const handleDiv = {
    backgroundColor: dark ? "#464648" : "#767BD9",
    boxShadow: dark ? "0px 0px 20px white" : "0px 0px 20px black",
  };

  const percen = (props.score / questions.length) * 100;

  return (
    <div
      className="whole-container"
      style={{ backgroundColor: dark ? "black" : "white" }}
    >
      <div className="logoContainer">
        <img src={logo} alt="" />
        <h1 style={handleColor}>QuizStack</h1>
      </div>

      <div
        className="Ques-ans"
        style={{
          ...handleDiv,
          justifyContent: "space-between",
          alignItems: "center",
          paddingBottom:'50px'
        }}
      >
        <div onClick={() => setTheme(!dark)} style={{ alignSelf: "flex-end" ,margin:'10px'}}>
          <img
            src={dark ? lightoff : lighton}
            alt=""
            style={{ height: "50px" }}
          />
          <p>{dark ? "Turn On" : "Turn Off"}</p>
        </div>

        <h1> {percen > 60 ? "GOOD LUCK" : "TRY BETTER ON NEXT TIME"}</h1>

        <h2>
          YOU SCORED {props.score} OUT OF {questions.length}
        </h2>
        <h1 style={{color:'yellow'}}>{percen}%</h1>
        <button
          style={{
            width: "150px",
            height: "30px",
            fontWeight: "bolder",
            border: "3px solid green",
            borderRadius: "8px",
            backgroundColor: "lightGreen",
          }}
          onClick={() => {
            window.location.reload();
          }}
          id="startAgain-btn"
        >
          Start Again
        </button>
      </div>
    </div>
  );
}

export default Result;
