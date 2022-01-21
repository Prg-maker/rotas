import { CreateClassServices } from "../services/CreateClassServices"



class CreateClassController{
  async handle(request , response){
    const {user_id} = request
    const {name , description} = request.body


    const services = new CreateClassServices()

    const result = await services.execute(user_id  , name , description)

    return response.json(result)
  }
}

export {CreateClassController}