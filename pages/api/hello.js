// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(request, response) {
  const name = request.query.name;
  if(!Boolean(name)){
    return response.status(200).json({name: 'Lebron James'})
  } 
  return response.status(200).json({ name: name });
}
