import React from "react";
import * as styled from "./styles";

function LoadingPage(props) {
  return <styled.YadonBox src={process.env.PUBLIC_URL + "/yadonyadon.png"} />;
}

export default LoadingPage;
