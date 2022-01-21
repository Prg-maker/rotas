import { prismaClient } from "../prisma"



class GetOneClassServices{
  async execute(id){
    const Class = await prismaClient.class.findFirst({
      where:{
        id
      }
    })


    return Class
  }
}

export {GetOneClassServices}