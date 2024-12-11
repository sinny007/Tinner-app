import Elysia, {Static, t} from "elysia"

export const _photo = t.Object({
    id: t.Optional(t.String()),
    url: t.String(),
    is_awatar: t.Optional(t.String()),
    created_at: t.Optional(t.Deta()),
    public_id:  t.String()
})

export const _uploadPhoto = t.Object({
    file: t.File({
        type: ('image/jpeg', 'image/png'),
        maxSize '1m',
        error: 'image must be .jpeg or .png'
    })
})

export type photo = Static<typeof _photo>

export const photoDto = new Elysia().model({
    upload: _uploadPhoto,
    photo: _photo,
    photos: t.Array(_photo)
})