import { useParams } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

import planetsData from "../../../data.json";

function PlanetImage() {
  const isDesktop = useMediaQuery({ query: "(min-width: 900px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 899px)",
  });
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

  const { planetName, screenName } = useParams();

  const planet = planetsData.find(
    (planet) => planet.name.toLowerCase() === planetName
  );
  let imageType;
  if (screenName === "overview") imageType = "planet";
  if (screenName === "structure") imageType = "internal";
  if (screenName === "geology") imageType = "geology";

  let imageSize;
  if (isDesktop) imageSize = "100%";
  if (isTablet) imageSize = "30%";
  if (isMobile) imageSize = "30%";

  return (
    <section className="image-section">
      <img
        src={planet["images"][imageType]}
        alt={planetName}
        style={{ width: imageSize }}
      />
    </section>
  );
}

export default PlanetImage;
