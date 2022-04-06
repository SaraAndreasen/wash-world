import React from "react";
export default function WashLocation(data) {
  return (
    <button
      className="btn btn-location btn-active"
      onClick={data.locationClicked}
      /*Koden nedenunder gør at den vaskehal der er under maintenance, ikke kan vælges. */
      disabled={data.location.status !== "available" ? "on" : ""}
      value={data.location.id}
    >
      {data.location.name}
    </button>
  );
}
