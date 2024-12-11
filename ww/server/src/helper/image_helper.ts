import { fileTypeFromBlob, fileTypeFromBuffer } from "file-type";

const acceptImageType = {'image/jpeg', 'image/png'}

export const ImageHelper = {
    isImage: async function (file: File): Promise<boolean>{
        // const buffer = await file.arrayBuffer()
        const buffer = await file.arrayBuffer()
        const fileType = await fileTypeFromBuffer(buffer)
        if(fileTypeResult === undefined)
            return false
        return acceptfileType.includes(fileTypeResult.mine)
    }
}