import React from "react";
import * as S from "./styles";

const HelpButton = (props) => {
  return <S.HelpButton onClick={props.onClick}> {props.text}</S.HelpButton>;
};

export default HelpButton;
