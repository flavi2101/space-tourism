import useFetch from "../../hooks/useFetch";
import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../context/dataContext";
import CrewInformation from "./CrewInformation";

export default function Crew() {
  const [url, seturl] = useState("http://localhost:3000/crew");
  const { error, isPending, data } = useFetch(url);
  const { crew, dispatch } = useContext(DataProvider);

 

  useEffect(() => {
    dispatch({ type: "crew", payload: data });
  }, [data, dispatch, url]);
 
  

  return (
    <React.Fragment>
      {error && <h1 style={{ color: "white" }}>error</h1>}
      {isPending && <h1 style={{ color: "white" }}>Pendencia</h1>}

      <CrewInformation infor={crew} seturl={seturl} url={url}></CrewInformation>
    </React.Fragment>
  );
}
