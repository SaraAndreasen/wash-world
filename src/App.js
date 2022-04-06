import React, { useEffect, useState } from "react";
import axios from "axios";
import info from "./info";
import WashLocation from "./components/WashLocation";
import Products from "./components/Products";
import Cam from "./components/Cam";
import Status from "./components/Status";
import Navbar from "./components/Navbar";
import "./style.css";

function App() {
  const [locations, setLocations] = useState([]);
  const [locationID, setLocationID] = useState(0);

  useEffect(() => {
    axios.get(info.backendUrl + "/locations").then((result) => {
      setLocations(result.data.response.locations);
    });
  }, []);

  function locationClicked(event) {
    setLocationID(event.target.value);
    setCamLoad(true);
  }

  const [lpn, setLPN] = useState({});
  const [camLoad, setCamLoad] = useState(false);

  const [products, setProducts] = useState([]);
  const [programID, setProgramID] = useState(0);

  function chooseWash(event) {
    setProgramID(event.target.value);
  }

  function timer() {
    var sec = 30;
    var timer = setInterval(function () {
      document.getElementById("safeTimerDisplay").innerHTML = "00:" + sec;
      sec--;
      if (sec < 0) {
        clearInterval(timer);
      }
    }, 1000);
  }

  return (
    <div className="component">
      <Navbar />
      <main>
        {/*Bruges til at sætte de forskellige knapper op. Samt skifte side*/}
        {locations.length > 0 &&
          locationID === 0 &&
          //cam.length == 0 &&
          locations.map((location) => {
            return (
              <WashLocation
                key={location.id}
                location={location}
                locationClicked={locationClicked}
              />
            );
          })}
        {locationID !== 0 && Object.keys(lpn).length === 0 && (
          <Cam
            locationID={locationID}
            setLPN={setLPN}
            lpn={lpn}
            setCamLoad={setCamLoad}
            camLoad={camLoad}
          />
        )}
        {Object.keys(lpn).length > 0 && programID === 0 && (
          <Products
            locationID={locationID}
            products={products}
            setProducts={setProducts}
            programID={programID}
            setProgramID={setProgramID}
            lpn={lpn}
            chooseWash={chooseWash}
          />
        )}
        {programID !== 0 && (
          <Status locationID={locationID} programID={programID} timer={timer} />
        )}
      </main>
    </div>
  );
}

export default App;
