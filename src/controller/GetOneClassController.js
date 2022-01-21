import {GetOneClassServices} from '../services/GetOneClassServices'


class GetOneClassController{
  async handle(request , response){
    const {id} = request.body

    const services = new GetOneClassServices()

    const result = await services.execute(id)

    return response.json(result)
  }
}

export {GetOneClassController}