import React from "react";
import * as S from "./styles";

const ButtonStyled = (props) => {
  return (
    <a href={props.imgLink} download={"download.png"}>
      <S.Button onClick={() => props.onClick && props.onClick()}>
        {" "}
        {props.text}
      </S.Button>
    </a>
  );
};

export default ButtonStyled;
