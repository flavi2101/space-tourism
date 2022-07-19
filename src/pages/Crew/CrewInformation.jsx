
import SingleCrew from "./SingleCrew";

export default function CrewInformation({ infor, seturl, url }) {



infor = !url.includes("?") ? infor.filter((val) => val.name === "Douglas Hurley") : infor;
  return (
    <article>
      {infor.map((crew) => {
        return <SingleCrew crew={crew} seturl={seturl} key={Math.random()}></SingleCrew>;
      })}
    </article>
  );
}
