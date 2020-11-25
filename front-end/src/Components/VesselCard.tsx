import React from 'react';
import Vessel from '../Models/Vessel';
import { Button, Card, CardActions, CardContent, CardMedia, Tooltip, Typography } from '@material-ui/core';

const VesselCard = (props: { vessel: Vessel, onClick: (vesselId: number) => void }) => {
  return <Card>
    <CardContent>
      <CardMedia>
        <img src={props.vessel.image} alt='Vessel' style={{ width: 250 }} />
      </CardMedia>
      <Typography variant='h5' component='h2'>
        {props.vessel.name}
      </Typography>
      <Typography variant='body1'>
        {props.vessel.description}
      </Typography>
      <Typography variant='body2'>
        Voyage total: {props.vessel.voyageAmount}
      </Typography>
    </CardContent>
    <CardActions>
      <Tooltip title={props.vessel.voyageAmount ? '' : 'No voyages'} placement='top' >
        <div>
          <Button variant='contained' onClick={() => props.onClick(props.vessel.id)} disabled={props.vessel.voyageAmount === 0}>Voyages</Button>
        </div>
      </Tooltip>
    </CardActions>
  </Card>
}
export default VesselCard;