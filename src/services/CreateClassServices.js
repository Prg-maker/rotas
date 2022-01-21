import {prismaClient}  from '../prisma'


class CreateClassServices{
  async execute(user_id , name , description){
    const classUser = await prismaClient.class.create({
      data:{
        name: name, 
        authorId: user_id,
        description: description
      }
    })

    return classUser
  }
}

export {CreateClassServices}