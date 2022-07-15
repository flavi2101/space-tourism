import useFetch from "../../hooks/useFetch";
import { DataProvider } from "../../context/dataContext";
import { useContext, useEffect, useState } from "react";
import DestinationInformation from "./DestinationInformation";
import teste from "../../assets/destination/image-moon.webp";
import style from "./Destination.module.css"

export default function Destination() {
  const [url, seturl] = useState("http://localhost:3000/destinations?name=Moon");
  const { error, isPending, data } = useFetch(url);
  const { destination, dispatch } = useContext(DataProvider);

  useEffect(() => {
    dispatch({ type: "destination", payload: data });
  }, [data, dispatch, url]);

  return (
    <section className={style.destination}>
      {error && <h1 style={{ color: "white" }}>error</h1>}
      {isPending && <h1 style={{ color: "white" }}>Pendencia</h1>}
      <h1>
        <span>01</span> Pick your destination
      </h1>
        <img src={teste} alt="teste" width="170px" height="170px" />
      <DestinationInformation infor={destination} link={seturl}>

      </DestinationInformation>
    </section>
  );
}
