import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";
import Results from "./pages/Results.jsx";
import ChatBox from "./components/ChatBox.jsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout><Home /></Layout>} />
                <Route path="/roles" element={<Layout><Roles /></Layout>} />
                <Route path="/questions/:roleId" element={<Layout><Questions /></Layout>} />
                {//just for playing around. remove when finished
                }
                <Route path="/results" element={<Results />} />
            </Routes>
            <div style={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
                <ChatBox />
            </div>
        </>
    )
}

