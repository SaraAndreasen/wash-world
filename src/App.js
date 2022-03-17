import React, { useEffect } from 'react';
import axios from "axios";
import info from "./info";

function App() {
  useEffect(() => {
    axios.get(info.backendUrl + "/locations");
  }, []);
  return <div></div>;
}

export default App;
