import { Router } from "express";

import {CreateNewUserController} from './controller/CreateNewUserController'
import {LoginUseController} from './controller/LoginUserController'
import {ProfileController} from './controller/ProfileController'


import {ensureAuthenticate} from './middleware/ensureAuthenticate'



const router = Router()


router.post('/register' , new CreateNewUserController().execute)
router.post('/login' , new LoginUseController().execute)


router.get('/profile' , ensureAuthenticate , new ProfileController().handle )


export {router}