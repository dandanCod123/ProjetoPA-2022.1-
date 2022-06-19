import { Route, Routes, useLocation } from "react-router-dom";
import Home from "../../views/Home/home";
import UploadPage from "../../views/UploadPage/UploadPage";
import HelpPage from "../../views/HelpPage/HelpPage";
import DetectionPage from "../../views/DetectionPage/DetectionPage";
import React from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import "./styles.css";
const MyRoutes = () => {
  const location = useLocation();
  return (
    <TransitionGroup>
      <CSSTransition key={location.key} classNames="transition" timeout={500}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="upload" element={<UploadPage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="detection" element={<DetectionPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default MyRoutes;
