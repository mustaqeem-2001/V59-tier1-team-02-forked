import express from "express"
import chatRouter from "./routes/chat.js"

const app = express()
app.use(express.json())

app.use("/chat", chatRouter)

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
