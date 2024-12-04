import { Elysia,t } from "elysia"
import { example } from "./controrller/example controller"
import { MongoDB } from "./config/database.config"

const app = new Elysia().get("/", () => "Wowww")
  .use(example)
  .listen(8000)
console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
)

MongoDB.connect()

.use(statigPlugin({
  assets: "public/upload",
  prefix: "img"
}))

.use(PhotoController)