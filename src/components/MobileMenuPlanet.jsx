import planetsData from "../../../data.json";
import MobileMenuItem from "./MobileMenuItem";

function MobileMenuPlanet({ setIsMobileMenuOpen }) {
  return (
    <div className="mobile-menu-items">
      {planetsData.map((planet) => (
        <MobileMenuItem
          key={planet.name}
          planet={planet}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
      ))}
    </div>
  );
}

export default MobileMenuPlanet;
