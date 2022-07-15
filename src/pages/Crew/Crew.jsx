import useFetch from "../../hooks/useFetch";
import { useContext, useEffect, useState } from "react";
import { DataProvider } from "../../context/dataContext";

export default function Crew() {
  const [url, seturl] = useState(
    "http://localhost:3000/crew?name=Douglas%20Hurley"
  );
  const { error, isPending, data } = useFetch(url);
  const { crew, dispatch } = useContext(DataProvider);

  useEffect(() => {
    dispatch({ type: "crew", payload: data });
  }, [data, dispatch, url]);
  console.log(data)

  return (
    <section>
      {error && <h1 style={{ color: "white" }}>error</h1>}
      {isPending && <h1 style={{ color: "white" }}>Pendencia</h1>}
      <h1>
        <span>01</span> Meet your crew
      </h1>
    </section>
  );
}
