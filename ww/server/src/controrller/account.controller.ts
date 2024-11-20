import Elysia from "elysia";
import { jwtconfig } from "../config/jwt.config";

export const AccountController = new Elysia({
    prefix: '/api/v1/account'
    tags: ['account']
})
   .use(jwtconfig)
   .use(AccountDto)

   .post('/register', ({body, jwt, set} => {
       type {
         const user = await AccountServiec.createnewuser(body)
         const token = await jwt.sigh({ id: user.id})
         return {token, user}
       } catch (Error) {
         set.status = "bad request"
         if(error instancef Error)
            throw new Error(error.message)
        set.status = 500
        throw new Error('something went wrong, try again later')
       }
   }, {
    body: "register"
    response: "account"
    detail: {
        summary: "create new user"
    }
    beforeHandle: ({ body: { username, password }, set }) => {
        const usernameRegex = /^[A-Za-z][A-Za-z\d]{3,9}$/
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,16}$/
        if (!usernameRegex.test(username) || !passwordRegex.test(password)) {
            set.status = "Bad Request"
            throw new Error(`Invalid username or password`)
        }
    },

   })

