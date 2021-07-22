import React, { useState } from "react";
import Modal from "../UI/Modal";
import { NavLink } from 'react-router-dom';
//import classes from './TermsConditions.module.css';
function TermsConditions(props) {
  const [isClose, setIsClose] = useState(false);

  function closeHandler() {
    setIsClose(true);
  }

  return (<React.Fragment>
    {!isClose && <Modal onClose={props.onClose}>
      <button onClick={closeHandler}><NavLink to="/window">Close</NavLink></button>
      <h1>Terms and Conditions</h1>
      
      <ul>
        <li>
          I consent to UnitedHealthcare creating a printable vaccination record,
          which I may choose to disclose to others, that is based on
          UnitedHealthcare’s then-current records of my COVID-19 vaccination
          status. Those records are based on information UnitedHealthcare has
          received from its own health Claims records as well as information
          received from outside authorities such as federal or state vaccination
          registries. The printout wil reflect UnitedHealthcare's records as of
          the time the record was printed, and I will roturn and reprint the
          record if my information has changed since a prior printout was made.
        </li>
        <br />
        <li>
          UnitedHealthcare is not responsible for the accuracy of any outside
          data resource. If I believe an outside data source is incorrect, I wll
          contact the data ‘source and seek to have the record corrected. See{" "}
          <a href="/">[link to Del's page on roaistry contact info]</a> for how
          to contact the appropriate registry.
        </li>
        <br />
        <li>
          The printable vaccination record will contain both an English language
          statement as well as a coded copy of my vaccine status in a QR-code
          and can be printed in hard-copy or displayed on my mobile device. I
          will be responsible for keeping all copies ofthe record from being
          stolen or lost
        </li>
        <br />
        <li>
          I understand that if I share my vaccination information with others by
          showing the UnitedHealthcare printout, it is my responsibilty to
          understand how those others may use the information I have shared. I
          acknowledge that UnitedHealthcare is not responsible to me or to any
          third-party as to how my vaccination information will be used, stored,
          or reshared by those third-parties.
        </li>
        <br />
        <li>
          I understand that UnitedHealthcare cannot guarantee any third party
          will ‘accept the printout as a valid proof of my vaccination status,
          as the choice of what is acceptable documentation is entirely up to
          the third party
        </li>
      </ul> 
    </Modal>}
    </React.Fragment>
  );
}

export default TermsConditions;
