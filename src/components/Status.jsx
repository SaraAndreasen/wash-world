import React, { useEffect } from "react";
import axios from "axios";
import info from "../info";

export default function WashStatus(data) {
  useEffect(() => {
    axios
      .post(
        info.backendUrl + "/" + data.locationID + "/start/" + data.programID
      ) // this link does not work also when I try in the browser, have I miss understood how the link is supposed to work?
      .then((result) => {
        console.log(result.data);
        //data.setProducts(result.data.response.products);
      });
  }, []);

  return (
    <div className="another-page">
      <h2>Timer vi selv skal lave</h2>
    </div>
  );
}
