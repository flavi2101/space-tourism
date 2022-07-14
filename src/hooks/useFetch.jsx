import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [error, setError] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [data, setData] = useState(10);

  useEffect(() => {
    const abortControler = new AbortController();

    setisPending(true);
    fetch(url, { signal: abortControler.signal })
      .then((resp) => {
        try {
          if (!resp.ok) {
            throw new Error("fetch error");
          }
          setError(null);
          return resp.json();
        } catch (err) {
          if (err.name === "AbortError") {
            console.log("the fetch was aborted");
          } else {
            setisPending(false);
            setError("Could not fetch the data");
          }
        }
      })
      .then((resp) => {
        setisPending(false);
        setData(resp);
      });
  }, [url]);

  return { error, isPending, data };
}
