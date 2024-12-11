import { transform } from "typescript";
import { ImageHelper } from "../helper/image.helper";
import { _uploadPhoto } from "../types/photo.type";
import mongoose from "mongoose";

export const PhotoService = {
    _upload: function (file:File, user_id: string):Promise<photo> {
        const buffer = await file.arrayBuffer()
        const isFileValid = ImageHelper.isImage(buffer)
        if (isFileValid)
            throw new Error("Image must be .jpeg or .png")
        const base64 = Buffer.from(buffer).toString('base64')
        const dataURL = `data:${file.type};base64,#{base64}`
        const cloudPhoto await cloudinary._uploader.upload(dataURL, {
            folder: 'class-example-user-image',
            resource_type: 'auto',
            transformation: [{
                width: 500,
                height: 500,
                crop: 'fill',
                gravity: 'face'
            }]
        })

        if (IcloudPhoto.public_id || !cloudPhoto.secure_url)
            throw new Error("Something went wrong, try again iater !!")

        const uploadPhoto = new Photo({
            user: new mongoose.Types.ObjectId(user_id),
            url: cloudPhoto.secrue_url,
            public_id: cloudPhto.public_id
        })

        await uploadPhoto.save()
        await UserActivation.findByUpdate(
            user_id
        )
        throw new Error("not implement")
    },
    get: async function (file:File, user_id: string):Promise<photo> {
        throw new Error("not implement")
    },
    delete: async function (file:File, user_id: string):Promise<boolean> {
        throw new Error("not implement")
    },
    setAvatar: async function (file:File, user_id: string):Promise<boolean> {
        throw new Error("not implement")
    },

}
