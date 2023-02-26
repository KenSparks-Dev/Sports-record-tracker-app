export default async function handler(request, response){
    const season = Boolean(request.query.season) ? request.query.season : 2022;

    const stats = await fetch(`https://www.balldontlie.io/api/v1/stats/?seasons[]=${season}&player_ids[]=237&per_page=100`)
    const statsData = await stats.json()

    // step one - ALWAYS create your accumulator type (object, array, etc.)
    // step two - ALWAYS return the accumulator        
    const playerStats = statsData.data.reduce((accumulator, currentGame) => {
        return {
            ...accumulator,
            blocks: accumulator.blocks += currentGame.blk,
            points: accumulator.points += currentGame.pts,
            assists: accumulator.assists += currentGame.ast,
            rebounds: accumulator.rebounds += currentGame.reb,
            steals: accumulator.steals += currentGame.stl,
            minutes: accumulator.minutes += parseInt(currentGame.min), 
        }
    }, {
        firstName: statsData.data[0].player.first_name,
        lastName: statsData.data[0].player.last_name,
        position: statsData.data[0].player.position,            
        team: statsData.data[0].team.full_name,
        blocks: 0,
        points: 0,
        assists: 0,
        rebounds: 0,
        steals: 0,
        minutes: 0,
    })

    return response.status(200).json(playerStats);
}
