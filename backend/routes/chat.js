import express from "express"
import { appContext } from "../context/appContext.js"

const router = express.Router()

router.post("/", (req, res) => {
  const { message } = req.body

  if (!message) {
    return res.json({
      response: appContext.fallbackResponse
    })
  }

  const lower = message.toLowerCase()

  for (const item of appContext.faq) {
    if (item.triggers.some(trigger => lower.includes(trigger))) {
      return res.json({ response: item.answer })
    }
  }

  return res.json({
    response: appContext.fallbackResponse
  })
})

export default router
