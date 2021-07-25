import React from "react";
import QRCode from "qrcode";
import classes from "./VaccineInfo.module.css";
import { Navbar, Nav, Container } from "react-bootstrap";
import { withRouter } from "react-router-dom";
import Image from "../../../assets/health.jpg";
import { useHistory } from "react-router-dom";
function VaccineInfo(props) {
  // function onChangeHandler(e) {
  //   props.history.push(`/${e.target.value}`);
  // }
  // let names = props.allnames;
  // let optionItems = names.map((namep) =>
  //         <option key={namep}>{namep}</option>
  //     );

  let history = useHistory();

  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL("test qr code");

      history.push({
        pathname: "/qr",
        state: {
          update: response,
          Manufacturer: props.Manufacturer,
          name: props.name,
          
          Location:props.Location,
          date1:props.date1
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <React.Fragment>
      <Navbar
        collapseOnSelect
        className={classes.nav}
        expand="sm"
        variant="light"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav"></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <h1>
                Hello {props.name}
                {/* <select onChange={onChangeHandler}>
                  {optionItems}
                </select> */}
              </h1>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className={classes.text}>
        <p className="img">
          {" "}
          <img src={Image} alt="images" height="100" align="left"></img>
        </p>
        <h1> Your COVID-19 vaccination record</h1>
        <h5>
          By getting vaccinated you are doing yourpart to help protect your
          health and the health of your friends and family.Your secure
          UnitedHealthCare
        </h5>
      </div>
      <div className={classes.row}>
        <div className={classes.column}>
          <table>
            <tbody>
              <tr>
                <th>Dose 1</th>
                <th>Complete</th>
              </tr>
              <tr>
                <td>Date of Vaccine</td>
                <td>{props.date1}</td>
              </tr>
              <tr>
                <td>Manufacturer</td>
                <td>{props.Manufacturer}</td>
              </tr>
              <tr>
                <td>Lot Number</td>
                <td>{props.Lotnumber}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{props.Location}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={classes.column}>
          <table>
            <tbody>
              <tr>
                <th>Dose 2</th>
                <th>Complete</th>
              </tr>
              <tr>
                <td>Date of Vaccine</td>
                <td>{props.date1}</td>
              </tr>
              <tr>
                <td>Manufacturer</td>
                <td>{props.Manufacturer}</td>
              </tr>
              <tr>
                <td>Lot Number</td>
                <td>{props.Lotnumber}</td>
              </tr>
              <tr>
                <td>Location</td>
                <td>{props.Location}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={classes.buttons}>
        <button className={classes.share}>
          <span className={classes.show}>Share</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#0d159c"
            strokeWidth="2"
            strokeLinecap="square"
            strokeLinejoin="round"
          >
            <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 8l-5-5-5 5M12 4.2v10.3" />
          </svg>
        </button>

        <button className={classes.button} onClick={generateQrCode}>
          <span className={classes.show}> Show Vaccine Pass</span>

          {/* <QrCode qr={response}></QrCode> */}
          {/* <img src={imageUrl} alt="imgqr"></img> */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <g fill="none" fillRule="evenodd">
              <path d="M18 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8c0-1.1.9-2 2-2h5M15 3h6v6M10 14L20.2 3.8" />
            </g>
          </svg>
        </button>
      </div>
    </React.Fragment>
  );
}

export default withRouter(VaccineInfo);
