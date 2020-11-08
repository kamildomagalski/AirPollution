import React, {useState, useContext} from 'react';
import {Box, Button, Container, FormControl, Grid, Paper, InputLabel, Select, MenuItem} from "@material-ui/core";
import citiesDb from '../../db/cities.json'
import {makeStyles} from "@material-ui/core/styles";
import {Link as RouterLink} from "react-router-dom";
import {SearchContext} from "../session/context";

function AppSearch() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      color: 'darkblue',
      textAlign: 'center',
      padding: theme.spacing(2)
    },
    gridItem: {
      margin: '30px 0'
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    }
  }))
  const {cities, request, handleSearchCity, getData} = useContext(SearchContext)
  const classes = useStyles();
  
  const handleSubmit = () => {
    getData();
  }
  const handleChange = (event) => {
    handleSearchCity(event.target.value)
  }
  
  return (
    <Box>
      <Container maxWidth={'md'} spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.gridItem}>
            <Paper className={classes.paper}>Check air quality in your area!</Paper>
          </Grid>
          
          <Grid item xs={3}/>
          <Grid item xs={6} spacing={2} container justify={"center"} alignItems={'center'} direction={"row"}>
            <Grid item>
              <FormControl className={classes.formControl}>
                <InputLabel id={'city-label'}>City</InputLabel>
                <Select
                  labelId={'city-label'}
                  id={'city'}
                  value={request.name}
                  onChange={handleChange}
                >
                  <MenuItem value={''}><em>None</em></MenuItem>
                  {cities.map(el => {
                    return <MenuItem key={el.id} value={el.name}>{el.name}</MenuItem>
                  })}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <Button variant={"contained"} color={"primary"} onClick={handleSubmit} component={RouterLink}
                      to={"/results"}>Find station!</Button>
            </Grid>
          
          </Grid>
          <Grid item xs={3}/>
        </Grid>
        <Grid container spacing={3}>
        
        </Grid>
      </Container>
    </Box>
  );
}

export default AppSearch;