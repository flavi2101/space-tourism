import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../context/dataContext";
import TechInformations from "./TechInformations"

export default function Technology() {
  const [url, seturl] = useState("http://localhost:3000/technology");
  const { error, isPending, data } = useFetch(url);
  const { technology, dispatch } = useContext(DataProvider);

  useEffect(() => {
    dispatch({ type: "technology", payload: data });
  }, [data, dispatch, url]);

  return (
    <section>
      {error && <h1 style={{ color: "white" }}>error</h1>}
      {isPending && <h1 style={{ color: "white" }}>Pendencia</h1>}

      <TechInformations
        infor={technology}
        seturl={seturl}
        url={url}
       
      ></TechInformations>
    </section>
  );
}
