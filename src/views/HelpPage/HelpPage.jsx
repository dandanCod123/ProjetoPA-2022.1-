import React from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyled from "../../components/Button/Button";
import TextH1 from "../../components/TextH1/TextH1";
import * as S from "./styles";
const HelpPage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/upload");
  };

  return (
    <S.Container>
      <S.Column>
        <TextH1 txt={"Help"}></TextH1>
        <S.ContainerDiv>
          <strong>Sobre a Utilização do site: </strong>
          <br></br> <br />
          Para utilização do site clique no botão de upload da imagem e
          selecione uma imagem em formato png do seu computador. Em seguida
          espere o resultado. Para obter a imagem basta clicar no botão de
          download abaixo do resultado. <br /> <br />
          <strong>Sobre a YOLO:</strong> <br></br> <br />
          Este site utiliza a YOLO para a detecção de objetos de interesse. YOLO
          é uma Rede Neural Convolucional utilizada para a detecção de obejtos
          de interesse. Seu treinamento se dâ por meio da utilização de datasets
          classificados e rotulados para o aprendizado da rede. Ela é utilizada
          em diversas aplicações que necessitam de inteligência artificial para
          a detecção de objetos. Para saber mais visite{" "}
          <a href="https://pjreddie.com/darknet/yolo/">
            https://pjreddie.com/darknet/yolo/
          </a>
        </S.ContainerDiv>
        <ButtonStyled text={"Exit"} onClick={handleClick}></ButtonStyled>
      </S.Column>
    </S.Container>
  );
};

export default HelpPage;
