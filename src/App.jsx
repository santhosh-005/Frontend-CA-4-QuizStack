import React, { useState } from "react";
import QuizPage from "./Components/QuizPage";
import Result from "./Components/Result";
import './app.css'

function App() {
const [score,setScore]=useState(0)
let [ended,setEnd]=useState(false)

  return (
    <div>
     
      {
        ended ? <Result score={score} /> : <QuizPage setScore={setScore} score={score} ended={ended} setEnd={setEnd}/>
      }

    </div>
  );
}

export default App;


