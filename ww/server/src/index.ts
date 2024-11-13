import { Elysia } from "elysia"

const app = new Elysia().get("/", () => "Hello world")
  .put("/about/:name", ({ params: { name } }) => {
    return {

      id: 'xxx',
      name: name
    }
  }).listen(8000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)