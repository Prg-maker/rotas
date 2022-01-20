import { prismaClient } from "../prisma"



class CreateNewUserServices{
  async execute(name , email , password ){

    try{
      const userExist = await prismaClient.user.findFirst({
        where:{
          email
        }
      })
  
      if(!userExist){
        const user = await prismaClient.user.create({
          data:{
            name,
            email,
            password
          }
        })
        return user

      }

      return 'user exist'
    }catch(err){
      return "erro"
    }
   





  }
}

export {CreateNewUserServices}