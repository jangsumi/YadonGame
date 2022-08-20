import React from "react";
import * as styled from "./styles";

function GamePage(props) {
  return (
    <styled.BigBox>
      <styled.BigYadon src={process.env.PUBLIC_URL + "/yadon.png"} />
      <styled.Score>0회</styled.Score>
      <styled.LeftTime>0.00초</styled.LeftTime>
    </styled.BigBox>
  );
}

export default GamePage;
