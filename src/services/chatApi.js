export async function sendChatMessage(message) {
  const res = await fetch("http://localhost:3001/chat", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message })
  })

  if (!res.ok) {
    throw new Error("Chat request failed")
  }

  return res.json()
}