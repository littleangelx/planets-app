import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

import planetsData from "../../public/data.json";

function Option({ num, screenTarget, children }) {
  const [color, setColor] = useState("");
  const { planetName, screenName } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );

  const bgColor = screenName === screenTarget ? planet.colors.underline : "";

  return (
    <NavLink
      to={`/planet/${planetName}/${screenTarget}`}
      className="option"
      style={{ backgroundColor: bgColor }}
    >
      <p>{num}</p>
      <p>{children}</p>
    </NavLink>
  );
}

export default Option;
