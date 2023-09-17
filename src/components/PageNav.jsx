import { NavLink } from "react-router-dom";

import planetsData from "../../public/data.json";

function PageNav() {
  return (
    <header>
      <nav>
        {planetsData.map((planet) => (
          <NavLink
            to={`/planet/${planet.name.toLowerCase()}/overview`}
            className="nav-link"
            key={planet.name}
          >
            {planet.name}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

export default PageNav;
