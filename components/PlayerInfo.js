import styles from '@/styles/Home.module.css'
 export default function PlayerInfo({firstName, lastName, position, team, points, assists, rebounds, blocks, steals, loading, player={firstName: firstName, lastName: lastName, position: position, team: team, points: points, assists: assists, rebounds: rebounds, blocks: blocks, steals: steals}}) {
  return (
    <>
      <div className={styles.playerText}>
        <div className={styles.playerProfile}>
          {/* {loading && <p>Loading...</p>} */}
          {loading ? <p>Loading Name...</p> : <p>Name: {player.firstName} {lastName}</p>}
          {loading ? <p>Loading Position...</p> : <p>Position: {player.position}</p>}
          {loading ? <p>Loading Team...</p> : <p>Team: {player.team}</p>}
          {/* if loading show loading text and if else show player text */}
        </div>
        <br />
        <ul className={styles.playerStats}>
          <li>
            <div className={styles.statusBar}>
              <div id={styles.statusBarPoints} className={styles.statusBarProgress}>
              </div>
            </div>
            {loading ? <p>Loading Points...</p> : <span>Points: {player.points}</span>}
          </li>
          <li>
            <div className={styles.statusBar}>
              <div id={styles.statusBarAssists} className={styles.statusBarProgress}>
              </div>
            </div>
            {loading ? <p>Loading Assists...</p> : <span>Assists: {player.assists}</span>} 
          </li>
          <li>
            <div className={styles.statusBar}>
              <div id={styles.statusBarRebounds} className={styles.statusBarProgress}>
              </div>
            </div>
            {loading ? <p>Loading Rebounds...</p> : <span>Rebounds: {player.rebounds}</span>} 
          </li>
          <li>
            <div className={styles.statusBar}>
              <div id={styles.statusBarBlocks} className={styles.statusBarProgress}>
              </div>
            </div>
            {loading ? <p>Loading Blocks...</p> : <span>Blocks: {player.blocks}</span>} 
          </li>
          <li>
            <div className={styles.statusBar}>
              <div id={styles.statusBarSteals}className={styles.statusBarProgress}>
              </div>
            </div>
            {loading ? <p>Loading Steals...</p> : <span>Steals: {player.steals}</span>} 
          </li>
        </ul>
      </div>
    </>
  )
}

