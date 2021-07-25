import React from 'react';

import { useLocation } from "react-router-dom";
const ref = React.createRef();

const PDF = () => {
    const location = useLocation();
  return (
    <>
     <div>
        <h1>{location.state.name}</h1>
      </div>
    
    </>
  );
}

export default PDF;
