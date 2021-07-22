import React from "react";
import VaccinePassSummary from "./VaccinePassSummary";
import './AboutVaccinePass.css';
import PassForm from "./PassForm";

function AboutVaccinePass() {
  return (
    <React.Fragment>
      <div className="sum">
      <VaccinePassSummary />
      <br />
      <PassForm />
      </div>
    </React.Fragment>
  );
}

export default AboutVaccinePass;
