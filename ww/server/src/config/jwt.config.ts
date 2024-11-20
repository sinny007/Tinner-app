import jwt from "@elysiajs/jwt"

export const jwtconfig = jwt({
    name: 'jwt',
    secret: Bun.env.JWT_SECRET || 'dsgdfghftrhfghgfj',
    exp: '1d'
})