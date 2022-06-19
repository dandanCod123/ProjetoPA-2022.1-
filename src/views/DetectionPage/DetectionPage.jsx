import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonStyled from "../../components/Button/Button";
import * as S from "./styles";
import axios from "axios";
import { useState } from "react";

const DetectionPage = () => {
  const [imagePreview, setImagePreview] = useState("");
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/mask")
      .then(function(response) {
        setImagePreview(response.data.b64img);
      })
      .catch(function(error) {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();

  const downloadClick = () => {
    if (imagePreview) {
    }
  };

  const handleClick = () => {
    navigate("/");
  };

  return (
    <S.Container>
      <S.Column>
        <S.ContainerDiv>
          {imagePreview && (
            <img
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                objectFit: "contain",
              }}
              src={`data:image/png;base64,${imagePreview}`}
            />
          )}
        </S.ContainerDiv>
        <S.Row>
          <ButtonStyled
            text={"Download"}
            imgLink={`data:image/png;base64,${imagePreview}`}
            onClick={downloadClick}
          >
            {" "}
          </ButtonStyled>
          <ButtonStyled text={"Exit"} onClick={handleClick}></ButtonStyled>
        </S.Row>
      </S.Column>
    </S.Container>
  );
};

export default DetectionPage;
