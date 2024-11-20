import { password } from "bun"
import mongoose from "mongoose"

export function calculateAge(dateOfBirth: Date): number {
    const today = new Date()

    const birthDate = new Date(dateOfBirth.getFullYear(), dateOfBirth.getMonth(), dateOfBirth.getDate())
    const currentDate = new Date(today.getFullYear(), today.getMonth(), today.getDate())

    let age = currentDate.getFullYear() - birthDate.getFullYear()

    //Check if this year's birthday has passed.
    const monthDiff = currentDate.getMonth() - birthDate.getMonth()
    const dayDiff = currentDate.getDate() - birthDate.getDate()

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--
    }

    return age
}

schema.methods.verifyPassword = async function(password: string): Promise<boolean> {
    return await Bun.password.verify(password, this.password_hash)
}

schema.statics.createUser = async function(registerDeta: register): Promise<userDocment> {
    const newUser = await new this({
        display_name: registerDeta.display_name,
        Username:  registerDeta.Username,
        password: registerDeta.password,
        date_of_birth:  registerDeta.date_of_birth,
        locking_for:  registerDeta.locking_for,
    })

    await newUser.save()
    return newUser
}

export User = mongoose.model<UserDocument, UserModel>("User", schema)