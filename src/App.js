import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./AboutPage";
import VaccineInfo from "./components/FirstPage/VaccineInfo/VaccineInfo";

function App() {
 
  return (
    <React.Fragment>
      <Route path="/window">
     <AboutPage></AboutPage>
     </Route>
     <VaccineInfo/>
    
    </React.Fragment>
  );
}

export default App;
