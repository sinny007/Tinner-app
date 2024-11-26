import { t } from "elysia";

export const _profile = t.Object({
  ... t.Omit(_register, ['password']).properties,
  id: t.String(),
  introduction: t.Optional(t.String)),
  
})

export const _userandtoken 

//todo implement uplode code