import React from "react";
import { useParams, Route} from "react-router-dom";
import VaccineInfo from "./VaccineInfo";

const DUMMY_DETAILS = [
  {
    id: "1",
    name: "Max",
    date1: "March 4,2021",
    Manufacturer: "Moderna",
    Lotnumber: "ER7934",
    Location: "Walgreens #58493",
  },
  { id: "2",
  name: "Sofia",
  date1: "March 8,2021",
  Manufacturer: "SOck",
  Lotnumber: "ER7934",
  Location: "Walgreens #58493",},
];

function MemberList(props) {
  const params = useParams();
  const detailFound = DUMMY_DETAILS.find(
    (detail) => detail.name === params.memberName
  );
// let listNames;
// for(let i=0;i<3;i++){
//    listNames=DUMMY_DETAILS[i].name;
// }
 

  return (
    <React.Fragment>
      <Route path={`/${params.memberName}`}>
        <VaccineInfo
          name={detailFound.name}
          date1={detailFound.date1}
          Manufacturer={detailFound.Manufacturer}
          Lotnumber={detailFound.Lotnumber}
          Location={detailFound.Location}
        
        />

      </Route>
    </React.Fragment>
  );
}

export default MemberList;
