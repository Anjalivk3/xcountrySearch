import React from "react";

const Countrycard = ({ countrydata }) => {
  return (
    
    <div className="countryCard">
      <div className="container">
      <img src={countrydata.png} alt={countrydata.common} />
      <h2>
        <p className="countryname">{countrydata.common}</p>
      </h2>
    </div>
    </div>
  );
};

export default Countrycard;