// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {
  const teams = request.query.teams;
  if(!Boolean(teams)){
    const result = await fetch('https://jsonplaceholder.typicode.com/albums')
    const data = await result.json()
    console.log(data)
    return response.status(200).json({
      teams: data
    })
  } 
  return response.status(200).json({ teams: teams });
}
