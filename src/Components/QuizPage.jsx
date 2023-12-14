import React, { useState } from "react";
import questions from "../questions";
import "../app.css";
import logo from "../assets/logo.png";
import lightoff from '../assets/off.png'
import lighton from '../assets/on.png'

function QuizPage(props) {
  const [currentQues, setQuiz] = useState(0);
  const [dark,setTheme]=useState(true)
  const [highlight,setHighlight]=useState(false)

  const handleClick=(optionSelected)=>{
    console.log("handleClick called")
    switch(optionSelected){
        case "option1" :
            questions[currentQues].options[0].isCorrect ? props.setScore(prev=>props.score+1) : null;
            questions.length!==currentQues+1 ? setQuiz(prev=>currentQues+1) : props.setEnd(!props.ended)
        case "option2" :
            questions[currentQues].options[1].isCorrect ? props.setScore(prev=>props.score+1) : null;
            questions.length!==currentQues+1 ? setQuiz(prev=>currentQues+1) : props.setEnd(!props.ended)
        case "option3" :
            questions[currentQues].options[2].isCorrect ? props.setScore(prev=>props.score+1) : null;
            questions.length!==currentQues+1 ? setQuiz(prev=>currentQues+1) : props.setEnd(!props.ended)
        case "option4" :
            questions[currentQues].options[3].isCorrect ? props.setScore(prev=>props.score+1) : null;
            questions.length!==currentQues+1 ? setQuiz(prev=>currentQues+1) : props.setEnd(!props.ended)
    }
  }


  const handleColor={
    color : dark ?  'white' : 'black'
  }

  const handleDiv={
    backgroundColor: dark ? '#464648' : '#767BD9',
    boxShadow: dark ? '0px 0px 20px white' : '0px 0px 20px black'
  }
 
  const handleHighlight={
    color: highlight ? 'red' : null,
    fontSize: highlight ? "200%" : null
  }

  return (
    <div className="whole-container" style={{backgroundColor: dark ? 'black' : 'white'}}>
      <div className="logoContainer">
        <img src={logo} alt="" />
        <h1 style={handleColor}>QuizStack</h1>
      </div>
      <div className="Ques-ans" style={handleDiv} >
        <div className="top-container">
          <p style={handleColor}>
            {currentQues + 1} of {questions.length}
          </p>

          
          <div  onClick={()=>setTheme(!dark)}> 
            <img src={dark ? lightoff : lighton} alt="" style={{height:'50px'}}/>
            <p>{dark ? "Turn On" : "Turn Off"}</p> 
          </div>
        </div>
        <h2 style={handleHighlight}>{questions[currentQues].text}</h2>
        <div id="option-container">
          <div
            className="options"
            id="option1"
            onClick={() => handleClick("option1")}
          >
            <div className="circle">A</div>{" "}
            <div>
              <h3>{questions[currentQues].options[0].text}</h3>
            </div>
          </div>
          <div
            className="options"
            id="option2"
            onClick={() => handleClick("option2")}
          >
            <div className="circle">B</div>
            <div>
              <h3>{questions[currentQues].options[1].text}</h3>
            </div>
          </div>
          <div
            className="options"
            id="option3"
            onClick={() => handleClick("option3")}
          >
            <div className="circle">C</div>{" "}
            <div>
              <h3>{questions[currentQues].options[2].text}</h3>
            </div>
          </div>
          <div
            className="options"
            id="option4"
            onClick={() => handleClick("option4")}
          >
            <div className="circle">D</div>{" "}
            <div>
              <h3>{questions[currentQues].options[3].text}</h3>
            </div>
          </div>
        </div>
        <button id="highlight-btn"
          onClick={()=>setHighlight(!highlight)}
        >{highlight ? 'Remove Highlight' : "Highlight"}</button>
      </div>
    </div>
  );
}

export default QuizPage;
