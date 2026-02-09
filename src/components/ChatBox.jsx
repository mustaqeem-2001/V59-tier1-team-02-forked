import { useState } from "react";
import {sendChatMessage} from "../services/chatApi"

export default function ChatBox() {
    const [messages, setMessages]= useState([])
    const [input, setInput]= useState("")
    const [loading, setLoading]= useState(false)

    const handleSend = async () => {
        if(!input.trim()) return

        setMessages(prev => [...prev, {sender: "You", text: input}])
        setInput("")
            setLoading(true)

            try {
                const data = await sendChatMessage(input)
                setMessages(prev => [
                    ...prev,
                    {sender: "Assistant", text: data.response}
                ])
            } catch (err) {
                setMessages (prev => [
                    ...prev,
                    {sender: "Assistant", text: "Sorry, something went wrong."}
                ])
            } finally {
                setLoading(false)
            }
        }

        const handlePress = (e) => {
            if (e.key === "Enter") handleSend()
        }
    return  (
    <div style={{ border: "1px solid #ccc", padding: "1rem", width: "400px" }}>
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "1rem" }}>
        {messages.map((m, i) => (
          <div key={i}>
            <strong>{m.sender}:</strong> {m.text}
          </div>
        ))}
        {loading && <div>Assistant is typing…</div>}
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handlePress}
        placeholder="Ask a question about the app..."
        style={{ width: "80%", marginRight: "0.5rem" }}
      />
      <button onClick={handleSend}>Send</button>
    </div>
  )
}