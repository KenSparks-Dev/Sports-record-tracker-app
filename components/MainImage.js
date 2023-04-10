import Image from "next/image";
import { IMAGES } from "./constants";
export default function MainImage({ season, team }) {
  const seasonNum = parseInt(season);
  let image = IMAGES.lakers;
  if (team === "Cleveland Cavaliers" && seasonNum > 2014) {
    image = IMAGES.cleveland2;
  }
  if (team === "Cleveland Cavaliers" && seasonNum < 2010) {
    image = IMAGES.cleveland1;
  }
  if (team === "Miami Heat") {
    image = IMAGES.miami;
  }
  return (
    <div>
      <Image src={image} width={100} height={80} alt="Image" />
    </div>
  );
}
