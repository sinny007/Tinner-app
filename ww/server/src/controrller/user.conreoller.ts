import Elysia from "elysia"
import { get } from "mongoose"
import { AuthMiddleware } from "../middleware/auth.middleware"

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