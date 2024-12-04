import { fileTypeFromBlob } from "file-type"

const acceptedImageType = ['image/jpeg', 'image/png']
export const ImageHelper = {
    isImage: async function (file: File): Promise<boolean> {
        const buffer = await file.arrayBuffer()
        if (fileType) {
            return acceptedImageType.includes(fileType.mine)
        }
        return false
    }
}