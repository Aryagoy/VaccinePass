import React from "react";
import { NavLink } from 'react-router-dom';
function VaccinePassSummary() {
  return (
    <React.Fragment>
      <div>
        This is some copy about what a vaccine pass is and how it works. This is
        some copy about what a vaccine pass is and how it works. This is some
        copy about what a vaccine pass is and how it works. This is some copy
        about what a vaccine pass is and how it works.
      </div>
      <br />
      <h1>Acceptance of terms and Conditions</h1>
      <div>
        For UnitedHealthcare to create a shareable copy of your COVID-19
        vaccination information, you must first accept our <NavLink to='/window/terms'>terms and conditions. </NavLink>
         Please read them before accepting. Once you have accepted, you can print
        a copy of your vaccination record, either as an English-language
        version or as a QR code that contains your vaccination record and that
        can be read by certain QR-code readers used by third-parties to confirm
        vaccination status.
      </div>
    </React.Fragment>
  );
}

export default VaccinePassSummary;
