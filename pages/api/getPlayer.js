export default async function handler(request, response){
    const player = request.query.player;
    if(!Boolean(player)){
        const result = await fetch("https://www.balldontlie.io/api/v1/players/237")
        const playerData = await result.json()
        return response.status(200).json({
            first_name: playerData.first_name,
            last_name: playerData.last_name,
            position: playerData.position,
            team: playerData.team.full_name,
        })
    }
    return response.status(200).json({ player: player })
}