import { CreateNewUserServices } from "../services/CreateNewUserServices"



class CreateNewUserController{
  async execute(request , response){
    const {name , email , password} = request.body

    const services = new CreateNewUserServices()

    const result = await services.execute(name , email , password)


    return response.json(result)
  }
}

export {CreateNewUserController}