import { useParams } from "react-router-dom";

import planetsData from "../../public/data.json";

function Info() {
  const { planetName, screenName } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  return (
    <main>
      <section className="info-section">
        <h1>{planetName}</h1>
        <p className="info">{planet[screenName]["content"]}</p>
        <p className="source">
          Source: &nbsp;
          <a href={planet[screenName]["source"]} target="_blank">
            Wikipedia
          </a>
          <span>
            <img src="/assets/icon-source.svg" alt="" />
          </span>
        </p>
      </section>
    </main>
  );
}

export default Info;
