import React, {useContext} from 'react';
import {SearchContext} from "../session/context";
import CityCard from "./CityCard";
import {Grid} from '@material-ui/core'

function CityResult() {
  const {results} = useContext(SearchContext);
  
  
  return (
    <Grid container spacing={3}>
      
      {results ? results.map((el, i) => {
        return (
          <CityCard key={el.id} info={el}/>
        )
      }) : null}
      
    </Grid>
  );
}

export default CityResult;