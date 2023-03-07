import styles from '@/styles/Home.module.css'
 export default function PlayerInfo({firstName, lastName, position, team, points, assists, rebounds, blocks, steals, loading}) {
  return (
    <>
    <div className={styles.playerText}>
        <div className={styles.playerProfile}>
            {/* {loading && <p>Loading...</p>} */}
            <p>Name: {firstName} {lastName}</p>
            <p>Position: {position}</p>
            {loading ? <p>Loading Team...</p> : <p>Team: {team}</p>}
            {/* if loading show loading text and if else show player text */}
        </div>
        <br />
        <ul className={styles.playerStats}>
            <li>Points: {points}</li>
            <li>Assists: {assists}</li>
            <li>Rebounds: {rebounds}</li>
            <li>Blocks: {blocks}</li>
            <li>Steals: {steals}</li>
        </ul>
    </div>
    </>
  )
}

