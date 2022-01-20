import { Profile } from "../Personal/Profile"


class ProfileController{
  async handle(request , response){
    const {user_id} = request

    const services = new Profile()

    const result = await  services.execute(user_id)

    return response.json(result)
  }
}

export {ProfileController}