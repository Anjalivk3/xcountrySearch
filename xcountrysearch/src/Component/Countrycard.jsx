import React from "react";

const Countrycard = ({ countrydata }) => {
  return (
    <div className="countryCard">
      <img src={countrydata.png} alt={countrydata.common} />
      <h5>{countrydata.common}</h5>      
    </div>
  );
};

export default Countrycard;