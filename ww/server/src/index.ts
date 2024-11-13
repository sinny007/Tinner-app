import { Elysia,t } from "elysia"
import { example } from "./controrller/example controller"

const app = new Elysia().get("/", () => "Hello world")
  .use(example)
  .listen(8000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)