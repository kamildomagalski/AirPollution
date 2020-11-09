import React, {useState} from 'react';
import {Card, CardMedia, makeStyles, CardActions, Button, CardContent, Typography} from '@material-ui/core'

function CityCard({info}) {
  console.log(info);
  const useStyles = makeStyles({
    root: {
      height: 350,
      maxWidth: '100%',
      maxHeight: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    media: {
      height: '100%',
      maxHeight: 150,
      display: 'block',
      backgroundSize: 'contain'
    },
  });
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media}
                 image={`${info.sponsor.logo}`}/>
      <CardContent>
        <Typography gutterBottom variant="h6" component="h2">
          {`${info.address.city},`}
        </Typography>
        <Typography gutterBottom variant="h7" component="h1">
          {info.address.number ? (`${info.address.street} ${info.address.number}`  )  :(`${info.address.displayAddress2}`)}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          Sponsor czujnika:
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {info.sponsor.displayName}
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