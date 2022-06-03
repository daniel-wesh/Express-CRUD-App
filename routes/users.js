import express from "express"
import { createUser,getUsers,updateUser,getUser,delUser } from "../controllers/users.js"
const router=express.Router()


//all routes in here should start with /users
router.get('/', getUsers)
router.post('/', createUser)
router.get('/:id', getUser)
router.delete('/:id',delUser)
//patching-changing some user values
router.patch('/:id',updateUser)

export default router