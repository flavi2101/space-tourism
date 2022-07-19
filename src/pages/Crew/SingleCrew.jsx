import { useEffect, useState } from "react";
export default function SingleCrew({ crew,seturl }) {
  function handleClick(query) {
    seturl(`http://localhost:3000/crew?name=${query}`);
  }
  const [img, setimg] = useState(crew.images.webp);
  useEffect(() => {
    setimg(crew.images.webp);
  }, [crew.images.webp]);

  return (
    <section>
      <h1>
        <span>01</span> Pick your destination
      </h1>
      <img alt="" src={require(`../../assets/crew/${img}`)} />
      <ul>
        <li autoFocus onClick={() => handleClick("Douglas%20Hurley")}>teste1</li>
        <li onClick={() => handleClick("Mark%20Shuttleworth")}>teste2 </li>
        <li onClick={() => handleClick("Victor%20Glover")}>teste3</li>
        <li onClick={() => handleClick("Anousheh%20Ansari")}>teste4</li>
      </ul>
      <section>
        <h2>{crew.role}</h2>
        <p>{crew.name}</p>
        <hr />
        <p>{crew.bio}</p>
      </section>
    </section>
  );
}
