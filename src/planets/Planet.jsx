import { useState } from "react";
import { useMediaQuery } from "react-responsive";

import Info from "../components/Info";
import Options from "../components/Options";
import OptionsMobile from "../components/OptionsMobile";
import PageNav from "../components/PageNav";
import PlanetImage from "../components/PlanetImage";
import Stats from "../components/Stats";
import Title from "../components/Title";
import MobileMenuPlanet from "../components/MobileMenuPlanet";
import Hamburger from "../components/Hamburger";

function Planet() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 899px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  function handleMobileMenHamburger() {
    setIsMobileMenuOpen((isOpen) => !isOpen);
  }

  return (
    <>
      {isMobile && (
        <>
          <Title />
          <Hamburger onClick={handleMobileMenHamburger} />
          {isMobileMenuOpen && (
            <MobileMenuPlanet setIsMobileMenuOpen={setIsMobileMenuOpen} />
          )}
          {!isMobileMenuOpen && (
            <>
              <OptionsMobile />
              <PlanetImage />
              <Info />
              <Stats />
            </>
          )}
        </>
      )}

      {isTablet && (
        <>
          <Title />
          <PageNav />
          <PlanetImage />
          <div className="grid-container">
            <Info />
            <Options />
          </div>
          <Stats />
        </>
      )}

      {isDesktop && (
        <>
          <div className="desktop-nav-container">
            <Title />
            <PageNav />
          </div>
          <div className="main-section">
            <div className="desktop-grid-container">
              <PlanetImage />
              <Info />
              <Options />
            </div>
            <Stats />
          </div>
        </>
      )}
    </>
  );
}

export default Planet;
