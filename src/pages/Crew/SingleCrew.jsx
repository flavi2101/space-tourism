import { useEffect, useState } from "react";
import style from "./SingleCrew.module.css";
export default function SingleCrew({ crew, seturl }) {
  function handleClick(query) {
    seturl(`http://localhost:3000/crew?name=${query}`);
    
  }
  const [img, setimg] = useState(crew.images.webp);

  useEffect(() => {
    setimg(crew.images.webp);
  }, [crew.images.webp]);

  return (
    <section className={style.singleCrew}>
      <h1>
        <span>01</span> Meet your Crew
      </h1>
      <img alt="" src={require(`../../assets/crew/${img}`)} />
      <hr />
      <ul>
        <li>
          {" "}
          <button
            onClick={() => handleClick("Douglas%20Hurley")}
          ></button>
        </li>
        <li>
          <button onClick={() => handleClick("Mark%20Shuttleworth")}></button>{" "}
        </li>
        <li>
          <button onClick={() => handleClick("Victor%20Glover")}></button>
        </li>
        <li>
          <button onClick={() => handleClick("Anousheh%20Ansari")}></button>
        </li>
      </ul>
      <section>
        <h2>{crew.role}</h2>
        <h3>{crew.name}</h3>
        <p>{crew.bio}</p>
      </section>
    </section>
  );
}
