import Head from 'next/head'
import Image from 'next/image'
import LebronLakersImg from '../public/lebron.png'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import {useState, useEffect} from 'react'
import PlayerInfo from './components/PlayerInfo'
import SeasonSelector from './components/SeasonSelector'
import {SEASONS} from './constants'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  //Use State
  const [player, setPlayer] = useState('')
  const [loading, setLoading] = useState(true)
  const [season, setSeason] = useState('2022')

  //Use Effect
   useEffect(() => {
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

  const handleChangeSeason = (event) => {
      let season = event.target.value
      setSeason(season)
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
          <div className={styles.player} onChange={handleChangeSeason}>
            <div>
              <Image src={LebronLakersImg} width="100%" height="80vh" alt="Image"/>
            </div>
            <SeasonSelector SEASONS={SEASONS}/>
            <PlayerInfo firstName={player.firstName} lastName={player.lastName} position={player.position} points={player.points} assists={player.assists} rebounds={player.rebounds} blocks={player.blocks} steals={player.steals} team={player.team}/>
          </div>
      </main>
    </>
  )
}
