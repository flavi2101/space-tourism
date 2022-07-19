import { useEffect, useState } from "react";
import style from "./SingleDestination.module.css";
export default function SingleDestination({ destination, handleClick }) {
  
  const [img, setimg] = useState(destination.images.webp);
  useEffect(() => {
    setimg(destination.images.webp);
  }, [destination.images.webp]);

  return (
    <section className={style.singleInformation}>
      <h1>
        <span>01</span> Pick your destination
      </h1>
      <img alt="" src={require(`../../assets/destination/${img}`)} />
      <ul>
        <li autoFocus onClick={() => handleClick("Moon")}>
          Moon
        </li>
        <li onClick={() => handleClick("Mars")}> Mars</li>
        <li onClick={() => handleClick("Europa")}>Europa</li>
        <li onClick={() => handleClick("Titan")}>Titan</li>
      </ul>
      <section>
        <h2>{destination.name}</h2>
        <p>{destination.description}</p>
        <hr />
        <div>
          <span className={style.distance}>Avg. Distance</span>
          <span>{destination.distance}</span>
        </div>
        <div>
          <span className={style.time}>Est. Travel Time</span>
          <span>{destination.travel}</span>
        </div>
      </section>
    </section>
  );
}
