import mongoose from "mongoose"

const username = 'shitsanupongko'
const password = 'P4Aa4kPHXEEaWsKuE'
const dbname = 'tinner_app'

const uri = `mongodb+srv://${username}:${password}@cluster0.2gxfa.mongodb.net/?retryWrites=true&w=majority&appName=${dbname}`

export const MongoDB = {
    connect: async function (){
        try {
            await mongoose.connect(uri)
            console.log('---mongoDB Connected---')
        } catch (error) {
            console.error('---MongoDB connection error---')
            console.error(error)
        }
    }
}