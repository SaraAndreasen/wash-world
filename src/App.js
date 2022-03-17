import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "./info";
import WashLocation from "./components/WashLocation";

function App() {
  const [locations, setLocations] = useState([]);

  /** get er axios specific, hvis man ikke bruger axios, er det fetch. Det vi får når vi bruger .then er vores response. Med axios skal du ikke lave det om JSON, men i fetch skal du selv lave det om til JSON */
  useEffect(() => {
    axios.get(info.backendUrl + "/locations").then((result) => {
      setLocations(result.data.response.locations);
    });
  }, []);

  return (
    <div>
      {locations.map((location) => {
        return <WashLocation key={location.id} location={location} />;
      })}
    </div>
  );
}

export default App;
