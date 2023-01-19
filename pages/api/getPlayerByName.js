// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(request, response) {
  const name = request.query.name;
  if(!Boolean(name)){
     const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
     const data = await result.json()
    return response.status(200).json({name: data.title})
  } 
  return response.status(200).json({ name: name });
}
