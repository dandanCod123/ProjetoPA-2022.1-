import React, { useState, useRef } from "react";
import * as S from "./styles";
import UploadButton from "../../components/UploadButton/UploadButton";
import TextStyled from "../../components/Text/TextStyled";
import { useNavigate } from "react-router-dom";
import HelpButton from "../../components/HelpButton/HelpButton";

const UploadPage = () => {
  const [image, setImage] = useState("");
  const inputFile = useRef(null);
  const navigate = useNavigate();
  const navigateHelp = useNavigate();
  const handleFileUpload = (e) => {
    const { files } = e.target;
    if (files && files.length) {
      const filename = files[0].name;

      var parts = filename.split(".");
      const fileType = parts[parts.length - 1];
      console.log("fileType", fileType); //ex: zip, rar, jpg, svg etc.
      setImage(files[0]);
      if (image != null) {
        navigate("/detection");
      } else {
        navigate("/upload");
      }
    }
  };

  const onButtonClick = () => {
    inputFile.current.click();
  };

  console.log("imageimage", image);
  const onNavigateHelp = () => {
    navigateHelp("/help");
  };
  return (
    <S.Container>
      <S.Column>
        <input
          style={{ display: "none" }}
          ref={inputFile}
          onChange={handleFileUpload}
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
