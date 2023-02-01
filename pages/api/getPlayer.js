export default async function handler(request, response){
    const season = request.query.season;

    if(!Boolean(season)){
        const stats = await fetch(" https://www.balldontlie.io/api/v1/stats/?seasons[]=2022&player_ids[]=237&per_page=100")

        const playerData = await playerQuery.json()
        const statsData = await stats.json().data

        // step one - ALWAYS create your accumulator type (object, array, etc.)
        // step two - ALWAYS return the accumulator        
        const playerStats = statsData.reduce((accumulator, currentGame) => {
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
            firstName: statsData[0].player.first_name,
            lastName: statsData[0].player.last_name,
            position: statsData[0].player.position,            
            team: statsData[0].team.full_name,
            blocks: 0,
            points: 0,
            assists: 0,
            rebounds: 0,
            steals: 0,
            minutes: 0,
        })

        return response.status(200).json(playerStats);
    }

    return response.status(200).json({ player: player })
}





// const blocks = item.blk;
// const assists = item.ast;
// const points = item.pts;
// const rebounds = item.reb;
// const steals = item.stl;
// const stats = [blocks, assists, points, rebounds, steals]



// {
//   id: 12068860,
//   ast: 6,
//   blk: 2,
//   dreb: 8,
//   fg3_pct: 0.25,
//   fg3a: 8,
//   fg3m: 2,
//   fg_pct: 0.4117647,
//   fga: 17,
//   fgm: 7,
//   ft_pct: 0.6666667,
//   fta: 6,
//   ftm: 4,
//   game: {
//     id: 857369,
//     date: '2022-10-20T00:00:00.000Z',
//     home_team_id: 14,
//     home_team_score: 97,
//     period: 4,
//     postseason: false,
//     season: 2022,
//     status: 'Final',
//     time: 'Final',
//     visitor_team_id: 13,
//     visitor_team_score: 103
//   },
//   min: '37',
//   oreb: 2,
//   pf: 3,
//   player: {
//     id: 237,
//     first_name: 'LeBron',
//     height_feet: 6,
//     height_inches: 8,
//     last_name: 'James',
//     position: 'F',
//     team_id: 14,
//     weight_pounds: 250
//   },
//   pts: 20,
//   reb: 10,
//   stl: 1,
//   team: {
//     id: 14,
//     abbreviation: 'LAL',
//     city: 'Los Angeles',
//     conference: 'West',
//     division: 'Pacific',
//     full_name: 'Los Angeles Lakers',
//     name: 'Lakers'
//   },
//   turnover: 2
// }