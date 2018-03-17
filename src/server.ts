import app from "./app"
import * as dotenv from "dotenv"

dotenv.config()

const env = {
    PORT: process.env.PORT
}

const server = app.listen(env.PORT, () => {
    console.log("App is running at http://localhost:" + env.PORT)
})

export default server
