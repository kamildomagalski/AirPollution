import React, {useContext} from 'react';
import {SearchContext} from "../session/context";
import CityCard from "./CityCard";
import {Grid} from '@material-ui/core'

function CityResult() {
  const {results} = useContext(SearchContext);
  
  
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}/>
      {results ? results.map((el, i) => {
        return (
          <Grid item xs={3}>
            <CityCard key={el.id} info={el}/>
          </Grid>
        )
      }) : null}
      
    </Grid>
  );
}

export default CityResult;