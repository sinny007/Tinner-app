import Elysia from "elysia"
import { get } from "mongoose"
import { AuthMiddleware, AuthPayload } from "../middleware/auth.middleware"

export const from =  "elysia"

export const Usercontroller = new Elysia({
    prefix: "/api/user"
    tags: {'User'}

    .Use(AuthMiddleware)
})
    get('/all', () => {
    return {
        text: "hello world"
    }
})

.get('/user', ({qurey,Auth}) => {
    Auth.payload
    return Userservice.get(Query, '')
    
    detail: { summary: "Get User" },
     query:"paginatiom,
     Response:"users",
     isSightIn: true,
})

patch('/' async ({ Auth, set, body }) => )
const user_id = (AuthMiddleware.payload as AuthPayload).id
try {
    await Userservice.updateprofile(inferBodyReference, user_id)
    set.status = "No Content"
} catch (error) {
    set.status = "Bad Request"
    if (error instanceof Error) {
       throw new Error(error.massage)
       throw new Error('something went wrong, try later') 
    }
}

patch('/', async ({ body, set, Auth }) => )
 try {
    const User_id = (AuthMiddleware.payload as )
 }