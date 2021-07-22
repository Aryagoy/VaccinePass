import React from 'react';

import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import AboutVaccinePass from "./components/AboutVaccinePass/AboutVaccinePass";
import { Route } from "react-router-dom";
import TermsConditions from "./components/AboutVaccinePass/TermsConditions";
import NavBar from "./components/NavBar/NavBar";
function AboutPage(props) {
    return (
        <React.Fragment>
      <Header></Header>
     
      <NavBar></NavBar>
      <Route path="/window">
      
      <AboutVaccinePass />
     
      </Route>
      <Route path="/window/terms">
        <TermsConditions />
      </Route>
      <Footer />
    </React.Fragment>
    );
}

export default AboutPage;