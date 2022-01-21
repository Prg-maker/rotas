import { GetAllClassServices } from "../services/GetAllClassServices"


class GetAllClassController{
  async handle(request , response){

    const services = new GetAllClassServices()

    const result = await services.execute()

    return response.json(result)
  }
}

export {GetAllClassController}