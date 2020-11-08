import React, {useState} from 'react';
import {Box, Button, Container, FormControl, Grid, Paper, InputLabel, Select, MenuItem} from "@material-ui/core";
import citiesDb from '../../db/cities.json'
import {makeStyles} from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";

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
  
  const classes = useStyles();
  const [cities] = useState(citiesDb);
  const [request, setRequest] = useState({
    name: '',
  })
  const [results, setResults] = useState(null)
  
  const API = process.env.REACT_APP_API_KEY
  const getData = () => {
    fetch(
      `https://airapi.airly.eu/v2/installations/nearest?lat=${request.lat}&lng=${request.lng}&maxDistanceKM=10&maxResults=10`,
      // 'https://airapi.airly.eu/v2/installations/8077',
      // 'https://airapi.airly.eu/v2/measurements/installation?installationId=8077',
      {
        method: 'GET',
        headers: {
          "Content-Type": "application/json",
          'Accept-Encoding': 'gzip',
          "apikey": API
        }
      })
      .then(response => response.json())
      .then(data => {
        setResults(data);
      })
  }

  const handleChange = (event) => {
    cities.forEach(el => {
        if (el.name === event.target.value) {
          setRequest(el);
        }
        return el
      })
    
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
              <Button variant={"contained"} color={"primary"} onClick={getData} component={RouterLink} to={"/results"}>Find station!</Button>
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