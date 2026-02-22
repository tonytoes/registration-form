import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegistrationForm from "./registrationForm";
import Welcome from "./welcome";

const RegistrationFormApp = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RegistrationForm/>} />
        <Route path="/welcome" element={<Welcome />} />
      </Routes>
    </Router>
  );
};

export default RegistrationFormApp;
