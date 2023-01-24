export default async function handler(request, response){
    const player = request.query.player;
    if(!Boolean(player)){

        const playerQuery = await fetch("https://www.balldontlie.io/api/v1/players/237")
        const stats = await fetch(" https://www.balldontlie.io/api/v1/stats/?seasons[]=2022&player_ids[]=237&per_page=100")

        const playerData = await playerQuery.json()
        const statsData = await stats.json()

        console.log('stats Data: ', statsData)

        return response.status(200).json({
            first_name: playerData.first_name,
            last_name: playerData.last_name,
            position: playerData.position,
            team: playerData.team.full_name,
            blocks: statsData.data.map((item) => {
                return item.blk
            }).reduce((accumulator, currentValue) => { 
            return accumulator + currentValue
            }),
            assist: statsData.data.map((item) => {
                return item.ast
            }).reduce((accumulator, currentValue) => { 
            return accumulator + currentValue
            }),
            points: statsData.data.map((item) => {
                return item.pts
            }).reduce((accumulator, currentValue) => { 
            return accumulator + currentValue
            }),
            rebounds: statsData.data.map((item) => {
                return item.reb
            }).reduce((accumulator, currentValue) => { 
            return accumulator + currentValue
            }),
            steals: statsData.data.map((item) => {
                return item.stl
            }).reduce((accumulator, currentValue) => { 
            return accumulator + currentValue
            }),
        })
    }
    return response.status(200).json({ player: player })
}