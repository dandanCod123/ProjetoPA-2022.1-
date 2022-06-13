import { Route, Routes } from "react-router-dom";
import Home from "../../views/home/home";
import UploadPage from "../../views/UploadPage/UploadPage";
import HelpPage from "../../views/HelpPage/HelpPage";
import DetectionPage from "../../views/DetectionPage/DetectionPage";
import React from "react";
const MyRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="upload" element={<UploadPage />} />
      <Route path="help" element={<HelpPage />} />
      <Route path="detection" element={<DetectionPage />} />
    </Routes>
  );
};

export default MyRoutes;
