import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";

function LoadingPage(props) {
  const navigate = useNavigate();

  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(2);


  function GotoStart() {
    navigate("/start");
  }

  useEffect(() => {
    const countdown = setInterval(() => {
      if (parseInt(seconds) > 0) {
        setSeconds(parseInt(seconds) - 1);
      }
      if (parseInt(seconds) === 0) {
        if (parseInt(minutes) === 0) {
          clearInterval(countdown);
          GotoStart();
        } else {
          setMinutes(parseInt(minutes) - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);




  return (
    <styled.BigBox>
      <styled.YadonBox src={process.env.PUBLIC_URL + "/yadon.png"} />
      <styled.LoadingText>야생의 야돈이 나타났다!</styled.LoadingText>
    </styled.BigBox>
  );
}

export default LoadingPage;
