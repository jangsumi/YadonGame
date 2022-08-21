import React from "react";
import * as styled from "./styles";

function LoadingPage(props) {
  return (
    <styled.BigBox>
      <styled.YadonBox src={process.env.PUBLIC_URL + "/yadon.png"} />
      <styled.LoadingText>야생의 야돈이 나타났다!</styled.LoadingText>
    </styled.BigBox>
  );
}

export default LoadingPage;
