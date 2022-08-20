import React from "react";
import * as styled from "./styles";

function StartPage(props) {
  return (
    <styled.BigBox>
      <styled.TitleBox>야돈 등 긁어주기</styled.TitleBox>
      <styled.UserName placeholder="닉네임을 입력해주세요."></styled.UserName>
      <styled.ButtonBox>
        <styled.GameMenual>게임설명</styled.GameMenual>
        <styled.GameStart>게임시작</styled.GameStart>
      </styled.ButtonBox>
    </styled.BigBox>
  );
}

export default StartPage;
