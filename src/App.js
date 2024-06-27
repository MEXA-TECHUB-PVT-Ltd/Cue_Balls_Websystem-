import './App.css';
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "././pages/Login";
import Signup from "././pages/Signup";
import Emailverification from "././pages/Emailverification";
import OtpVerification from "././pages/Otpverification";
import SetPassword from "././pages/Setpassword";
import Dashboard from "././pages/Dasboard";
import Playgame from "././pages/Playgame";
import Winner from "././pages/Winner";
import Wallet from "././pages/Wallet";
import PrivacyPolicy from "././pages/PrivacyPolicy";
import TermsConditions from "././pages/TermsConditions";
import UpdatePassword from "././pages/Updatepassword";
import Termsandconditions from "././pages/Termsandconditions";
import endpoint from './Endpointurl';
import { useEffect } from 'react';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path={`${endpoint}`} element={<Login />} />
          <Route path={`${endpoint}signup`} element={<Signup />} />
          <Route exact path={`${endpoint}emailverification`} element={<Emailverification />} />
          <Route exact path={`${endpoint}otpverification`} element={<OtpVerification />} />
          <Route exact path={`${endpoint}setpassword`} element={<SetPassword />} />
          <Route exact path={`${endpoint}dashboard`} element={<Dashboard />} />
          <Route exact path={`${endpoint}playgame`} element={<Playgame />} />
          <Route exact path={`${endpoint}winner`} element={<Winner />} />
          <Route exact path={`${endpoint}wallet`} element={<Wallet />} />
          <Route exact path={`${endpoint}privacypolicy`} element={<PrivacyPolicy />} />
          <Route exact path={`${endpoint}termsconditions`} element={<TermsConditions />} />
          <Route exact path={`${endpoint}updatepassword`} element={<UpdatePassword />} />
          <Route exact path={`${endpoint}termsandconditions`} element={<Termsandconditions />} />
        </Routes>
      </Router >
    </>
  );
}

export default App;
