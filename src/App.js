import React from "react";
import { Route } from "react-router-dom";
import AboutPage from "./AboutPage";
//import VaccineInfo from "./components/FirstPage/VaccineInfo/VaccineInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import NavigationBar from "./components/FirstPage/NavBar/NavigationBar";
import MemberList from "./components/FirstPage/VaccineInfo/MemberList";
import FrequentlyAskedQuestion from './components/FirstPage/FrequentlyAskedQuestions/FrequentlyAskedQuestions'
function App() {
 

  return (
    <React.Fragment>
      <Route path="/window">
        <AboutPage></AboutPage>
      </Route>
      <NavigationBar></NavigationBar>



      <Route path="/:memberName">
      <MemberList></MemberList>
      </Route>
     <FrequentlyAskedQuestion></FrequentlyAskedQuestion>
      
    </React.Fragment>
  );
}

export default App;
