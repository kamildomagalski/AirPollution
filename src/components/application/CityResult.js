import React, {useContext} from 'react';
import {SearchContext} from "../session/context";

function CityResult() {
  const {results}=useContext(SearchContext);
  
  console.log(results);
  return (
  <div>
    {results? results.map((el, i)=>{
      return (
        <div key={i}>
        <h1>{el.address.city}</h1>
        <p>{el.address.street}</p>
        </div>
      )
    }): null }
   <h1> search results</h1>
  </div>
 );
}
export default CityResult;