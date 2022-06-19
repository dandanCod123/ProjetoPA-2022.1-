import React, { useState, useRef } from "react";
import * as S from "./styles";
import UploadButton from "../../components/UploadButton/UploadButton";
import TextStyled from "../../components/Text/TextStyled";
import { useNavigate } from "react-router-dom";
import HelpButton from "../../components/HelpButton/HelpButton";
import axios from "axios";

const UploadPage = () => {
  const inputFile = useRef(null);
  const navigate = useNavigate();
  const navigateHelp = useNavigate();

  // const handleFileUpload = (e) => {
  //   const { files } = e.target;
  //   if (files && files.length) {
  //     const filename = files[0].name;

  //     var parts = filename.split(".");
  //     const fileType = parts[parts.length - 1];
  //     console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
  //     setImage(files[0]);
  //     // if (image != null) {
  //     //   navigate("/detection");
  //     // } else {
  //     //   navigate("/upload");
  //     // }
  //   }
  // };
  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    const newbase64 = getBase64StringFromDataURL(base64);
    const obj = { b64img: newbase64 };
    console.log(obj);
    await axios
      .post("http://127.0.0.1:8000/upload", { b64img: newbase64 })
      .then(function(response) {
        console.log("caiu aqui ", response);
      })
      .catch(function(error) {
        console.log(error);
      });
    if (file != null) {
      navigate("/detection");
    } else {
      navigate("/upload");
    }
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = () => {
        resolve(fileReader.result);
      };
      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  const getBase64StringFromDataURL = (dataURL) =>
    dataURL.replace("data:", "").replace(/^.+,/, "");

  const onButtonClick = () => {
    inputFile.current.click();
  };

  const onNavigateHelp = () => {
    navigateHelp("/help");
  };
  return (
    <S.Container>
      <S.Column>
        <div></div>
        <input
          style={{ display: "none" }}
          ref={inputFile}
          onChange={(e) => {
            uploadImage(e);
          }}
          type="file"
        />
        <UploadButton txt={"+"} onClick={onButtonClick}></UploadButton>
        <TextStyled txt={"Click to upload a image"}></TextStyled>
        <HelpButton onClick={onNavigateHelp} text={"?"}></HelpButton>
      </S.Column>{" "}
    </S.Container>
  );
};

export default UploadPage;
