import { verify } from "jsonwebtoken";


function ensureAuthenticate(request , response , next){
  const authToken = request.headers.authorization

  if(!authToken){
    return response.status(404).json({
      errorCode: 'token.invalid'
    })
  }


  const [, token]  = authToken.split(' ')


  try{
    const {sub} = verify(token , process.env.JWT_PASS)

    request.user_id = sub   
    console.log('chegou aqui')
    return next()

  }catch(err){
    return  response.status(401).json({errorCode: "token.expired"})
  }

  
}

export {ensureAuthenticate}