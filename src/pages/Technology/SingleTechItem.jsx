import { useState,useEffect } from "react";



export default function SingleTechItem({ technology, seturl }) {
  function handleClick(query) {
    seturl(`http://localhost:3000/technology?name=${query}`);
  }
  const [img, setimg] = useState(technology.images.landscape);
  useEffect(() => {
    setimg(technology.images.landscape);
  }, [technology.images.landscape]);

  return (
    <section style={{backgroundColor: 'white'}}>
      <h1>
        <span>01</span> Pick your destination
      </h1>
      <img alt="" src={require(`../../assets/technology/${img}`)} />
      <ul>
        <li autoFocus onClick={() => handleClick("Launch%20vehicle")}>
          teste1
        </li>
        <li onClick={() => handleClick("Spaceport")}>teste2 </li>
        <li onClick={() => handleClick("Space%20capsule")}>teste3</li>
       
      </ul>
      <section >
        <h2>{technology.name}</h2>
       
        <p>{technology.description}</p>
      </section>
    </section>
  );
}
