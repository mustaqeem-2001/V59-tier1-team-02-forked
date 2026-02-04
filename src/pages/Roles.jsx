import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import DropdownButton from "../components/DropdownButton.jsx";
import { roles } from "../data/roles.js";
import { useNavigate } from "react-router-dom";

export default function Roles() {
  const navigate = useNavigate();

  function handleSelect(role) {
    // role may be an object from roles array; adapt to your data shape
    const roleId = role?.id ?? role?.value ?? role;
    if (roleId) navigate(`/questions/${roleId}`);
  }

  return (
    <>
      <main style={{ padding: 24, maxWidth: 900, margin: "0 auto" }}>
        <h2 style={{ marginTop: 0, marginBottom: 16 }}>Master Your Scrum Interview</h2>

        <section style={{ marginBottom: 24 }}>
          <DropdownButton items={roles} onSelect={handleSelect} />
        </section>

        {/* rest of your page content */}
      </main>
    </>
  );
}
