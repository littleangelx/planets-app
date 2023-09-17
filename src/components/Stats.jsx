import { useParams } from "react-router-dom";

import planetsData from "../../public/data.json";
import Stat from "./Stat";

function Stats() {
  const { planetName } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  return (
    <div className="statistics">
      <Stat statHeading="Rotation Time" figure={planet.rotation} />
      <Stat statHeading="Revolution Time" figure={planet.revolution} />
      <Stat statHeading="Radius" figure={planet.radius} />
      <Stat statHeading="Average Temp." figure={planet.temperature} />
    </div>
  );
}

export default Stats;
