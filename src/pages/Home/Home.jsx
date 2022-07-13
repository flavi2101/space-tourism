import style from "./Home.module.css";

export default function Home() {
  return (
    <main className={style.container}>
      <hgroup>
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
      </hgroup>
      <p>
        Let’s face it; if you want to go to space, you might as well genuinely
        go to outer space and not hover kind of on the edge of it. Well sit
        back, and relax because we’ll give you a truly out of this world
        experience!
      </p>
      <div>
        <span>Explore</span>
      </div>
    </main>
  );
}
