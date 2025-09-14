import React from "react";

const Countrycard = ({ countrydata }) => {
  return (
    
    <div className="countryCard">      
      <img src={countrydata.png} alt={countrydata.common} />
      <h2 className="countryname">
        {countrydata.common}        
      </h2>    
      
    </div>
  );
};

export default Countrycard;