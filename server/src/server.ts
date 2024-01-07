import dotenv from "dotenv"
import express from "express"
import cors from "cors"
import("express-async-errors")
const app = express()
dotenv.config()
app.use(cors())

// error handler
import notFoundMiddleware from "./middleware/not-found.ts"
import errorHandlerMiddleware from "./middleware/error-handler.ts"

app.use(express.json())

// routes
app.get("/api", (_, res) => {
  res.send("backend working")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5555

async function start() {
  try {
    app.listen(port, () => console.log("listening to port 5555"))
  } catch (err) {
    console.log(err)
  }
}

start()
