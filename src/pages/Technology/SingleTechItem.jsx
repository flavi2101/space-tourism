import { useState,useEffect } from "react";
import style from './SingleTech.module.css'


export default function SingleTechItem({ technology, seturl }) {
  function handleClick(query) {
    seturl(`http://localhost:3000/technology?name=${query}`);
  }
  const [img, setimg] = useState(technology.images.landscape);
  useEffect(() => {
    setimg(technology.images.landscape);
  }, [technology.images.landscape]);

  return (
    <section className={style.tech}>
      <h1>
        <span>03</span> Space Launch 101
      </h1>
      <img alt="" src={require(`../../assets/technology/${img}`)} />
      <ul>
        <li autoFocus onClick={() => handleClick("Launch%20vehicle")}>
          <button>1</button>
        </li>
        <li onClick={() => handleClick("Spaceport")}><button>2</button> </li>
        <li onClick={() => handleClick("Space%20capsule")}><button>3</button></li>
       
      </ul>
      <section >
        <h2>{technology.name}</h2>
       
        <p>{technology.description}</p>
      </section>
    </section>
  );
}
