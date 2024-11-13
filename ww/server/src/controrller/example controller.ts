import Elysia, { t } from "elysia"

export const example = new Elysia().get("/", () => "Hello world")
  .put("/about/:name", ({ body}) => {
    return {

      id: 'xxx',
      msg: "hello" + body.name
    }
  }, {
    body: t.Object({
      name: t.String()
    })
  })