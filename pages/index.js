import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { useState, useEffect } from "react";
import PlayerInfo from "../components/PlayerInfo";
import SeasonSelector from "../components/SeasonSelector";
import { SEASONS } from "../components/constants";
import MainImage from "../components/MainImage";
import HeadAttributes from "./HeadAttributes";

export default function Home() {
  //Use State
  const [player, setPlayer] = useState("");
  const [loading, setLoading] = useState(true);
  const [season, setSeason] = useState("2022");

  // matching season you'll have to figure out
  const matchingSeason = SEASONS.find((seasonObj) => seasonObj.year === season);
  const hasMatchingSeason = SEASONS.some((seasonObj) => seasonObj.year === season);
  const allMatchingSeasons = SEASONS.every((seasonObj) => seasonObj.year === season);

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

  return (
    <>
      <HeadAttributes />
      <main
        data-test="hello"
        className={styles.playerSection}
        style={{ backgroundColor: matchingSeason.bgColor, color: ['navy', 'red'].includes(matchingSeason.bgColor) ? 'white' : 'black'}}
      >
        <div className={styles.player} onChange={handleChangeSeason}>
          <div>
            {loading ? (
              "Loading..."
            ) : (
              <MainImage
                season={matchingSeason}
                team={player.team}
                loading={loading}
              />
            )}
          </div>
          <SeasonSelector SEASONS={SEASONS} />
          <PlayerInfo player={player} loading={loading} />
        </div>
      </main>
    </>
  );
}
