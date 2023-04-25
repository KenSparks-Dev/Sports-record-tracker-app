import Image from "next/image";

export default function MainImage({ season, team }) {

  return (
    <div>
      <Image src={season.imageUrl} width={100} height={80} alt="Image" />
    </div>
  );
}
