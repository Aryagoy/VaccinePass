import React from "react";
import { Route } from "react-router-dom";
import NavigationBar from "./components/FirstPage/NavBar/NavigationBar";
import MemberList from "./components/FirstPage/VaccineInfo/MemberList";
import FrequentlyAskedQuestion from "./components/FirstPage/FrequentlyAskedQuestions/FrequentlyAskedQuestions";
function VaccineDetails(props) {
 
  return (
    <React.Fragment>
      <Route path="/name/:memberName">
        <NavigationBar />
        <MemberList  />
        <FrequentlyAskedQuestion />
      </Route>
    </React.Fragment>
  );
}

export default VaccineDetails;
