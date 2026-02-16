import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";
import Results from "./pages/Results.jsx";
import ChatBox from "./components/ChatBox.jsx";
import Layout from "./components/Layout.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/questions/:roleId" element={<Questions />} />
        <Route path="/results" element={<Results />} />
      </Routes>

      <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
        <ChatBox />
      </div>
    </Layout>
  );
}
