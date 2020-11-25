import { createStyles, makeStyles, Modal, Theme } from '@material-ui/core';
import React, { useState } from 'react';
import Vessel from '../Models/Vessel';


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
        <h2 id="simple-modal-title">{ props.vessel.id}'s voyages</h2>
        <p id="simple-modal-description">
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      </div>
    </Modal>
  </>
}
export default VoyagesModal;