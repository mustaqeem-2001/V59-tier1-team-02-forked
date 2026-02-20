import {sendChatMessage} from "../services/chatApi"
import {useState, useRef, useEffect} from "react"

export default function ChatBox() {
    const [messages, setMessages]= useState([])
    const [input, setInput]= useState("")
    const [loading, setLoading]= useState(false)
    
    const messagesEndRef= useRef(null)

    useEffect (() => {
  messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
}, [messages]);

    const handleSend = async () => {
  if (!input.trim()) return;

  const context = window.__INTERVIEW_CONTEXT__ || {};

  setMessages(prev => [...prev, { sender: "You", text: input }]);
  setInput("");
  setLoading(true);

  try {
    const data = await sendChatMessage(input, context);

    setMessages(prev => [
      ...prev,
      { sender: "Assistant", text: data.response }
    ]);
  } catch (err) {
    setMessages(prev => [
      ...prev,
      { sender: "Assistant", text: "Sorry, something went wrong." }
    ]);
  } finally {
    setLoading(false);
  }
};

        const handlePress = (e) => {
            if (e.key === "Enter") handleSend()
        }
    return  (
    <div style={{ 
      border: "1px solid #ddd",
    padding: "1rem",
    width: "400px",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)"}}>
      <div style={{ height: "300px", overflowY: "auto", marginBottom: "1rem" }}>
        {messages.map((m, i) => (
          <div
          key={i}
          style={{
          marginBottom: "0.5rem",
          display: "flex",
          justifyContent: m.sender === "You" ? "flex-end" : "flex-start"
          }}>
             <div
              style={{
              backgroundColor: m.sender === "You" ? "#2563eb" : "#e5e7eb",
              color: m.sender === "You" ? "white" : "black",
              padding: "0.5rem 0.75rem",
              borderRadius: "12px",
              maxWidth: "75%"
             }}>
              {m.text}
              </div>        
          </div>
        ))}
        {loading && <div>Assistant is typing…</div>}
        <div ref={messagesEndRef} />
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handlePress}
        placeholder="Ask a question about the app..."
        style={{ width: "80%", marginRight: "0.5rem" }}
      />
      <button onClick={handleSend}
      style={{
        padding: "0.5rem 0.75rem",
      backgroundColor: "#2563eb",
      color: "white",
      border: "none",
      borderRadius: "6px",
     cursor: "pointer",
      fontWeight: "500"
      }}>Send</button>
    </div>
  )
}