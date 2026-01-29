import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Questions from "./pages/Questions.jsx";
import Roles from "./pages/Roles.jsx";

export default function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/roles" element={<Roles />} />
        <Route path="/questions/:roleId" element={<Questions />} />
      </Routes>
    </Layout>
  );
}
