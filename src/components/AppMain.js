import React, {useState} from 'react';
import {Box, Button, Container, FormControl, Grid, Paper, InputLabel, Select, MenuItem} from "@material-ui/core";

import {makeStyles} from "@material-ui/core/styles";


function AppMain() {
  const useStyles = makeStyles((theme) => ({
    paper: {
      color: 'darkblue',
      textAlign: 'center',
      padding: theme.spacing(2)
    },
    gridItem: {
      margin: '30px 0'
    }
  }))
  const classes = useStyles();
  const [request, setRequest] = useState({
    location: '',
    
  })
  const [city, setCity] = useState('')
  const API = process.env.REACT_APP_API_KEY
  const getData = () => {
    fetch(
      // 'https://airapi.airly.eu/v2/installations/nearest?lat=50.062006&lng=19.940984&maxDistanceKM=5&maxResults=3',
      // 'https://airapi.airly.eu/v2/installations/8077',
      'https://airapi.airly.eu/v2/measurements/installation?installationId=8077',
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
        console.log(data);
      })
  }
  
  const handleChange = (event) => {
    setCity(event.target.value)
  }
  return (
    <Box>
      <Container maxWidth={'md'} spacing={3}>
        <Grid container spacing={3}>
          <Grid item xs={12} className={classes.gridItem}>
            <Paper className={classes.paper}>Check air quality in your area!</Paper>
          </Grid>
          
            <Grid item xs={4}/>
            <Grid item xs={4} spacing={2} container justify={"center"} alignItems={'center'} direction={"row"}>
              <Grid item>
              <FormControl>
                <InputLabel id={'city-label'}>City</InputLabel>
                <Select
                  labelId={'city-label'}
                  id={'city'}
                  value={city}
                  onChange={handleChange}
                >
                  <MenuItem value={''}><em>None</em></MenuItem>
                  <MenuItem value={'Kraków'}>Kraków</MenuItem>
                  <MenuItem value={'Warszawa'}>Warszawa</MenuItem>
                  <MenuItem value={'Gdańsk'}>Gdańsk</MenuItem>
                </Select>
              </FormControl>
              </Grid>
              <Grid item>
                <Button variant={"contained"} color={"primary"}>Get data!</Button>
              </Grid>
              
            </Grid>
            <Grid item xs={4}/>
      
        </Grid>
      </Container>
    </Box>
  );
}

export default AppMain;