import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Card from "../UI/Card";
import classes from "./QrCode.module.css";
//import { useHistory } from "react-router-dom";
import Pdf from "react-to-pdf";
//import PassPdf from "./PassPdf";
function QrCode() {
  const ref = React.createRef();
  // let history = useHistory();
  
  // function passHandler() {
  //   history.push({
  //     pathname: "/details",
  //     state: {
  //       Manufacturer: location.state.Manufacturer,
  //       name: location.state.name,
  //       Location: location.state.Location,
  //       date1: location.state.date1,
  //     },
  //   });
  // }

  const location = useLocation();
  return (
    <React.Fragment>
     
        {/* <div ref={ref}>
          <PassPdf></PassPdf>
        </div>
      */}
      <div ref={ref}>
      <Card>
        <h3 className={classes.scan}>Scan QR Code for Verification</h3>
        <div className={classes.qr}>
          <img
            src={location.state.update}
            alt="qr"
            height="300px"
            width="300px"
          ></img>
        </div>
        <div className={classes.name}>
          <p>{location.state.name}</p>
        </div>
        <div className={classes.left}>
          <p>
            Dose 1<br></br>
            {location.state.date1}
            <br></br>
            {location.state.name}
            <br></br>
            {location.state.Location}
            <br></br>
          </p>
        </div>
        <div className={classes.right}>
          <p>
            Dose 2<br></br>
            {location.state.date1}
            <br></br>
            {location.state.name}
            <br></br>
            {location.state.Location}
            <br></br>
          </p>
        </div>
      </Card>
      </div>

      {/* <button onClick={passHandler}>View PDF</button> */}
      <Pdf targetRef={ref} filename="post.pdf">
        {({ toPdf }) => <button onClick={toPdf}>View PDF</button>}
      </Pdf>
    </React.Fragment>
  );
}

export default QrCode;
