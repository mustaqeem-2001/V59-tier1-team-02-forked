import { useState } from "react";


const MAX_ATTEMPTS = 3
const [status, setStatus] = useState("idle")
const [attempts, setAttempts] = useState(0)

function validateAnswer(selectedAnswerId, correctAnswerId) {
  if (selectedAnswerId === correctAnswerId) {
    setStatus("correct")
  } else {
    const newAttempts = attempts + 1
    setAttempts(newAttempts)

    if (newAttempts < MAX_ATTEMPTS) {
      setStatus("incorrect") // Try again
    } else {
      setStatus("locked") // Out of attempts, show rationale in UI
    }
  }
}
