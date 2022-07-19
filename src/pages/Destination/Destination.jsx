import useFetch from "../../hooks/useFetch";
import React, { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../context/dataContext";
import DestinationInformations from "./DestinationInformation";



export default function Destination() {
  const [url, seturl] = useState("http://localhost:3000/destinations");
  const { error, isPending, data } = useFetch(url);
  const { destination, dispatch } = useContext(DataProvider);

  useEffect(() => {
    dispatch({ type: "destination", payload: data });
    
  }, [data, dispatch, url]);



  return (
    <React.Fragment >
      {error && <h1 style={{ color: "white" }}>error</h1>}
      {isPending && <h1 style={{ color: "white" }}>Pendencia</h1>}
      
      <DestinationInformations infor={destination} seturl={seturl} url={url}></DestinationInformations>
    </React.Fragment>
  );
}
