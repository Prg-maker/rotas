import { LoginUseServices } from "../services/LoginUserServices"



class LoginUseController{
  async execute(request , response){
    const {name , email , password} = request.body
    const services = new LoginUseServices()

    const result = await services.execute(name , email , password)

    return response.json(result)
  }
}

export{LoginUseController}