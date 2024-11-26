import { Static, t, TSchema } from "elysia"

export const _pagtnator = t.Object({
    pageSize: t.Number(),
    currentpage: t.Number(),
    length: t.Optional(t.Number()),
})

export type pagtnator = Static<typeof _pagtnator>

export function CreatedPagtnation<T extends TSchema, U extends TSchema(itemType: T,pagtnator:U) {
   return t.Object({
    item: t.Array(itemType),
    pagtnator: pagtnator
   })
}