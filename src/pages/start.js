import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as styled from "./styles";

function StartPage(props) {
  const navigate = useNavigate();

  function GotoMenu() {
    navigate("/menu");
  }

  const [name, setName] = useState(null);

  function GotoGame() {
    localStorage.setItem("nickName", JSON.stringify({ name }));
    navigate("/game");
  }

  return (
    <styled.BigBox>
      <styled.TitleBox>야돈 등 긁어주기</styled.TitleBox>
      <styled.UserName
        type="text"
        onChange={(event) => setName(event.target.value)}
        placeholder="닉네임을 입력해주세요."
      ></styled.UserName>
      <styled.ButtonBox>
        <styled.GameMenual onClick={GotoMenu}>게임설명</styled.GameMenual>
        <styled.GameStart onClick={GotoGame}>게임시작</styled.GameStart>
      </styled.ButtonBox>
    </styled.BigBox>
  );
}

export default StartPage;
