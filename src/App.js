import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import "bootstrap/dist/css/bootstrap.min.css";
//import { PDFViewer } from '@react-pdf/renderer';
import QrCode from "./components/VaccinePass/QrCode";
//import PassPdf from "./components/VaccinePass/PassPdf";

import VaccineDetails from "./VaccineDetails";
function App() {

  return (
    <React.Fragment>
      <Route path="/window">
        <AboutPage />
      </Route>
      <Route path="/name/:memberName">
        <VaccineDetails/>
      </Route>

      <Route path="/qr">
        <QrCode />
      </Route>
      {/* <Route path="/details">
<PassPdf />
</Route> */}
      
    </React.Fragment>
  );
}

export default App;
