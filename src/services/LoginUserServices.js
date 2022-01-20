import { prismaClient } from "../prisma"
import {sign} from 'jsonwebtoken'


class LoginUseServices{
  async execute( name , email , password){

    const userVerify = await prismaClient.user.findFirst({
      where:{
        name,
        email,
        password
      }
    })


    if(!userVerify ){
      return 'user not exist'
    }

    const token = sign({
      user:{
        name: userVerify.name,
        email: userVerify.email,
        password: userVerify.password
      },
    },
      process.env.JWT_PASS,
      {
        subject: userVerify.id,
        expiresIn: '1d'
      }
    )


    const user = {
      id: userVerify.id,
      name: userVerify.name,
      email: userVerify.email,
      password: userVerify.password
    }


    return { token , user }
    


  }
}

export {LoginUseServices}