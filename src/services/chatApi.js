export async function sendChatMessage(message, context) {
  const res = await fetch("http://localhost:3001/api/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message, context })
  })

  if (!res.ok) {
    throw new Error("Chat request failed")
  }

  return res.json()
}