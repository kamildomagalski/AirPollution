import React, { useState } from 'react';
import {Card, CardMedia, makeStyles, CardActions, Button, CardContent, Typography } from '@material-ui/core'

function CityCard({info}) {
 console.log(info);
 const useStyles = makeStyles({
  root: {
   maxWidth: 345,
  },
  media: {
   height: 140,
  },
 });
 const classes=useStyles();
 return (
  <Card className={classes.root}>
  <CardMedia className={classes.media}
             image={`${info.sponsor.logo}`}/>
   <CardContent>
    <Typography gutterBottom variant="h5" component="h2">
     {info.address.displayAddress2? (`${info.address.displayAddress1}, ${info.address.displayAddress2}`): info.address.street}
    </Typography>
    <Typography variant="body2" color="textSecondary" component="p">
     {`Sponsor czujnika: ${info.sponsor.displayName}`}
    </Typography>
   </CardContent>
   <CardActions>
    <Button size="small" color="primary">
     Learn More
    </Button>
   </CardActions>
  </Card>
 );
}
export default CityCard;