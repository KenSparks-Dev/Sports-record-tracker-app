// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(request, response) {
  const teams = request.query.teams;
  if(!Boolean(teams)){
    return response.status(200).json({
      teams: ['Cleveland Cavaliers', 'Miami Heat', 'Cleveland Cavaliers', 'Los Angeles Lakers']
    })
  } 
  return response.status(200).json({ teams: teams });
}
