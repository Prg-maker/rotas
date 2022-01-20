import {prismaClient} from '../prisma'


class Profile{
  async execute(user_id){
    const user = await prismaClient.user.findFirst({
      where:{
        id: user_id
      }
    })

    return {user}
  }
}

export {Profile}