import {prismaClient} from '../prisma'


class GetAllClassServices{
  async execute(){
    const classes = await prismaClient.class.findMany()


    return classes
  }
}

export {GetAllClassServices}