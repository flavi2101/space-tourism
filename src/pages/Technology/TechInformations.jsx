import React from "react";
import SingleTechItem from "./SingleTechItem";
export default function TechInformations({ infor, seturl, url }) {
  infor = !url.includes("?")
    ? infor.filter((val) => val.name === "Launch vehicle")
    : infor;
  return (
    <React.Fragment>
      {infor.map((technology) => {
        return (
          <SingleTechItem
            technology={technology}
            seturl={seturl}
            key={Math.random()}
          >
            
          </SingleTechItem>
        );
      })}
    </React.Fragment>
  );
}
