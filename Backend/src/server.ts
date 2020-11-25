import express from "express";
import { database } from "./mock-data/database";

let port = process.env.PORT || 3006;
let app = express();

var cors = require('cors');
app.use(cors());

app.get('/vessels', (req, res) => {
  try {
    let vessels = database.vessels.map(vessel => {return {...vessel, voyageAmount: database.voyages.filter(voyage => voyage.vesselId === vessel.id).length}})

    res.send(vessels);
  } catch (error) {
    console.log('GET: -> /vessels', error);
    res.sendStatus(500);
  }
});

app.get('/vessels/:vesselId/voyages', (req, res) => {
  try {
    let vesselId = Number(req.params.vesselId);
    if (isNaN(vesselId)) return res.sendStatus(400);

    let voyages = database.voyages.filter(voyage => voyage.vesselId === vesselId);
    res.send(voyages);
  } catch (error) {
    console.log('GET: -> /vessels/:vesselId/voyages', error);
    res.sendStatus(500);
  }
});





app.listen(port, () => {
  console.log('Listening on port:', port);
});