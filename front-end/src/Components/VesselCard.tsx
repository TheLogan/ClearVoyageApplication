import React from 'react';
import Vessel from '../Models/Vessel';
import { Button, Card, CardActions, CardContent, CardMedia, Typography } from '@material-ui/core';

const VesselCard = (props: { vessel: Vessel, onClick: (vesselId:number) => void }) => {
  return <Card>
    <CardContent>
      <CardMedia>
        <img src={props.vessel.image} alt='Vessel' style={{ width: 250 }} />
      </CardMedia>
      <Typography variant="h5" component="h2">
        {props.vessel.name}
      </Typography>
      <p>{props.vessel.description}</p>
    </CardContent>
    <CardActions>
      <Button variant="contained" onClick={() => props.onClick(props.vessel.id)}>Voyages</Button>
    </CardActions>
  </Card>
}
export default VesselCard;