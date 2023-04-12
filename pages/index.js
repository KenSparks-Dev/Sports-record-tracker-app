import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import PlayerInfo from "../components/PlayerInfo";
import SeasonSelector from "../components/SeasonSelector";
import { SEASONS } from "../components/constants";
import MainImage from "../components/MainImage";
import HeadAttributes from "./HeadAttributes";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  //Use State
  const [player, setPlayer] = useState("");
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("2022");
  const [bgColor, setBgColor] = useState("purple");

  // matching season you'll have to figure out
  const seasonPlusHello = season + " hello"
  console.log('seasonPlusHello: ', seasonPlusHello);


  //Use Effect
  useEffect(() => {
    getPlayer(season);
  }, [season]);

  //Request functions
  async function getPlayer(season) {
    const response = await fetch(`api/getLebron?season=${season}`);
    const data = await response.json();
    setPlayer(data);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  const handleChangeSeason = (event) => {
    let season = event.target.value;
    setSeason(season);
  };

  const playerData = [ ];
  return (
    <>
      <HeadAttributes/>
      {/* TODO  in order to get the background color to update with the image, you have two choices:
        A - 
          step 1 - add a color to each season in the seasons array
          step 2 - find the matching season (matchingSeason) from the array, based on the "selected season"
          step 3 - put that matchingSeason into the <main>...</main> backgroundColor
        B - 
          steps 1-3 = do something kinda like we did for main image
          in this case we'll have a component called <Main>{children}</Main>
          inside "Main" we'll do logic that's a lot like what we did in MainImage
          the difference is you'll learn how to render children
        C - :devin would do this one:
          Sort of a combo of the two
          step 1 - add the image and bgColor to the seasons array
          step 2 - find the "matchingSeason" <--- 
          step 3 - let both Main and MainImage use the "matchingSeason" to render the correct "thing"
            *note: that's matchingSeason.backgroundColor || matchingSeason.imageUrl
      */}
      <main className={styles.playerSection}>
          <div className={styles.player} onChange={handleChangeSeason}>
            <div>
              {loading ? 'Loading...' : <MainImage season={season} team={player.team} loading={loading} />}
            </div>
              <SeasonSelector SEASONS={SEASONS} />
              <PlayerInfo player={player} loading={loading}/>
          </div>
      </main>
    </>
  );
}
