import React from 'react';
import {Box, Container, Grid, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

function AppMain() {
  const useStyles=makeStyles((theme) => ({
    paper:{
      color: 'darkblue',
      textAlign: 'center',
      padding: theme.spacing(2)
    },
    gridItem: {
      margin: '30px 0'
    }
  }))
  const classes=useStyles();
  
  const API= process.env.REACT_APP_API_KEY
 return (
  <Box>
    <Container maxWidth={'md'} spacing={3}>
      <Grid container spacing={3}>
        <Grid item xs={12} className={classes.gridItem}>
          <Paper className={classes.paper}>Check air quality in your area!</Paper>
        </Grid>
      </Grid>
    </Container>
  </Box>
 );
}
export default AppMain;