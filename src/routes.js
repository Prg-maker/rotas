import { Router } from "express";

import {CreateNewUserController} from './controller/CreateNewUserController'
import {LoginUseController} from './controller/LoginUserController'
import {ProfileController} from './controller/ProfileController'
import {CreateClassController} from './controller/CreateClassController'
import {GetAllClassController} from './controller/GetAllClassController'

import {GetOneClassController} from './controller/GetOneClassController'

import {ensureAuthenticate} from './middleware/ensureAuthenticate'



const router = Router()


router.post('/register' , new CreateNewUserController().execute)
router.post('/login' , new LoginUseController().execute)
router.post('/create/class' , ensureAuthenticate , new CreateClassController().handle)

router.get('/profile' , ensureAuthenticate , new ProfileController().handle )
router.get('/classes' , ensureAuthenticate , new GetAllClassController().handle )
router.get('/class/:id' , ensureAuthenticate , new GetOneClassController().handle )


export {router}