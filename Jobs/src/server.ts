import dotenv from "dotenv"
import express from "express"
require("express-async-errors")
const app = express()
dotenv.config()

// error handler
import notFoundMiddleware from "../middleware/not-found.ts"
import errorHandlerMiddleware from "../middleware/error-handler.ts"

app.use(express.json())
// extra packages

// routes
app.get("/", (req, res) => {
  res.send("jobs api")
})

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)

const port = process.env.PORT || 5555

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    )
  } catch (error) {
    console.log(error)
  }
}

start()
