import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";
import Results from "./pages/Results.jsx";
import Layout from "./components/Layout.jsx";       

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
        </>
    )
}

