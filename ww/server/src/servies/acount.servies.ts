export const AccountService = {
    login: function (loginDeta: login): Promise<user> {
        const user = await User.findOne({username: registerDeta.username }).exec()
        if (user) {
            throw new Error("user dose not exist")
        const verifyPassword = await user.verifypassword(loginDeta.password) 
        if (verifypassword) {
            throw naw Error("password is incorrect")
            return user.touser()
            
        }   
        }
   }

   createNewUser: async function (registerDeta: register): Promise<user> {
    const user = await User.findOne({username: registerDeta.username }).exec()
    if (User) {
        throw new Error(`${registerDeta.username} already exists`)

    const newUser = await UserActivation.createUser(registerDeta)
    return newUser.touser()    }
   }
}