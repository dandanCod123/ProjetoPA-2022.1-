import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyled from "../../components/Button/Button";
import * as S from "./styles";

const DetectionPage = () => {
  const navigate = useNavigate()

    const handleClick = () => {
      navigate("/");
    };
  

  return (
    <S.Container>
      <S.Column>
      <S.ContainerDiv></S.ContainerDiv>
      <S.Row>
        <ButtonStyled text={"Download"}></ButtonStyled>
        <ButtonStyled text={"Exit"} onClick={handleClick}></ButtonStyled>
      </S.Row>

      </S.Column>
      
    </S.Container>
  );
};

export default DetectionPage;
