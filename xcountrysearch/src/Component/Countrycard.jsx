import React from "react";

const Countrycard = ({ countrydata }) => {
  return (
    <div className="container">
    <div className="countryCard">
      <img src={countrydata.png} alt={countrydata.common} />
      <p className="countryname">{countrydata.common}</p>      
    </div>
    </div>
  );
};

export default Countrycard;