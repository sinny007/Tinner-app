import mongoose from "mongoose";
import { IphotoDocument, IphotoModel } from "../interface/photo.interface";
import { user } from "../types/user.type";
import { $ } from "bun";

const schema = new mongoose.Schema<PhotoDocument, IphotoModel>({
    user:(type:Types.ObjectId, ref:"User", required: ture)
    public_id: { type: String,requried: true}
    url: { type: String,requried: true}
    is_avatar: { type: boolean,requried: true , default: false },
},{
    timestamps: { createAt: 'create_at'}
})

schema.method.tophoto = function (): photo {
    return {
        id: this._id.tostring(),
        url: this.url,
        public_id: this.public_id,
        is_avatar: this.is_avatar,
        created_at: this.created_at
    }
}

schema.static.setavatar = async function (photo_id: string, user_id: string): Promise<boolean> {
    await this.updateMany(
        {user: new mongoose.Types.ObjectId(user_id) },
        {$set: {is_avatar: false} }
    )

    const updatePhoto = await this.findByIdUpdate(
        photo_id,
        photo_id, {$set: { is_avatar: true } }
    )
    return !!updatePhoto
}

export const Photo = mongoose.model<IphotoDocument,IphotoModel>("Photo", schema)
