import React, { useEffect, useState } from 'react';
import Axios, { AxiosRequestConfig } from "axios";
import VesselCard from "./Components/VesselCard";
import Vessel from './Models/Vessel';
import { Grid } from '@material-ui/core';
import VoyagesModal from './Components/VoyagesModal';

function App() {
  // load data from server
  const [vesselsArr, setVesselsArr] = useState<Vessel[]>([]);
  const [selectedVesselId, setSelectedVesselId] = useState(-1);

  useEffect(() => { fetchVessels(); }, []); // runs at pageload

  async function fetchVessels() {
    try {
      let requestConfig: AxiosRequestConfig = {
        method: 'GET',
        url: 'http://localhost:3006/vessels'
      }
      let result = await Axios(requestConfig);
      setVesselsArr(result.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  let loadingScreen = <div>
    <h1>Loading</h1>
  </div>

  let vessels = <Grid container>
    {vesselsArr.map(vessel => <VesselCard key={vessel.id + vessel.name} vessel={vessel} onClick={(vesselId: number) => { setSelectedVesselId(vesselId) }} />)}
  </Grid>

  function renderBody() {
    if (vesselsArr) return vessels;
    return loadingScreen;
  }

  let selectedVessel = vesselsArr.find(vessel => vessel.id === selectedVesselId);
  let vesselModal = <></>;
  if (selectedVessel) {
    vesselModal = <VoyagesModal
      vessel={selectedVessel}
      onClose={() => setSelectedVesselId(-1)}
    />
  }
  return (
    <div className="App">
      {renderBody()}
      {vesselModal}
    </div>
  );
}

export default App;
