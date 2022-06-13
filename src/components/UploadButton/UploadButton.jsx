import React from "react";
import * as S from "./styles";

const UploadButton = (props) => {
  return <S.UploadButton onClick={props.onClick}> {props.txt}</S.UploadButton>;
};

export default UploadButton;
