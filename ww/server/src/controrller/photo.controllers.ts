export const PhotoController = new Elysia({
    prefix: '/api/photo' ,
    tags: ['photo']
})

.post('/', async ({ body: { image } }) => {
    const filename = `${Date.now}_${image.name.split(' ').join(' ')}`
    const filename = `public/uploads/${filename}`

    await Bun.write(fileURLToPath, await image.arrayBuffer())

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