import { Card, createStyles, Grid, makeStyles, Modal, Theme, Typography } from '@material-ui/core';
import Axios, { AxiosRequestConfig } from 'axios';
import React, { useEffect, useState } from 'react';
import Vessel from '../Models/Vessel';
import Voyage from '../Models/Voyage';


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
  }),
);


const VoyagesModal = (props: { vessel: Vessel, onClose: () => void }) => {
  const [voyages, setVoyages] = useState<Voyage[]>([])

  useEffect(() => { fetchVoyages(); }, []);

  async function fetchVoyages() {
    try {
      let requestConfig: AxiosRequestConfig = {
        method: 'GET',
        url: `http://localhost:3006/vessels/${props.vessel.id}/voyages`
      }
      let result = await Axios(requestConfig);
      setVoyages(result.data);
      console.log('fetched voyages', result.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }

  const classes = useStyles();

  return <>
    <Modal
      open={props.vessel.id !== -1}
      onClose={props.onClose}
    >
      <div style={getModalStyle()} className={classes.paper}>
        <Grid container direction='column'>
          <Typography variant='h4'>Voyages</Typography>
          {voyages.map(voyage => <Card key={voyage.id + voyage.name} style={{margin: 5}}>
            <Typography variant='h5'>
              {voyage.name}
            </Typography>
            <Typography>{props.vessel.name}</Typography>
            <img src={voyage.image} alt='voyage' style={{ width: 400 }} />
            <p>{voyage.description}</p>
          </Card>)}
        </Grid>

      </div>
    </Modal>
  </>
}
export default VoyagesModal;