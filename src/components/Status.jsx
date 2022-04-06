import React, { useEffect } from "react";
import axios from "axios";
import info from "../info";
import Products from "./Products";

export default function WashStatus(data) {
  useEffect(() => {
    axios.post(
      info.backendUrl + "/" + data.locationID + "/start/" + data.programID
    ); 
  }, []);

  return (
    <div className="component another-page">
      <p>Time left of your wash</p>
      <p className="timerDisplay">05:30</p>
    </div>
  );
}
