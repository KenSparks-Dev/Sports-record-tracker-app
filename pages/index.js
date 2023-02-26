import Head from 'next/head'
import Image from 'next/image'
import LebronImg from '../public/lebron.png'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
import SeasonSelector from './components/SeasonSelector'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //states
  const [season, setSeason] = React.useState('2022')
  const [loading, setLoading] = React.useState(true)
  const [player, setPlayer] = React.useState('')
  //Effects
  React.useEffect(() => {
    getPlayer(season)
  }, [season])

  //Request functions
  async function getPlayer(season){
    const response = await fetch(`api/getLebron?season=${season}`)
    const data = await response.json()
    setPlayer(data)
    setLoading(false)
  }

  const handleGetSeason = () => {
    setSeason('')
  }

  return (
    <>
      <Head>
        <title>Lebron James Stats Tracker</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.playerSection}>
          <div className={styles.player}>
            <div><Image src={LebronImg} width="100%" height="80vh" alt="Image"/></div>
             <SeasonSelector onChange={setSeason} />
            
            <div className={styles.playerText}>
              <div className={styles.playerProfile}>
                {/* {loading && <p>Loading...</p>} */}
                <p>Name: {player.firstName} {player.lastName}</p>
                <p>Position: {player.position}</p>
                {loading ? <p>Loading Team...</p> : <p>Team: {player.team}</p>}
                {/* if loading show loading text and if else show player text */}
              </div>
              <br />
              <ul className={styles.playerStats}>
                <li>Points: {player.points}</li>
                <li>Assists: {player.assists}</li>
                <li>Rebounds: {player.rebounds}</li>
                <li>Blocks: {player.blocks}</li>
                <li>Steals: {player.steals}</li>
              </ul>
            </div>
          </div>
      </main>
    </>
  )
}
