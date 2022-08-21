import React from "react";
import * as styled from "./styles";
import { useNavigate } from "react-router-dom";

function ResultPage(props) {
  const navigate = useNavigate();

  function GotoHome() {
    navigate("/");
  }
  var myScore = localStorage.getItem("totalScore");
  myScore = JSON.parse(myScore);

  var myName = localStorage.getItem("nickName");
  myName = JSON.parse(myName);
  return (
    <styled.BigBox>
      <styled.ResultBox>
        <styled.ResultImage src={process.env.PUBLIC_URL + "/yadon.png"} />

        {myScore.score < 10 ? (
          <styled.ResultMessage
            src={process.env.PUBLIC_URL + "/message2.png"}
          />
        ) : (
          <styled.ResultMessage
            src={process.env.PUBLIC_URL + "/message1.png"}
          />
        )}
      </styled.ResultBox>

      {myScore.score < 10 ? (
        <styled.ResultTitle>
          {myName.name}의 파워는 미미했다.
        </styled.ResultTitle>
      ) : (
        <styled.ResultTitle>
          {myName.name}의 파워는 굉장했다!
        </styled.ResultTitle>
      )}

      <styled.HomeBox>
        <styled.ResultScore>총 {myScore.score}회</styled.ResultScore>
        <styled.ResultHomebutton onClick={GotoHome}>
          홈으로
        </styled.ResultHomebutton>
      </styled.HomeBox>
    </styled.BigBox>
  );
}

export default ResultPage;
