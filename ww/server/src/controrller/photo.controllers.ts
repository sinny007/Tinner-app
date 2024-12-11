import { set } from "mongoose"
import { ImageHelper } from "../helper/image.helper"

const _imageDB: {id: string, data: string type: string}[] = []

export const PhotoController = new Elysia({
    prefix: '/api/photo' ,
    tags: ['photo']
})


.post('/', async ({ body: { image } }) => {
    

    if (Isimage) {
        set.status = "Not Accesttable"
        throw new Error("Image file must be .jpg or .png")
    }

    

    return {
        file_url: `...`
    }
}, {
    body: t.Object({
        image: Text.file({
            type: ['image/jpeg', 'image/jpeg', 'image/jpeg']
            error: 'Image must be either JPEG or PNG' ,
            maxSize: '2m'
        })
    })
})