import React, { useState, useEffect } from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

function GamePage(props) {
  const navigate = useNavigate();

  const [score, setScore] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(5);

  const onIncrease = () => {
    setScore(score + 1);
  };

  function GotoResult() {
    localStorage.setItem("totalScore", JSON.stringify({ score }));
    navigate("/result");
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          GotoResult();
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  return (
    <styled.BigBox2>
      <styled.BigYadon
        onClick={onIncrease}
        src={process.env.PUBLIC_URL + "/yadon.png"}
      />
      <styled.Score>{score}</styled.Score>
      <styled.LeftTime>
        <div>
          {minutes} : {seconds < 10 ? `0${seconds}` : seconds}
        </div>
      </styled.LeftTime>
    </styled.BigBox2>
  );
}

export default GamePage;
