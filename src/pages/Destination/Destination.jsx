import useFetch from "../../hooks/useFetch";
import { DataProvider } from "../../context/dataContext";
import { useContext, useEffect, useState } from "react";
import DestinationInformations from "./DestinationInformation";

import style from "./Destination.module.css"

export default function Destination() {
  const [url, seturl] = useState("http://localhost:3000/destinations");
  const { error, isPending, data } = useFetch(url);
  const { destination, dispatch } = useContext(DataProvider);

  useEffect(() => {
    dispatch({ type: "destination", payload: data });
    
  }, [data, dispatch, url]);

  return (
    <section className={style.destination}>
      {error && <h1 style={{ color: "white" }}>error</h1>}
      {isPending && <h1 style={{ color: "white" }}>Pendencia</h1>}
      
      <DestinationInformations infor={destination} seturl={seturl} url={url}></DestinationInformations>
    </section>
  );
}
