import React from "react";
import Countrycard from "./Component/Countrycard";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
 const [searchText, setSearchText] = useState("");
 const [countryData, setCountryData] = useState([]);
// const [filterCountryData, setFilterCountryData] = useState([]);

const handleChange = (e) =>{
//  console.log("handle set search text");
    setSearchText(e.target.value);
}

const fetchcountry = async()=>{
  const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
   try {
      const res = await axios.get(url);
      //console.log("Countries data = " + res.data.map((country1)=> country1.common));      
      setCountryData(res.data);
      //setFilterCountryData(res.data);
      
   } catch (error) {
    console.log("Error : " + error);    
   }
}


//const searchedCountries = async () => {
    // if(searchText===""){
    //   console.log("search text blank" + searchText);
    //   //setFilterCountryData(countryData);
    // }   else{
    // console.log("search text non empty" + searchText);
    // } 
    
    //  const url = "https://countries-search-data-prod-812920491762.asia-south1.run.app/countries";
    // try {
    //   const res2 = await axios.get(url);
    //   const filteredData = res2.data.filter((country1)=>{
    //   country1.common.toLowerCase();
    // });
   
  //  })
    // console.log("filteredData inside searchedCountries function= " + filteredData);
//     setFilterCountryData(filteredData);
      
    // } catch (error) {
    //   console.log("Error" + error);
    // }
    
 

useEffect(() => {fetchcountry()}, []);

 const filteredData = countryData.filter((country1)=>
       country1.common.toLowerCase().includes(searchText.toLowerCase())       
 )

  return (
      <div>
      <div className="searchSection">
        <form>
          <input
            type="text"
            placeholder="Search for countries..."
            value={searchText}
            onChange={(e) => handleChange(e)}
          />          
        </form>
      </div> 
       <div className="country_data">
        {filteredData &&
          filteredData.map((element) => <Countrycard countrydata={element} />)}
      </div>  
     </div>
  );
}

export default App;