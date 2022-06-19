import React from "react";
import TextStyled from "../../components/Text/TextStyled";
import TextH1 from "../../components/TextH1/TextH1";
import * as S from "./styles";
import { useNavigate } from "react-router-dom";
import LogoStyled from "../../components/Logo/Logo";
import ButtonStyled from "../../components/Button/Button";

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <S.Container>
      {" "}
      <S.Column>
        <TextStyled txt={"Online"}></TextStyled>
        <TextH1 txt={"YOLO"}></TextH1>
        <TextStyled txt={"Object detection"}></TextStyled>
        <TextStyled txt={"and recognition"}></TextStyled>
        <LogoStyled></LogoStyled>
        <S.Align>
          <ButtonStyled text={"Start"} onClick={handleClick}></ButtonStyled>
        </S.Align>
      </S.Column>{" "}
    </S.Container>
  );
};

export default Home;
