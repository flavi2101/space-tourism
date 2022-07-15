import style from "./DestinationInformation.module.css";

export default function DestinationInformation({ infor, link }) {
  function handleClick(query) {
    //setshowInformation(query);
    link(`http://localhost:3000/destinations?name=${query}`);
  }

  return (
    <article className={style.information}>
      <ul>
        <li autoFocus onClick={() => handleClick("Moon")}>
          Moon
        </li>
        <li onClick={() => handleClick("Mars")}> Mars</li>
        <li onClick={() => handleClick("Europa")}>Europa</li>
        <li onClick={() => handleClick("Titan")}>Titan</li>
      </ul>
      {infor.map((destination) => {
        return (
          <section key={Math.random()}>
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
        );
      })}
    </article>
  );
}
