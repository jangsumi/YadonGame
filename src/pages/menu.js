import React from "react";
import * as styled from "./styles";


function MenuPage(props) {
    return (
      <styled.BigBox>
        <styled.MenuTitle>게임설명</styled.MenuTitle>
        <styled.Line1>제한시간 5초동안 </styled.Line1>
        <styled.Line2Box>
          <styled.Line21>야돈</styled.Line21>
          <styled.TextYadon src={process.env.PUBLIC_URL + "/yadon.png"} />
          <styled.Line22>의 등을 긁어주세요!</styled.Line22>
        </styled.Line2Box>
        <styled.Line3>연타수가 많을수록 랭킹이 올라갑니다.</styled.Line3>
      </styled.BigBox>
    );
  }

  export default MenuPage;
