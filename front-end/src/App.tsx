import React, { useEffect, useState } from 'react';
import axios, { AxiosRequestConfig } from "axios";
import VesselCard from "./Components/VesselCard";
import Vessel from './Models/Vessel';
import { Grid } from '@material-ui/core';
import VoyagesModal from './Components/VoyagesModal';

function App() {
  // load data from server
  const [vesselsArr, setVesselsArr] = useState<Vessel[]>([]);
  const [selectedVesselId, setSelectedVesselId] = useState(-1);

  useEffect(() => { getVessels(); }, []); // runs at pageload

  async function getVessels() {
    try {
      let requestConfig: AxiosRequestConfig = {
        method: 'GET',
        url: 'http://localhost:3006/vessels'
      }
      let result = await axios(requestConfig);
      setVesselsArr(result.data);
    } catch (error) {
      console.log('error', error);
    }
  }

  let loadingScreen = <div>
    <h1>Loading</h1>
  </div>

  let vessels = <Grid container>
    {vesselsArr.map(vessel => <VesselCard vessel={vessel} onClick={(vesselId: number) => { setSelectedVesselId(vesselId) }} />)}
  </Grid>

  function renderBody() {
    if (vesselsArr) return vessels;
    return loadingScreen;
  }

  return (
    <div className="App">
      {renderBody()}
      <VoyagesModal
        vessel={vesselsArr.find(vessel => vessel.id === selectedVesselId)}
        onClose={() => setSelectedVesselId(-1)}
      />
    </div>
  );
}

export default App;
