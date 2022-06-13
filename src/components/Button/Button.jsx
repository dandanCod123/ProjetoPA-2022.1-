import React from "react";
import * as S from "./styles";

const ButtonStyled = (props) => {
  return <S.Button onClick={props.onClick}> {props.text}</S.Button>;
};

export default ButtonStyled;
