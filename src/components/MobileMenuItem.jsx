import { useNavigate } from "react-router-dom";

function MobileMenuItem({ planet, setIsMobileMenuOpen }) {
  const navigate = useNavigate();

  return (
    <div
      className="menu-item"
      onClick={() => {
        navigate(`/planet/${planet.name.toLowerCase()}/overview`);
        setIsMobileMenuOpen(false);
      }}
    >
      <div
        className="circle"
        style={{ backgroundColor: planet.colors.circle }}
      ></div>
      <div className="planet-name">{planet.name}</div>
      <img
        className="chevron"
        src="/assets/icon-chevron.svg"
        alt="right arrow"
      />
    </div>
  );
}

export default MobileMenuItem;
