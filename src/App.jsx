import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";
import Results from "./pages/Results.jsx";
import ChatBox from "./components/ChatBox.jsx"
import Layout from "./components/Layout.jsx";
import { useState } from "react";

export default function App() {
  const [chatOpen,setChatOpen] = useState(false)
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/questions/:roleId" element={<Questions />} />
        <Route path="/results" element={<Results />} />
      </Routes>

      {/* Help button */}
<button
  onClick={() => setChatOpen(prev => !prev)}
  style={{
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "0.75rem 1rem",
    borderRadius: "999px",
    background: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
    zIndex: 1000
  }}
>
  {chatOpen ? "Close Help" : "Help"}
</button>

{/* Chat popup */}
  <div
    style={{
      position: "fixed",
      bottom: "80px",
      right: "20px",
      zIndex: 1000,
      display: chatOpen ? "block" : "none"
    }}
  >
    <ChatBox />
  </div>
    </Layout>
  );
}
