import { photo } from ".../types/photo.type"
import mongoose from"mongoose"

type photowithOutID = Omit<photo, 'id'>

export interface IphotoDocument extends mongoose.Document, photowithOutID {
    user: mongoose.Types.ObjectId,
    created_at?: Date,
    toPhoto: () => photo
}

export interface IphotoModel extends mongoose .Model<IphotoDocument> {
    //setAvatar: (PHOTO_ID: STRING)
    
}