import {useState, useEffect} from 'react'
import styles from '@/styles/Home.module.css'
import SeasonSelector from './SeasonSelector'
 export default function PlayerInfo() {
    const [player, setPlayer] = useState('')
    const [loading, setLoading] = useState(true)
    const [season, setSeason] = useState('2022')

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
  return (
    <>
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
    </>
  )
}

