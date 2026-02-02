import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";
import { Routes, Route } from "react-router-dom";
import Results from "./pages/Results.jsx";

export default function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/roles" element={<Roles />} />
                <Route path="/questions/:roleId" element={<Questions />} />
                {//just for playing around. remove when finished
                }
                <Route path="/results" element={<Results />} />
            </Routes>
        </>
    )
}