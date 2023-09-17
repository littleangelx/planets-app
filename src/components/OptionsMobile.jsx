import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

import planetsData from "../../public/data.json";

function OptionsMobile() {
  const { planetName, screenName } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );
  const underlineColor = `3px solid ${planet.colors.underline}`;

  useEffect(() => {
    const options = document.querySelectorAll(".option-mobile");

    for (let i = 0; i < options.length; i++) {
      if (options[i].classList.contains(screenName)) {
        options[i].style.borderBottom = underlineColor;
      } else {
        options[i].style.borderBottom = "none";
      }
    }

    // document.querySelector(".active").style.borderBottom = underlineColor;
    // document.querySelector(".inactive").style.borderBottom = "none";
  }, [screenName]);

  return (
    <div className="options-mobile">
      <NavLink
        to={`/planet/${planetName}/overview`}
        className="option-mobile overview"
      >
        Overview
      </NavLink>
      <NavLink
        to={`/planet/${planetName}/structure`}
        className="option-mobile structure"
      >
        Structure
      </NavLink>
      <NavLink
        to={`/planet/${planetName}/geology`}
        className="option-mobile geology"
      >
        Surface
      </NavLink>
    </div>
  );
}

export default OptionsMobile;
