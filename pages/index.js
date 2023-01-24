import Head from 'next/head'
import Image from 'next/image'
import LebronImg from '../public/lebron.png'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import React from 'react'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //states
  const [loading, setLoading] = React.useState(true)
  const [player, setPlayer] = React.useState('')
  //Effects
  React.useEffect(() => {
    getPlayer()
  }, [])

  // //Logs
  console.log(player)

  //Request functions
  async function getPlayer(){
    const response = await fetch('api/getPlayer')
    const data = await response.json()
    setPlayer(data)
    setLoading(false)
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
            <div className={styles.playerText}>
              <div className={styles.playerProfile}>
                {/* {loading && <p>Loading...</p>} */}
                <p>Name: {player.first_name} {player.last_name}</p>
                <p>Position: {player.position}</p>
                {loading ? <p>Loading Team...</p> : <p>Team: {player.team}</p>}
                {/* if loading show loading text and if else show player text */}
              </div>
              <br />
              <ul className={styles.playerStats}>
                <li>Points: {player.points}</li>
                <li>Assists: {player.assist}</li>
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
