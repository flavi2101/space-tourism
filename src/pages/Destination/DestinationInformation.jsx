import SingleDestination from "./SingleDestination";
import React from "react";

export default function DestinationInformations({ infor, seturl, url }) {
  function handleClick(query) {
    seturl(`http://localhost:3000/destinations?name=${query}`);
  }

  infor = !url.includes("?")
    ? infor.filter((val) => val.name === "Moon")
    : infor;

  return (
    <React.Fragment >
      {infor.map((destination) => {
        return (
          <SingleDestination key={Math.random()}
            destination={destination}
            handleClick={handleClick}
          ></SingleDestination>
        );
      })}
    </React.Fragment>
  );
}
